interface TelegramObject {
  _type: string;
}

interface ChatTypeBasicGroup extends TelegramObject {
  basicGroupId: number;
}

interface ChatTypePrivate extends TelegramObject {
  userId: number;
}

interface ChatTypeSecret extends TelegramObject {
  secretChatId: number;
  userId: number;
}

interface ChatTypeSupergroup extends TelegramObject {
  supergroupId: number;
  isChannel: boolean;
}

interface Chat extends TelegramObject {
  id: number;
  photoUrl: string | null;
  title: string;
  type:
    | ChatTypeBasicGroup
    | ChatTypePrivate
    | ChatTypeSecret
    | ChatTypeSupergroup;
}

interface BotCommand extends TelegramObject {
  command: string;
  description: string;
}

interface BotInfo extends TelegramObject {
  description: string;
  commands: BotCommand[];
}

interface ChatMemberStatusAdministrator extends TelegramObject {
  customTitle: string;
  canBeEdited: boolean;
  canChangeInfo: boolean;
  canPostMessages: boolean;
  canEditMessages: boolean;
  canDeleteMessages: boolean;
  canInviteUsers: boolean;
  canRestrictMembers: boolean;
  canPinMessages: boolean;
  canPromoteMembers: boolean;
}

interface ChatMemberStatusBanned extends TelegramObject {
  bannedUntilDate: number;
}

interface ChatMemberStatusCreator extends TelegramObject {
  customTitle: string;
  isMember: boolean;
}

interface ChatMemberStatusLeft extends TelegramObject {}

interface ChatPermissions extends TelegramObject {
  canSendMessages: boolean;
  canSendMediaMessages: boolean;
  canSendPolls: boolean;
  canSendOtherMessages: boolean;
  canAddWebPagePreviews: boolean;
  canChangeInfo: boolean;
  canInviteUsers: boolean;
  canPinMessages: boolean;
}

interface ChatMemberStatusRestricted extends TelegramObject {
  isMember: boolean;
  restrictedUntilDate: number;
  permissions: ChatPermissions;
}

interface ChatMemberStatusMember extends TelegramObject {}

interface ChatMember extends TelegramObject {
  userId: number;
  inviterUserId: number;
  joinedChatDate: number;
  status: ChatMemberStatus;
  botInfo: BotInfo;
}

// message

interface TextEntityTypeMention extends TelegramObject {}

interface TextEntityTypeHashtag extends TelegramObject {}

interface TextEntityTypeCashtag extends TelegramObject {}

interface TextEntityTypeBotCommand extends TelegramObject {}

interface TextEntityTypeUrl extends TelegramObject {}

interface TextEntityTypeEmailAddress extends TelegramObject {}

interface TextEntityTypePhoneNumber extends TelegramObject {}

interface TextEntityTypeBold extends TelegramObject {}

interface TextEntityTypeItalic extends TelegramObject {}

interface TextEntityTypeUnderline extends TelegramObject {}

interface TextEntityTypeStrikethrough extends TelegramObject {}

interface TextEntityTypeCode extends TelegramObject {}

interface TextEntityTypePre extends TelegramObject {}

interface TextEntityTypePreCode extends TelegramObject {
  language: string;
}

interface TextEntityTypeTextUrl extends TelegramObject {
  url: string;
}

interface TextEntityTypeMentionName extends TelegramObject {
  userId: number;
}

interface TextEntity extends TelegramObject {
  offset: number;
  length: number;
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
    | TextEntityTypeMentionName;
}

interface FormattedText extends TelegramObject {
  text: string;
  entities: TextEntity[];
}

interface Minithumbnail extends TelegramObject {
  width: number;
  height: number;
  data: number[];
}

interface LocalFile extends TelegramObject {
  path: string;
  canBeDownloaded: boolean;
  canBeDeleted: boolean;
  isDownloadingActive: boolean;
  isDownloadingCompleted: boolean;
  downloadOffset: number;
  downloadedPrefixSize: number;
  downloadedSize: number;
}

interface RemoteFile extends TelegramObject {
  id: string;
  uniqueId: string;
  isUploadingActive: boolean;
  isUploadingCompleted: boolean;
  uploadedSize: number;
}

