interface TelegramObject {
  _type: string
}

interface ChatTypeBasicGroup extends TelegramObject {
  _type: 'TdApi$ChatTypeBasicGroup'
  basicGroupId: number
}

interface ChatTypePrivate extends TelegramObject {
  _type: 'TdApi$ChatTypePrivate'
  userId: number
}

interface ChatTypeSecret extends TelegramObject {
  _type: 'TdApi$ChatTypeSecret'
  secretChatId: number
  userId: number
}

interface ChatTypeSupergroup extends TelegramObject {
  _type: 'TdApi$ChatTypeSupergroup'
  supergroupId: number
  isChannel: boolean
}

interface WebhookChat extends TelegramObject {
  _type: 'Filter$WebhookChat'
  id: number
  photoUrl: string | null
  title: string
  type: ChatTypeBasicGroup | ChatTypePrivate | ChatTypeSecret | ChatTypeSupergroup
}

interface BotCommand extends TelegramObject {
  _type: 'TdApi$BotCommand'
  command: string
  description: string
}

interface BotInfo extends TelegramObject {
  _type: 'TdApi$BotInfo'
  description: string
  commands: BotCommand[]
}

interface ChatMemberStatusAdministrator extends TelegramObject {
  _type: 'TdApi$ChatMemberStatusAdministrator'
  customTitle: string
  canBeEdited: boolean
  canChangeInfo: boolean
  canPostMessages: boolean
  canEditMessages: boolean
  canDeleteMessages: boolean
  canInviteUsers: boolean
  canRestrictMembers: boolean
  canPinMessages: boolean
  canPromoteMembers: boolean
}

interface ChatMemberStatusBanned extends TelegramObject {
  _type: 'TdApi$ChatMemberStatusBanned'
  bannedUntilDate: number
}

interface ChatMemberStatusCreator extends TelegramObject {
  _type: 'TdApi$ChatMemberStatusCreator'
  customTitle: string
  isMember: boolean
}

interface ChatMemberStatusLeft extends TelegramObject {
  _type: 'TdApi$ChatMemberStatusLeft'
}

interface ChatPermissions extends TelegramObject {
  _type: 'TdApi$ChatPermissions'
  canSendMessages: boolean
  canSendMediaMessages: boolean
  canSendPolls: boolean
  canSendOtherMessages: boolean
  canAddWebPagePreviews: boolean
  canChangeInfo: boolean
  canInviteUsers: boolean
  canPinMessages: boolean
}

interface ChatMemberStatusRestricted extends TelegramObject {
  _type: 'TdApi$ChatMemberStatusRestricted'
  isMember: boolean
  restrictedUntilDate: number
  permissions: ChatPermissions
}

interface ChatMemberStatusMember extends TelegramObject {
  _type: 'TdApi$ChatMemberStatusMember'
}

interface ChatMember extends TelegramObject {
  _type: 'TdApi$ChatMember'
  userId: number
  inviterUserId: number
  joinedChatDate: number
  status: ChatMemberStatus
  botInfo: BotInfo
}

// message

interface TextEntityTypeMention extends TelegramObject {
  _type: 'TdApi$TextEntityTypeMention'
}

interface TextEntityTypeHashtag extends TelegramObject {
  _type: 'TdApi$TextEntityTypeHashtag'
}

interface TextEntityTypeCashtag extends TelegramObject {
  _type: 'TdApi$TextEntityTypeCashtag'
}

interface TextEntityTypeBotCommand extends TelegramObject {
  _type: 'TdApi$TextEntityTypeBotCommand'
}

interface TextEntityTypeUrl extends TelegramObject {
  _type: 'TdApi$TextEntityTypeUrl'
}

interface TextEntityTypeEmailAddress extends TelegramObject {
  _type: 'TdApi$TextEntityTypeEmailAddress'
}

interface TextEntityTypePhoneNumber extends TelegramObject {
  _type: 'TdApi$TextEntityTypePhoneNumber'
}

interface TextEntityTypeBold extends TelegramObject {
  _type: 'TdApi$TextEntityTypeBold'
}

