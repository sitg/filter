export interface TelegramObject {
  _type: string
}

export interface ChatTypeBasicGroup extends TelegramObject {
  _type: 'TdApi$ChatTypeBasicGroup'
  basicGroupId: number
}

export interface ChatTypePrivate extends TelegramObject {
  _type: 'TdApi$ChatTypePrivate'
  userId: number
}

export interface ChatTypeSecret extends TelegramObject {
  _type: 'TdApi$ChatTypeSecret'
  secretChatId: number
  userId: number
}

export interface ChatTypeSupergroup extends TelegramObject {
  _type: 'TdApi$ChatTypeSupergroup'
  supergroupId: number
  isChannel: boolean
}

export interface WebhookChat extends TelegramObject {
  _type: 'Filter$WebhookChat'
  id: number
  photoUrl: string | null
  title: string
  type: ChatTypeBasicGroup | ChatTypePrivate | ChatTypeSecret | ChatTypeSupergroup
}

export interface BotCommand extends TelegramObject {
  _type: 'TdApi$BotCommand'
  command: string
  description: string
}

export interface BotInfo extends TelegramObject {
  _type: 'TdApi$BotInfo'
  description: string
  commands: BotCommand[]
}

export interface ChatMemberStatusAdministrator extends TelegramObject {
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

export interface ChatMemberStatusBanned extends TelegramObject {
  _type: 'TdApi$ChatMemberStatusBanned'
  bannedUntilDate: number
}

export interface ChatMemberStatusCreator extends TelegramObject {
  _type: 'TdApi$ChatMemberStatusCreator'
  customTitle: string
  isMember: boolean
}

export interface ChatMemberStatusLeft extends TelegramObject {
  _type: 'TdApi$ChatMemberStatusLeft'
}

export interface ChatPermissions extends TelegramObject {
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

export interface ChatMemberStatusRestricted extends TelegramObject {
  _type: 'TdApi$ChatMemberStatusRestricted'
  isMember: boolean
  restrictedUntilDate: number
  permissions: ChatPermissions
}

export interface ChatMemberStatusMember extends TelegramObject {
  _type: 'TdApi$ChatMemberStatusMember'
}

export interface ChatMember extends TelegramObject {
  _type: 'TdApi$ChatMember'
  userId: number
  inviterUserId: number
  joinedChatDate: number
  status: ChatMemberStatusRestricted | ChatMemberStatusMember
  botInfo: BotInfo
}

// message

export interface TextEntityTypeMention extends TelegramObject {
  _type: 'TdApi$TextEntityTypeMention'
}

export interface TextEntityTypeHashtag extends TelegramObject {
  _type: 'TdApi$TextEntityTypeHashtag'
}

export interface TextEntityTypeCashtag extends TelegramObject {
  _type: 'TdApi$TextEntityTypeCashtag'
}

export interface TextEntityTypeBotCommand extends TelegramObject {
  _type: 'TdApi$TextEntityTypeBotCommand'
}

export interface TextEntityTypeUrl extends TelegramObject {
  _type: 'TdApi$TextEntityTypeUrl'
}

export interface TextEntityTypeEmailAddress extends TelegramObject {
  _type: 'TdApi$TextEntityTypeEmailAddress'
}

export interface TextEntityTypePhoneNumber extends TelegramObject {
  _type: 'TdApi$TextEntityTypePhoneNumber'
}

export interface TextEntityTypeBold extends TelegramObject {
  _type: 'TdApi$TextEntityTypeBold'
}

export interface TextEntityTypeItalic extends TelegramObject {
  _type: 'TdApi$TextEntityTypeItalic'
}

export interface TextEntityTypeUnderline extends TelegramObject {
  _type: 'TdApi$TextEntityTypeUnderline'
}

export interface TextEntityTypeStrikethrough extends TelegramObject {
  _type: 'TdApi$TextEntityTypeStrikethrough'
}

export interface TextEntityTypeCode extends TelegramObject {
  _type: 'TdApi$TextEntityTypeCode'
}

export interface TextEntityTypePre extends TelegramObject {
  _type: 'TdApi$TextEntityTypePre'
}

export interface TextEntityTypePreCode extends TelegramObject {
  _type: 'TdApi$TextEntityTypePreCode'
  language: string
}

export interface TextEntityTypeTextUrl extends TelegramObject {
  _type: 'TdApi$TextEntityTypeTextUrl'
  url: string
}

export interface TextEntityTypeMentionName extends TelegramObject {
  _type: 'TdApi$TextEntityTypeMentionName'
  userId: number
}

export interface TextEntity extends TelegramObject {
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

export interface FormattedText extends TelegramObject {
  _type: 'TdApi$FormattedText'
  text: string
  entities: TextEntity[]
}

export interface Minithumbnail extends TelegramObject {
  _type: 'TdApi$Minithumbnail'
  width: number
  height: number
  data: number[]
}

export interface LocalFile extends TelegramObject {
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

export interface RemoteFile extends TelegramObject {
  _type: 'TdApi$RemoteFile'
  id: string
  uniqueId: string
  isUploadingActive: boolean
  isUploadingCompleted: boolean
  uploadedSize: number
}

export interface File extends TelegramObject {
  _type: 'TdApi$File'
  id: number
  size: number
  expectedSize: number
  local: LocalFile
  remote: RemoteFile
}

export interface PhotoSize extends TelegramObject {
  _type: 'TdApi$PhotoSize'
  type: string
  photo: File
  width: number
  height: number
}

export interface Photo extends TelegramObject {
  _type: 'TdApi$Photo'
  hasStickers: boolean
  minithumbnail: Minithumbnail
  sizes: PhotoSize[]
}

export interface Animation extends TelegramObject {
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

export interface Audio extends TelegramObject {
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

export interface Document extends TelegramObject {
  _type: 'TdApi$Document'
  fileName: string
  mimeType: string
  minithumbnail: Minithumbnail
  thumbnail: PhotoSize
  document: File
}

export interface MaskPoint extends TelegramObject {
  _type: 'TdApi$MaskPoint'
}

export interface MaskPosition extends TelegramObject {
  _type: 'TdApi$MaskPosition'
  point: MaskPoint
  xShift: number
  yShift: number
  scale: number
}

export interface Sticker extends TelegramObject {
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

export interface Video extends TelegramObject {
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

export interface VideoNote extends TelegramObject {
  _type: 'TdApi$VideoNote'
  duration: number
  length: number
  minithumbnail: Minithumbnail
  thumbnail: PhotoSize
  video: File
}

export interface VoiceNote extends TelegramObject {
  _type: 'TdApi$VoiceNote'
  duration: number
  waveform: number[]
  mimeType: string
  voice: File
}

export interface WebPage extends TelegramObject {
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

export interface MessageText extends TelegramObject {
  _type: 'TdApi$MessageText'
  text: FormattedText
  webPage: WebPage
}

export interface MessageAnimation extends TelegramObject {
  _type: 'TdApi$MessageAnimation'
  animation: Animation
  caption: FormattedText
  isSecret: boolean
}

export interface MessageAudio extends TelegramObject {
  _type: 'TdApi$MessageAudio'
  audio: Audio
  caption: FormattedText
}

export interface MessageDocument extends TelegramObject {
  _type: 'TdApi$MessageDocument'
  document: Document
  caption: FormattedText
}

export interface MessagePhoto extends TelegramObject {
  _type: 'TdApi$MessagePhoto'
  photo: Photo
  caption: FormattedText
  isSecret: boolean
}

export interface MessageExpiredPhoto extends TelegramObject {
  _type: 'TdApi$MessageExpiredPhoto'
}

export interface MessageSticker extends TelegramObject {
  _type: 'TdApi$MessageSticker'
  sticker: Sticker
}

export interface MessageVideo extends TelegramObject {
  _type: 'TdApi$MessageVideo'
  video: Video
  caption: FormattedText
  isSecret: boolean
}

export interface MessageExpiredVideo extends TelegramObject {
  _type: 'TdApi$MessageExpiredVideo'
}

export interface MessageVideoNote extends TelegramObject {
  _type: 'TdApi$MessageVideoNote'
  videoNote: VideoNote
  isViewed: boolean
  isSecret: boolean
}

export interface MessageVoiceNote extends TelegramObject {
  _type: 'TdApi$MessageVoiceNote'
  voiceNote: VoiceNote
  caption: FormattedText
  isListened: boolean
}

export interface Location {
  latitude: number
  longitude: number
}

export interface MessageLocation extends TelegramObject {
  _type: 'TdApi$MessageLocation'
  location: Location
  livePeriod: number
  expiresIn: number
}

export interface Venue {
  location: Location
  title: string
  address: string
  provider: string
  id: string
  type: string
}

export interface MessageVenue extends TelegramObject {
  _type: 'TdApi$MessageVenue'
  venue: Venue
}

export interface Contact {
  phoneNumber: string
  firstName: string
  lastName: string
  vcard: string
  userId: number
}

export interface MessageContact extends TelegramObject {
  _type: 'TdApi$MessageContact'
  contact: Contact
}

export interface Game {
  id: number
  shortName: string
  title: string
  text: FormattedText
  description: string
  photo: Photo
  animation: Animation
}

export interface MessageGame extends TelegramObject {
  _type: 'TdApi$MessageGame'
  game: Game
}

export interface PollOption {
  text: string
  voterCount: number
  votePercentage: number
  isChosen: boolean
  isBeingChosen: boolean
}

export interface Poll {
  id: number
  question: string
  options: PollOption[]
  totalVoterCount: number
  isClosed: boolean
}

export interface MessagePoll extends TelegramObject {
  _type: 'TdApi$MessagePoll'
  poll: Poll
}

export interface MessageInvoice extends TelegramObject {
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

export interface CallDiscardReason {}

export interface MessageCall extends TelegramObject {
  _type: 'TdApi$MessageCall'
  discardReason: CallDiscardReason
  duration: number
}

export interface MessageBasicGroupChatCreate extends TelegramObject {
  _type: 'TdApi$MessageBasicGroupChatCreate'
  title: string
  memberUserIds: number[]
}

export interface MessageSupergroupChatCreate extends TelegramObject {
  _type: 'TdApi$MessageSupergroupChatCreate'
  title: string
}

export interface MessageChatChangeTitle extends TelegramObject {
  _type: 'TdApi$MessageChatChangeTitle'
  title: string
}

export interface MessageChatChangePhoto extends TelegramObject {
  _type: 'TdApi$MessageChatChangePhoto'
  photo: Photo
}

export interface MessageChatDeletePhoto extends TelegramObject {
  _type: 'TdApi$MessageChatDeletePhoto'
}

export interface MessageChatAddMembers extends TelegramObject {
  _type: 'TdApi$MessageChatAddMembers'
  memberUserIds: number[]
}

export interface MessageChatJoinByLink extends TelegramObject {
  _type: 'TdApi$MessageChatJoinByLink'
}

export interface MessageChatDeleteMember extends TelegramObject {
  _type: 'TdApi$MessageChatDeleteMember'
  userId: number
}

export interface MessageChatUpgradeTo extends TelegramObject {
  _type: 'TdApi$MessageChatUpgradeTo'
  supergroupId: number
}

export interface MessageChatUpgradeFrom extends TelegramObject {
  _type: 'TdApi$MessageChatUpgradeFrom'
  title: string
  basicGroupId: number
}

export interface MessagePinMessage extends TelegramObject {
  _type: 'TdApi$MessagePinMessage'
  messageId: number
}

export interface MessageScreenshotTaken extends TelegramObject {
  _type: 'TdApi$MessageScreenshotTaken'
}

export interface MessageChatSetTtl extends TelegramObject {
  _type: 'TdApi$MessageChatSetTtl'
  ttl: number
}

export interface MessageCustomServiceAction extends TelegramObject {
  _type: 'TdApi$MessageCustomServiceAction'
  text: string
}

export interface MessageGameScore extends TelegramObject {
  _type: 'TdApi$MessageGameScore'
  gameMessageId: number
  gameId: number
  score: number
}

export interface MessagePaymentSuccessful extends TelegramObject {
  _type: 'TdApi$MessagePaymentSuccessful'
  invoiceMessageId: number
  currency: string
  totalAmount: number
}

export interface Address {
  countryCode: string
  state: string
  city: string
  streetLine1: string
  streetLine2: string
  postalCode: string
}

export interface OrderInfo {
  name: string
  phoneNumber: string
  emailAddress: string
  shippingAddress: Address
}

export interface MessagePaymentSuccessfulBot extends TelegramObject {
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

export interface MessageContactRegistered extends TelegramObject {
  _type: 'TdApi$MessageContactRegistered'
}

export interface MessageWebsiteConnected extends TelegramObject {
  _type: 'TdApi$MessageWebsiteConnected'
  domainName: string
}

export interface PassportElementType extends TelegramObject {
  _type: 'TdApi$PassportElementType'
}

export interface MessagePassportDataSent extends TelegramObject {
  _type: 'TdApi$MessagePassportDataSent'
  types: PassportElementType[]
}

export interface DatedFile extends TelegramObject {
  _type: 'TdApi$DatedFile'
  file: File
  date: number
}

export interface EncryptedPassportElement extends TelegramObject {
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

export interface EncryptedCredentials extends TelegramObject {
  _type: 'TdApi$EncryptedCredentials'
  data: number[]
  hash: number[]
  secret: number[]
}

export interface MessagePassportDataReceived extends TelegramObject {
  _type: 'TdApi$MessagePassportDataReceived'
  elements: EncryptedPassportElement[]
  credentials: EncryptedCredentials
}

export interface MessageUnsupported extends TelegramObject {
  _type: 'TdApi$MessageUnsupported'
}

export interface UserTypeRegular extends TelegramObject {
  _type: 'TdApi$UserTypeRegular'
}

export interface UserTypeDeleted extends TelegramObject {
  _type: 'TdApi$UserTypeDeleted'
}

export interface UserTypeBot extends TelegramObject {
  _type: 'TdApi$UserTypeBot'
  canJoinGroups: boolean
  canReadAllGroupMessages: boolean
  isInline: boolean
  inlineQueryPlaceholder: string
  needLocation: boolean
}

export interface UserTypeUnknown extends TelegramObject {
  _type: 'TdApi$UserTypeUnknown'
}

export interface UserStatusEmpty extends TelegramObject {
  _type: 'TdApi$UserStatusEmpty'
}

export interface UserStatusOnline extends TelegramObject {
  _type: 'TdApi$UserStatusOnline'
  expires: number
}

export interface UserStatusOffline extends TelegramObject {
  _type: 'TdApi$UserStatusOffline'
  wasOnline: number
}

export interface UserStatusRecently extends TelegramObject {
  _type: 'TdApi$UserStatusRecently'
}

export interface UserStatusLastWeek extends TelegramObject {
  _type: 'TdApi$UserStatusLastWeek'
}

export interface UserStatusLastMonth extends TelegramObject {
  _type: 'TdApi$UserStatusLastMonth'
}

export interface WebhookUser extends TelegramObject {
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

export interface MessageSendingStateFailed extends TelegramObject {
  _type: 'TdApi$MessageSendingStateFailed'
  errorCode: number
  errorMessage: string
  canRetry: boolean
  retryAfter: number
}

export interface MessageSendingStatePending extends TelegramObject {
  _type: 'TdApi$MessageSendingStatePending'
}

export interface MessageSchedulingStateSendAtDate extends TelegramObject {
  _type: 'TdApi$MessageSchedulingStateSendAtDate'
  sendDate: number
}

export interface MessageSchedulingStateSendWhenOnline extends TelegramObject {
  _type: 'TdApi$MessageSchedulingStateSendWhenOnline'
}

export interface MessageForwardOriginChannel extends TelegramObject {
  _type: 'TdApi$MessageForwardOriginChannel'
  chatId: number
  messageId: number
  authorSignature: string
}

export interface MessageForwardOriginHiddenUser extends TelegramObject {
  _type: 'TdApi$MessageForwardOriginHiddenUser'
  senderName: string
}

export interface MessageForwardOriginUser extends TelegramObject {
  _type: 'TdApi$MessageForwardOriginUser'
  senderUserId: number
}

export interface MessageForwardInfo extends TelegramObject {
  _type: 'TdApi$MessageForwardInfo'
  origin: MessageForwardOriginChannel | MessageForwardOriginHiddenUser | MessageForwardOriginUser
  date: number
  fromChatId: number
  fromMessageId: number
}

export interface ReplyMarkupForceReply extends TelegramObject {
  _type: 'TdApi$ReplyMarkupForceReply'
  isPersonal: boolean
}

export interface InlineKeyboardButtonType extends TelegramObject {
  _type: 'TdApi$InlineKeyboardButtonType'
}

export interface InlineKeyboardButton extends TelegramObject {
  _type: 'TdApi$InlineKeyboardButton'
  text: string
  type: InlineKeyboardButtonType
}

export interface ReplyMarkupInlineKeyboard extends TelegramObject {
  _type: 'TdApi$ReplyMarkupInlineKeyboard'
  rows: InlineKeyboardButton[][]
}

export interface ReplyMarkupRemoveKeyboard extends TelegramObject {
  _type: 'TdApi$ReplyMarkupRemoveKeyboard'
  isPersonal: boolean
}

export interface KeyboardButtonType extends TelegramObject {
  _type: 'TdApi$KeyboardButtonType'
}

export interface KeyboardButton extends TelegramObject {
  _type: 'TdApi$KeyboardButton'
  text: string
  type: KeyboardButtonType
}

export interface ReplyMarkupShowKeyboard extends TelegramObject {
  _type: 'TdApi$ReplyMarkupShowKeyboard'
  rows: KeyboardButton[][]
  resizeKeyboard: boolean
  oneTime: boolean
  isPersonal: boolean
}

export interface Message extends TelegramObject {
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

export interface WebhookMessage extends TelegramObject {
  _type: 'Filter$WebhookMessage'
  chat: WebhookChat | null
  chatMember: ChatMember | null
  fileUrl: string | null
  message: Message
  user: WebhookUser | null
}