interface File extends TelegramObject {
  id: number;
  size: number;
  expectedSize: number;
  local: LocalFile;
  remote: RemoteFile;
}

interface PhotoSize extends TelegramObject {
  type: string;
  photo: File;
  width: number;
  height: number;
}

interface Photo extends TelegramObject {
  hasStickers: boolean;
  minithumbnail: Minithumbnail;
  sizes: PhotoSize[];
}

interface Animation extends TelegramObject {
  duration: number;
  width: number;
  height: number;
  fileName: string;
  mimeType: string;
  minithumbnail: Minithumbnail;
  thumbnail: PhotoSize;
  animation: File;
}

interface Audio extends TelegramObject {
  duration: number;
  title: string;
  performer: string;
  fileName: string;
  mimeType: string;
  albumCoverMinithumbnail: Minithumbnail;
  albumCoverThumbnail: PhotoSize;
  audio: File;
}

interface Document extends TelegramObject {
  fileName: string;
  mimeType: string;
  minithumbnail: Minithumbnail;
  thumbnail: PhotoSize;
  document: File;
}

interface MaskPoint extends TelegramObject {}

interface MaskPosition extends TelegramObject {
  point: MaskPoint;
  xShift: number;
  yShift: number;
  scale: number;
}

interface Sticker extends TelegramObject {
  setId: number;
  width: number;
  height: number;
  emoji: string;
  isAnimated: boolean;
  isMask: boolean;
  maskPosition: MaskPosition;
  thumbnail: PhotoSize;
  sticker: File;
}

interface Video extends TelegramObject {
  duration: number;
  width: number;
  height: number;
  fileName: string;
  mimeType: string;
  hasStickers: boolean;
  supportsStreaming: boolean;
  minithumbnail: Minithumbnail;
  thumbnail: PhotoSize;
  video: File;
}

interface VideoNote extends TelegramObject {
  duration: number;
  length: number;
  minithumbnail: Minithumbnail;
  thumbnail: PhotoSize;
  video: File;
}

interface VoiceNote extends TelegramObject {
  duration: number;
  waveform: number[];
  mimeType: string;
  voice: File;
}

interface WebPage extends TelegramObject {
  url: string;
  displayUrl: string;
  type: string;
  siteName: string;
  title: string;
  description: string;
  photo: Photo;
  embedUrl: string;
  embedType: string;
  embedWidth: number;
  embedHeight: number;
  duration: number;
  author: string;
  animation: Animation;
  audio: Audio;
  document: Document;
  sticker: Sticker;
  video: Video;
  videoNote: VideoNote;
  voiceNote: VoiceNote;
  instantViewVersion: number;
}

interface MessageText extends TelegramObject {
  text: FormattedText;
  webPage: WebPage;
}

interface MessageAnimation extends TelegramObject {
  animation: Animation;
  caption: FormattedText;
  isSecret: boolean;
}

interface MessageAudio extends TelegramObject {
  audio: Audio;
  caption: FormattedText;
}

interface MessageDocument extends TelegramObject {
  document: Document;
  caption: FormattedText;
}

interface MessagePhoto extends TelegramObject {
  photo: Photo;
  caption: FormattedText;
  isSecret: boolean;
}

interface MessageExpiredPhoto extends TelegramObject {}

interface MessageSticker extends TelegramObject {
  sticker: Sticker;
}

interface MessageVideo extends TelegramObject {
  video: Video;
  caption: FormattedText;
  isSecret: boolean;
}

interface MessageExpiredVideo extends TelegramObject {}

interface MessageVideoNote extends TelegramObject {
  videoNote: VideoNote;
  isViewed: boolean;
  isSecret: boolean;
}

interface MessageVoiceNote extends TelegramObject {
  voiceNote: VoiceNote;
  caption: FormattedText;
  isListened: boolean;
}

interface Location {
  latitude: number;
  longitude: number;
}

interface MessageLocation extends TelegramObject {
  location: Location;
  livePeriod: number;
  expiresIn: number;
}

interface Venue {
  location: Location;
  title: string;
  address: string;
  provider: string;
  id: string;
  type: string;
}

interface MessageVenue extends TelegramObject {
  venue: Venue;
}

interface Contact {
  phoneNumber: string;
  firstName: string;
  lastName: string;
  vcard: string;
  userId: number;
}