interface TextEntityTypeItalic extends TelegramObject {
  _type: 'TdApi$TextEntityTypeItalic'
}

interface TextEntityTypeUnderline extends TelegramObject {
  _type: 'TdApi$TextEntityTypeUnderline'
}

interface TextEntityTypeStrikethrough extends TelegramObject {
  _type: 'TdApi$TextEntityTypeStrikethrough'
}

interface TextEntityTypeCode extends TelegramObject {
  _type: 'TdApi$TextEntityTypeCode'
}

interface TextEntityTypePre extends TelegramObject {
  _type: 'TdApi$TextEntityTypePre'
}

interface TextEntityTypePreCode extends TelegramObject {
  _type: 'TdApi$TextEntityTypePreCode'
  language: string
}

interface TextEntityTypeTextUrl extends TelegramObject {
  _type: 'TdApi$TextEntityTypeTextUrl'
  url: string
}

interface TextEntityTypeMentionName extends TelegramObject {
  _type: 'TdApi$TextEntityTypeMentionName'
  userId: number
}

interface TextEntity extends TelegramObject {
  _type: 'TdApi$TextEntity'
  offset: number
  length: number
  type:
    | TextEntityTypeMention
    | TextEntityTypeHashtag
    | TextEntityTypeCashtag
    | TextEntityTypeBotCommand
    | TextEntityTypeUrl
    | TextEntityTypeEmailAddress
    | TextEntityTypePhoneNumber
    | TextEntityTypeBold
    | TextEntityTypeItalic
    | TextEntityTypeUnderline
    | TextEntityTypeStrikethrough
    | TextEntityTypeCode
    | TextEntityTypePre
    | TextEntityTypePreCode
    | TextEntityTypeTextUrl
    | TextEntityTypeMentionName
}

interface FormattedText extends TelegramObject {
  _type: 'TdApi$FormattedText'
  text: string
  entities: TextEntity[]
}

interface Minithumbnail extends TelegramObject {
  _type: 'TdApi$Minithumbnail'
  width: number
  height: number
  data: number[]
}

interface LocalFile extends TelegramObject {
  _type: 'TdApi$LocalFile'
  path: string
  canBeDownloaded: boolean
  canBeDeleted: boolean
  isDownloadingActive: boolean
  isDownloadingCompleted: boolean
  downloadOffset: number
  downloadedPrefixSize: number
  downloadedSize: number
}

interface RemoteFile extends TelegramObject {
  _type: 'TdApi$RemoteFile'
  id: string
  uniqueId: string
  isUploadingActive: boolean
  isUploadingCompleted: boolean
  uploadedSize: number
}

interface File extends TelegramObject {
  _type: 'TdApi$File'
  id: number
  size: number
  expectedSize: number
  local: LocalFile
  remote: RemoteFile
}

interface PhotoSize extends TelegramObject {
  _type: 'TdApi$PhotoSize'
  type: string
  photo: File
  width: number
  height: number
}

interface Photo extends TelegramObject {
  _type: 'TdApi$Photo'
  hasStickers: boolean
  minithumbnail: Minithumbnail
  sizes: PhotoSize[]
}

interface Animation extends TelegramObject {
  _type: 'TdApi$Animation'
  duration: number
  width: number
  height: number
  fileName: string
  mimeType: string
  minithumbnail: Minithumbnail
  thumbnail: PhotoSize
  animation: File
}

interface Audio extends TelegramObject {
  _type: 'TdApi$Audio'
  duration: number
  title: string
  performer: string
  fileName: string
  mimeType: string
  albumCoverMinithumbnail: Minithumbnail
  albumCoverThumbnail: PhotoSize
  audio: File
}

interface Document extends TelegramObject {
  _type: 'TdApi$Document'
  fileName: string
  mimeType: string
  minithumbnail: Minithumbnail
  thumbnail: PhotoSize
  document: File
}

interface MaskPoint extends TelegramObject {
  _type: 'TdApi$MaskPoint'
}

interface MaskPosition extends TelegramObject {
  _type: 'TdApi$MaskPosition'
  point: MaskPoint
  xShift: number
  yShift: number
  scale: number
}

