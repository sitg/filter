import { WebhookMessage } from './../types/webhook-message.d'
import { APIGatewayEvent, Callback, Context, Handler } from 'aws-lambda'
import crypto from 'crypto'

function parseBodyJson<T>(body: string | null) {
  if (!body) throw Error('Empty body')
  try {
    return JSON.parse(body) as T
  } catch (e) {
    throw Error(`Can't parse body: ${e.message}`)
  }
}

function isCorrectSignature(signature: string, secret: string, payload: string) {
  const digest =
    'sha1=' +
    crypto
      .createHmac('sha1', secret)
      .update(payload)
      .digest('hex')

  const result = signature && digest && signature === digest

  if (!result) {
    console.warn('Signature validation failded', signature, digest, payload)
  }
  return result
}

export const webhook: Handler = async (event: APIGatewayEvent, context: Context, cb: Callback) => {
  console.log(JSON.stringify(event.requestContext))
  const payload = event.body

  if (!payload) {
    return cb('Request body empty')
  }

  // see https://serverless.com/blog/serverless-secrets-api-keys/ to manage secrets properly
  const secret = '1'

  if (!isCorrectSignature(event.headers['X-Filter-Signature'], secret, payload)) {
    return cb('Not correct signature')
  }

  console.log('Got message', (parseBodyJson(event.body) as WebhookMessage).message._type)

  cb(null, 'success')
}