interface MessageContact extends TelegramObject {
  contact: Contact;
}

interface Game {
  id: number;
  shortName: string;
  title: string;
  text: FormattedText;
  description: string;
  photo: Photo;
  animation: Animation;
}

interface MessageGame extends TelegramObject {
  game: Game;
}

interface PollOption {
  text: string;
  voterCount: number;
  votePercentage: number;
  isChosen: boolean;
  isBeingChosen: boolean;
}

interface Poll {
  id: number;
  question: string;
  options: PollOption[];
  totalVoterCount: number;
  isClosed: boolean;
}

interface MessagePoll extends TelegramObject {
  poll: Poll;
}

interface MessageInvoice extends TelegramObject {
  title: string;
  description: string;
  photo: Photo;
  currency: string;
  totalAmount: number;
  startParameter: string;
  isTest: boolean;
  needShippingAddress: boolean;
  receiptMessageId: number;
}

interface CallDiscardReason {}

interface MessageCall extends TelegramObject {
  discardReason: CallDiscardReason;
  duration: number;
}

interface MessageBasicGroupChatCreate extends TelegramObject {
  title: string;
  memberUserIds: number[];
}

interface MessageSupergroupChatCreate extends TelegramObject {
  title: string;
}

interface MessageChatChangeTitle extends TelegramObject {
  title: string;
}

interface MessageChatChangePhoto extends TelegramObject {
  photo: Photo;
}

interface MessageChatDeletePhoto extends TelegramObject {}

interface MessageChatAddMembers extends TelegramObject {
  memberUserIds: number[];
}

interface MessageChatJoinByLink extends TelegramObject {}

interface MessageChatDeleteMember extends TelegramObject {
  userId: number;
}

interface MessageChatUpgradeTo extends TelegramObject {
  supergroupId: number;
}

interface MessageChatUpgradeFrom extends TelegramObject {
  title: string;
  basicGroupId: number;
}

interface MessagePinMessage extends TelegramObject {
  messageId: number;
}

interface MessageScreenshotTaken extends TelegramObject {}

interface MessageChatSetTtl extends TelegramObject {
  ttl: number;
}

interface MessageCustomServiceAction extends TelegramObject {
  text: string;
}

interface MessageGameScore extends TelegramObject {
  gameMessageId: number;
  gameId: number;
  score: number;
}

interface MessagePaymentSuccessful extends TelegramObject {
  invoiceMessageId: number;
  currency: string;
  totalAmount: number;
}

interface Address {
  countryCode: string;
  state: string;
  city: string;
  streetLine1: string;
  streetLine2: string;
  postalCode: string;
}

interface OrderInfo {
  name: string;
  phoneNumber: string;
  emailAddress: string;
  shippingAddress: Address;
}

interface MessagePaymentSuccessfulBot extends TelegramObject {
  invoiceMessageId: number;
  currency: string;
  totalAmount: number;
  invoicePayload: number[];
  shippingOptionId: string;
  orderInfo: OrderInfo;
  telegramPaymentChargeId: string;
  providerPaymentChargeId: string;
}

interface MessageContactRegistered extends TelegramObject {}

interface MessageWebsiteConnected extends TelegramObject {
  domainName: string;
}

interface PassportElementType extends TelegramObject {}

interface MessagePassportDataSent extends TelegramObject {
  types: PassportElementType[];
}

interface DatedFile extends TelegramObject {
  file: File;
  date: number;
}

interface EncryptedPassportElement extends TelegramObject {
  type: PassportElementType;
  data: number[];
  frontSide: DatedFile;
  reverseSide: DatedFile;
  selfie: DatedFile;
  translation: DatedFile[];
  files: DatedFile[];
  value: string;
  hash: string;
}

interface EncryptedCredentials extends TelegramObject {
  data: number[];
  hash: number[];
  secret: number[];
}

interface MessagePassportDataReceived extends TelegramObject {
  elements: EncryptedPassportElement[];
  credentials: EncryptedCredentials;
}

interface MessageUnsupported extends TelegramObject {}

interface UserTypeRegular extends TelegramObject {}

interface UserTypeDeleted extends TelegramObject {}

interface UserTypeBot extends TelegramObject {
  canJoinGroups: boolean;
  canReadAllGroupMessages: boolean;
  isInline: boolean;
  inlineQueryPlaceholder: string;
  needLocation: boolean;
}