interface Sticker extends TelegramObject {
  _type: 'TdApi$Sticker'
  setId: number
  width: number
  height: number
  emoji: string
  isAnimated: boolean
  isMask: boolean
  maskPosition: MaskPosition
  thumbnail: PhotoSize
  sticker: File
}

interface Video extends TelegramObject {
  _type: 'TdApi$Video'
  duration: number
  width: number
  height: number
  fileName: string
  mimeType: string
  hasStickers: boolean
  supportsStreaming: boolean
  minithumbnail: Minithumbnail
  thumbnail: PhotoSize
  video: File
}

interface VideoNote extends TelegramObject {
  _type: 'TdApi$VideoNote'
  duration: number
  length: number
  minithumbnail: Minithumbnail
  thumbnail: PhotoSize
  video: File
}

interface VoiceNote extends TelegramObject {
  _type: 'TdApi$VoiceNote'
  duration: number
  waveform: number[]
  mimeType: string
  voice: File
}

interface WebPage extends TelegramObject {
  _type: 'TdApi$WebPage'
  url: string
  displayUrl: string
  type: string
  siteName: string
  title: string
  description: string
  photo: Photo
  embedUrl: string
  embedType: string
  embedWidth: number
  embedHeight: number
  duration: number
  author: string
  animation: Animation
  audio: Audio
  document: Document
  sticker: Sticker
  video: Video
  videoNote: VideoNote
  voiceNote: VoiceNote
  instantViewVersion: number
}

interface MessageText extends TelegramObject {
  _type: 'TdApi$MessageText'
  text: FormattedText
  webPage: WebPage
}

interface MessageAnimation extends TelegramObject {
  _type: 'TdApi$MessageAnimation'
  animation: Animation
  caption: FormattedText
  isSecret: boolean
}

interface MessageAudio extends TelegramObject {
  _type: 'TdApi$MessageAudio'
  audio: Audio
  caption: FormattedText
}

interface MessageDocument extends TelegramObject {
  _type: 'TdApi$MessageDocument'
  document: Document
  caption: FormattedText
}

interface MessagePhoto extends TelegramObject {
  _type: 'TdApi$MessagePhoto'
  photo: Photo
  caption: FormattedText
  isSecret: boolean
}

interface MessageExpiredPhoto extends TelegramObject {
  _type: 'TdApi$MessageExpiredPhoto'
}

interface MessageSticker extends TelegramObject {
  _type: 'TdApi$MessageSticker'
  sticker: Sticker
}

interface MessageVideo extends TelegramObject {
  _type: 'TdApi$MessageVideo'
  video: Video
  caption: FormattedText
  isSecret: boolean
}

interface MessageExpiredVideo extends TelegramObject {
  _type: 'TdApi$MessageExpiredVideo'
}

interface MessageVideoNote extends TelegramObject {
  _type: 'TdApi$MessageVideoNote'
  videoNote: VideoNote
  isViewed: boolean
  isSecret: boolean
}

interface MessageVoiceNote extends TelegramObject {
  _type: 'TdApi$MessageVoiceNote'
  voiceNote: VoiceNote
  caption: FormattedText
  isListened: boolean
}

interface Location {
  latitude: number
  longitude: number
}

interface MessageLocation extends TelegramObject {
  _type: 'TdApi$MessageLocation'
  location: Location
  livePeriod: number
  expiresIn: number
}

interface Venue {
  location: Location
  title: string
  address: string
  provider: string
  id: string
  type: string
}

interface MessageVenue extends TelegramObject {
  _type: 'TdApi$MessageVenue'
  venue: Venue
}

interface Contact {
  phoneNumber: string
  firstName: string
  lastName: string
  vcard: string
  userId: number
}

interface MessageContact extends TelegramObject {
  _type: 'TdApi$MessageContact'
  contact: Contact
}

interface Game {
  id: number
  shortName: string
  title: string
  text: FormattedText
  description: string
  photo: Photo
  animation: Animation
}

interface MessageGame extends TelegramObject {
  _type: 'TdApi$MessageGame'
  game: Game
}

interface PollOption {
  text: string
  voterCount: number
  votePercentage: number
  isChosen: boolean
  isBeingChosen: boolean
}

interface Poll {
  id: number
  question: string
  options: PollOption[]
  totalVoterCount: number
  isClosed: boolean
}

interface MessagePoll extends TelegramObject {
  _type: 'TdApi$MessagePoll'
  poll: Poll
}

interface MessageInvoice extends TelegramObject {
  _type: 'TdApi$MessageInvoice'
  title: string
  description: string
  photo: Photo
  currency: string
  totalAmount: number
  startParameter: string
  isTest: boolean
  needShippingAddress: boolean
  receiptMessageId: number
}

interface CallDiscardReason {}

interface MessageCall extends TelegramObject {
  _type: 'TdApi$MessageCall'
  discardReason: CallDiscardReason
  duration: number
}

interface MessageBasicGroupChatCreate extends TelegramObject {
  _type: 'TdApi$MessageBasicGroupChatCreate'
  title: string
  memberUserIds: number[]
}

interface MessageSupergroupChatCreate extends TelegramObject {
  _type: 'TdApi$MessageSupergroupChatCreate'
  title: string
}

interface MessageChatChangeTitle extends TelegramObject {
  _type: 'TdApi$MessageChatChangeTitle'
  title: string
}

interface MessageChatChangePhoto extends TelegramObject {
  _type: 'TdApi$MessageChatChangePhoto'
  photo: Photo
}

interface MessageChatDeletePhoto extends TelegramObject {
  _type: 'TdApi$MessageChatDeletePhoto'
}

interface MessageChatAddMembers extends TelegramObject {
  _type: 'TdApi$MessageChatAddMembers'
  memberUserIds: number[]
}

interface MessageChatJoinByLink extends TelegramObject {
  _type: 'TdApi$MessageChatJoinByLink'
}

interface MessageChatDeleteMember extends TelegramObject {
  _type: 'TdApi$MessageChatDeleteMember'
  userId: number
}

interface MessageChatUpgradeTo extends TelegramObject {
  _type: 'TdApi$MessageChatUpgradeTo'
  supergroupId: number
}

interface MessageChatUpgradeFrom extends TelegramObject {
  _type: 'TdApi$MessageChatUpgradeFrom'
  title: string
  basicGroupId: number
}

interface MessagePinMessage extends TelegramObject {
  _type: 'TdApi$MessagePinMessage'
  messageId: number
}

interface MessageScreenshotTaken extends TelegramObject {
  _type: 'TdApi$MessageScreenshotTaken'
}

interface MessageChatSetTtl extends TelegramObject {
  _type: 'TdApi$MessageChatSetTtl'
  ttl: number
}

interface MessageCustomServiceAction extends TelegramObject {
  _type: 'TdApi$MessageCustomServiceAction'
  text: string
}

interface MessageGameScore extends TelegramObject {
  _type: 'TdApi$MessageGameScore'
  gameMessageId: number
  gameId: number
  score: number
}

interface MessagePaymentSuccessful extends TelegramObject {
  _type: 'TdApi$MessagePaymentSuccessful'
  invoiceMessageId: number
  currency: string
  totalAmount: number
}

interface Address {
  countryCode: string
  state: string
  city: string
  streetLine1: string
  streetLine2: string
  postalCode: string
}

interface OrderInfo {
  name: string
  phoneNumber: string
  emailAddress: string
  shippingAddress: Address
}

interface MessagePaymentSuccessfulBot extends TelegramObject {
  _type: 'TdApi$MessagePaymentSuccessfulBot'
  invoiceMessageId: number
  currency: string
  totalAmount: number
  invoicePayload: number[]
  shippingOptionId: string
  orderInfo: OrderInfo
  telegramPaymentChargeId: string
  providerPaymentChargeId: string
}

interface MessageContactRegistered extends TelegramObject {
  _type: 'TdApi$MessageContactRegistered'
}

interface MessageWebsiteConnected extends TelegramObject {
  _type: 'TdApi$MessageWebsiteConnected'
  domainName: string
}