interface UserTypeUnknown extends TelegramObject {}

interface UserStatusEmpty extends TelegramObject {}

interface UserStatusOnline extends TelegramObject {
  expires: number;
}

interface UserStatusOffline extends TelegramObject {
  wasOnline: number;
}

interface UserStatusRecently extends TelegramObject {}

interface UserStatusLastWeek extends TelegramObject {}

interface UserStatusLastMonth extends TelegramObject {}

interface User extends TelegramObject {
  firstName: string;
  haveAccess: boolean;
  id: number;
  isSupport: boolean;
  isVerified: boolean;
  languageCode: string;
  lastName: string;
  photoUrl: string | null;
  restrictionReason: string;
  status:
    | UserStatusEmpty
    | UserStatusOnline
    | UserStatusOffline
    | UserStatusRecently
    | UserStatusLastWeek
    | UserStatusLastMonth;
  type: UserTypeRegular | UserTypeDeleted | UserTypeBot | UserTypeUnknown;
  username: string;
}

interface MessageSendingStateFailed extends TelegramObject {
  errorCode: number;
  errorMessage: string;
  canRetry: boolean;
  retryAfter: number;
}

interface MessageSendingStatePending extends TelegramObject {}

interface MessageSchedulingStateSendAtDate extends TelegramObject {
  sendDate: number;
}

interface MessageSchedulingStateSendWhenOnline extends TelegramObject {}

interface MessageForwardOriginChannel extends MessageForwardOrigin {
  chatId: number;
  messageId: number;
  authorSignature: string;
}

interface MessageForwardOriginHiddenUser extends MessageForwardOrigin {
  senderName: string;
}

interface MessageForwardOriginUser extends MessageForwardOrigin {
  senderUserId: number;
}

interface MessageForwardInfo extends TelegramObject {
  origin:
    | MessageForwardOriginChannel
    | MessageForwardOriginHiddenUser
    | MessageForwardOriginUser;
  date: number;
  fromChatId: number;
  fromMessageId: number;
}

interface ReplyMarkupForceReply extends TelegramObject {
  isPersonal: boolean;
}

interface InlineKeyboardButtonType extends TelegramObject {}

interface InlineKeyboardButton extends TelegramObject {
  text: string;
  type: InlineKeyboardButtonType;
}

interface ReplyMarkupInlineKeyboard extends TelegramObject {
  rows: InlineKeyboardButton[][];
}

interface ReplyMarkupRemoveKeyboard extends TelegramObject {
  isPersonal: boolean;
}

interface KeyboardButtonType extends TelegramObject {}

interface KeyboardButton extends TelegramObject {
  text: string;
  type: KeyboardButtonType;
}

interface ReplyMarkupShowKeyboard extends TelegramObject {
  rows: KeyboardButton[][];
  resizeKeyboard: boolean;
  oneTime: boolean;
  isPersonal: boolean;
}

interface Message extends Object {
  id: number;
  senderUserId: number;
  chatId: number;
  sendingState: MessageSendingStateFailed | MessageSendingStatePending;
  schedulingState:
    | MessageSchedulingStateSendAtDate
    | MessageSchedulingStateSendWhenOnline;
  isOutgoing: boolean;
  canBeEdited: boolean;
  canBeForwarded: boolean;
  canBeDeletedOnlyForSelf: boolean;
  canBeDeletedForAllUsers: boolean;
  isChannelPost: boolean;
  containsUnreadMention: boolean;
  date: number;
  editDate: number;
  forwardInfo: MessageForwardInfo;
  replyToMessageId: number;
  ttl: number;
  ttlExpiresIn: number;
  viaBotUserId: number;
  authorSignature: string;
  views: number;
  mediaAlbumId: number;
  restrictionReason: string;
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
    | MessageUnsupported;
  replyMarkup:
    | ReplyMarkupShowKeyboard
    | ReplyMarkupForceReply
    | ReplyMarkupInlineKeyboard
    | ReplyMarkupRemoveKeyboard;
}

interface WebhookMessage extends TelegramObject {
  chat: Chat | null;
  chatMember: ChatMember | null;
  fileUrl: string | null;
  message: Message;
  user: User | null;
}