interface PassportElementType extends TelegramObject {
  _type: 'TdApi$PassportElementType'
}

interface MessagePassportDataSent extends TelegramObject {
  _type: 'TdApi$MessagePassportDataSent'
  types: PassportElementType[]
}

interface DatedFile extends TelegramObject {
  _type: 'TdApi$DatedFile'
  file: File
  date: number
}

interface EncryptedPassportElement extends TelegramObject {
  _type: 'TdApi$EncryptedPassportElement'
  type: PassportElementType
  data: number[]
  frontSide: DatedFile
  reverseSide: DatedFile
  selfie: DatedFile
  translation: DatedFile[]
  files: DatedFile[]
  value: string
  hash: string
}

interface EncryptedCredentials extends TelegramObject {
  _type: 'TdApi$EncryptedCredentials'
  data: number[]
  hash: number[]
  secret: number[]
}

interface MessagePassportDataReceived extends TelegramObject {
  _type: 'TdApi$MessagePassportDataReceived'
  elements: EncryptedPassportElement[]
  credentials: EncryptedCredentials
}

interface MessageUnsupported extends TelegramObject {
  _type: 'TdApi$MessageUnsupported'
}

interface UserTypeRegular extends TelegramObject {
  _type: 'TdApi$UserTypeRegular'
}

interface UserTypeDeleted extends TelegramObject {
  _type: 'TdApi$UserTypeDeleted'
}

interface UserTypeBot extends TelegramObject {
  _type: 'TdApi$UserTypeBot'
  canJoinGroups: boolean
  canReadAllGroupMessages: boolean
  isInline: boolean
  inlineQueryPlaceholder: string
  needLocation: boolean
}

interface UserTypeUnknown extends TelegramObject {
  _type: 'TdApi$UserTypeUnknown'
}

interface UserStatusEmpty extends TelegramObject {
  _type: 'TdApi$UserStatusEmpty'
}

interface UserStatusOnline extends TelegramObject {
  _type: 'TdApi$UserStatusOnline'
  expires: number
}

interface UserStatusOffline extends TelegramObject {
  _type: 'TdApi$UserStatusOffline'
  wasOnline: number
}

interface UserStatusRecently extends TelegramObject {
  _type: 'TdApi$UserStatusRecently'
}

interface UserStatusLastWeek extends TelegramObject {
  _type: 'TdApi$UserStatusLastWeek'
}

interface UserStatusLastMonth extends TelegramObject {
  _type: 'TdApi$UserStatusLastMonth'
}

interface WebhookUser extends TelegramObject {
  _type: 'Filter$User'
  firstName: string
  haveAccess: boolean
  id: number
  isSupport: boolean
  isVerified: boolean
  languageCode: string
  lastName: string
  photoUrl: string | null
  restrictionReason: string
  status:
    | UserStatusEmpty
    | UserStatusOnline
    | UserStatusOffline
    | UserStatusRecently
    | UserStatusLastWeek
    | UserStatusLastMonth
  type: UserTypeRegular | UserTypeDeleted | UserTypeBot | UserTypeUnknown
  username: string
}

interface MessageSendingStateFailed extends TelegramObject {
  _type: 'TdApi$MessageSendingStateFailed'
  errorCode: number
  errorMessage: string
  canRetry: boolean
  retryAfter: number
}

interface MessageSendingStatePending extends TelegramObject {
  _type: 'TdApi$MessageSendingStatePending'
}

interface MessageSchedulingStateSendAtDate extends TelegramObject {
  _type: 'TdApi$MessageSchedulingStateSendAtDate'
  sendDate: number
}

interface MessageSchedulingStateSendWhenOnline extends TelegramObject {
  _type: 'TdApi$MessageSchedulingStateSendWhenOnline'
}

interface MessageForwardOriginChannel extends MessageForwardOrigin {
  chatId: number
  messageId: number
  authorSignature: string
}

interface MessageForwardOriginHiddenUser extends MessageForwardOrigin {
  senderName: string
}

interface MessageForwardOriginUser extends MessageForwardOrigin {
  senderUserId: number
}

interface MessageForwardInfo extends TelegramObject {
  _type: 'TdApi$MessageForwardInfo'
  origin: MessageForwardOriginChannel | MessageForwardOriginHiddenUser | MessageForwardOriginUser
  date: number
  fromChatId: number
  fromMessageId: number
}

interface ReplyMarkupForceReply extends TelegramObject {
  _type: 'TdApi$ReplyMarkupForceReply'
  isPersonal: boolean
}

interface InlineKeyboardButtonType extends TelegramObject {
  _type: 'TdApi$InlineKeyboardButtonType'
}

interface InlineKeyboardButton extends TelegramObject {
  _type: 'TdApi$InlineKeyboardButton'
  text: string
  type: InlineKeyboardButtonType
}

interface ReplyMarkupInlineKeyboard extends TelegramObject {
  _type: 'TdApi$ReplyMarkupInlineKeyboard'
  rows: InlineKeyboardButton[][]
}

interface ReplyMarkupRemoveKeyboard extends TelegramObject {
  _type: 'TdApi$ReplyMarkupRemoveKeyboard'
  isPersonal: boolean
}

interface KeyboardButtonType extends TelegramObject {
  _type: 'TdApi$KeyboardButtonType'
}

interface KeyboardButton extends TelegramObject {
  _type: 'TdApi$KeyboardButton'
  text: string
  type: KeyboardButtonType
}

interface ReplyMarkupShowKeyboard extends TelegramObject {
  _type: 'TdApi$ReplyMarkupShowKeyboard'
  rows: KeyboardButton[][]
  resizeKeyboard: boolean
  oneTime: boolean
  isPersonal: boolean
}

interface Message extends TelegramObject {
  _type: 'TdApi$Message'
  id: number
  senderUserId: number
  chatId: number
  sendingState: MessageSendingStateFailed | MessageSendingStatePending
  schedulingState: MessageSchedulingStateSendAtDate | MessageSchedulingStateSendWhenOnline
  isOutgoing: boolean
  canBeEdited: boolean
  canBeForwarded: boolean
  canBeDeletedOnlyForSelf: boolean
  canBeDeletedForAllUsers: boolean
  isChannelPost: boolean
  containsUnreadMention: boolean
  date: number
  editDate: number
  forwardInfo: MessageForwardInfo
  replyToMessageId: number
  ttl: number
  ttlExpiresIn: number
  viaBotUserId: number
  authorSignature: string
  views: number
  mediaAlbumId: number
  restrictionReason: string
  content:
    | MessageText
    | MessageAnimation
    | MessageAudio
    | MessageDocument
    | MessagePhoto
    | MessageExpiredPhoto
    | MessageSticker
    | MessageVideo
    | MessageExpiredVideo
    | MessageVideoNote
    | MessageVoiceNote
    | MessageLocation
    | MessageVenue
    | MessageContact
    | MessageGame
    | MessagePoll
    | MessageInvoice
    | MessageCall
    | MessageBasicGroupChatCreate
    | MessageSupergroupChatCreate
    | MessageChatChangeTitle
    | MessageChatChangePhoto
    | MessageChatDeletePhoto
    | MessageChatAddMembers
    | MessageChatJoinByLink
    | MessageChatDeleteMember
    | MessageChatUpgradeTo
    | MessageChatUpgradeFrom
    | MessagePinMessage
    | MessageScreenshotTaken
    | MessageChatSetTtl
    | MessageCustomServiceAction
    | MessageGameScore
    | MessagePaymentSuccessful
    | MessagePaymentSuccessfulBot
    | MessageContactRegistered
    | MessageWebsiteConnected
    | MessagePassportDataSent
    | MessagePassportDataReceived
    | MessageUnsupported
  replyMarkup:
    | ReplyMarkupShowKeyboard
    | ReplyMarkupForceReply
    | ReplyMarkupInlineKeyboard
    | ReplyMarkupRemoveKeyboard
}

interface WebhookMessage extends TelegramObject {
  _type: 'Filter$WebhookMessage'
  chat: WebhookChat | null
  chatMember: ChatMember | null
  fileUrl: string | null
  message: Message
  user: WebhookUser | null
}
