/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Map: { input: any; output: any; }
  Time: { input: any; output: any; }
  Uint32: { input: any; output: any; }
  Uint64: { input: any; output: any; }
  Upload: { input: any; output: any; }
};

export type AddIamRoleUsersInput = {
  emails?: InputMaybe<Array<Scalars['String']['input']>>;
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type AddUserRequest = {
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type AddUserResponse = {
  __typename?: 'AddUserResponse';
  email?: Maybe<Scalars['String']['output']>;
  error: Scalars['String']['output'];
  id?: Maybe<Scalars['ID']['output']>;
};

export type ApplyToEventWaitListInput = {
  eventId: Scalars['String']['input'];
  questionnaireResponse?: InputMaybe<Scalars['String']['input']>;
};

export type AssigmentUserStatistics = {
  __typename?: 'AssigmentUserStatistics';
  completedPieces: Scalars['Int']['output'];
  completionRate: Scalars['Int']['output'];
  ebooks: Scalars['Int']['output'];
  ebooksCompleted: Scalars['Int']['output'];
  podcasts: Scalars['Int']['output'];
  podcastsCompleted: Scalars['Int']['output'];
  streams: Scalars['Int']['output'];
  streamsCompleted: Scalars['Int']['output'];
  totalPieces: Scalars['Int']['output'];
  user: User;
};

export type Assignment = {
  __typename?: 'Assignment';
  /** The reason for assignment which is (Optional but not null) which would be displayed to the users */
  assignmentReason: Scalars['String']['output'];
  /** The title of the assignment which is displayed internally */
  assignmentTitle: Scalars['String']['output'];
  /** Background image of the assignment */
  backgroundImage?: Maybe<Image>;
  /**
   * Indicate the time of when user complete this assignment.
   * If this field empty, it means user have not completed yet.
   *
   * Note: This field can only be resolve if called from user obj as parent.
   */
  completedAt?: Maybe<Scalars['Time']['output']>;
  /**
   * Percentage progress of the assignment (Average out of all trails and contents)
   * Note: This field can only be resolve if called from user obj as parent.
   */
  completionRate: Scalars['Int']['output'];
  /**
   * All the contents associated with this assignment
   * @deprecated faced backward incompatibility issue, use contents instead
   */
  contentCards?: Maybe<ContentConnection>;
  /** All the contents associated with this assignment (for backward incompatibility issue with mobile) */
  contents?: Maybe<ContentConnection>;
  /** When the assignment was created */
  createdAt: Scalars['Time']['output'];
  /** Who created the assignment */
  createdBy: User;
  /** The due date to finish the assignment */
  dueDate?: Maybe<Scalars['Time']['output']>;
  /** Unique ID of the assignment */
  id: Scalars['ID']['output'];
  /**
   * All the learning paths associated with this assigned content
   * @deprecated use contents instead to get all contents including learning paths
   */
  learningPaths: LearningPathConnection;
  /** Total time of the assignment (Sum of all trails and contents in seconds). */
  length: Scalars['Int']['output'];
  /** The groups to which this assignment has been assigned */
  orgGroups: Array<OrganisationGroup>;
  /**
   * Indicate whether the assignment is 'NEW' or 'VIEWED'
   *
   * Note: This field can only be resolve if called from user obj as parent.
   */
  state?: Maybe<AssignmentState>;
  /** Retrieve basic statistics about the assignment */
  statistics: AssignmentUserStatisticsConnection;
  /** The status of assignment (ACTIVE / INACTIVE / EXPIRED) */
  status?: Maybe<AssignmentStatus>;
  /**
   * Total time user spent for the assignment in seconds.
   * Note: This field can only be resolve if called from user obj as parent.
   */
  timeConsumed: Scalars['Int']['output'];
  /** The last time the assignment was updated */
  updatedAt: Scalars['Time']['output'];
  /** Who last updated the assignment */
  updatedBy?: Maybe<User>;
  /**
   * Statistics of assigned and completed contents per assignment.
   * Note: This field can only be resolve if called from user obj as parent.
   */
  userAssignmentStatistics: UserAssignmentStatistics;
  /** All the users that have received the assignment */
  users?: Maybe<UserCollection>;
};


export type AssignmentStatisticsArgs = {
  filter: AssignmentStatisticsFilterInput;
  pagination: OffsetPagination;
};

export type AssignmentConnection = {
  __typename?: 'AssignmentConnection';
  edges: Array<Assignment>;
  meta: PageInfo;
};

export type AssignmentContentInput = {
  contentType: ContentType;
  id: Scalars['ID']['input'];
  index: Scalars['Int']['input'];
};

export type AssignmentContentStatistics = {
  __typename?: 'AssignmentContentStatistics';
  /** The average completion rate for this content piece */
  avgCompletionRate: Scalars['Float']['output'];
  /** The ID of the content piece */
  contentId: Scalars['ID']['output'];
  /** The estimated length of the content piece */
  contentLength: Scalars['Int']['output'];
  /** The name of the content piece */
  contentName: Scalars['String']['output'];
  /** Totalt amount of time the users have spent on this content piece */
  durationConsumed: Scalars['Int']['output'];
  /** The number of users that have been assigned this content piece */
  usersAssigned: Scalars['Int']['output'];
};

export type AssignmentGroupStatistics = {
  __typename?: 'AssignmentGroupStatistics';
  /** The average completion rate for this content piece */
  avgCompletionRate: Scalars['Float']['output'];
  /** Totalt amount of time the users have spent on this content piece */
  durationConsumed: Scalars['Int']['output'];
  /** The ID of the content piece */
  groupID: Scalars['ID']['output'];
  /** The name of the content piece */
  groupName: Scalars['String']['output'];
  /** The number of users that have been assigned this content piece */
  peopleInTotal: Scalars['Int']['output'];
};

export type AssignmentInput = {
  /** Optional reason to display to the users */
  assignmentReason: Scalars['String']['input'];
  /** Internal title of assignment */
  assignmentTitle: Scalars['String']['input'];
  /**
   * List of contents to be part of the assignment.
   *
   * Note: the learning paths needs to be input here.
   */
  contents?: InputMaybe<Array<AssignmentContentInput>>;
  /** The due date to finish the assignment */
  dueDate?: InputMaybe<Scalars['Time']['input']>;
  /** List of organisation groups to assign the content to */
  orgGroups?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** The status of assignment (ACTIVE / INACTIVE / EXPIRED) */
  status?: InputMaybe<AssignmentStatus>;
  /** List of users to assign the content to */
  users: Array<Scalars['ID']['input']>;
};

export type AssignmentMemberStatistics = {
  __typename?: 'AssignmentMemberStatistics';
  /** The number of content pieces they have completed */
  assignmentsCompleted: Scalars['Int']['output'];
  /** The number of content piece they have been assigned in total */
  assignmentsInTotal: Scalars['Int']['output'];
  /** Average completion rate of the assigned content */
  avgCompletionRate: Scalars['Float']['output'];
  /** CSV of group that the user belongs to */
  groupNames: Scalars['String']['output'];
  /** Total amount of time they have spent on their assignments */
  totalTimeConsumed: Scalars['Int']['output'];
  /** The ID of the user */
  userId: Scalars['ID']['output'];
  /** Their username which is a concat of first name and last name */
  username: Scalars['String']['output'];
};

export enum AssignmentState {
  New = 'NEW',
  Viewed = 'VIEWED'
}

export type AssignmentStatisticsFilterInput = {
  /** Filter by the users email */
  email?: InputMaybe<Scalars['String']['input']>;
  /**
   * Filter by groups
   *
   * This will look at all the user groups the assigned users are a member of and not only the groups assigned to the specific assignment
   * this will allow us to deep dive into the analytics at a much deeper level
   */
  groups?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Filter by the users name */
  name?: InputMaybe<Scalars['String']['input']>;
};

export enum AssignmentStatus {
  Active = 'ACTIVE',
  Expired = 'EXPIRED',
  Inactive = 'INACTIVE'
}

export type AssignmentUserStatisticsConnection = {
  __typename?: 'AssignmentUserStatisticsConnection';
  edges: Array<AssigmentUserStatistics>;
  meta: PageInfo;
};

export type AssignmentsFilter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  limit: Scalars['Int']['input'];
  offset: Scalars['Int']['input'];
  /** Note: Assignment state filter only works for user obj as parent */
  state?: InputMaybe<AssignmentState>;
  status?: InputMaybe<Array<AssignmentStatus>>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type AssociationError = {
  __typename?: 'AssociationError';
  id: Scalars['String']['output'];
  message: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type AttachmentContentInput = {
  attachmentType: Scalars['String']['input'];
  contentId: Scalars['ID']['input'];
};

export type AttachmentFileInput = {
  attachmentType: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  uri: Scalars['String']['input'];
};

export type AttachmentImageInput = {
  attachmentType: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  imageUrl: Scalars['String']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
};

export type AttachmentInput = {
  content?: InputMaybe<AttachmentContentInput>;
  file?: InputMaybe<AttachmentFileInput>;
  image?: InputMaybe<AttachmentImageInput>;
  video?: InputMaybe<AttachmentVideoInput>;
};

export type AttachmentVideoInput = {
  attachmentType: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  imageUrl?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  uri: Scalars['String']['input'];
};

export type AudioFile = {
  __typename?: 'AudioFile';
  contentType: Scalars['String']['output'];
  createdAt: Scalars['Time']['output'];
  filename: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  length: Scalars['Uint32']['output'];
  mediaType?: Maybe<Scalars['String']['output']>;
  originalName: Scalars['String']['output'];
  sizeInBytes: Scalars['Uint64']['output'];
  uri: Scalars['String']['output'];
};

export type AuthenticationError = {
  __typename?: 'AuthenticationError';
  message: Scalars['String']['output'];
};

export type AuthenticationResponse = {
  __typename?: 'AuthenticationResponse';
  /**
   * Finished registration represents if the user has finished the registration process
   *
   * For tigerhall teams this represents if the user has selection a subscription plan interval and provided
   * the credit card credentials for the initial subscription/trial
   */
  finishedRegistration: Scalars['Boolean']['output'];
  /** The JWT access token that should be used in sub-sequence api requests to authenticate the user */
  jwt: Scalars['String']['output'];
  /** If the authentication is unsuccessful this message will contain the reason why */
  message: Scalars['String']['output'];
  /**
   * If this is the first time a user logs into the platform.
   *
   * This is generally used in conjunction with 3rd party authentication so that we know if they should
   * proceed with the onboarding process.
   */
  newAccount: Scalars['Boolean']['output'];
  /** If the request was successful */
  success: Scalars['Boolean']['output'];
  /** The user ID */
  userId: Scalars['ID']['output'];
};

export enum CanvasType {
  Onboarding = 'ONBOARDING'
}

export type Category = {
  __typename?: 'Category';
  /** Connent associated to this categorys */
  contents: ContentConnection;
  /** Experts that specialise in this category */
  experts: ExpertCollection;
  id: Scalars['ID']['output'];
  /** Image representing the category */
  image?: Maybe<Image>;
  /**
   * The index of this category if it belongs to specific org.
   * The org categories index can be modified via retool|backoffice.
   */
  index?: Maybe<Scalars['Int']['output']>;
  /** Name of the category */
  name: Scalars['String']['output'];
  /** Which organisation this category belongs to */
  organisation?: Maybe<Organisation>;
  /** Which organisation group this category belongs to */
  organisationGroups: Array<OrganisationGroup>;
  /** URL Friendly slug that can be used as a unique identifier */
  slug: Scalars['String']['output'];
};


export type CategoryContentsArgs = {
  filter: ContentCardsFilter;
};


export type CategoryExpertsArgs = {
  filter?: InputMaybe<ExpertFilter>;
  sorting?: InputMaybe<SortOrdering>;
};

export type CategoryConnection = {
  __typename?: 'CategoryConnection';
  edges: Array<Category>;
  meta: PageInfo;
};

export type CategoryFilter = {
  hasOrganisationID?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  organisationGroups?: InputMaybe<Array<Scalars['ID']['input']>>;
  organisationID?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type CategoryIndexInput = {
  categoryId: Scalars['ID']['input'];
  index: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  organisationId: Scalars['ID']['input'];
};

export type CategoryInput = {
  image?: InputMaybe<Scalars['ID']['input']>;
  name: Scalars['String']['input'];
  organisationGroups?: InputMaybe<Array<Scalars['ID']['input']>>;
  organisationID?: InputMaybe<Scalars['ID']['input']>;
};

export type Chapter = {
  __typename?: 'Chapter';
  index: Scalars['Int']['output'];
  language?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  pages: Array<Scalars['String']['output']>;
};

export type ChapterInput = {
  index: Scalars['Int']['input'];
  language?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  pages: Array<Scalars['String']['input']>;
};

export type Chat = {
  __typename?: 'Chat';
  /** If the user has unread messages */
  hasUnreadMessages: Scalars['Boolean']['output'];
  /** This ID actually refers to the object the chat refers to (Might change this in the future) */
  id: Scalars['ID']['output'];
  /** The last message the chat has been sent */
  lastMessage?: Maybe<ChatMessage>;
  /** When the user last checked the chat, this is triggered when the frontend subscribes to new chat messages */
  lastViewed?: Maybe<Scalars['Time']['output']>;
  /** Retrieve all of the messages for this chat */
  messages: ChatMessageConnection;
  notificationPreference: NotificationPreferenceState;
};


export type ChatMessagesArgs = {
  pagination?: InputMaybe<CursorPaginationInput>;
};


export type ChatNotificationPreferenceArgs = {
  type: NotificationType;
};

export type ChatEdge = {
  __typename?: 'ChatEdge';
  cursor: Scalars['String']['output'];
  message: ChatMessage;
};

export type ChatMessage = {
  __typename?: 'ChatMessage';
  chat: Chat;
  createdAt: Scalars['Time']['output'];
  deletedAt?: Maybe<Scalars['Time']['output']>;
  id: Scalars['ID']['output'];
  /** Information about the users mentioned in the chat message */
  mentions: Array<Mention>;
  message: Scalars['String']['output'];
  rawText?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['Time']['output'];
  user: User;
};

export type ChatMessageConnection = {
  __typename?: 'ChatMessageConnection';
  edges: Array<ChatEdge>;
  meta: CursorInfo;
};

export type ClickAnalyticsInput = {
  documentID: Scalars['String']['input'];
  query: Scalars['String']['input'];
  requestID?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type Cohort = {
  __typename?: 'Cohort';
  createdAt: Scalars['Time']['output'];
  createdBy: User;
  deleted?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  inviteStatus: CohortInviteStatus;
  learningPath: LearningPath;
  name: Scalars['String']['output'];
  /** @deprecated Use inviteStatus instead */
  status: CohortStatus;
  timeline: Array<Timeline>;
  updatedAt: Scalars['Time']['output'];
  users: CohortUserConnection;
};


export type CohortUsersArgs = {
  filter?: InputMaybe<CohortFilter>;
  pagination?: InputMaybe<CursorPaginationInput>;
};

export type CohortConnection = {
  __typename?: 'CohortConnection';
  edges: Array<CohortEdge>;
  meta: CursorInfo;
};

export type CohortEdge = {
  __typename?: 'CohortEdge';
  cohort: Cohort;
  cursor: Scalars['String']['output'];
};

export type CohortFilter = {
  inviteStatus?: InputMaybe<Array<CohortInviteStatus>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  /** Deprecated: Use the inviteStatus filter instead to find the ongoing cohorts */
  status?: InputMaybe<Array<CohortStatus>>;
};

export enum CohortInviteStatus {
  Accepted = 'ACCEPTED',
  Pending = 'PENDING',
  Rejected = 'REJECTED'
}

export type CohortInviteUserListFilter = {
  includeOnlyInvitedUsers?: InputMaybe<Scalars['Boolean']['input']>;
  inviteStatus?: InputMaybe<Array<CohortInviteStatus>>;
  searchByName?: InputMaybe<Scalars['String']['input']>;
};

export enum CohortStatus {
  Finished = 'FINISHED',
  Ongoing = 'ONGOING'
}

export type CohortUser = {
  __typename?: 'CohortUser';
  lastInvitedAt: Scalars['Time']['output'];
  nudgeEnabled: Scalars['Boolean']['output'];
  status: CohortInviteStatus;
  user: User;
};

export type CohortUserConnection = {
  __typename?: 'CohortUserConnection';
  edges: Array<CohortUserEdge>;
  meta: CursorInfo;
};

export type CohortUserEdge = {
  __typename?: 'CohortUserEdge';
  cohortUser: CohortUser;
  cursor: Scalars['String']['output'];
};

export enum CollectionType {
  CuratedList = 'CURATED_LIST',
  LearningPath = 'LEARNING_PATH'
}

export type Comment = {
  __typename?: 'Comment';
  belongTo: CommentableContent;
  comment: Scalars['String']['output'];
  content?: Maybe<ContentCard>;
  createdAt: Scalars['Time']['output'];
  deletedAt?: Maybe<Scalars['Time']['output']>;
  id: Scalars['ID']['output'];
  lastReply?: Maybe<Comment>;
  /** Information about the users mentioned in the comment */
  mentions: Array<Mention>;
  numberOfLikes: Scalars['Int']['output'];
  numberOfReplies: Scalars['Int']['output'];
  parent?: Maybe<Comment>;
  /** parsed comment with mentions support */
  rawText: Scalars['String']['output'];
  replies: CommentCursorConnection;
  updatedAt: Scalars['Time']['output'];
  user: User;
  /** This presents if the user has rated the comment */
  userCommentRating: CommentRating;
  /**
   * Retrieve all the users who liked a specific comment
   * @deprecated use usersReactToTheComment instead
   */
  usersLikedTheComment: UserCollection;
  /** Retrieve all users that reacted to the comment */
  usersReactToTheComment: ReactionsSummary;
};


export type CommentRepliesArgs = {
  afterCursor?: InputMaybe<Scalars['String']['input']>;
  beforeCursor?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
};


export type CommentUsersLikedTheCommentArgs = {
  limit: Scalars['Int']['input'];
  offset: Scalars['Int']['input'];
  sorting?: InputMaybe<SortOrdering>;
};

export type CommentCursorConnection = {
  __typename?: 'CommentCursorConnection';
  edges: Array<CommentEdge>;
  meta: CursorInfo;
};

export type CommentEdge = {
  __typename?: 'CommentEdge';
  comment: Comment;
  cursor: Scalars['String']['output'];
};

export type CommentFilter = {
  /** Retrieve actiites that happened after this timestamp */
  after?: InputMaybe<Scalars['String']['input']>;
  /** Retrieve activities that happened before this timestamp */
  before?: InputMaybe<Scalars['String']['input']>;
  /** The number of items to return */
  limit: Scalars['Int']['input'];
};

export enum CommentRating {
  Like = 'LIKE',
  Undetermined = 'UNDETERMINED'
}

export enum CommentType {
  Content = 'CONTENT',
  Feed = 'FEED',
  Post = 'POST'
}

export type CommentableContent = Ebook | Event | FeedActivity | LearningPath | Podcast | Post | Stream;

export type ConflictError = {
  __typename?: 'ConflictError';
  associationErrors: Array<AssociationError>;
};

/** Content that can be consumed */
export type ConsumableContent = Ebook | LearningPath | Podcast | Stream;

export type ConsumableContentCollection = {
  __typename?: 'ConsumableContentCollection';
  edges: Array<ConsumableContent>;
  meta: PageInfo;
};

export type ConsumableContentFilter = {
  limit: Scalars['Int']['input'];
  offset: Scalars['Int']['input'];
};

/** This presents all the content the user can consume */
export type Content = Ebook | Event | Podcast | Stream;

export type ContentActivity = FeedContent & {
  __typename?: 'ContentActivity';
  /** comment is only available if ContentActivityType is either COMMENT or REPLY_ON_COMMENT */
  comment?: Maybe<Comment>;
  content: Content;
  contentActivityType: FeedActivityType;
  createdAt: Scalars['Time']['output'];
  id: Scalars['ID']['output'];
  user: User;
};

/**
 * Old system for content cards
 *
 * Deprecated: should use one of Content, SearchableContent or Consumable
 */
export type ContentCard = Ebook | Event | Expert | LearningPath | Podcast | Stream;

export type ContentCardsFilter = {
  /** Selected categories */
  categories?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Filter based on the creation time of the content */
  createdAt?: InputMaybe<TimeRangeFilter>;
  /** Filter on the length of the content */
  duration?: InputMaybe<IntRangeFilter>;
  /** Filter on specific entry levels */
  entryLevels?: InputMaybe<Array<EntryLevelValue>>;
  /** Filter for contents that are not in the org categories */
  excludeOrgCategories?: InputMaybe<Scalars['Boolean']['input']>;
  /** Select experts */
  experts?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Retrieve content by a specific set of content ids */
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Include unpublished content, can only be set to true as an org admin or tigerhall admin account */
  includeDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * If experts should be included on the content
   *
   * Deprecated: Specify the explicit types you want in the types field
   */
  includeExperts?: InputMaybe<Scalars['Boolean']['input']>;
  /** If expert is able to create livestream */
  isAbleToLivestream?: InputMaybe<Scalars['Boolean']['input']>;
  /** If the included experts should be a mentor */
  isMentor?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the specified keywords */
  keywords?: InputMaybe<Scalars['String']['input']>;
  /** Language filter to filter content by language */
  languages?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Selected lifegoals */
  lifegoals?: InputMaybe<Array<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** If the content included should be org specific */
  orgSpecific?: InputMaybe<Scalars['Boolean']['input']>;
  /** Only include recently published pages */
  recent?: InputMaybe<Scalars['Boolean']['input']>;
  /** A number of predefined filters for a user to specify */
  selection?: InputMaybe<ContentSelection>;
  /** Filter on a specific content type */
  types?: InputMaybe<Array<ContentType>>;
};

export enum ContentCardsSorting {
  BookmarkedAt = 'BOOKMARKED_AT',
  FinishedAt = 'FINISHED_AT',
  LastOpenedAt = 'LAST_OPENED_AT',
  MyUserActivity = 'MY_USER_ACTIVITY',
  PublishedAt = 'PUBLISHED_AT',
  Rating = 'RATING',
  Trending = 'TRENDING',
  UpdatedAt = 'UPDATED_AT',
  WeeklyTrending = 'WEEKLY_TRENDING'
}

export type ContentConnection = {
  __typename?: 'ContentConnection';
  edges: Array<ContentCard>;
  meta: PageInfo;
};

export type ContentRating = {
  __typename?: 'ContentRating';
  content: ContentCard;
  createdAt: Scalars['Time']['output'];
  id: Scalars['ID']['output'];
  rating: Scalars['Float']['output'];
  review?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Time']['output']>;
  user: User;
  vote: ContentVote;
};

export type ContentRatingConnection = {
  __typename?: 'ContentRatingConnection';
  edges: Array<ContentRating>;
  meta: PageInfo;
};

export type ContentRatingInput = {
  contentId: Scalars['String']['input'];
  rating: Scalars['Float']['input'];
  review?: InputMaybe<Scalars['String']['input']>;
};

export type ContentSegment = {
  __typename?: 'ContentSegment';
  header: Scalars['String']['output'];
  paragraph: Scalars['String']['output'];
};

export type ContentSegmentInput = {
  header: Scalars['String']['input'];
  paragraph: Scalars['String']['input'];
};

export enum ContentSelection {
  Attended = 'ATTENDED',
  Bookmarked = 'BOOKMARKED',
  DailyGoals = 'DAILY_GOALS',
  Favorites = 'FAVORITES',
  Finished = 'FINISHED',
  ForMe = 'FOR_ME',
  Free = 'FREE',
  MyExperts = 'MY_EXPERTS',
  Ongoing = 'ONGOING',
  OrganisationContent = 'ORGANISATION_CONTENT',
  ToConsume = 'TO_CONSUME',
  Upcoming = 'UPCOMING'
}

export enum ContentType {
  Category = 'CATEGORY',
  Ebook = 'EBOOK',
  Event = 'EVENT',
  Expert = 'EXPERT',
  LearningPath = 'LEARNING_PATH',
  LifeGoal = 'LIFE_GOAL',
  Podcast = 'PODCAST',
  Stream = 'STREAM'
}

export type ContentUserNote = {
  __typename?: 'ContentUserNote';
  body: Scalars['String']['output'];
  contentCard: ContentCard;
  createdAt: Scalars['Time']['output'];
  headline: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  updatedAt: Scalars['Time']['output'];
  user: User;
};

export type ContentUserNoteFilter = {
  limit: Scalars['Int']['input'];
  offset: Scalars['Int']['input'];
};

export enum ContentVote {
  Downvote = 'DOWNVOTE',
  Undetermined = 'UNDETERMINED',
  Upvote = 'UPVOTE'
}

export type Coordinates = {
  __typename?: 'Coordinates';
  lat: Scalars['String']['output'];
  lon: Scalars['String']['output'];
};

export type CoordinatesInput = {
  lat: Scalars['String']['input'];
  lon: Scalars['String']['input'];
};

export type Coupon = {
  __typename?: 'Coupon';
  code: Scalars['String']['output'];
  createdAt: Scalars['Time']['output'];
  duration: Scalars['String']['output'];
  durationInMonths?: Maybe<Scalars['Int']['output']>;
  organisation?: Maybe<Organisation>;
  organisationId?: Maybe<Scalars['ID']['output']>;
  percentOff: Scalars['Int']['output'];
  remainingCharges: Scalars['Int']['output'];
  restrictedContent?: Maybe<Scalars['String']['output']>;
  restrictedSubscriptionDuration?: Maybe<Scalars['Int']['output']>;
  restrictedSubscriptionLevel?: Maybe<SubscriptionLevel>;
  restrictedToFirstTimeUser?: Maybe<Scalars['Boolean']['output']>;
  updatedAt: Scalars['Time']['output'];
  usedCharges: Scalars['Int']['output'];
  user?: Maybe<User>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type CouponConnection = {
  __typename?: 'CouponConnection';
  edges: Array<Coupon>;
  meta: PageInfo;
};

export type CouponFilter = {
  code?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  organisationId?: InputMaybe<Scalars['String']['input']>;
};

export type CouponInput = {
  code: Scalars['String']['input'];
  duration: Scalars['String']['input'];
  durationInMonths?: InputMaybe<Scalars['Int']['input']>;
  organisationId?: InputMaybe<Scalars['String']['input']>;
  percentOff: Scalars['Int']['input'];
  remainingCharges: Scalars['Int']['input'];
  restrictedContent?: InputMaybe<Scalars['String']['input']>;
  restrictedSubscriptionDuration?: InputMaybe<Scalars['Int']['input']>;
  restrictedSubscriptionLevel?: InputMaybe<Scalars['String']['input']>;
  restrictedToFirstTimeUser?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CreateCohortInput = {
  learningPathId: Scalars['ID']['input'];
  name: Scalars['String']['input'];
  users?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type CreateContentUserNote = {
  body: Scalars['String']['input'];
  headline: Scalars['String']['input'];
};

export type CreateEbookResult = Ebook | ValidationError;

export type CreateIamRoleResult = IamRole | ValidationError;

export type CreatePodcastResult = Podcast | ValidationError;

export type CreatePostInput = {
  attachments: Array<InputMaybe<AttachmentInput>>;
  description?: InputMaybe<Scalars['String']['input']>;
  mentions?: InputMaybe<Array<MentionInput>>;
  parentPost?: InputMaybe<Scalars['ID']['input']>;
  privacy: PrivacySettings;
};

export type CreateStreamResult = Stream | ValidationError;

export type CreateTeamsInput = {
  company: Scalars['String']['input'];
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type CreateTeamsResult = {
  __typename?: 'CreateTeamsResult';
  auth: AuthenticationResponse;
  organisation: Organisation;
  user: User;
};

export type CreateUserInput = {
  biography?: InputMaybe<Scalars['String']['input']>;
  company?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  /** facebookLink represents facebook profile url */
  facebookLink?: InputMaybe<Scalars['String']['input']>;
  firstName: Scalars['String']['input'];
  /** twitterHandle represents instagram handle name */
  instagramHandle?: InputMaybe<Scalars['String']['input']>;
  joiningReason?: InputMaybe<Scalars['String']['input']>;
  lastName: Scalars['String']['input'];
  /** linkedinLink represents linkedin profile url */
  linkedinLink?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  /** twitterHandle represents twitter handle name */
  twitterHandle?: InputMaybe<Scalars['String']['input']>;
  websiteLink?: InputMaybe<Scalars['String']['input']>;
};

export type CreateUserResult = User | ValidationError;

export type CurrentlyFeaturedContent = {
  __typename?: 'CurrentlyFeaturedContent';
  config?: Maybe<FeaturedContent>;
  content?: Maybe<ContentCard>;
};

export type CursorInfo = {
  __typename?: 'CursorInfo';
  hasNext?: Maybe<Scalars['Boolean']['output']>;
  hasPrev?: Maybe<Scalars['Boolean']['output']>;
  nextCursor: Scalars['String']['output'];
  prevCursor: Scalars['String']['output'];
};

export type CursorPaginationInput = {
  afterCursor?: InputMaybe<Scalars['String']['input']>;
  beforeCursor?: InputMaybe<Scalars['String']['input']>;
  limit: Scalars['Int']['input'];
};

export type DeleteOrganisationGroupResult = ConflictError | NoContent | NotFoundError;

export enum DeviceOperation {
  Add = 'ADD',
  Remove = 'REMOVE'
}

export type Ebook = {
  __typename?: 'Ebook';
  /**
   * The amount of time spent on by users
   * @deprecated Use timeSpentOnByUsers insteads
   */
  activityCount: Scalars['Int']['output'];
  /** Audio available languages on the ebook */
  audioAvailableLanguages: Array<Language>;
  /** Available languages on the ebook */
  availableLanguages: Array<Language>;
  /** Content categories related to this ebook */
  categories: Array<Category>;
  /** The actual chapters of the ebook */
  chapters: Array<Chapter>;
  /** Comments on content */
  comments: CommentCursorConnection;
  /** Tells whether content is rated by user or not */
  contentRatingByUser: ContentVote;
  contentSegments: Array<ContentSegment>;
  createdAt: Scalars['Time']['output'];
  deletedAt?: Maybe<Scalars['Time']['output']>;
  /** The number of downvotes the content piece has received */
  downvoteCount: Scalars['Int']['output'];
  entryLevel: EntryLevelValue;
  /** Episodes associated with the ebook */
  episodes: EbookEpisode;
  /** Experts that are part of this ebook */
  experts: Array<Expert>;
  id: Scalars['ID']['output'];
  image?: Maybe<Image>;
  isFeatured: Scalars['Boolean']['output'];
  /** @deprecated No longer applicable */
  isFree: Scalars['Boolean']['output'];
  /** isSensitive represents extra filter on fetching events to make person privacy intact */
  isSensitive: Scalars['Boolean']['output'];
  /** Learning paths that include this content piece */
  learningPaths: LearningPathConnection;
  length: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  notificationPreference: NotificationPreferenceState;
  numberOfComments: Scalars['Int']['output'];
  /** The number of reviews the content piece as received */
  numberOfReviews: Scalars['Int']['output'];
  organisation?: Maybe<Organisation>;
  organisationGroups: Array<OrganisationGroup>;
  preamble: Scalars['String']['output'];
  publishedAt?: Maybe<Scalars['Time']['output']>;
  /** Averge rating from 1-5 the content piece has received */
  rating: Scalars['Float']['output'];
  /** @deprecated Use length instead */
  readingTime?: Maybe<Scalars['Int']['output']>;
  /** Which regions the content piece can be viewed in */
  regionRestrictions: Array<Scalars['String']['output']>;
  /** Retrieve content that is related to this content piece */
  relatedContent: Array<ContentCard>;
  /** URL Friendly slug that can be used as a unique identifier */
  slug: Scalars['String']['output'];
  /** The amount of time spent on by users */
  timeSpentOnByUsers: Scalars['Int']['output'];
  /** Whether any tranlsation job is running for this ebook or not */
  translationOngoing: Scalars['Boolean']['output'];
  type: ContentType;
  updatedAt: Scalars['Time']['output'];
  /** The number of upvotes the content piece has received */
  upvoteCount: Scalars['Int']['output'];
  /** The users current progress within the book */
  userContentTracking: UserContentTracking;
};


export type EbookChaptersArgs = {
  language?: InputMaybe<Scalars['String']['input']>;
};


export type EbookCommentsArgs = {
  afterCursor?: InputMaybe<Scalars['String']['input']>;
  beforeCursor?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
};


export type EbookEpisodesArgs = {
  language?: InputMaybe<Scalars['String']['input']>;
};


export type EbookLearningPathsArgs = {
  filter: LearningPathFilter;
  sorting?: InputMaybe<SortOrdering>;
};


export type EbookLengthArgs = {
  language?: InputMaybe<Scalars['String']['input']>;
};


export type EbookNotificationPreferenceArgs = {
  type: NotificationType;
};


export type EbookPublishedAtArgs = {
  language?: InputMaybe<Scalars['String']['input']>;
};


export type EbookReadingTimeArgs = {
  language?: InputMaybe<Scalars['String']['input']>;
};


export type EbookRelatedContentArgs = {
  limit: Scalars['Int']['input'];
};

export type EbookAudioInput = {
  episodes: Array<InputMaybe<EpisodeInput>>;
  length?: InputMaybe<Scalars['Int']['input']>;
  publishedAt?: InputMaybe<Scalars['Time']['input']>;
};

export type EbookConnection = {
  __typename?: 'EbookConnection';
  edges: Array<Ebook>;
  meta: PageInfo;
};

export type EbookEpisode = {
  __typename?: 'EbookEpisode';
  episodes: Array<Episode>;
  language: Scalars['String']['output'];
  length?: Maybe<Scalars['Int']['output']>;
  publishedAt?: Maybe<Scalars['Time']['output']>;
};

export type EbookFilter = {
  categories?: InputMaybe<Array<Scalars['ID']['input']>>;
  entryLevel?: InputMaybe<Array<EntryLevelValue>>;
  experts?: InputMaybe<Array<Scalars['ID']['input']>>;
  includeDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  /** includeSensitiveContent filter the content basis of sensitivity of content */
  includeSensitiveContent?: InputMaybe<Scalars['Boolean']['input']>;
  languages?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  onlyRated?: InputMaybe<Scalars['Boolean']['input']>;
  organisationGroups?: InputMaybe<Array<Scalars['ID']['input']>>;
  organisationID?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type EbookInput = {
  categories?: InputMaybe<Array<Scalars['ID']['input']>>;
  chapters?: InputMaybe<Array<ChapterInput>>;
  contentSegments: Array<ContentSegmentInput>;
  entryLevel: EntryLevelValue;
  experts?: InputMaybe<Array<Scalars['ID']['input']>>;
  image: Scalars['String']['input'];
  /** isSensitive represents extra filter on fetching events to make person privacy intact */
  isSensitive: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  organisationGroups?: InputMaybe<Array<Scalars['ID']['input']>>;
  organisationID?: InputMaybe<Scalars['ID']['input']>;
  preamble: Scalars['String']['input'];
  publishedAt?: InputMaybe<Scalars['Time']['input']>;
  readingTime: Scalars['Int']['input'];
  /** Which regions the content piece can be viewed in */
  regionRestrictions?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Tags represents hash tags which will be attached to content for better search and better content delivery */
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
};

export enum EntryLevelValue {
  Advanced = 'ADVANCED',
  Beginner = 'BEGINNER',
  Intermediate = 'INTERMEDIATE'
}

export type Episode = {
  __typename?: 'Episode';
  audio?: Maybe<AudioFile>;
  audioId: Scalars['String']['output'];
  language?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  order: Scalars['Int']['output'];
};

export type EpisodeInput = {
  audio: Scalars['String']['input'];
  language?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  order: Scalars['Int']['input'];
};

export type Event = {
  __typename?: 'Event';
  /** The number of users attending an event */
  attendeeCount: Scalars['Int']['output'];
  /** The attendees of an event */
  attendees: Array<Maybe<User>>;
  /** Categories related to this event */
  categories: Array<Category>;
  /** Comments on content */
  comments: CommentCursorConnection;
  /** If the event is online the conference url should be provided */
  conferenceUrl?: Maybe<Scalars['String']['output']>;
  /** Tells whether content is rated by user or not */
  contentRatingByUser: ContentVote;
  /** Extended information about the event */
  contentSegments: Array<ContentSegment>;
  /** When the event was created */
  createdAt: Scalars['Time']['output'];
  /** When the event was deleted */
  deletedAt?: Maybe<Scalars['Time']['output']>;
  /** The number of downvotes the content piece has received */
  downvoteCount: Scalars['Int']['output'];
  /** What time the event is finished */
  endsAt?: Maybe<Scalars['Time']['output']>;
  /** The levelt of the content being discussed such as beginner, advanced, experts etc */
  entryLevel: EntryLevelValue;
  /** Which type of event this is */
  eventType: EventType;
  /** Experts that are hosting this event */
  experts: Array<Expert>;
  id: Scalars['ID']['output'];
  /** The image that portrais this event */
  image?: Maybe<Image>;
  /**
   * If the event is currently featured
   * @deprecated We don't know why this exists
   */
  isFeatured: Scalars['Boolean']['output'];
  /**
   * If the event is free
   * @deprecated No longer applicable
   */
  isFree: Scalars['Boolean']['output'];
  /** If the event is a online event */
  isOnline: Scalars['Boolean']['output'];
  /** isSensitive represents extra filter on fetching events to make person privacy intact */
  isSensitive: Scalars['Boolean']['output'];
  /** Trails related to this event */
  learningPaths: LearningPathConnection;
  /** Geo location for opening google maps etc */
  location?: Maybe<Location>;
  /** A shorter version of the location that we use to display in the app */
  locationDisplayName?: Maybe<Scalars['String']['output']>;
  /** The max number of attendees an event can have */
  maxAttendees: Scalars['Int']['output'];
  /** Name of the event */
  name: Scalars['String']['output'];
  notificationPreference: NotificationPreferenceState;
  numberOfComments: Scalars['Int']['output'];
  /** Which organisation this event is available for. If no organisation then it's a public event */
  organisation?: Maybe<Organisation>;
  /** Which groups within an organisation this event is available for. */
  organisationGroups: Array<OrganisationGroup>;
  /** Short description of the event */
  preamble: Scalars['String']['output'];
  /** When the event should be published */
  publishedAt?: Maybe<Scalars['Time']['output']>;
  /** If the waitlist is enabled then this is the questions the users need to reply to when signing up */
  questionnaire: Scalars['String']['output'];
  /** Which regions the content piece can be viewed in */
  regionRestrictions: Array<Scalars['String']['output']>;
  /** Retrieve content that is related to this content piece */
  relatedContent: Array<ContentCard>;
  /**
   * The required subscription level to attend this event
   *
   * Our more expensive events such as dinners with experts cost us more money to arrange so we need to restrict
   * this to users that are paying for it.
   * @deprecated No longer relevant
   */
  requiredSubscriptionLevel?: Maybe<SubscriptionLevel>;
  /** URL Friendly slug that can be used as a unique identifier */
  slug: Scalars['String']['output'];
  /** What time the event starts */
  startsAt?: Maybe<Scalars['Time']['output']>;
  /** stream will only be available if eventType is LIVESTREAM */
  stream?: Maybe<Stream>;
  /**
   * Single purchase ticket currency
   * @deprecated We no longer support single ticket purcases in the app
   */
  ticketCurrency: Scalars['String']['output'];
  /**
   * The price of a single ticket purchase
   * @deprecated We no longer support single ticket purcases in the app
   */
  ticketPrice: Scalars['Int']['output'];
  type: ContentType;
  /** When the event was last updated */
  updatedAt: Scalars['Time']['output'];
  /** The number of upvotes the content piece has received */
  upvoteCount: Scalars['Int']['output'];
  /** User content tracking related to the event */
  userContentTracking: UserContentTracking;
  /** Users on the wait list */
  waitList: Array<EventWaitListAttendee>;
  /** If the wait list is enabled */
  waitListEnabled: Scalars['Boolean']['output'];
};


export type EventCommentsArgs = {
  afterCursor?: InputMaybe<Scalars['String']['input']>;
  beforeCursor?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
};


export type EventLearningPathsArgs = {
  filter: LearningPathFilter;
  sorting?: InputMaybe<SortOrdering>;
};


export type EventNotificationPreferenceArgs = {
  type: NotificationType;
};


export type EventRelatedContentArgs = {
  limit: Scalars['Int']['input'];
};


export type EventWaitListArgs = {
  withHidden: Scalars['Boolean']['input'];
};

export type EventConnection = {
  __typename?: 'EventConnection';
  edges: Array<Event>;
  meta: PageInfo;
};

export type EventFilter = {
  /** Filter by specific categories */
  categories?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Use this to filter events that end after the specified time */
  endsAt?: InputMaybe<Scalars['Time']['input']>;
  /** Filter by specific content levels */
  entryLevel?: InputMaybe<Array<EntryLevelValue>>;
  /** Use this to filter between different type of events to show */
  eventType?: InputMaybe<Array<EventType>>;
  /** Filter BY specific experts */
  experts?: InputMaybe<Array<Scalars['String']['input']>>;
  includeDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  /** includeSensitiveContent filter the content basis of sensitivity of content */
  includeSensitiveContent?: InputMaybe<Scalars['Boolean']['input']>;
  /** Pagination limit, defaults to 20 */
  limit?: InputMaybe<Scalars['Int']['input']>;
  /** Filter by the event name */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Pagination offset, defaults to 0 */
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Only show events that are in the future */
  onlyFutureEvents?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by specific organisation groups */
  organisationGroups?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Filter by specific organisations */
  organisationID?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Use this to filter events that start after the specified time */
  startsAt?: InputMaybe<Scalars['Time']['input']>;
  /** Use this to filter events that start between the range of time */
  startsAtRange?: InputMaybe<TimeRangeFilter>;
};

export type EventInput = {
  /** Which categories/topics this event is associated with */
  categories: Array<Scalars['ID']['input']>;
  /** If the event is online the conference url should be provided */
  conferenceUrl?: InputMaybe<Scalars['String']['input']>;
  /** Content segments are just another way of structuring more information about the content */
  contentSegments: Array<ContentSegmentInput>;
  /** What time the event is finished */
  endsAt?: InputMaybe<Scalars['Time']['input']>;
  /** What level of content will be discussed in the event */
  entryLevel: EntryLevelValue;
  /** What kind of event this is */
  eventType: EventType;
  /** Experts that will be hosting the event */
  experts: Array<Scalars['ID']['input']>;
  /** Which image ID to use */
  image: Scalars['ID']['input'];
  /** If the event is a online event */
  isOnline: Scalars['Boolean']['input'];
  /** isSensitive represents extra filter on fetching events to make person privacy intact */
  isSensitive: Scalars['Boolean']['input'];
  /** Geo spatial data for physical events */
  location?: InputMaybe<LocationInput>;
  /** A customed named location name */
  locationDisplayName?: InputMaybe<Scalars['String']['input']>;
  /** The max number of attendees that can join this event */
  maxAttendees: Scalars['Int']['input'];
  /** The name of the event */
  name: Scalars['String']['input'];
  /** Which organistion groups that can see the event */
  organisationGroups?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Which organisation this event is associated with */
  organisationID?: InputMaybe<Scalars['ID']['input']>;
  /** A short description on what the event is about */
  preamble: Scalars['String']['input'];
  /** When the event should be published */
  publishedAt?: InputMaybe<Scalars['Time']['input']>;
  /** If the wait list is enabled ths following question will be asked to the users to reply when signing up to the event */
  questionnaire: Scalars['String']['input'];
  /** Which regions the content piece can be viewed in */
  regionRestrictions?: InputMaybe<Array<Scalars['String']['input']>>;
  /** What time the event starts */
  startsAt?: InputMaybe<Scalars['Time']['input']>;
  /** Tags represents hash tags which will be attached to content for better search and better content delivery */
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  /** If the wait list should be enabled, if it is then when users sign up they get put on a wait list */
  waitListEnabled: Scalars['Boolean']['input'];
};

export enum EventType {
  AskMeAnything = 'ASK_ME_ANYTHING',
  Conference = 'CONFERENCE',
  Livestream = 'LIVESTREAM',
  MeetInPerson = 'MEET_IN_PERSON',
  SmallGroupSession = 'SMALL_GROUP_SESSION',
  VirtualEvent = 'VIRTUAL_EVENT',
  Webinar = 'WEBINAR'
}

export type EventWaitListAttendee = {
  __typename?: 'EventWaitListAttendee';
  createdAt: Scalars['Time']['output'];
  event: Event;
  hiddenAt?: Maybe<Scalars['Time']['output']>;
  id: Scalars['ID']['output'];
  isAttending: Scalars['Boolean']['output'];
  questionnaireResponse: Scalars['String']['output'];
  updatedAt: Scalars['Time']['output'];
  user: User;
};

export type Expert = {
  __typename?: 'Expert';
  /** Experts biography */
  biography: Scalars['String']['output'];
  /** A list of categories in which the expert is deemed an expert */
  categories: Array<Category>;
  /** The name of the company that the expert worked for */
  company?: Maybe<Scalars['String']['output']>;
  /** Retrieve content related in which the expert has been part of the creation */
  content: ContentConnection;
  /** Count of content expert has created */
  contentCreatedCount: Scalars['Int']['output'];
  /** When the expert was created */
  createdAt: Scalars['Time']['output'];
  /** If the expert is live this is the live stream ID */
  currentLiveStreamId?: Maybe<Scalars['ID']['output']>;
  /** The email of the expert */
  email: Scalars['String']['output'];
  /** Their first name */
  firstName: Scalars['String']['output'];
  /** Identifier of the expert */
  id: Scalars['ID']['output'];
  /** Profile/Avatar picture */
  image?: Maybe<Image>;
  /** If the current authenticated user is following this expert */
  isAuthenticatedUserFollowing: Scalars['Boolean']['output'];
  /** If an expert is a mentor */
  isMentor: Scalars['Boolean']['output'];
  /** Their last name */
  lastName: Scalars['String']['output'];
  /** If the mentor is available for mentoring this contains some brief information to their capabilities */
  mentorAvailableText?: Maybe<Scalars['String']['output']>;
  /** How much the mentor would charge for a session */
  mentorPriceText?: Maybe<Scalars['String']['output']>;
  /** An organisation which the expert is associated to */
  organisation?: Maybe<Organisation>;
  /** Which organisation group the expert is associated */
  organisationGroups: Array<OrganisationGroup>;
  /** Deprecated */
  priority: Scalars['Int']['output'];
  /** Which regions the expert should be available in */
  regionRestrictions?: Maybe<Array<Scalars['String']['output']>>;
  /** URL Friendly slug that can be used as a unique identifier */
  slug: Scalars['String']['output'];
  /** The title of the expert */
  title: Scalars['String']['output'];
  /** When the expert was updated */
  updatedAt: Scalars['Time']['output'];
  /** Which user is associated to the expert, can only be access by the user it's self or an admin */
  user?: Maybe<User>;
  /** The userID associated to the expert thats publicly available */
  userId?: Maybe<Scalars['ID']['output']>;
};


export type ExpertContentArgs = {
  filter: ContentCardsFilter;
  sorting: ContentCardsSorting;
};

export type ExpertCollection = {
  __typename?: 'ExpertCollection';
  edges: Array<Expert>;
  meta: PageInfo;
};

export type ExpertFilter = {
  /** Filter by categories associated to the experts */
  categories?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Search for experts by email */
  email?: InputMaybe<Scalars['String']['input']>;
  /** Only retrieve the experts that the authenticted user performing this request follows */
  followedByAuthenticatedUser?: InputMaybe<Scalars['Boolean']['input']>;
  /** Ensures that the experts have the permission to livestream */
  isAbleToLivestream?: InputMaybe<Scalars['Boolean']['input']>;
  /** That the expert profile has been associted to a user account */
  isAssociatedToUser?: InputMaybe<Scalars['Boolean']['input']>;
  /** Only return experts that offer mentorship session */
  isMentor?: InputMaybe<Scalars['Boolean']['input']>;
  /** Job title */
  jobTitle?: InputMaybe<Scalars['String']['input']>;
  /** Filter by life goals associated the categories */
  lifeGoals?: InputMaybe<Array<Scalars['String']['input']>>;
  /** The number of experts to return */
  limit?: InputMaybe<Scalars['Int']['input']>;
  /** Search for experts by name */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Offset of the results return */
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Experts that belong to a specific organisaiton group */
  organisationGroups?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Experts that belong to any of the organisations */
  organisationID?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type ExpertInput = {
  /** Biography */
  biography: Scalars['String']['input'];
  /** Array of category ids */
  categories: Array<Scalars['ID']['input']>;
  /** The company the expert works at */
  company?: InputMaybe<Scalars['String']['input']>;
  /** The experts email address */
  email: Scalars['String']['input'];
  /** First name */
  firstName: Scalars['String']['input'];
  /** Image ID */
  image: Scalars['ID']['input'];
  /** If the expert is a mentor */
  isMentor: Scalars['Boolean']['input'];
  /** Last name */
  lastName: Scalars['String']['input'];
  /** Where the mentor is available to mentor */
  mentorAvailableText?: InputMaybe<Scalars['String']['input']>;
  /** What price to show for mentorship */
  mentorPriceText?: InputMaybe<Scalars['String']['input']>;
  organisationGroups?: InputMaybe<Array<Scalars['ID']['input']>>;
  organisationID?: InputMaybe<Scalars['ID']['input']>;
  priority: Scalars['Int']['input'];
  /** Which regions the expert should be available in */
  regionRestrictions?: InputMaybe<Array<Scalars['String']['input']>>;
  /** The experts title */
  title: Scalars['String']['input'];
};

export type FeaturedContent = {
  __typename?: 'FeaturedContent';
  content?: Maybe<ContentCard>;
  createdAt: Scalars['Time']['output'];
  header: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  image?: Maybe<Image>;
  /** @deprecated No longer applicable */
  isFree: Scalars['Boolean']['output'];
  linkToURL: Scalars['String']['output'];
  organisation?: Maybe<Organisation>;
  organisationGroups: Array<OrganisationGroup>;
  paragraph: Scalars['String']['output'];
  promotedFrom: Scalars['String']['output'];
  promotedUntil: Scalars['String']['output'];
  screen: Scalars['String']['output'];
  screenParams: Scalars['Map']['output'];
  updatedAt: Scalars['Time']['output'];
};

export type FeaturedContentConnection = {
  __typename?: 'FeaturedContentConnection';
  edges: Array<FeaturedContent>;
  meta: PageInfo;
};

export type FeaturedContentFilter = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  onlyVisible?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FeaturedContentInput = {
  contentId?: InputMaybe<Scalars['String']['input']>;
  contentType?: InputMaybe<ContentType>;
  header?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['ID']['input']>;
  linkToURL?: InputMaybe<Scalars['String']['input']>;
  organisationGroups?: InputMaybe<Array<Scalars['ID']['input']>>;
  organisationId?: InputMaybe<Scalars['ID']['input']>;
  paragraph?: InputMaybe<Scalars['String']['input']>;
  promotedFrom: Scalars['Time']['input'];
  promotedUntil: Scalars['Time']['input'];
  screen?: InputMaybe<Scalars['String']['input']>;
  screenParams?: InputMaybe<Scalars['Map']['input']>;
};

export type FeedActivity = {
  __typename?: 'FeedActivity';
  /** The author is the first person that performed the activity */
  author: User;
  /** Comments on content */
  comments: CommentCursorConnection;
  /** A union of all the different content types that should match to the activity feed */
  content: FeedActivityContent;
  /** Other users that have performed the same action but after the initial "author" */
  contributors: Array<User>;
  /** When the activity was created */
  createdAt: Scalars['Time']['output'];
  id: Scalars['ID']['output'];
  /** If the currently authenticated user has liked the activity */
  likedByUser: Scalars['Boolean']['output'];
  /** @deprecated we dont allow commenting on content_activity anymore */
  numberOfComments: Scalars['Int']['output'];
  /** @deprecated we dont allow likes on content_activity anymore */
  numberOfLikes: Scalars['Int']['output'];
  /** What kind of activity was performed */
  type: FeedActivityType;
  /** When the activity was last updated */
  updatedAt: Scalars['Time']['output'];
};


export type FeedActivityCommentsArgs = {
  afterCursor?: InputMaybe<Scalars['String']['input']>;
  beforeCursor?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
};

export type FeedActivityContent = Comment | Ebook | Event | Expert | LearningPath | Podcast | Stream | User;

export enum FeedActivityType {
  Comment = 'COMMENT',
  FinishedContent = 'FINISHED_CONTENT',
  FollowUser = 'FOLLOW_USER',
  NewelyPublishContent = 'NEWELY_PUBLISH_CONTENT',
  RatedContent = 'RATED_CONTENT',
  ReplyOnComment = 'REPLY_ON_COMMENT',
  ReportedContent = 'REPORTED_CONTENT'
}

export type FeedConnection = {
  __typename?: 'FeedConnection';
  edges: Array<FeedEdge>;
  meta: CursorInfo;
};

export type FeedContent = {
  createdAt: Scalars['Time']['output'];
  id: Scalars['ID']['output'];
  user: User;
};

export type FeedContentConnection = {
  __typename?: 'FeedContentConnection';
  edges: Array<FeedContentEdge>;
  meta: CursorInfo;
};

export type FeedContentEdge = {
  __typename?: 'FeedContentEdge';
  cursor: Scalars['String']['output'];
  feed: FeedContent;
};

export enum FeedContentType {
  ContentActivity = 'CONTENT_ACTIVITY',
  Post = 'POST',
  PostActivity = 'POST_ACTIVITY'
}

export type FeedEdge = {
  __typename?: 'FeedEdge';
  cursor: Scalars['String']['output'];
  feed: FeedActivity;
};

export type FeedFilter = {
  /** Retrieve actiites that happened after this timestamp */
  afterCursor?: InputMaybe<Scalars['String']['input']>;
  /** Retrieve activities that happened before this timestamp */
  beforeCursor?: InputMaybe<Scalars['String']['input']>;
  /** The number of items to return */
  limit: Scalars['Int']['input'];
  /** Only return specific types of activity feed */
  types: Array<FeedActivityType>;
};

export type FeedPostAttachments = {
  __typename?: 'FeedPostAttachments';
  attachmentType: Scalars['String']['output'];
  content?: Maybe<FeedActivityContent>;
  description?: Maybe<Scalars['String']['output']>;
  imageUrl?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  uri?: Maybe<Scalars['String']['output']>;
};

export type FieldError = {
  __typename?: 'FieldError';
  message: Scalars['String']['output'];
  path: Scalars['String']['output'];
};

export type FollowUserSuggestions = {
  __typename?: 'FollowUserSuggestions';
  edges: Array<User>;
  meta: PageInfo;
};

export type FollowersFollowingFilter = {
  isAMemberOfSameOrganisation?: InputMaybe<Scalars['Boolean']['input']>;
  isExpert?: InputMaybe<Scalars['Boolean']['input']>;
  limit: Scalars['Int']['input'];
  offset: Scalars['Int']['input'];
  query?: InputMaybe<Scalars['String']['input']>;
};

export type GraphDataPoint = {
  __typename?: 'GraphDataPoint';
  label: Scalars['String']['output'];
  value: Scalars['Int']['output'];
};

export type IamRole = {
  __typename?: 'IAMRole';
  canEdit?: Maybe<Scalars['Boolean']['output']>;
  createdAt: Scalars['Time']['output'];
  deletedAt?: Maybe<Scalars['Time']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  organisationId?: Maybe<Scalars['ID']['output']>;
  permissions: Array<PermissionStatus>;
  roleType: Scalars['String']['output'];
  updatedAt: Scalars['Time']['output'];
  users?: Maybe<UserCollection>;
};


export type IamRoleUsersArgs = {
  pagination?: InputMaybe<OffsetPagination>;
};

export type IamRoleConnection = {
  __typename?: 'IAMRoleConnection';
  edges: Array<IamRole>;
  meta: PageInfo;
};

export type IamRoleInput = {
  name: Scalars['String']['input'];
  orgId?: InputMaybe<Scalars['ID']['input']>;
  permissions: Array<PermissionInput>;
  roleType: IamRoleType;
};

export enum IamRoleType {
  Org = 'ORG',
  System = 'SYSTEM'
}

export type IamRoleUsersResult = IamRole | NotFoundError | ValidationError;

export enum IdentityType {
  LoginGoogle = 'LOGIN_GOOGLE',
  LoginMicrosoft = 'LOGIN_MICROSOFT'
}

export type Image = {
  __typename?: 'Image';
  alt: Scalars['String']['output'];
  blurHash: Scalars['String']['output'];
  contentType: Scalars['String']['output'];
  createdAt: Scalars['Time']['output'];
  filename: Scalars['String']['output'];
  height: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  organisationID?: Maybe<Scalars['ID']['output']>;
  originalName: Scalars['String']['output'];
  sizeInBytes: Scalars['Int']['output'];
  uri: Scalars['String']['output'];
  width: Scalars['Int']['output'];
};

export type ImageConnection = {
  __typename?: 'ImageConnection';
  edges: Array<Image>;
  meta: PageInfo;
};

export type ImageFilter = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  organisationID?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type IntRangeFilter = {
  from?: InputMaybe<Scalars['Int']['input']>;
  until?: InputMaybe<Scalars['Int']['input']>;
};

export type Invitation = {
  __typename?: 'Invitation';
  acceptedAt?: Maybe<Scalars['Time']['output']>;
  createdAt: Scalars['Time']['output'];
  createdBy: User;
  /**
   * Shows if the invitation is expired due to canceled by admin.
   * Only shown if invitation already passed the expiresAt.
   */
  expiredByAdmin?: Maybe<Scalars['Boolean']['output']>;
  expiresAt: Scalars['Time']['output'];
  id: Scalars['ID']['output'];
  organisation: Organisation;
  user: User;
};

export type InvitationConnection = {
  __typename?: 'InvitationConnection';
  edges: Array<Invitation>;
  meta: PageInfo;
};

export type InvitationFilter = {
  accepted?: InputMaybe<Scalars['Boolean']['input']>;
  acceptedAtRange?: InputMaybe<TimeRangeFilter>;
  createdAtRange?: InputMaybe<TimeRangeFilter>;
  createdByIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  expiredByAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  expiresAtRange?: InputMaybe<TimeRangeFilter>;
  limit: Scalars['Int']['input'];
  offset: Scalars['Int']['input'];
  organisationIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  userIds?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type IsCouponValid = {
  __typename?: 'IsCouponValid';
  message?: Maybe<Scalars['String']['output']>;
  valid: Scalars['Boolean']['output'];
};

export type Language = {
  __typename?: 'Language';
  code: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type LearningPath = {
  __typename?: 'LearningPath';
  categories: Array<Category>;
  /** Retrieve the associated cohorts that are part of this learning path */
  cohorts?: Maybe<CohortConnection>;
  /**
   * Percentage progress of the trail (Average out of all contents)
   * Note: This field can only be resolve if called from user obj as parent.
   */
  completionRate: Scalars['Int']['output'];
  /** All the content cards associated to the learning path exposed under a single field and correctly sorted */
  contentCards: Array<ContentCard>;
  contentSegments: Array<ContentSegment>;
  createdAt: Scalars['Time']['output'];
  deletedAt?: Maybe<Scalars['Time']['output']>;
  /** @deprecated Use the `contentCards` field instead */
  ebooks: Array<Ebook>;
  /** @deprecated Use the `contentCards` field instead */
  events: Array<Event>;
  featuredCategory?: Maybe<Category>;
  featuredLifegoal?: Maybe<Lifegoal>;
  id: Scalars['ID']['output'];
  image?: Maybe<Image>;
  /** @deprecated No longer applicable */
  isFree?: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
  numberOfComments: Scalars['Int']['output'];
  organisation?: Maybe<Organisation>;
  organisationGroups: Array<OrganisationGroup>;
  /** Pending cohort invites for user to accept/reject on the given learning path */
  pendingCohortInvites: Scalars['Int']['output'];
  /** @deprecated Use the `contentCards` field instead */
  podcasts: Array<Podcast>;
  preamble: Scalars['String']['output'];
  /** Which regions the content piece can be viewed in */
  regionRestrictions: Array<Scalars['String']['output']>;
  /** URL Friendly slug that can be used as a unique identifier */
  slug: Scalars['String']['output'];
  /** @deprecated The content returned from `contentCards` should already be correctly sorted */
  sortOrder: Array<Scalars['ID']['output']>;
  /** @deprecated Use the `contentCards` field instead */
  streams: Array<Stream>;
  /**
   * If strict content progression is "true" then the content must be consumed in a serial fashion starting with the first
   * and ending with the last content piece
   */
  strictContentProgression: Scalars['Boolean']['output'];
  type: ContentType;
  updatedAt: Scalars['Time']['output'];
  userCollectionTracking?: Maybe<UserCollectionTracking>;
};


export type LearningPathCohortsArgs = {
  filter?: InputMaybe<LearningPathCohortFilter>;
  pagination?: InputMaybe<CursorPaginationInput>;
};

export type LearningPathCohortFilter = {
  inviteStatus?: InputMaybe<CohortInviteStatus>;
  limit?: InputMaybe<Scalars['Int']['input']>;
};

export type LearningPathConnection = {
  __typename?: 'LearningPathConnection';
  edges: Array<LearningPath>;
  meta: PageInfo;
};

export type LearningPathFilter = {
  categories?: InputMaybe<Array<Scalars['ID']['input']>>;
  includeDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  keywords?: InputMaybe<Scalars['String']['input']>;
  lifegoal?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  organisationGroups?: InputMaybe<Array<Scalars['ID']['input']>>;
  organisationID?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type LearningPathInput = {
  categories: Array<Scalars['ID']['input']>;
  contentSegments?: InputMaybe<Array<ContentSegmentInput>>;
  ebooks: Array<Scalars['ID']['input']>;
  events: Array<Scalars['ID']['input']>;
  featuredCategory?: InputMaybe<Scalars['String']['input']>;
  featuredLifegoal?: InputMaybe<Scalars['String']['input']>;
  image: Scalars['ID']['input'];
  name: Scalars['String']['input'];
  organisationGroups?: InputMaybe<Array<Scalars['ID']['input']>>;
  organisationID?: InputMaybe<Scalars['ID']['input']>;
  podcasts: Array<Scalars['ID']['input']>;
  preamble: Scalars['String']['input'];
  /** Which regions the content piece can be viewed in */
  regionRestrictions?: InputMaybe<Array<Scalars['String']['input']>>;
  sortOrder: Array<Scalars['ID']['input']>;
  streams: Array<Scalars['ID']['input']>;
  /**
   * If not provided the existing value will be retained, else it controls if the content must be controlled in a serial
   * fashion or can be completed in any order
   */
  strictContentProgression?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Lifegoal = {
  __typename?: 'Lifegoal';
  /** Associated categories */
  categories: Array<Category>;
  /** The number of content pieces */
  contentCount?: Maybe<Scalars['Int']['output']>;
  /** When it was created */
  createdAt: Scalars['Time']['output'];
  /** An emoji representation of the life goal */
  emoji?: Maybe<Scalars['String']['output']>;
  /** Experts that have content published content within this life goal or categories */
  experts: ExpertCollection;
  /**
   * Small icon used in the old explore page
   * @deprecated No longer used after the 1.13.9 release
   */
  icon?: Maybe<Image>;
  id: Scalars['ID']['output'];
  /**
   * Image of the life goal, currently only used in the trail listing page
   * @deprecated No longer used after the 1.13.9 release
   */
  image?: Maybe<Image>;
  /** isFollowing attribute verify life goal is followed by user or not */
  isFollowing: Scalars['Boolean']['output'];
  /** Retrieve the learning paths associated with this life goal */
  learningPaths: LearningPathConnection;
  /** Name of the life goal */
  name: Scalars['String']['output'];
  /** If the life goal belongs to a specific organisation */
  organisation?: Maybe<Organisation>;
  /** URL Friendly slug that can be used as a unique identifier */
  slug: Scalars['String']['output'];
  /** When it was last updated */
  updatedAt: Scalars['Time']['output'];
};


export type LifegoalLearningPathsArgs = {
  filter: LearningPathFilter;
  sorting: SortOrdering;
};

export type LifegoalCollection = {
  __typename?: 'LifegoalCollection';
  edges: Array<Lifegoal>;
  meta: PageInfo;
};

export type LifegoalFilter = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  organisationID?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type LifegoalInput = {
  /** Categories associated to the life goal */
  categories?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Emoji representation of the life goal */
  emoji: Scalars['String']['input'];
  /** Image ID to use for the icon */
  icon?: InputMaybe<Scalars['ID']['input']>;
  /** Image ID */
  image: Scalars['ID']['input'];
  /** Name of the life goal */
  name: Scalars['String']['input'];
  /** If the life goal belongs to a specific organisation */
  organisationID?: InputMaybe<Scalars['ID']['input']>;
};

export enum LikeType {
  Comment = 'COMMENT',
  Feed = 'FEED'
}

/**
 * LikeableContent represents activities which can be liked by like mutation.
 * Note: this is deprecated, use ToggleReact
 */
export type LikeableContent = Comment | FeedActivity;

export type LinkPreview = {
  __typename?: 'LinkPreview';
  description?: Maybe<Scalars['String']['output']>;
  imageUrl?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  uri?: Maybe<Scalars['String']['output']>;
};

/**
 * If you filter by codes, coupons, userIds and orgIds it will be retrieve with `OR` logic
 * and get all of those you input from stripe if they exist.
 */
export type ListStripePromotionCodeInput = {
  /**
   * Note: if you want to search by list of codes or list of coupons, ensure that you pass the full (case sensitive)
   * codes or coupons
   */
  codes?: InputMaybe<Array<Scalars['String']['input']>>;
  coupons?: InputMaybe<Array<Scalars['String']['input']>>;
  createdAfter?: InputMaybe<Scalars['Time']['input']>;
  createdBefore?: InputMaybe<Scalars['Time']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  organisationIds?: InputMaybe<Array<Scalars['String']['input']>>;
  userIds?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type LiveStreamInput = {
  /** Name of the livestream */
  name: Scalars['String']['input'];
  /** If only specific groups within the organisation should see the video */
  organisationGroups?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** If the stream should only be visible by a single organisation */
  organisationID?: InputMaybe<Scalars['ID']['input']>;
};

export type Location = {
  __typename?: 'Location';
  city: Scalars['String']['output'];
  coordinates: Coordinates;
  name: Scalars['String']['output'];
};

export type LocationInput = {
  city: Scalars['String']['input'];
  coordinates: CoordinatesInput;
  name: Scalars['String']['input'];
};

export type LoginEmailResult = AuthenticationError | AuthenticationResponse | ValidationError;

export type MSteamsChannelTabFollowTopic = {
  __typename?: 'MSteamsChannelTabFollowTopic';
  channelID: Scalars['String']['output'];
  createdAt: Scalars['Time']['output'];
  id: Scalars['ID']['output'];
  teamID: Scalars['String']['output'];
  tenantID: Scalars['ID']['output'];
  topics: Array<Lifegoal>;
  updatedAt: Scalars['Time']['output'];
};

export type Mention = {
  __typename?: 'Mention';
  id: Scalars['ID']['output'];
  /** Holds the placement of the mention in the comment */
  index: Scalars['Int']['output'];
  mentionType: MentionType;
  target: Mentioned;
  /**
   * ID of the target. Can be user or an Organisation
   * TargetId should ideally resolve from mentions service. Since apollos'service
   * federated graph does not support subscriptions, need to resolve all the fields
   * requested by subscription mutations from core until we have a better solution
   * in place.
   */
  targetId: Scalars['ID']['output'];
  targetType: TargetType;
};

export type MentionInput = {
  index: Scalars['Int']['input'];
  targetId: Scalars['ID']['input'];
  targetType: TargetType;
};

export enum MentionType {
  Comment = 'COMMENT',
  Feed = 'FEED',
  Post = 'POST'
}

export type Mentioned = User;

export type MonthlyPromotedLearningPath = {
  __typename?: 'MonthlyPromotedLearningPath';
  description: Scalars['String']['output'];
  learninPath?: Maybe<LearningPath>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /**
   * This mutation to add answer to question
   * @deprecated Use addAnswerToPollQuestionV2 instead it will return answer opiton object in return
   */
  addAnswerToPollQuestion: Scalars['Boolean']['output'];
  /** This mutation to add answer to question v2 which return answer options object */
  addAnswerToPollQuestionV2: PollQuestionResponse;
  /** add new users to the cohort */
  addCohortMembers: Cohort;
  /**
   * When a user joins a stream and they are invited to join as a host then this is the API call tha makes them visible
   *
   * todo: rename this method to better match what it does
   */
  addHost: Stream;
  /** add users to IAM role either via csv or by selecting users from dropdown */
  addIAMRoleUsers?: Maybe<IamRoleUsersResult>;
  applyToEventWaitList: EventWaitListAttendee;
  /** cancelOrganisationSubscription will cancel the subscription for the provided organisation immediately */
  cancelOrganisationSubscription: NoContent;
  cancelWaitlistApplication?: Maybe<Event>;
  consumeCoupon?: Maybe<SubscriptionModel>;
  /** convertEbookTextToAudio converts ebooks chapters text to audio in provided voice type */
  convertEbookTextToAudio: Scalars['Boolean']['output'];
  /**
   * convertPodcastSummaryToAudio converts podcast transcript summary to audio in provided voice type
   * This doesn't generate for English language as that needs to be original podcast audio
   */
  convertPodcastSummaryToAudio: Scalars['Boolean']['output'];
  createAssignment: Assignment;
  createCategory?: Maybe<Category>;
  /** createChatMessage id represent target content id for which people are talking about */
  createChatMessage: ChatMessage;
  /** creates a new trail cohort */
  createCohort: Cohort;
  /** Add a comment */
  createComment: Comment;
  /** Create content user note */
  createContentUserNote: ContentUserNote;
  createCoupon?: Maybe<Coupon>;
  createEbook?: Maybe<CreateEbookResult>;
  createEvent?: Maybe<Event>;
  createFeaturedContent?: Maybe<FeaturedContent>;
  /** Take a pre-signed URL and create an image from it. */
  createGalleryImageFromPreSignedUrl: Image;
  /** creates new iam role */
  createIAMRole?: Maybe<CreateIamRoleResult>;
  createInstantRepost: Post;
  createLearningPath?: Maybe<LearningPath>;
  createLifegoal?: Maybe<Lifegoal>;
  /** Create a live stream and if an organisation is specified then it's restricted to that organisation */
  createLiveStream: Stream;
  /**
   * Create a live stream based on existing event. If the event is for a specific org, it must match the passed organisationID.
   * Note: organisation and organisationGroups info will be inherited as declared in the event.
   */
  createLiveStreamFromEvent: Stream;
  createOrganisation?: Maybe<Organisation>;
  createOrganisationGroup?: Maybe<OrganisationGroup>;
  createPodcast?: Maybe<CreatePodcastResult>;
  /** This mutation is used to add poll questions */
  createPollQuestion: PollQuestionResponse;
  /**
   * createPost is used to create post or repost with thoughts.
   * Note: cannot create instant repost from this mutation.
   */
  createPost: Scalars['Boolean']['output'];
  /** Create a stream with a basic info */
  createStream?: Maybe<CreateStreamResult>;
  /**
   * Create a stream with an upload works in the same as as he regular create stream but uses the uploaded file
   * @deprecated we use upsertStreamMedia to create / update stream media with it's respective language
   */
  createStreamWithUpload?: Maybe<Stream>;
  createStripePromoCode?: Maybe<Array<StripePromotionCode>>;
  createSubscriptionPlan?: Maybe<SubscriptionPlan>;
  /** Create tigerhall teams user account and organisation */
  createTeamsAccount?: Maybe<CreateTeamsResult>;
  /** @deprecated use createUserV2 mutation instead */
  createUser?: Maybe<User>;
  /**
   * createUserV2 creates a user
   * it returns union of User and ValidationErrors, if any of the input(s) are invalid it returns all the validation errors combined else return created user
   */
  createUserV2: CreateUserResult;
  deactivateStripePromoCode: Scalars['Boolean']['output'];
  deleteAssignment: Scalars['Boolean']['output'];
  deleteCategory: Scalars['String']['output'];
  /** delete a comment */
  deleteComment: Scalars['Boolean']['output'];
  /** Delete an existing content user note */
  deleteContentUserNote: Scalars['Boolean']['output'];
  deleteCoupon?: Maybe<NoContent>;
  deleteEbook: Scalars['String']['output'];
  deleteEvent: Scalars['String']['output'];
  deleteFeaturedContent: NoContent;
  /** delete an iam role */
  deleteIAMRole: Scalars['Boolean']['output'];
  /** Delete an image */
  deleteImage: NoContent;
  deleteLearningPath: NoContent;
  deleteLifegoal: NoContent;
  /** deleteNotification deletes the notification */
  deleteNotification: NoContent;
  deleteOrganisation: NoContent;
  deleteOrganisationGroup?: Maybe<DeleteOrganisationGroupResult>;
  deletePodcast: Scalars['String']['output'];
  /** This mutation is used to delete poll question */
  deletePollQuestion: Scalars['Boolean']['output'];
  deletePost: Scalars['Boolean']['output'];
  /** Delete a stream, remove a stream from the system */
  deleteStream: Scalars['String']['output'];
  deleteSubscriptionPlan: NoContent;
  /** Delete a user from the platform */
  deleteUser: NoContent;
  disbandCohort: Scalars['Boolean']['output'];
  /** Check if the email the user is trying to sign up with already exists */
  emailExists: Scalars['Boolean']['output'];
  /**
   * Export user statistics
   *
   * This will trigger a background process that will send a link to the user that initiated the export"
   */
  exportAssignmentStatistics: Scalars['Boolean']['output'];
  followAllUsersInOrg: Scalars['Boolean']['output'];
  /**
   * generatePodcastTranscript generates the English transcript for a podcast
   * if translateTranscripts is true, then translates them to all the languages
   */
  generatePodcastTranscript: Scalars['Boolean']['output'];
  /**
   * generateStreamSubtitles generates the English subtitles for a stream
   * if translateSubtitles is true, then translates them to all the languages
   */
  generateStreamSubtitles: Scalars['Boolean']['output'];
  getLinkPreview: LinkPreview;
  /** Create a pre signed URL for the user to upload an object to s3 */
  getPreSignedUploadUrl: PreSignedUploadUrl;
  /** To send the invitation reminder to host for joining the livestream */
  inviteHost: Scalars['Boolean']['output'];
  /** To add new hosts to the livestream and send them notification to join it. */
  invitesAddHosts: Scalars['Boolean']['output'];
  invitesReject: Scalars['Boolean']['output'];
  /** @deprecated Use removeHost mutation */
  invitesRemoveHost: Scalars['Boolean']['output'];
  /** This will return if the provided version of the mobile app (WITHOUT CodePUSH) is up to date */
  isAppUp2Date: Scalars['Boolean']['output'];
  isCouponValid: IsCouponValid;
  /** Check if the email, well actually if the domain is sso enabled */
  isSSOEnabled: Scalars['Boolean']['output'];
  leaveCohort: Scalars['Boolean']['output'];
  /**
   * Login with apple will verify the authentication nonce and either create an account or login based on an existing account
   *
   * Note: Apple will only return the first & last name on the first authentication in the mobile app
   * so on the following request we can simple call this method with an empty string, calling it with null will break it.
   *
   * CustomBundleId changes which clientId we should use to generate and validate the authorizationCode against apple
   */
  loginApple?: Maybe<AuthenticationResponse>;
  /**
   * Login with email with authenticate the request against an existing account
   *
   * If backoffice is provided and the user has the correct permissions the JWT will be generated with a nil organisation
   */
  loginEmail?: Maybe<AuthenticationResponse>;
  /**
   * loginEmailV2 with authenticate the request against an existing account
   * If backoffice is provided and the user has the correct permissions the JWT will be generated with a nil organisation
   * It returns union of AuthenticationResponse, ValidationErrors and AuthenticationError
   * if user credentials are wrong it returns the validation errors, if there is issue with user such as blocked, deleted it returns AuthenticationError else on success AuthenticationResponse
   */
  loginEmailV2: LoginEmailResult;
  /** Login with facebook will create a new account if no user with the provided facebook id exists */
  loginFB?: Maybe<AuthenticationResponse>;
  /**
   * Login with linkedin will verify the authorization code (NOT Access token) against the linkedin API.
   *
   * For linkedin to provide the authorization code the redirect_uri must be set to the same value as the one provided in
   * the request initiated on the client side.
   */
  loginLinkedIn?: Maybe<AuthenticationResponse>;
  /**
   * Login a user using microsoft teams access token
   *
   * Note: This will only work if the user already exists, we cannot provision new users using this method
   */
  loginMSTeams?: Maybe<AuthenticationResponse>;
  /** loginWorkOS handles authentication for both Google and Microsoft identity providers. */
  loginWorkOS?: Maybe<AuthenticationResponse>;
  /** Manage the service associated to a user for push notifications */
  manageUserDevices: NoContent;
  /** markAllNotificationRead will mark all the user notifications as read */
  markAllNotificationRead: NotificationConnection;
  markAssignmentsAsViewed: NoContent;
  /** markNotificationRead will mark that notification as read */
  markNotificationRead: Notification;
  /** markNotificationsOld is for when user opens the notification center to mark all the new notifications as unread */
  markNotificationsOld: User;
  /** nudgeCohortUser send notification to user to accept or reject cohort invitation */
  nudgeCohortUser: Cohort;
  organisationAddUser?: Maybe<NoContent>;
  organisationAdminNudgeAllUsers?: Maybe<NoContent>;
  organisationAdminNudgeUser?: Maybe<NoContent>;
  organisationExportAssignmentStatisticsByAssignment: NoContent;
  organisationExportAssignmentStatisticsByGroup: NoContent;
  organisationExportAssignmentStatisticsByUser: NoContent;
  organisationExportMainStatistics: NoContent;
  organisationExportUserAssignmentStatistics: NoContent;
  organisationGroupAddMultiUser?: Maybe<Array<AddUserResponse>>;
  organisationGroupAddMultipleUser?: Maybe<NoContent>;
  organisationGroupAddUser?: Maybe<NoContent>;
  organisationGroupRemoveMultiUser?: Maybe<Array<AddUserResponse>>;
  organisationGroupRemoveUser?: Maybe<NoContent>;
  /**
   * Import users in a batch
   *
   * If the users are not added to the organisation using the batch import it is because they
   * most likely already exist in the system. And for security purposes they cannot be added to the organisation
   * by a mear user.
   */
  organisationImportUsers?: Maybe<Array<OrganisationUserImportResponse>>;
  /** Join an organisation by using an invite link with a token */
  organisationJoinViaInviteLink: Scalars['Boolean']['output'];
  organisationRemoveMultiUser?: Maybe<Array<AddUserResponse>>;
  /**
   * Accepts either userId or email of the user to be removed.
   * If both are present, the userId will be used as default.
   */
  organisationRemoveUser?: Maybe<NoContent>;
  /** organisationSubscription will create the subscription for the provided organisation */
  organisationSubscription: NoContent;
  /** Rate a content piece, can either be UPVOTE, DOWNVOTE, UNDETERMINED */
  rateContent: ContentRating;
  /**
   * Reauthorize with organisation will create a new JWT associated to the provided organisation ID if the user has
   * the permissioned to do so
   */
  reauthorizeWithOrg: AuthenticationResponse;
  /** refreshToken will create a new JWT and attach updated user value to jwt token */
  refreshToken: AuthenticationResponse;
  /** Register a new follow topic channel tab */
  registerFollowTopicTab: MSteamsChannelTabFollowTopic;
  removeAttendee?: Maybe<Event>;
  /** removes a user from the cohort, can be removed by creator or admins */
  removeCohortUser: Cohort;
  /** Remove a host from the live stream */
  removeHost: Stream;
  /** remove users from IAM role */
  removeIAMRoleUsers?: Maybe<IamRoleUsersResult>;
  /** Revoke the invitation for a user to join an organisation */
  removeUserOrgInvitation: NoContent;
  /** Report the content on the platform for a moderator to review */
  reportContent: Scalars['Boolean']['output'];
  /** Connect a user with a mentor */
  requestMentorship: NoContent;
  resetPasswordFinalize: NoContent;
  resetPasswordInitiate: NoContent;
  /** This mutation to reset given poll question answer so that user can change it's answer later */
  resetPollQuestionAnswer: Scalars['Boolean']['output'];
  /** This mutation is used to track clicks on content based on the recommendation id  and query string from a search result when using contentCards */
  searchResultClicked: Scalars['Boolean']['output'];
  /** updates the featured host */
  setFeaturedHost: Stream;
  skipSubscriptionTrial?: Maybe<User>;
  /** Start stream, This should be called after creating a live stream once we have figured out the Agora UID */
  startStream: Stream;
  /** Stop stream, This should be called to stop a live stream */
  stopStream: Scalars['Boolean']['output'];
  /**
   * streamGoLive, This should be called after starting live stream and when hosts are in holding area
   * and ready to go live
   */
  streamGoLive: Stream;
  /** Send a chat message to a live stream */
  streamPostMessage: Scalars['Boolean']['output'];
  /** Allow submitting suggestions to the content / marketing team */
  suggestNewPoll: Scalars['Boolean']['output'];
  /** Swap the order of two hosts in a stream */
  swapHost: Stream;
  /** Create teams organisation with the existing user as org admin, if no individual active subscription exists for the user */
  switchUserToTeams?: Maybe<CreateTeamsResult>;
  toggleContentAsArchived: NoContent;
  /** @deprecated we no longer support free content */
  toggleContentAsFree: NoContent;
  /** @deprecated we no longer support free content */
  toggleLearningPathAsFree: NoContent;
  /**
   * toggleLike like a activity base on type and return activity in return
   * this works as generic function to like any activity
   * right now supports comment and feed will extends this mutation further in future
   */
  toggleLike: LikeableContent;
  /** Toggle if you should receive notifications a certain type of notifications on a specific content piece */
  toggleMuteNotification: NotificationPreferenceState;
  /**
   * Toggle mute on an entire notification type
   *
   * The optional userID value can only be passed by admins and will override
   */
  toggleNotificationPreference?: Maybe<UserNotificationPreference>;
  /** referenceId is either the commentId OR postId OR feedActivityId */
  toggleReact: ReactionsSummary;
  /**
   * toggleUserAsBillable toggles user as billable/non-billable
   * billable means this users will be counted towards the number of licences(user count) set during contract
   */
  toggleUserAsBillable: User;
  /** Toggle a user as an expert */
  toggleUserAsExpert: User;
  toggleWaitListAttendee: EventWaitListAttendee;
  /**
   * translateEbook translates ebook from sourceLanguageCode to targetLanguageCodes
   * targetLanguageCodes if sent ebook will be translated only in those languages and if not sent ebook will be translated in all the supported languages by us
   */
  translateEbook: Scalars['Boolean']['output'];
  /**
   * translatePodcastTranscript translates podcast transcript in English to targetLanguageCodes
   * targetLanguageCodes if sent, english transcript will be translated only in those languages and if not sent it will be translated in all the supported languages by us
   */
  translatePodcastTranscript: Scalars['Boolean']['output'];
  /**
   * translateStreamSubtitles translates stream subtitles to targetLanguageCodes
   * targetLanguageCodes if sent stream subtitles will be translated only in those languages and if not sent it will be translated in all the supported languages by us
   */
  translateStreamSubtitles: Scalars['Boolean']['output'];
  /** For the users in an organisation we need to trigger the onboarding canvas */
  triggerBrazeCanvas: Scalars['Boolean']['output'];
  unblockUserAuth: NoContent;
  /**
   * Unregister a follow topic channel tab
   *
   * Note: the id is the same as the channels entityId
   */
  unregisterFollowTopicTab: Scalars['Boolean']['output'];
  updateAssignment: Assignment;
  updateAssignmentStatus: Assignment;
  updateCanvasOnboardingID: Organisation;
  updateCategory?: Maybe<Category>;
  updateCategoryIndex: NoContent;
  /** updates the invitation status of cohort */
  updateCohortInvitationStatus: Cohort;
  /** update a comment */
  updateComment: Comment;
  /** Update an existing content user note */
  updateContentUserNote: ContentUserNote;
  updateCoupon?: Maybe<Coupon>;
  updateEbook?: Maybe<UpdateEbookResult>;
  updateEvent?: Maybe<Event>;
  updateFeaturedContent?: Maybe<FeaturedContent>;
  /** Update the topics of a follow topic channel tab */
  updateFollowTopicTab: MSteamsChannelTabFollowTopic;
  /** update an existing iam role */
  updateIAMRole?: Maybe<UpdateIamRoleResult>;
  /** Updates alt tag of image */
  updateImageAltTag?: Maybe<Image>;
  updateLearningPath?: Maybe<LearningPath>;
  updateLifegoal?: Maybe<Lifegoal>;
  /**
   * To update livestream details while it's in progress i.e backstage and it publish the updated changes of stream which can be subsribed to
   * via ongoingStreams or streams subscription
   */
  updateLiveStream?: Maybe<Stream>;
  updateOrganisation?: Maybe<Organisation>;
  updateOrganisationGroup?: Maybe<OrganisationGroup>;
  updatePodcast?: Maybe<UpdatePodcastResult>;
  /** This mutation is used to update poll question */
  updatePollQuestion: PollQuestionResponse;
  updatePost: Scalars['Boolean']['output'];
  /** Update a stream, should only be used for updating properties of a recorded stream */
  updateStream?: Maybe<UpdateStreamResult>;
  /**
   * updates the livestream creator. Super admin / creator can pass the creator rights to other host.
   * Once the creator is updated, the previous creator can even leave the stream if they want to
   */
  updateStreamCreator: Stream;
  updateSubscriptionPlan?: Maybe<SubscriptionPlan>;
  /** Update user is called from the application to update the users profile */
  updateUser?: Maybe<User>;
  /** Introduce a new method that allows us to update a user and thinkfluencer settings in the same request */
  updateUserAsAdmin: User;
  /** Update a user as an org admin gives the ability to promote to a livestream host and thinkfluencer */
  updateUserAsOrgAdmin: User;
  /** Update the users avatar image, if null is provided for the image it's removed */
  updateUserAvatarImage: User;
  /** Update the users cover image, if null is provided for the image it's removed */
  updateUserCoverImage: User;
  /** Update a users life goals */
  updateUserLifegoals: NoContent;
  /** updateUserPreferredLanguage updates the preferred language of a user. */
  updateUserPreferredLanguage?: Maybe<User>;
  /** Updates a user's product tour tracking */
  updateUserProductTourTracking: ProductTourTracking;
  /** Upload an image */
  uploadImage?: Maybe<Image>;
  upsertContentRating: NoContent;
  upsertEbookChaptersAndAudio?: Maybe<UpsertEbookChaptersAndAudioResult>;
  upsertPodcastAudioAndTranscript?: Maybe<UpsertPodcastAudioAndTranscriptResult>;
  /** Create / Update stream's media / subtitle. */
  upsertStreamMedia?: Maybe<UpsertStreamMediaResult>;
  userCancelSubscription?: Maybe<User>;
  userChangePassword: NoContent;
  userChangePaymentToken?: Maybe<User>;
  userChangeSubscription?: Maybe<User>;
  /** userInAppSubscription verify in-app purchase and store transaction details in our system */
  userInAppSubscription: NoContent;
  userMarkCollectionAsFinished: NoContent;
  /** Updates a user's onboarding completed status */
  userSetOnboardingCompleted: User;
  userSetPassword: Scalars['Boolean']['output'];
  userSubscribeToPlan: NoContent;
  userToggleBlockedState?: Maybe<User>;
  /** This mutation is used to follow unfollow other user */
  userToggleFollow: User;
  /**
   * Toggle following a collection allows the user to toggle the state of following a collection
   *
   * The third variable "force" is optional and if provided will set the toggle state to that value
   */
  userToggleFollowCollection?: Maybe<UserCollectionTracking>;
  /** @deprecated use the follow user mutation instead */
  userToggleFollowExpert?: Maybe<Expert>;
  userTrackContentOpened: ContentCard;
  userTrackContentProgress: ContentCard;
  userTrackContentToggleAttending: ContentCard;
  userTrackContentToggleBookmarked: ContentCard;
  userTrackContentToggleFinished: ContentCard;
};


export type MutationAddAnswerToPollQuestionArgs = {
  input: PollQuestionAnswer;
};


export type MutationAddAnswerToPollQuestionV2Args = {
  input: PollQuestionAnswer;
};


export type MutationAddCohortMembersArgs = {
  cohortId: Scalars['ID']['input'];
  users: Array<Scalars['ID']['input']>;
};


export type MutationAddHostArgs = {
  streamId: Scalars['ID']['input'];
  uid: Scalars['Int']['input'];
};


export type MutationAddIamRoleUsersArgs = {
  id: Scalars['ID']['input'];
  input: AddIamRoleUsersInput;
};


export type MutationApplyToEventWaitListArgs = {
  input?: InputMaybe<ApplyToEventWaitListInput>;
};


export type MutationCancelOrganisationSubscriptionArgs = {
  id: Scalars['ID']['input'];
};


export type MutationCancelWaitlistApplicationArgs = {
  eventId: Scalars['String']['input'];
};


export type MutationConsumeCouponArgs = {
  code: Scalars['String']['input'];
};


export type MutationConvertEbookTextToAudioArgs = {
  id: Scalars['ID']['input'];
  voiceType: SpeechVoiceType;
};


export type MutationConvertPodcastSummaryToAudioArgs = {
  id: Scalars['ID']['input'];
  voiceType: SpeechVoiceType;
};


export type MutationCreateAssignmentArgs = {
  input?: InputMaybe<AssignmentInput>;
  organisationID: Scalars['ID']['input'];
};


export type MutationCreateCategoryArgs = {
  input?: InputMaybe<CategoryInput>;
};


export type MutationCreateChatMessageArgs = {
  id: Scalars['ID']['input'];
  mentions?: InputMaybe<Array<InputMaybe<MentionInput>>>;
  message?: InputMaybe<Scalars['String']['input']>;
  rawText?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCreateCohortArgs = {
  input: CreateCohortInput;
};


export type MutationCreateCommentArgs = {
  comment: PostComment;
};


export type MutationCreateContentUserNoteArgs = {
  contentId: Scalars['ID']['input'];
  input?: InputMaybe<CreateContentUserNote>;
};


export type MutationCreateCouponArgs = {
  input?: InputMaybe<CouponInput>;
};


export type MutationCreateEbookArgs = {
  input: EbookInput;
};


export type MutationCreateEventArgs = {
  input: EventInput;
};


export type MutationCreateFeaturedContentArgs = {
  input?: InputMaybe<FeaturedContentInput>;
};


export type MutationCreateGalleryImageFromPreSignedUrlArgs = {
  url: Scalars['String']['input'];
};


export type MutationCreateIamRoleArgs = {
  input?: InputMaybe<IamRoleInput>;
};


export type MutationCreateInstantRepostArgs = {
  postId: Scalars['ID']['input'];
};


export type MutationCreateLearningPathArgs = {
  input?: InputMaybe<LearningPathInput>;
};


export type MutationCreateLifegoalArgs = {
  input?: InputMaybe<LifegoalInput>;
};


export type MutationCreateLiveStreamArgs = {
  featuredHost?: InputMaybe<Scalars['ID']['input']>;
  invitedHosts: Array<Scalars['ID']['input']>;
  name: Scalars['String']['input'];
  organisationGroups?: InputMaybe<Array<Scalars['ID']['input']>>;
  organisationID?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationCreateLiveStreamFromEventArgs = {
  eventID: Scalars['ID']['input'];
  featuredHost?: InputMaybe<Scalars['ID']['input']>;
  invitedHosts: Array<Scalars['ID']['input']>;
  name: Scalars['String']['input'];
};


export type MutationCreateOrganisationArgs = {
  input: OrganisationInput;
};


export type MutationCreateOrganisationGroupArgs = {
  input: OrganisationGroupInput;
  orgId: Scalars['String']['input'];
};


export type MutationCreatePodcastArgs = {
  input: PodcastInput;
};


export type MutationCreatePollQuestionArgs = {
  input: PollQuestionInput;
};


export type MutationCreatePostArgs = {
  input: CreatePostInput;
};


export type MutationCreateStreamArgs = {
  input: StreamInput;
};


export type MutationCreateStreamWithUploadArgs = {
  file: Scalars['Upload']['input'];
  input: StreamInput;
};


export type MutationCreateStripePromoCodeArgs = {
  input: StripePromotionCodeInput;
};


export type MutationCreateSubscriptionPlanArgs = {
  input?: InputMaybe<SubscriptionPlanInput>;
};


export type MutationCreateTeamsAccountArgs = {
  input?: InputMaybe<CreateTeamsInput>;
};


export type MutationCreateUserArgs = {
  input?: InputMaybe<CreateUserInput>;
};


export type MutationCreateUserV2Args = {
  input?: InputMaybe<CreateUserInput>;
};


export type MutationDeactivateStripePromoCodeArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteAssignmentArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteCategoryArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteCommentArgs = {
  comment: Scalars['ID']['input'];
  reason?: InputMaybe<Scalars['String']['input']>;
};


export type MutationDeleteContentUserNoteArgs = {
  noteId: Scalars['ID']['input'];
};


export type MutationDeleteCouponArgs = {
  code: Scalars['String']['input'];
};


export type MutationDeleteEbookArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteEventArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteFeaturedContentArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteIamRoleArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteImageArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteLearningPathArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteLifegoalArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteNotificationArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteOrganisationArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteOrganisationGroupArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeletePodcastArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeletePollQuestionArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeletePostArgs = {
  post: Scalars['ID']['input'];
  reason?: InputMaybe<Scalars['String']['input']>;
};


export type MutationDeleteStreamArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteSubscriptionPlanArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteUserArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  reasons?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type MutationDisbandCohortArgs = {
  cohortId: Scalars['ID']['input'];
};


export type MutationEmailExistsArgs = {
  email: Scalars['String']['input'];
};


export type MutationExportAssignmentStatisticsArgs = {
  filter: AssignmentStatisticsFilterInput;
  id: Scalars['ID']['input'];
};


export type MutationGeneratePodcastTranscriptArgs = {
  id: Scalars['ID']['input'];
  translateTranscripts: Scalars['Boolean']['input'];
};


export type MutationGenerateStreamSubtitlesArgs = {
  id: Scalars['ID']['input'];
  translateSubtitles: Scalars['Boolean']['input'];
};


export type MutationGetLinkPreviewArgs = {
  link: Scalars['String']['input'];
};


export type MutationGetPreSignedUploadUrlArgs = {
  contentType: Scalars['String']['input'];
  name: Scalars['String']['input'];
};


export type MutationInviteHostArgs = {
  hostID: Scalars['ID']['input'];
  streamID: Scalars['ID']['input'];
};


export type MutationInvitesAddHostsArgs = {
  hosts: Array<Scalars['ID']['input']>;
  streamID: Scalars['ID']['input'];
};


export type MutationInvitesRejectArgs = {
  streamID: Scalars['ID']['input'];
};


export type MutationInvitesRemoveHostArgs = {
  streamID: Scalars['ID']['input'];
  userID: Scalars['ID']['input'];
};


export type MutationIsAppUp2DateArgs = {
  appVersion: Scalars['String']['input'];
};


export type MutationIsCouponValidArgs = {
  coupon: Scalars['String']['input'];
  planId: Scalars['String']['input'];
};


export type MutationIsSsoEnabledArgs = {
  email: Scalars['String']['input'];
};


export type MutationLeaveCohortArgs = {
  cohortId: Scalars['ID']['input'];
};


export type MutationLoginAppleArgs = {
  authorizationCode: Scalars['String']['input'];
  customBundleId?: InputMaybe<Scalars['String']['input']>;
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
};


export type MutationLoginEmailArgs = {
  backoffice?: InputMaybe<Scalars['Boolean']['input']>;
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationLoginEmailV2Args = {
  backoffice?: InputMaybe<Scalars['Boolean']['input']>;
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationLoginFbArgs = {
  token: Scalars['String']['input'];
};


export type MutationLoginLinkedInArgs = {
  redirectUri?: InputMaybe<Scalars['String']['input']>;
  token: Scalars['String']['input'];
};


export type MutationLoginMsTeamsArgs = {
  accessToken: Scalars['String']['input'];
};


export type MutationLoginWorkOsArgs = {
  authenticationCode: Scalars['String']['input'];
  identity: IdentityType;
};


export type MutationManageUserDevicesArgs = {
  deviceId: Scalars['String']['input'];
  operation: DeviceOperation;
};


export type MutationMarkAllNotificationReadArgs = {
  filter?: InputMaybe<NotificationFilter>;
};


export type MutationMarkAssignmentsAsViewedArgs = {
  assignmentIds: Array<Scalars['ID']['input']>;
};


export type MutationMarkNotificationReadArgs = {
  id: Scalars['ID']['input'];
};


export type MutationNudgeCohortUserArgs = {
  cohortId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
};


export type MutationOrganisationAddUserArgs = {
  organisationId: Scalars['String']['input'];
  role: OrganisationRole;
  userId: Scalars['String']['input'];
};


export type MutationOrganisationAdminNudgeAllUsersArgs = {
  organisationId: Scalars['ID']['input'];
};


export type MutationOrganisationAdminNudgeUserArgs = {
  organisationId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
};


export type MutationOrganisationExportAssignmentStatisticsByAssignmentArgs = {
  filter: StatisticsByAssignmentFilter;
  orgId: Scalars['ID']['input'];
};


export type MutationOrganisationExportAssignmentStatisticsByGroupArgs = {
  filter: StatisticsByGroupFilter;
  orgId: Scalars['ID']['input'];
};


export type MutationOrganisationExportAssignmentStatisticsByUserArgs = {
  filter: StatisticsByUserFilter;
  orgId: Scalars['ID']['input'];
};


export type MutationOrganisationExportMainStatisticsArgs = {
  filter: OrgStatisticsFilter;
  orgId: Scalars['ID']['input'];
};


export type MutationOrganisationExportUserAssignmentStatisticsArgs = {
  orgId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
};


export type MutationOrganisationGroupAddMultiUserArgs = {
  groupId: Scalars['ID']['input'];
  users: Array<AddUserRequest>;
};


export type MutationOrganisationGroupAddMultipleUserArgs = {
  groupId: Scalars['String']['input'];
  userIds: Array<Scalars['String']['input']>;
};


export type MutationOrganisationGroupAddUserArgs = {
  groupId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};


export type MutationOrganisationGroupRemoveMultiUserArgs = {
  groupId: Scalars['ID']['input'];
  users: Array<AddUserRequest>;
};


export type MutationOrganisationGroupRemoveUserArgs = {
  groupId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};


export type MutationOrganisationImportUsersArgs = {
  groupId?: InputMaybe<Scalars['String']['input']>;
  orgId: Scalars['String']['input'];
  users: Array<OrganisationUserImport>;
};


export type MutationOrganisationJoinViaInviteLinkArgs = {
  token: Scalars['ID']['input'];
  user?: InputMaybe<CreateUserInput>;
};


export type MutationOrganisationRemoveMultiUserArgs = {
  organisationId: Scalars['ID']['input'];
  users: Array<AddUserRequest>;
};


export type MutationOrganisationRemoveUserArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
  organisationId: Scalars['String']['input'];
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type MutationOrganisationSubscriptionArgs = {
  input: OrganisationSubscriptionInput;
};


export type MutationRateContentArgs = {
  contentId: Scalars['ID']['input'];
  vote: ContentVote;
};


export type MutationReauthorizeWithOrgArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRegisterFollowTopicTabArgs = {
  channelId: Scalars['String']['input'];
  teamId: Scalars['String']['input'];
  topics: Array<Scalars['ID']['input']>;
};


export type MutationRemoveAttendeeArgs = {
  eventId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};


export type MutationRemoveCohortUserArgs = {
  cohortId?: InputMaybe<Scalars['ID']['input']>;
  userIds: Array<Scalars['ID']['input']>;
};


export type MutationRemoveHostArgs = {
  hostId?: InputMaybe<Scalars['ID']['input']>;
  streamId: Scalars['ID']['input'];
  uid: Scalars['Int']['input'];
};


export type MutationRemoveIamRoleUsersArgs = {
  id: Scalars['ID']['input'];
  userIds: Array<Scalars['ID']['input']>;
};


export type MutationRemoveUserOrgInvitationArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationReportContentArgs = {
  comment?: InputMaybe<Scalars['String']['input']>;
  contentID?: InputMaybe<Scalars['ID']['input']>;
  contentType: ReportableContentType;
  reason: Scalars['String']['input'];
  reportableContentID?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationRequestMentorshipArgs = {
  expertId: Scalars['String']['input'];
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type MutationResetPasswordFinalizeArgs = {
  input: ResetPasswordFinalizeInput;
};


export type MutationResetPasswordInitiateArgs = {
  email: Scalars['String']['input'];
};


export type MutationResetPollQuestionAnswerArgs = {
  questionId: Scalars['ID']['input'];
};


export type MutationSearchResultClickedArgs = {
  input: ClickAnalyticsInput;
};


export type MutationSetFeaturedHostArgs = {
  hostId: Scalars['ID']['input'];
  streamId: Scalars['ID']['input'];
};


export type MutationSkipSubscriptionTrialArgs = {
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type MutationStartStreamArgs = {
  goToBackStage?: InputMaybe<Scalars['Boolean']['input']>;
  streamId: Scalars['ID']['input'];
  uid: Scalars['Int']['input'];
};


export type MutationStopStreamArgs = {
  streamId: Scalars['ID']['input'];
};


export type MutationStreamGoLiveArgs = {
  streamId: Scalars['ID']['input'];
  uid: Scalars['Int']['input'];
};


export type MutationStreamPostMessageArgs = {
  input?: InputMaybe<StreamChatMessageInput>;
};


export type MutationSuggestNewPollArgs = {
  input: PollSuggestion;
};


export type MutationSwapHostArgs = {
  newOrder: Scalars['Int']['input'];
  order: Scalars['Int']['input'];
  streamId: Scalars['ID']['input'];
};


export type MutationToggleContentAsArchivedArgs = {
  contentType: ContentType;
  id: Scalars['ID']['input'];
};


export type MutationToggleContentAsFreeArgs = {
  contentType: ContentType;
  id: Scalars['ID']['input'];
};


export type MutationToggleLearningPathAsFreeArgs = {
  id: Scalars['ID']['input'];
};


export type MutationToggleLikeArgs = {
  referenceId: Scalars['ID']['input'];
  type: LikeType;
};


export type MutationToggleMuteNotificationArgs = {
  contentId: Scalars['ID']['input'];
  type: NotificationType;
};


export type MutationToggleNotificationPreferenceArgs = {
  type: NotificationType;
  userID?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationToggleReactArgs = {
  reactionRefType: ReactionReferenceType;
  reactionType: ReactionType;
  referenceId: Scalars['ID']['input'];
};


export type MutationToggleUserAsBillableArgs = {
  id: Scalars['ID']['input'];
};


export type MutationToggleUserAsExpertArgs = {
  id: Scalars['ID']['input'];
};


export type MutationToggleWaitListAttendeeArgs = {
  id: Scalars['String']['input'];
};


export type MutationTranslateEbookArgs = {
  id: Scalars['ID']['input'];
  sourceLanguageCode: Scalars['String']['input'];
  targetLanguageCodes?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type MutationTranslatePodcastTranscriptArgs = {
  id: Scalars['ID']['input'];
  targetLanguageCodes?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type MutationTranslateStreamSubtitlesArgs = {
  id: Scalars['ID']['input'];
  targetLanguageCodes?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type MutationTriggerBrazeCanvasArgs = {
  canvasId: Scalars['ID']['input'];
  canvasType: CanvasType;
  groupIds: Array<Scalars['ID']['input']>;
  organisationId: Scalars['ID']['input'];
};


export type MutationUnblockUserAuthArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUnregisterFollowTopicTabArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateAssignmentArgs = {
  id: Scalars['ID']['input'];
  input?: InputMaybe<AssignmentInput>;
};


export type MutationUpdateAssignmentStatusArgs = {
  id: Scalars['ID']['input'];
  status: AssignmentStatus;
};


export type MutationUpdateCanvasOnboardingIdArgs = {
  canvasOnboardingID: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
};


export type MutationUpdateCategoryArgs = {
  id: Scalars['String']['input'];
  input?: InputMaybe<CategoryInput>;
};


export type MutationUpdateCategoryIndexArgs = {
  input: Array<CategoryIndexInput>;
};


export type MutationUpdateCohortInvitationStatusArgs = {
  cohortId: Scalars['ID']['input'];
  status: CohortInviteStatus;
};


export type MutationUpdateCommentArgs = {
  update: UpdateComment;
};


export type MutationUpdateContentUserNoteArgs = {
  input?: InputMaybe<UpdateContentUserNote>;
  noteId: Scalars['ID']['input'];
};


export type MutationUpdateCouponArgs = {
  code: Scalars['String']['input'];
  input?: InputMaybe<CouponInput>;
};


export type MutationUpdateEbookArgs = {
  id: Scalars['String']['input'];
  input: EbookInput;
};


export type MutationUpdateEventArgs = {
  id: Scalars['String']['input'];
  input: EventInput;
};


export type MutationUpdateFeaturedContentArgs = {
  id: Scalars['String']['input'];
  input?: InputMaybe<FeaturedContentInput>;
};


export type MutationUpdateFollowTopicTabArgs = {
  id: Scalars['ID']['input'];
  topics: Array<Scalars['ID']['input']>;
};


export type MutationUpdateIamRoleArgs = {
  id: Scalars['ID']['input'];
  input?: InputMaybe<IamRoleInput>;
};


export type MutationUpdateImageAltTagArgs = {
  alt: Scalars['String']['input'];
  id: Scalars['ID']['input'];
};


export type MutationUpdateLearningPathArgs = {
  id: Scalars['String']['input'];
  input?: InputMaybe<LearningPathInput>;
};


export type MutationUpdateLifegoalArgs = {
  id: Scalars['String']['input'];
  input?: InputMaybe<LifegoalInput>;
};


export type MutationUpdateLiveStreamArgs = {
  id: Scalars['ID']['input'];
  input: LiveStreamInput;
};


export type MutationUpdateOrganisationArgs = {
  id: Scalars['String']['input'];
  input: OrganisationInput;
};


export type MutationUpdateOrganisationGroupArgs = {
  id: Scalars['String']['input'];
  input: OrganisationGroupInput;
};


export type MutationUpdatePodcastArgs = {
  id: Scalars['String']['input'];
  input: PodcastInput;
};


export type MutationUpdatePollQuestionArgs = {
  id: Scalars['ID']['input'];
  input: PollQuestionInput;
};


export type MutationUpdatePostArgs = {
  input: UpdatePostInput;
};


export type MutationUpdateStreamArgs = {
  id: Scalars['String']['input'];
  input: StreamInput;
};


export type MutationUpdateStreamCreatorArgs = {
  newCreatorId: Scalars['ID']['input'];
  streamId: Scalars['ID']['input'];
};


export type MutationUpdateSubscriptionPlanArgs = {
  id: Scalars['String']['input'];
  input?: InputMaybe<SubscriptionPlanInput>;
};


export type MutationUpdateUserArgs = {
  id: Scalars['String']['input'];
  input?: InputMaybe<UpdateUserInput>;
};


export type MutationUpdateUserAsAdminArgs = {
  id: Scalars['ID']['input'];
  input: UpdateExpertUserInput;
};


export type MutationUpdateUserAsOrgAdminArgs = {
  id: Scalars['ID']['input'];
  input: UpdateUserAsOrgAdmin;
};


export type MutationUpdateUserAvatarImageArgs = {
  url?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationUpdateUserCoverImageArgs = {
  url?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationUpdateUserLifegoalsArgs = {
  lifeGoals: Array<Scalars['ID']['input']>;
};


export type MutationUpdateUserPreferredLanguageArgs = {
  language: Scalars['String']['input'];
};


export type MutationUpdateUserProductTourTrackingArgs = {
  input: UpdateUserProductTourTrackingInput;
};


export type MutationUploadImageArgs = {
  alt?: InputMaybe<Scalars['String']['input']>;
  image: Scalars['Upload']['input'];
};


export type MutationUpsertContentRatingArgs = {
  input: ContentRatingInput;
};


export type MutationUpsertEbookChaptersAndAudioArgs = {
  audioInput?: InputMaybe<EbookAudioInput>;
  chaptersInput?: InputMaybe<UpsertEbookChaptersInput>;
  ebookId: Scalars['ID']['input'];
  language: Scalars['String']['input'];
};


export type MutationUpsertPodcastAudioAndTranscriptArgs = {
  audio?: InputMaybe<PodcastAudioInput>;
  language: Scalars['String']['input'];
  podcastId: Scalars['ID']['input'];
  transcript?: InputMaybe<PodcastTranscriptInput>;
};


export type MutationUpsertStreamMediaArgs = {
  input: UpsertStreamMediaInput;
};


export type MutationUserCancelSubscriptionArgs = {
  reasons: Array<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUserChangePasswordArgs = {
  id: Scalars['String']['input'];
  input: UserChangePasswordInput;
};


export type MutationUserChangePaymentTokenArgs = {
  stripeToken: Scalars['String']['input'];
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUserChangeSubscriptionArgs = {
  coupon?: InputMaybe<Scalars['String']['input']>;
  planId: Scalars['String']['input'];
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUserInAppSubscriptionArgs = {
  input: UserInAppSubscriptionInput;
};


export type MutationUserMarkCollectionAsFinishedArgs = {
  collection: UserCollectionTrackingInput;
};


export type MutationUserSetPasswordArgs = {
  id: Scalars['ID']['input'];
  password: Scalars['String']['input'];
};


export type MutationUserSubscribeToPlanArgs = {
  coupon?: InputMaybe<Scalars['String']['input']>;
  planId: Scalars['String']['input'];
  stripeToken: Scalars['String']['input'];
  trial?: InputMaybe<Scalars['Boolean']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUserToggleBlockedStateArgs = {
  id: Scalars['String']['input'];
};


export type MutationUserToggleFollowArgs = {
  personToFollow: Scalars['ID']['input'];
};


export type MutationUserToggleFollowCollectionArgs = {
  collectionType: CollectionType;
  force?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
};


export type MutationUserToggleFollowExpertArgs = {
  expertId: Scalars['String']['input'];
  id: Scalars['String']['input'];
};


export type MutationUserTrackContentOpenedArgs = {
  id: Scalars['String']['input'];
};


export type MutationUserTrackContentProgressArgs = {
  data: TrackingData;
  id: Scalars['String']['input'];
};


export type MutationUserTrackContentToggleAttendingArgs = {
  id: Scalars['String']['input'];
};


export type MutationUserTrackContentToggleBookmarkedArgs = {
  id: Scalars['String']['input'];
};


export type MutationUserTrackContentToggleFinishedArgs = {
  id: Scalars['String']['input'];
};

export type NoContent = {
  __typename?: 'NoContent';
  success: Scalars['Boolean']['output'];
};

export type NotFoundError = {
  __typename?: 'NotFoundError';
  message: Scalars['String']['output'];
};

export type NotesConnection = {
  __typename?: 'NotesConnection';
  edges: Array<ContentUserNote>;
  meta: PageInfo;
};

export type Notification = {
  __typename?: 'Notification';
  body: Scalars['String']['output'];
  createdAt: Scalars['Time']['output'];
  deepLink: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  image?: Maybe<Image>;
  readAt?: Maybe<Scalars['Time']['output']>;
  state: NotificationState;
  title: Scalars['String']['output'];
  type?: Maybe<NotificationType>;
  updatedAt: Scalars['Time']['output'];
};

export type NotificationConnection = {
  __typename?: 'NotificationConnection';
  edges: Array<NotificationEdge>;
  meta: CursorInfo;
};

export type NotificationEdge = {
  __typename?: 'NotificationEdge';
  cursor: Scalars['String']['output'];
  notification: Notification;
};

export type NotificationFilter = {
  viewerType?: InputMaybe<NotificationViewerType>;
};

export enum NotificationPlatform {
  Email = 'EMAIL',
  PushNotification = 'PUSH_NOTIFICATION'
}

export enum NotificationPreferenceState {
  Disabled = 'DISABLED',
  Enabled = 'ENABLED'
}

export enum NotificationState {
  New = 'NEW',
  Read = 'READ',
  Unread = 'UNREAD'
}

export enum NotificationType {
  Assignment = 'ASSIGNMENT',
  ChatMessages = 'CHAT_MESSAGES',
  CohortInvitation = 'COHORT_INVITATION',
  CohortInvitationAccepted = 'COHORT_INVITATION_ACCEPTED',
  CohortInvitationRejected = 'COHORT_INVITATION_REJECTED',
  Comment = 'COMMENT',
  Follow = 'FOLLOW',
  GeneralNewsletter = 'GENERAL_NEWSLETTER',
  Like = 'LIKE',
  LivestreamInvitedAsHost = 'LIVESTREAM_INVITED_AS_HOST',
  LivestreamIsLive = 'LIVESTREAM_IS_LIVE',
  MarketingCommunications = 'MARKETING_COMMUNICATIONS',
  OrganisationInvitationAccepted = 'ORGANISATION_INVITATION_ACCEPTED',
  OrganisationInvitationRejected = 'ORGANISATION_INVITATION_REJECTED',
  ProductUpdates = 'PRODUCT_UPDATES',
  ReplyOnComment = 'REPLY_ON_COMMENT',
  ThinkfluencerNewContent = 'THINKFLUENCER_NEW_CONTENT'
}

export enum NotificationViewerType {
  All = 'ALL',
  Mobile = 'MOBILE',
  Web = 'WEB'
}

export type OffsetPagination = {
  limit: Scalars['Int']['input'];
  offset: Scalars['Int']['input'];
};

export type OnboardingQuestionsFilter = {
  /** Filter on questions shown for a specific purpose */
  purpose?: InputMaybe<ShowOnScreenType>;
};

export enum OrgMemberStatus {
  Active = 'ACTIVE',
  Blocked = 'BLOCKED',
  PendingActivation = 'PENDING_ACTIVATION'
}

export type OrgStatisticsFilter = {
  frequency?: InputMaybe<OrgStatsGroupingFrequency>;
  from?: InputMaybe<Scalars['Time']['input']>;
  organisationGroups?: InputMaybe<Array<Scalars['ID']['input']>>;
  until?: InputMaybe<Scalars['Time']['input']>;
};

export enum OrgStatsGroupingFrequency {
  Day = 'day',
  Month = 'month',
  Quarter = 'quarter',
  Week = 'week',
  Year = 'year'
}

export type OrgStatsMostActiveUser = {
  __typename?: 'OrgStatsMostActiveUser';
  averageCompletionRate: Scalars['Float']['output'];
  startedContentPieces: Scalars['Int']['output'];
  timeSpentInSeconds: Scalars['Int']['output'];
  userId: Scalars['ID']['output'];
  username: Scalars['String']['output'];
};

export type OrgStatsMostPopularContent = {
  __typename?: 'OrgStatsMostPopularContent';
  averageCompletionRate: Scalars['Float']['output'];
  contentId: Scalars['ID']['output'];
  contentName: Scalars['String']['output'];
  contentType: ContentType;
  numberOfUsers: Scalars['Int']['output'];
  timeSpentInSeconds: Scalars['Int']['output'];
};

export type Organisation = {
  __typename?: 'Organisation';
  /** activeUsers show non blocked users of organisation */
  activeUsers: Scalars['Int']['output'];
  /** The users are that marked as org admins are available here */
  admins: Array<User>;
  /**
   * Get the statistics for an organisation grouped by content
   * @deprecated use the new assignment statistics query (assignmentStatisticsByAssignment)
   */
  assignmentContentStatistics: Array<AssignmentContentStatistics>;
  /**
   * Get the statistics for an organisation grouped by organisation groups
   * @deprecated use the new assignment statistics query (assignmentStatisticsByGroup)
   */
  assignmentGroupStatistics: Array<AssignmentGroupStatistics>;
  /**
   * Get the statistics for each member in terms of completion rate
   * @deprecated use the new assignment statistics query (assignmentStatisticsByUser)
   */
  assignmentMemberStatistics: Array<AssignmentMemberStatistics>;
  /** List statistics per assignment for the organisation */
  assignmentStatisticsByAssignment: StatisticsByAssignmentConnection;
  /** List assignment statistics per org group for the organisation */
  assignmentStatisticsByGroup: StatisticsByGroupConnection;
  /** List assignment statistics per user for the organisation */
  assignmentStatisticsByUser: StatisticsByUserConnection;
  /** List of assignments created by this organisation */
  assignments: AssignmentConnection;
  /** canvas onboarding ID of the organisation */
  canvasOnboardingID: Scalars['ID']['output'];
  /** organisation cover image */
  coverImage?: Maybe<Image>;
  /** When the organisation was created */
  createdAt: Scalars['Time']['output'];
  /** The user that created the organisation */
  createdBy?: Maybe<User>;
  /**
   * The groups associated within the organisation
   * @deprecated This will be deprecated in future as it doesnt allow for pagination, please use orgGroups instead
   */
  groups: Array<OrganisationGroup>;
  iamRoles: IamRoleConnection;
  /** Unique identifier */
  id: Scalars['ID']['output'];
  /** The invitation token is used to generate a link where members of a company can sign up at will */
  invitationToken: Scalars['ID']['output'];
  invitations: InvitationConnection;
  /** organisation logo */
  logo?: Maybe<Image>;
  /** The percentage of users that have accessed the application */
  memberAdoptionRate: Scalars['Float']['output'];
  /** Retrieve the members of the organisation */
  members: UserCollection;
  /** The number of users that have access the application */
  membersLoggedIn: Scalars['Int']['output'];
  /**
   * Return the most popular content listened to by users within this organisation
   *
   * At most, this endpoint will return 20 content pieces.
   */
  mostPopularContent: Array<Content>;
  /** The brand name of the company */
  name: Scalars['String']['output'];
  /** A map of which of the onboarding templates the organisation has overwritten */
  onboardingJourneyOverride: Scalars['Map']['output'];
  /** The groups associated within the organisation (paginate, filter and sortable) */
  orgGroups: OrganisationGroupConnection;
  /** The average number of new content pieces started */
  statisticsAverageContentPiecesStart: Array<GraphDataPoint>;
  /** The average time spent on content group by provided frequency */
  statisticsAverageTimeSpent: Array<GraphDataPoint>;
  /** Leader bord for the most active users */
  statisticsMostActiveUsers: Array<OrgStatsMostActiveUser>;
  /** The most popular categories based on the consumption of content cards */
  statisticsMostPopularCategories: Array<PieDataPoint>;
  /** Leader board for the most popular content */
  statisticsMostPopularContent: Array<OrgStatsMostPopularContent>;
  /** The most popular experts based on the consumption of their content cards */
  statisticsMostPopularExperts: Array<PieDataPoint>;
  /** The number of users active in the provided frequency */
  statisticsUserActivity: Array<GraphDataPoint>;
  /**
   * Call this to get a sso url for accessing the stripe customer portal for this account.
   *
   * Note: Do not include this in every single request please.
   * @deprecated this has been replaced by a http endpoint that does a 301 redirect
   */
  stripeCustomerPortal: Scalars['String']['output'];
  /** The subscription associated to the organisation */
  subscription?: Maybe<SubscriptionModel>;
  /** What type of organisation this is */
  type: OrganisationCustomerType;
  /** When the organisation was last updated */
  updatedAt: Scalars['Time']['output'];
};


export type OrganisationAssignmentStatisticsByAssignmentArgs = {
  filter: StatisticsByAssignmentFilter;
};


export type OrganisationAssignmentStatisticsByGroupArgs = {
  filter: StatisticsByGroupFilter;
};


export type OrganisationAssignmentStatisticsByUserArgs = {
  filter: StatisticsByUserFilter;
};


export type OrganisationAssignmentsArgs = {
  filter: AssignmentsFilter;
  sorting?: InputMaybe<SortOrdering>;
};


export type OrganisationIamRolesArgs = {
  pagination?: InputMaybe<OffsetPagination>;
};


export type OrganisationInvitationsArgs = {
  field: InvitationFilter;
  sorting?: InputMaybe<SortOrdering>;
};


export type OrganisationMembersArgs = {
  filter?: InputMaybe<OrganisationMemberFilter>;
  sorting?: InputMaybe<SortOrdering>;
};


export type OrganisationOrgGroupsArgs = {
  filter?: InputMaybe<OrganisationGroupFilter>;
  sorting?: InputMaybe<SortOrdering>;
};


export type OrganisationStatisticsAverageContentPiecesStartArgs = {
  filter: OrgStatisticsFilter;
};


export type OrganisationStatisticsAverageTimeSpentArgs = {
  filter: OrgStatisticsFilter;
};


export type OrganisationStatisticsMostActiveUsersArgs = {
  filter: OrgStatisticsFilter;
};


export type OrganisationStatisticsMostPopularCategoriesArgs = {
  filter: OrgStatisticsFilter;
};


export type OrganisationStatisticsMostPopularContentArgs = {
  filter: OrgStatisticsFilter;
};


export type OrganisationStatisticsMostPopularExpertsArgs = {
  filter: OrgStatisticsFilter;
};


export type OrganisationStatisticsUserActivityArgs = {
  filter: OrgStatisticsFilter;
};


export type OrganisationStripeCustomerPortalArgs = {
  returnURL: Scalars['String']['input'];
};

export type OrganisationConnection = {
  __typename?: 'OrganisationConnection';
  edges: Array<Organisation>;
  meta: PageInfo;
};

export enum OrganisationCustomerType {
  Enterprise = 'ENTERPRISE',
  Teams = 'TEAMS'
}

export type OrganisationFilter = {
  accessType?: InputMaybe<OrganisationSubscriptionAccessType>;
  hasSubscription?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<OrganisationCustomerType>;
};

export type OrganisationGroup = {
  __typename?: 'OrganisationGroup';
  assignments?: Maybe<Array<Assignment>>;
  createdAt: Scalars['Time']['output'];
  createdBy?: Maybe<User>;
  id: Scalars['ID']['output'];
  members: Array<User>;
  name: Scalars['String']['output'];
  numberOfMembers: Scalars['Int']['output'];
  organisation: Organisation;
  updatedAt: Scalars['Time']['output'];
};

export type OrganisationGroupConnection = {
  __typename?: 'OrganisationGroupConnection';
  edges: Array<OrganisationGroup>;
  meta: PageInfo;
};

export type OrganisationGroupFilter = {
  createdAt?: InputMaybe<TimeRangeFilter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type OrganisationGroupInput = {
  name: Scalars['String']['input'];
};

export type OrganisationInput = {
  coverImage?: InputMaybe<Scalars['ID']['input']>;
  logo?: InputMaybe<Scalars['ID']['input']>;
  name: Scalars['String']['input'];
};

export type OrganisationMemberFilter = {
  /** The users need to be created between these two date range */
  createdBetween?: InputMaybe<TimeRangeFilter>;
  /** Filter the users by the provided email */
  email?: InputMaybe<Scalars['String']['input']>;
  /** Retrieve users by a specific group id */
  groupId?: InputMaybe<Scalars['ID']['input']>;
  /** If specified it will filter the users to either admin/not-admin or both */
  isAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  /** If specified it will filter the users to either billable/not-billable or both */
  isBillable?: InputMaybe<Scalars['Boolean']['input']>;
  /** The number of users returned */
  limit?: InputMaybe<Scalars['Int']['input']>;
  /** Filter the users by name */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Offset pagination */
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Status of user account. If specified, it can be either BLOCKED, ACTIVE or PENDING ACTIVATION. */
  status?: InputMaybe<OrgMemberStatus>;
};

export enum OrganisationRole {
  Admin = 'ADMIN',
  Member = 'MEMBER'
}

export type OrganisationStats = {
  __typename?: 'OrganisationStats';
  data: Array<Maybe<Array<Scalars['String']['output']>>>;
  headers: Array<Scalars['String']['output']>;
};

export enum OrganisationSubscriptionAccessType {
  Contracted = 'CONTRACTED',
  Demo = 'DEMO',
  Pilot = 'PILOT'
}

export type OrganisationSubscriptionInput = {
  accessType: OrganisationSubscriptionAccessType;
  endDate?: InputMaybe<Scalars['Time']['input']>;
  licencesCount: Scalars['Int']['input'];
  orgId: Scalars['ID']['input'];
  startDate?: InputMaybe<Scalars['Time']['input']>;
};

export type OrganisationUserImport = {
  email: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
};

export type OrganisationUserImportResponse = {
  __typename?: 'OrganisationUserImportResponse';
  email: Scalars['String']['output'];
  error: Scalars['String']['output'];
  firstName?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  limit: Scalars['Int']['output'];
  offset: Scalars['Int']['output'];
  recommendationId?: Maybe<Scalars['String']['output']>;
  total: Scalars['Int']['output'];
};

export type Permission = {
  __typename?: 'Permission';
  createdAt: Scalars['Time']['output'];
  deletedAt?: Maybe<Scalars['Time']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  identifier: PermissionIdentifier;
  name: Scalars['String']['output'];
  updatedAt: Scalars['Time']['output'];
};

export enum PermissionIdentifier {
  CreateCustomContent = 'CREATE_CUSTOM_CONTENT',
  CreateEditAssignments = 'CREATE_EDIT_ASSIGNMENTS',
  EditUsersAndGroups = 'EDIT_USERS_AND_GROUPS',
  ExcludeFromReports = 'EXCLUDE_FROM_REPORTS',
  SetAccessLevels = 'SET_ACCESS_LEVELS',
  ViewAndExportStatistics = 'VIEW_AND_EXPORT_STATISTICS'
}

export type PermissionInput = {
  id: Scalars['ID']['input'];
  isAllowed: Scalars['Boolean']['input'];
};

export type PermissionStatus = {
  __typename?: 'PermissionStatus';
  isAllowed?: Maybe<Scalars['Boolean']['output']>;
  permission?: Maybe<Permission>;
};

export enum Persona {
  CarrerCalvin = 'CARRER_CALVIN',
  CeoToBeCarl = 'CEO_TO_BE_CARL',
  CorporateCharlie = 'CORPORATE_CHARLIE',
  CuriousChristina = 'CURIOUS_CHRISTINA',
  ImproverIan = 'IMPROVER_IAN',
  NetworkNatalie = 'NETWORK_NATALIE'
}

export type PersonaConnection = {
  __typename?: 'PersonaConnection';
  edges: Array<PersonaQuestionAnswer>;
  meta: PageInfo;
};

export type PersonaQuestion = {
  __typename?: 'PersonaQuestion';
  id: Scalars['ID']['output'];
  imageUri: Scalars['String']['output'];
  question: Scalars['String']['output'];
};

export type PersonaQuestionAnswer = {
  __typename?: 'PersonaQuestionAnswer';
  createdAt: Scalars['Time']['output'];
  id: Scalars['ID']['output'];
  question: PersonaQuestion;
  result: Scalars['Boolean']['output'];
};

export type PieDataPoint = {
  __typename?: 'PieDataPoint';
  id: Scalars['ID']['output'];
  label: Scalars['String']['output'];
  value: Scalars['Int']['output'];
};

export type Podcast = {
  __typename?: 'Podcast';
  /**
   * The amount of time spent on by users
   * @deprecated Use timeSpentOnByUsers insteads
   */
  activityCount: Scalars['Int']['output'];
  /** Available languages on the podcast */
  audioAvailableLanguages: Array<Language>;
  categories: Array<Category>;
  /** Comments on content */
  comments: CommentCursorConnection;
  /** Tells whether content is rated by user or not */
  contentRatingByUser: ContentVote;
  contentSegments: Array<ContentSegment>;
  createdAt: Scalars['Time']['output'];
  deletedAt?: Maybe<Scalars['Time']['output']>;
  /** The number of downvotes the content piece has received */
  downvoteCount: Scalars['Int']['output'];
  entryLevel: EntryLevelValue;
  episodes: Array<Episode>;
  experts: Array<Expert>;
  hostedBy?: Maybe<Array<Maybe<User>>>;
  id: Scalars['ID']['output'];
  image?: Maybe<Image>;
  isFeatured: Scalars['Boolean']['output'];
  /** @deprecated No longer applicable */
  isFree: Scalars['Boolean']['output'];
  /** isSensitive represents extra filter on fetching events to make person privacy intact */
  isSensitive: Scalars['Boolean']['output'];
  learningPaths: LearningPathConnection;
  length: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  notificationPreference: NotificationPreferenceState;
  numberOfComments: Scalars['Int']['output'];
  /** The number of reviews the content piece as received */
  numberOfReviews: Scalars['Int']['output'];
  /** Which organisation this event is available for. If no organisation then it's a public event */
  organisation?: Maybe<Organisation>;
  /** Which groups within an organisation this event is available for. */
  organisationGroups: Array<OrganisationGroup>;
  preamble: Scalars['String']['output'];
  publishedAt?: Maybe<Scalars['Time']['output']>;
  /** Averge rating from 1-5 the content piece has received */
  rating: Scalars['Float']['output'];
  /** Which regions the content piece can be viewed in */
  regionRestrictions: Array<Scalars['String']['output']>;
  /** Retrieve content that is related to this content piece */
  relatedContent: Array<ContentCard>;
  /** URL Friendly slug that can be used as a unique identifier */
  slug: Scalars['String']['output'];
  /** The amount of time spent on by users */
  timeSpentOnByUsers: Scalars['Int']['output'];
  /** Available languages on the podcast's transcripts */
  transcriptAvailableLanguages: Array<Language>;
  /** The transcript file of the podcast ( default english) */
  transcripts: PodcastTranscript;
  type: ContentType;
  updatedAt: Scalars['Time']['output'];
  /** The number of upvotes the content piece has received */
  upvoteCount: Scalars['Int']['output'];
  userContentTracking: UserContentTracking;
};


export type PodcastCommentsArgs = {
  afterCursor?: InputMaybe<Scalars['String']['input']>;
  beforeCursor?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
};


export type PodcastEpisodesArgs = {
  language?: InputMaybe<Scalars['String']['input']>;
};


export type PodcastLearningPathsArgs = {
  filter: LearningPathFilter;
  sorting?: InputMaybe<SortOrdering>;
};


export type PodcastLengthArgs = {
  language?: InputMaybe<Scalars['String']['input']>;
};


export type PodcastNotificationPreferenceArgs = {
  type: NotificationType;
};


export type PodcastPublishedAtArgs = {
  language?: InputMaybe<Scalars['String']['input']>;
};


export type PodcastRelatedContentArgs = {
  limit: Scalars['Int']['input'];
};


export type PodcastTranscriptsArgs = {
  language?: InputMaybe<Scalars['String']['input']>;
};

export type PodcastAudioInput = {
  episodeName: Scalars['String']['input'];
  publishedAt?: InputMaybe<Scalars['Time']['input']>;
  /** s3PresignedUrl path in s3 received after uploading the video via pre signed url */
  s3PresignedUrl?: InputMaybe<Scalars['String']['input']>;
};

export type PodcastConnection = {
  __typename?: 'PodcastConnection';
  edges: Array<Podcast>;
  meta: PageInfo;
};

export type PodcastFilter = {
  categories?: InputMaybe<Array<Scalars['ID']['input']>>;
  entryLevel?: InputMaybe<Array<EntryLevelValue>>;
  experts?: InputMaybe<Array<Scalars['ID']['input']>>;
  includeDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  /** includeSensitiveContent filter the content basis of sensitivity of content */
  includeSensitiveContent?: InputMaybe<Scalars['Boolean']['input']>;
  languages?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  onlyRated?: InputMaybe<Scalars['Boolean']['input']>;
  organisationGroups?: InputMaybe<Array<Scalars['ID']['input']>>;
  organisationID?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type PodcastInput = {
  categories: Array<Scalars['ID']['input']>;
  contentSegments: Array<ContentSegmentInput>;
  entryLevel: EntryLevelValue;
  experts: Array<Scalars['ID']['input']>;
  hostedBy?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  image: Scalars['String']['input'];
  /** isSensitive represents extra filter on fetching events to make person privacy intact */
  isSensitive: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  organisationGroups?: InputMaybe<Array<Scalars['ID']['input']>>;
  organisationID?: InputMaybe<Scalars['ID']['input']>;
  preamble: Scalars['String']['input'];
  publishedAt?: InputMaybe<Scalars['Time']['input']>;
  /** Which regions the content piece can be viewed in */
  regionRestrictions?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Tags represents hash tags which will be attached to content for better search and better content delivery */
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type PodcastTranscript = {
  __typename?: 'PodcastTranscript';
  language: Scalars['String']['output'];
  length?: Maybe<Scalars['Int']['output']>;
  publishedAt?: Maybe<Scalars['Time']['output']>;
  transcripts: Array<Transcript>;
};

export type PodcastTranscriptInput = {
  page: Scalars['String']['input'];
  publishedAt?: InputMaybe<Scalars['Time']['input']>;
};

export type PollQuestionAnswer = {
  /** The answer provided by the user */
  answerId: Scalars['ID']['input'];
  /** The question id displayed to the user */
  questionId: Scalars['ID']['input'];
};

export type PollQuestionAnswerOption = {
  /** The answer text that is displayed to the user */
  answer: Scalars['String']['input'];
  /**
   * Unique identifier of the poll question answer
   *
   * This should be NULL when creating new poll questions and must be provided when updating
   */
  id?: InputMaybe<Scalars['ID']['input']>;
  /** The image to display if the question type is MCQ (Multiple choice question) if the type is boolean it's not used. */
  imageID?: InputMaybe<Scalars['ID']['input']>;
};

export type PollQuestionAnswerOptions = {
  __typename?: 'PollQuestionAnswerOptions';
  /** The poll question answer displayed to the user */
  answer: Scalars['String']['output'];
  /** Unique answer identifier */
  id: Scalars['ID']['output'];
  /** The image to be displayed when asking the question */
  image?: Maybe<Image>;
  /** Vote count represents number of user selected this particular opiton for answer. */
  voteCount: Scalars['Int']['output'];
};

export type PollQuestionConnection = {
  __typename?: 'PollQuestionConnection';
  edges: Array<PollQuestionResponse>;
  meta: PageInfo;
};

export type PollQuestionFilter = {
  /** Filter the question basis of time frame */
  activeFrom?: InputMaybe<Scalars['Time']['input']>;
  /** Filter the question basis of time frame */
  activeUntil?: InputMaybe<Scalars['Time']['input']>;
  /** Filter already answered question bases on authenticated user */
  excludeAlreadyAnswered?: InputMaybe<Scalars['Boolean']['input']>;
  inAppDisplay?: InputMaybe<Scalars['Boolean']['input']>;
  /** The number of items to return */
  limit: Scalars['Int']['input'];
  /** Offset in the pagination */
  offset: Scalars['Int']['input'];
  /** Filter the question basis of polling purpose either it can be daily polls or for onboarding purpose */
  purpose?: InputMaybe<ShowOnScreenType>;
  /** Query the question */
  query?: InputMaybe<Scalars['String']['input']>;
  /** Filter the question basis of question type */
  questionType?: InputMaybe<QuestionType>;
};

export type PollQuestionInput = {
  /** Filter the question basis of time frame */
  activeFrom: Scalars['Time']['input'];
  /** Filter the question basis of time frame */
  activeUntil: Scalars['Time']['input'];
  /** The different alternatives to answer with */
  answerOptions: Array<PollQuestionAnswerOption>;
  /** An image ID should be provided if the QuestionType is BOOLEAN since it's a yes or no question */
  imageID?: InputMaybe<Scalars['ID']['input']>;
  /** Define the purpose of the polls like daily polls onboarding as so on. */
  purpose: ShowOnScreenType;
  /** The question displayed to the user */
  question: Scalars['String']['input'];
  /** Filter the question basis of question type */
  questionType: QuestionType;
};

export type PollQuestionResponse = {
  __typename?: 'PollQuestionResponse';
  /** If the current question is active or not */
  active: Scalars['Boolean']['output'];
  /** Start time of the poll question */
  activeFrom: Scalars['Time']['output'];
  /** End time of the poll question */
  activeUntil: Scalars['Time']['output'];
  /** A list of alternatives for the user to answer the poll with */
  answerOptions: Array<PollQuestionAnswerOptions>;
  /** The name of the clevertap user property in which we want to persist this answer */
  clevertapKey: Scalars['String']['output'];
  /** The unique identifier of the poll question */
  id: Scalars['ID']['output'];
  /** The image to be displayed when asking the question */
  image?: Maybe<Image>;
  /** Define the purpose of the polls like daily polls onboarding as so on. */
  purpose: ShowOnScreenType;
  /** The question displayed to the user */
  question: Scalars['String']['output'];
  /** Which type of question this is */
  questionType: QuestionType;
  /** The selected answer that the authenticated user voted for */
  selectedAnswer?: Maybe<PollQuestionAnswerOptions>;
};

export type PollSuggestion = {
  suggestion: Scalars['String']['input'];
};

export type Post = FeedContent & {
  __typename?: 'Post';
  attachments: Array<Maybe<FeedPostAttachments>>;
  comments: CommentCursorConnection;
  createdAt: Scalars['Time']['output'];
  deletedAt?: Maybe<Scalars['Time']['output']>;
  /** description will be null if it's instant repost */
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** Information about the users mentioned in the post */
  mentions: Array<Mention>;
  numberOfComments: Scalars['Int']['output'];
  /** numberOfInstantRepostsByUser will show the number of instant reposts done by current user */
  numberOfInstantRepostsByUser: Scalars['Int']['output'];
  numberOfReposts: Scalars['Int']['output'];
  /** numberOfRepostsWithThoughtsByUser will show the number of reposts with thoughts done by current user */
  numberOfRepostsWithThoughtsByUser: Scalars['Int']['output'];
  parent?: Maybe<Post>;
  privacySettings: PrivacySettings;
  reactions: ReactionsSummary;
  reposts: FeedContentConnection;
  updatedAt?: Maybe<Scalars['Time']['output']>;
  user: User;
};


export type PostCommentsArgs = {
  pagination?: InputMaybe<CursorPaginationInput>;
};


export type PostRepostsArgs = {
  pagination?: InputMaybe<CursorPaginationInput>;
};

export type PostActivity = FeedContent & {
  __typename?: 'PostActivity';
  activityType: PostActivityType;
  /** comment is only available if ActivityType is either COMMENTED or REPLIED */
  comment?: Maybe<Comment>;
  createdAt: Scalars['Time']['output'];
  id: Scalars['ID']['output'];
  post: Post;
  user: User;
};

export enum PostActivityType {
  Commented = 'COMMENTED',
  Reacted = 'REACTED',
  Replied = 'REPLIED',
  Reposted = 'REPOSTED'
}

export type PostComment = {
  /** To be deprecated: Use raw text instead */
  comment: Scalars['String']['input'];
  mentions?: InputMaybe<Array<InputMaybe<MentionInput>>>;
  parentComment?: InputMaybe<Scalars['ID']['input']>;
  rawText?: InputMaybe<Scalars['String']['input']>;
  referenceId: Scalars['ID']['input'];
  type: CommentType;
};

export type PreSignedUploadUrl = {
  __typename?: 'PreSignedUploadUrl';
  /** How long the URL is valid for in seconds */
  expiresIn: Scalars['Int']['output'];
  /** Copy these exact headers to the request when uploading and DO NOT modify or it will fail with a 403 error */
  headers: Scalars['Map']['output'];
  /** Target this URL when doing the upload */
  url: Scalars['String']['output'];
};

export enum PrivacySettings {
  Organisation = 'ORGANISATION',
  OrganisationAnnouncement = 'ORGANISATION_ANNOUNCEMENT',
  PlatformAnnouncement = 'PLATFORM_ANNOUNCEMENT',
  Public = 'PUBLIC'
}

export enum ProductTourState {
  DoNotShow = 'DO_NOT_SHOW',
  Finished = 'FINISHED',
  RemindLater = 'REMIND_LATER',
  ShowAround = 'SHOW_AROUND'
}

export type ProductTourTracking = {
  __typename?: 'ProductTourTracking';
  /** Unique identifier makes the apollo cache happy */
  id: Scalars['ID']['output'];
  /** Indicates the step number the user is at in the onboarding journey */
  journeyProgress: Scalars['Int']['output'];
  /** This is used in conjunction with the REMIND_LATER, and the frontend should show the tour again after this value */
  showAgainAfter?: Maybe<Scalars['Time']['output']>;
  /** This tells when user started the product tour, frontend will use in places like not showing onboarding video after 7 days etc. */
  startedAt?: Maybe<Scalars['Time']['output']>;
  /** Indicates the tour preference set by the user. */
  state: ProductTourState;
  /** This is the stream that should be viewed as part of the onboarding product tour */
  stream: Stream;
  /** Indicates the type of user. Can be either B2B or B2C */
  userType: UserType;
};

export type Query = {
  __typename?: 'Query';
  assignment: Assignment;
  /** list assignments that the content belongs too */
  assignmentsForContent: AssignmentConnection;
  categories: CategoryConnection;
  category?: Maybe<Category>;
  /** Retrieve a comment by it's ID */
  chat: Chat;
  /** A group of users i.e cohort that are going on a trail together, a user can be part of multiple cohorts that do the same trail */
  cohort: Cohort;
  cohorts: CohortConnection;
  /** Retrieve a comment by it's ID */
  comment: Comment;
  /** Retrieve the comment as well as the comments surrounding it */
  commentsSurroundingID: SurroundingCommentsConnection;
  /** This will change only to accept id in the future once the new website has been released. */
  contentCard: ContentCard;
  contentCards: ContentConnection;
  contentRating: ContentRatingConnection;
  coupon: Coupon;
  coupons?: Maybe<CouponConnection>;
  /** @deprecated Dont use this because we now have an array of featured content in the app */
  currentlyFeaturedContent?: Maybe<ContentCard>;
  /** @deprecated Dont use this because we now have an array of featured content in the app */
  currentlyFeaturedContentWithConfig?: Maybe<CurrentlyFeaturedContent>;
  /** this will be change to only accept ID in new website */
  ebook?: Maybe<Ebook>;
  ebooks: EbookConnection;
  /** this will be change to only accept ID in new website */
  event?: Maybe<Event>;
  events: EventConnection;
  /** this will be change to only accept ID in new website */
  expert?: Maybe<Expert>;
  experts: ExpertCollection;
  featuredContent?: Maybe<FeaturedContent>;
  featuredContentEntries: FeaturedContentConnection;
  feed?: Maybe<FeedConnection>;
  feedById: FeedActivity;
  feedContentById: FeedContent;
  /**
   * feedV2 is used to display all feed contents from users
   * that were followed. It is meant to replace feed query and
   * it shows the content activities, posts and post activities;
   * instead of only content activities in feed query.
   */
  feedV2: FeedContentConnection;
  getLearningPathsByUserTracking: LearningPathConnection;
  iamRole?: Maybe<IamRole>;
  /** Retrieve an images by it's identifier */
  image?: Maybe<Image>;
  images: ImageConnection;
  languages: Array<Language>;
  learningPath?: Maybe<LearningPath>;
  learningPaths: LearningPathConnection;
  /** Retrieve the life goal by ID */
  lifegoal?: Maybe<Lifegoal>;
  /** Retrieve the life goals */
  lifegoals: LifegoalCollection;
  listStripePromoCode?: Maybe<Array<StripePromotionCode>>;
  /** Currently authenticated user */
  me?: Maybe<User>;
  /**
   * Retrieve the channel tab configuration
   *
   * Note: the id should be the same as the entityId of the channel tab
   */
  msTeamsFollowTopicTab: MSteamsChannelTabFollowTopic;
  organisation: Organisation;
  organisationGroup?: Maybe<OrganisationGroup>;
  organisations: OrganisationConnection;
  /** query to fetch all the permissions info that system support currently */
  permissions: Array<Permission>;
  /** this will be change to only accept ID in new website */
  podcast?: Maybe<Podcast>;
  podcasts: PodcastConnection;
  /** Retrieve a specific poll question by it's unique id */
  pollQuestion: PollQuestionResponse;
  /** Retrieve all the metadata questions to ask the users */
  pollQuestions: PollQuestionConnection;
  /**
   * The promoted learning path of this month
   *
   * Note: This is nullable
   */
  promotedLearningPathOfTheMonth?: Maybe<MonthlyPromotedLearningPath>;
  /** QuerySuggestion This will help you to get query suggestion on heading and content fields */
  querySuggestion: Array<Scalars['String']['output']>;
  /** scheduledLivestreamEvents will list all events within +-24hours that have reserved livestream created with the creator as a host. */
  scheduledLivestreamEvents: EventConnection;
  /** Retrieve a content by slug and content-type */
  slug?: Maybe<SlugContent>;
  /** this will be change to only accept ID in new website */
  stream?: Maybe<Stream>;
  streamChatMessage?: Maybe<StreamChatMessage>;
  streamChatMessages: Array<Maybe<StreamChatMessage>>;
  streams: StreamConnection;
  subscriptionPlan: SubscriptionPlan;
  subscriptionPlans: SubscriptionPlanConnection;
  subscriptions: SubscriptionConnection;
  /** TODO: Need confirmation from nellie what will be the filter to list users */
  suggestUsersForCohort?: Maybe<UserCollection>;
  /** A list of suggestion onboarding content that we display to the users when they first login to tigerhall */
  suggestedOnBoardingContent: ContentConnection;
  /** user follow suggestion */
  suggestedUsersToFollow: FollowUserSuggestions;
  /** List of tax rates for admin available with different filters */
  taxRates: TaxRateConnection;
  /** Return specific timeline details for the cohort */
  timelineEntry: Timeline;
  user?: Maybe<User>;
  /** Retrieve all the tax rates available for the user's CF countryCode */
  userTaxRates: TaxRateConnection;
  users: UserCollection;
  /** Retrieve list of users who can livestream */
  usersWhoCanLivestream: UserCollection;
  /** query to show streams in watch section on marketing website */
  watchStreams: StreamConnection;
};


export type QueryAssignmentArgs = {
  id: Scalars['ID']['input'];
};


export type QueryAssignmentsForContentArgs = {
  contentType: ContentType;
  id: Scalars['ID']['input'];
};


export type QueryCategoriesArgs = {
  filter?: InputMaybe<CategoryFilter>;
  sorting?: InputMaybe<SortOrdering>;
};


export type QueryCategoryArgs = {
  id: Scalars['String']['input'];
};


export type QueryChatArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCohortArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCohortsArgs = {
  filter?: InputMaybe<CohortFilter>;
  pagination?: InputMaybe<CursorPaginationInput>;
};


export type QueryCommentArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCommentsSurroundingIdArgs = {
  afterLimit?: InputMaybe<Scalars['Int']['input']>;
  beforeLimit?: InputMaybe<Scalars['Int']['input']>;
  commentId: Scalars['ID']['input'];
};


export type QueryContentCardArgs = {
  contentType?: InputMaybe<ContentType>;
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryContentCardsArgs = {
  filter?: InputMaybe<ContentCardsFilter>;
  sorting?: InputMaybe<ContentCardsSorting>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type QueryContentRatingArgs = {
  contentId: Scalars['String']['input'];
  sorting?: InputMaybe<SortOrdering>;
};


export type QueryCouponArgs = {
  code: Scalars['String']['input'];
};


export type QueryCouponsArgs = {
  filter?: InputMaybe<CouponFilter>;
  sorting?: InputMaybe<SortOrdering>;
};


export type QueryEbookArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryEbooksArgs = {
  filter?: InputMaybe<EbookFilter>;
  sorting?: InputMaybe<SortOrdering>;
};


export type QueryEventArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryEventsArgs = {
  filter?: InputMaybe<EventFilter>;
  sorting?: InputMaybe<SortOrdering>;
};


export type QueryExpertArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryExpertsArgs = {
  filter?: InputMaybe<ExpertFilter>;
  sorting?: InputMaybe<SortOrdering>;
};


export type QueryFeaturedContentArgs = {
  id: Scalars['String']['input'];
};


export type QueryFeaturedContentEntriesArgs = {
  filter?: InputMaybe<FeaturedContentFilter>;
  sorting?: InputMaybe<SortOrdering>;
};


export type QueryFeedArgs = {
  filter: FeedFilter;
};


export type QueryFeedByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryFeedContentByIdArgs = {
  id: Scalars['ID']['input'];
  type: FeedContentType;
};


export type QueryFeedV2Args = {
  pagination?: InputMaybe<CursorPaginationInput>;
};


export type QueryGetLearningPathsByUserTrackingArgs = {
  filter?: InputMaybe<UserCollectionTrackingFilter>;
  sorting?: InputMaybe<SortOrdering>;
};


export type QueryIamRoleArgs = {
  id: Scalars['ID']['input'];
};


export type QueryImageArgs = {
  id: Scalars['String']['input'];
};


export type QueryImagesArgs = {
  filter?: InputMaybe<ImageFilter>;
  sorting?: InputMaybe<SortOrdering>;
};


export type QueryLearningPathArgs = {
  id: Scalars['String']['input'];
};


export type QueryLearningPathsArgs = {
  filter?: InputMaybe<LearningPathFilter>;
  sorting?: InputMaybe<SortOrdering>;
};


export type QueryLifegoalArgs = {
  id: Scalars['String']['input'];
};


export type QueryLifegoalsArgs = {
  filter?: InputMaybe<LifegoalFilter>;
  sorting?: InputMaybe<SortOrdering>;
};


export type QueryListStripePromoCodeArgs = {
  input: ListStripePromotionCodeInput;
};


export type QueryMsTeamsFollowTopicTabArgs = {
  id: Scalars['ID']['input'];
};


export type QueryOrganisationArgs = {
  id: Scalars['String']['input'];
};


export type QueryOrganisationGroupArgs = {
  id: Scalars['String']['input'];
};


export type QueryOrganisationsArgs = {
  filter?: InputMaybe<OrganisationFilter>;
  sorting?: InputMaybe<SortOrdering>;
};


export type QueryPodcastArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPodcastsArgs = {
  filter?: InputMaybe<PodcastFilter>;
  sorting?: InputMaybe<SortOrdering>;
};


export type QueryPollQuestionArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPollQuestionsArgs = {
  filter?: InputMaybe<PollQuestionFilter>;
};


export type QueryQuerySuggestionArgs = {
  query: Scalars['String']['input'];
};


export type QueryScheduledLivestreamEventsArgs = {
  sorting?: InputMaybe<SortOrdering>;
};


export type QuerySlugArgs = {
  contentType: ContentType;
  slug: Scalars['String']['input'];
};


export type QueryStreamArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryStreamChatMessageArgs = {
  id: Scalars['String']['input'];
};


export type QueryStreamChatMessagesArgs = {
  id: Scalars['String']['input'];
  input?: InputMaybe<StreamChatMessagesFilter>;
};


export type QueryStreamsArgs = {
  filter?: InputMaybe<StreamFilter>;
  sorting?: InputMaybe<SortOrdering>;
};


export type QuerySubscriptionPlanArgs = {
  id: Scalars['String']['input'];
};


export type QuerySubscriptionPlansArgs = {
  filter?: InputMaybe<SubscriptionPlanFilter>;
  sorting?: InputMaybe<SortOrdering>;
};


export type QuerySubscriptionsArgs = {
  filter?: InputMaybe<SubscriptionFilter>;
  sorting?: InputMaybe<SortOrdering>;
};


export type QuerySuggestUsersForCohortArgs = {
  cohortId?: InputMaybe<Scalars['ID']['input']>;
  filter?: InputMaybe<CohortInviteUserListFilter>;
  pagination?: InputMaybe<OffsetPagination>;
};


export type QuerySuggestedUsersToFollowArgs = {
  filter: SuggestedUsersToFollowFilter;
};


export type QueryTaxRatesArgs = {
  filter?: InputMaybe<TaxRateFilter>;
};


export type QueryTimelineEntryArgs = {
  id: Scalars['ID']['input'];
};


export type QueryUserArgs = {
  id: Scalars['String']['input'];
};


export type QueryUsersArgs = {
  filter?: InputMaybe<UserFilter>;
  sorting?: InputMaybe<SortOrdering>;
};


export type QueryUsersWhoCanLivestreamArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
  pagination?: InputMaybe<OffsetPagination>;
};


export type QueryWatchStreamsArgs = {
  pagination?: InputMaybe<OffsetPagination>;
};

export enum QuestionType {
  Boolean = 'BOOLEAN',
  /** Multiple choice question */
  Mcq = 'MCQ'
}

export type ReactableContent = Comment | FeedActivity;

export type ReactionCount = {
  __typename?: 'ReactionCount';
  count: Scalars['Int']['output'];
  emoji: Scalars['String']['output'];
  type: ReactionType;
};

export enum ReactionReferenceType {
  Comment = 'COMMENT',
  Contentactivity = 'CONTENTACTIVITY',
  Post = 'POST'
}

export enum ReactionType {
  Bulb = 'BULB',
  Clap = 'CLAP',
  Heart = 'HEART',
  Llama = 'LLAMA',
  Smile = 'SMILE',
  Think = 'THINK',
  Tiger = 'TIGER'
}

export type ReactionsSummary = {
  __typename?: 'ReactionsSummary';
  reactions: Array<ReactionCount>;
  totalCount: Scalars['Int']['output'];
  /**
   * userReacted exist if user have reacted to the referenceType before.
   * else it will be null.
   */
  userReacted?: Maybe<UserReaction>;
  users: UserReactionConnection;
};


export type ReactionsSummaryUsersArgs = {
  pagination?: InputMaybe<CursorPaginationInput>;
  type?: InputMaybe<ReactionType>;
};

export enum ReportableContentType {
  Comment = 'COMMENT',
  Ebook = 'EBOOK',
  Event = 'EVENT',
  LearningPath = 'LEARNING_PATH',
  Podcast = 'PODCAST',
  Post = 'POST',
  Stream = 'STREAM',
  User = 'USER'
}

export type ResetPasswordFinalizeInput = {
  email: Scalars['String']['input'];
  nonce: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

/** Content that can be searched for */
export type SearchableContent = Ebook | Event | Expert | LearningPath | Podcast | Stream;

export type SearchableContentCollection = {
  __typename?: 'SearchableContentCollection';
  edges: Array<SearchableContent>;
  meta: PageInfo;
};

export enum ShowOnScreenType {
  Dailypolls = 'DAILYPOLLS',
  Onboarding = 'ONBOARDING'
}

/** This presents all the contents that have slug */
export type SlugContent = Category | Ebook | Event | LearningPath | Lifegoal | Podcast | Stream | User;

export type SortOrdering = {
  sorting?: InputMaybe<Array<SortOrderingInput>>;
};

export type SortOrderingInput = {
  direction: Scalars['String']['input'];
  field: Scalars['String']['input'];
};

export enum SpeechVoiceType {
  Female = 'FEMALE',
  Male = 'MALE'
}

export type StatisticsByAssignmentConnection = {
  __typename?: 'StatisticsByAssignmentConnection';
  edges: Array<StatisticsByAssignmentResponse>;
  meta: PageInfo;
};

export type StatisticsByAssignmentFilter = {
  assignmentStatus?: InputMaybe<Array<AssignmentStatus>>;
  assignmentTitle?: InputMaybe<Scalars['String']['input']>;
  createdBetween?: InputMaybe<TimeRangeFilter>;
  limit: Scalars['Int']['input'];
  offset: Scalars['Int']['input'];
  organisationGroupIds?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type StatisticsByAssignmentResponse = {
  __typename?: 'StatisticsByAssignmentResponse';
  assignmentId: Scalars['ID']['output'];
  assignmentTitle: Scalars['String']['output'];
  completionRate: Scalars['Float']['output'];
  durationConsumed: Scalars['Float']['output'];
  isTotal: Scalars['Boolean']['output'];
  percentUsersCompleted: Scalars['Float']['output'];
  percentUsersLiked: Scalars['Float']['output'];
  percentUsersStarted: Scalars['Float']['output'];
  usersAssigned: Scalars['Int']['output'];
  usersCompleted: Scalars['Int']['output'];
  usersStarted: Scalars['Int']['output'];
};

export type StatisticsByGroupConnection = {
  __typename?: 'StatisticsByGroupConnection';
  edges: Array<StatisticsByGroupResponse>;
  meta: PageInfo;
};

export type StatisticsByGroupFilter = {
  assignmentStatus?: InputMaybe<Array<AssignmentStatus>>;
  createdBetween?: InputMaybe<TimeRangeFilter>;
  groupName?: InputMaybe<Scalars['String']['input']>;
  limit: Scalars['Int']['input'];
  offset: Scalars['Int']['input'];
  organisationGroupIds?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type StatisticsByGroupResponse = {
  __typename?: 'StatisticsByGroupResponse';
  assignmentId: Scalars['ID']['output'];
  assignmentTitle: Scalars['String']['output'];
  completionRate: Scalars['Float']['output'];
  durationConsumed: Scalars['Float']['output'];
  groupId: Scalars['ID']['output'];
  groupName: Scalars['String']['output'];
  isTotal: Scalars['Boolean']['output'];
  percentUsersLiked: Scalars['Float']['output'];
  totalDurationConsumed: Scalars['Float']['output'];
  usersAssigned: Scalars['Int']['output'];
  usersCompleted: Scalars['Int']['output'];
  usersStarted: Scalars['Int']['output'];
};

export type StatisticsByUserConnection = {
  __typename?: 'StatisticsByUserConnection';
  edges: Array<StatisticsByUserResponse>;
  meta: PageInfo;
};

export type StatisticsByUserFilter = {
  assignmentStatus?: InputMaybe<Array<AssignmentStatus>>;
  createdBetween?: InputMaybe<TimeRangeFilter>;
  limit: Scalars['Int']['input'];
  offset: Scalars['Int']['input'];
  organisationGroupIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  userName?: InputMaybe<Scalars['String']['input']>;
};

export type StatisticsByUserResponse = {
  __typename?: 'StatisticsByUserResponse';
  assignmentAssigned: Scalars['Int']['output'];
  assignmentCompleted: Scalars['Int']['output'];
  assignmentId: Scalars['ID']['output'];
  assignmentStarted: Scalars['Int']['output'];
  assignmentTitle: Scalars['String']['output'];
  completionRate: Scalars['Float']['output'];
  dateCompletion?: Maybe<Scalars['Time']['output']>;
  durationConsumed: Scalars['Float']['output'];
  email: Scalars['String']['output'];
  isTotal: Scalars['Boolean']['output'];
  userId: Scalars['ID']['output'];
  userName: Scalars['String']['output'];
};

export type Stream = {
  __typename?: 'Stream';
  /**
   * The amount of time spent on by users
   * @deprecated Use timeSpentOnByUsers insteads
   */
  activityCount: Scalars['Int']['output'];
  /** Lists all the available languages available on this stream for audio */
  audioAvailableLanguages: Array<Language>;
  /** Categories associated to the content */
  categories: Array<Category>;
  /** Agora channel identifier */
  channel: Scalars['String']['output'];
  /** Comments on content */
  comments: CommentCursorConnection;
  /** Tells whether content is rated by user or not */
  contentRatingByUser: ContentVote;
  /** These are short segments that we display beneth the content card */
  contentSegments: Array<ContentSegment>;
  /** When the stream was created */
  createdAt: Scalars['Time']['output'];
  /** The user that created the live stream */
  createdBy?: Maybe<Expert>;
  /** When the stream was deleted */
  deletedAt?: Maybe<Scalars['Time']['output']>;
  /** The number of downvotes the content piece has received */
  downvoteCount: Scalars['Int']['output'];
  /** Level of the content */
  entryLevel: EntryLevelValue;
  /** The experts associated with the publish content */
  experts: Array<Expert>;
  /** List of users who have hosted the stream. */
  hostedBy?: Maybe<Array<Maybe<User>>>;
  /**
   * A list of hosts in the stream, their order and if they have accepted the invite.
   * This should only be used during the part where the stream is live
   */
  hosts: Array<StreamHost>;
  id: Scalars['ID']['output'];
  /** Image used when display a conten card for the stream */
  image?: Maybe<Image>;
  /**
   * If users without a subscription can view the stream
   * @deprecated No longer applicable
   */
  isFree: Scalars['Boolean']['output'];
  /** isSensitive represents extra filter on fetching events to make person privacy intact */
  isSensitive: Scalars['Boolean']['output'];
  /** Learning paths associated to this stream */
  learningPaths: LearningPathConnection;
  /** Length of the stream in seconds */
  length: Scalars['Int']['output'];
  /** Messages that were sent by users during the live stream */
  messages: Array<StreamChatMessage>;
  /** Name of the stream as selected by expert or tigerhall */
  name: Scalars['String']['output'];
  notificationPreference: NotificationPreferenceState;
  numberOfComments: Scalars['Int']['output'];
  /** The number of reviews the content piece as received */
  numberOfReviews: Scalars['Int']['output'];
  /** Which organisation this event is available for. If no organisation then it's a public event */
  organisation?: Maybe<Organisation>;
  /** Which groups within an organisation this event is available for. */
  organisationGroups: Array<OrganisationGroup>;
  /** Short introduction */
  preamble: Scalars['String']['output'];
  /** When the stream was published */
  publishedAt?: Maybe<Scalars['Time']['output']>;
  /** Averge rating from 1-5 the content piece has received */
  rating: Scalars['Float']['output'];
  /** Which regions the content piece can be viewed in */
  regionRestrictions: Array<Scalars['String']['output']>;
  /** Retrieve content that is related to this content piece */
  relatedContent: Array<ContentCard>;
  /** URL Friendly slug that can be used as a unique identifier */
  slug: Scalars['String']['output'];
  /**
   * The stream transitions through a number of states while being created as a live stream or
   * directly from the authoring tools
   */
  status: StreamStatus;
  /**
   * The subtitle url to the video on S3 in the provided language
   * If language not provided, it defaults to users preferred language and if that is not available too, finally defaults to EN
   */
  subtitle: StreamSubtitles;
  /** Lists all the available languages available on this stream for subtitles */
  subtitleAvailableLanguages: Array<Language>;
  /** The amount of time spent on by users */
  timeSpentOnByUsers: Scalars['Int']['output'];
  /** Whether any tranlsation job is running for this stream subtitle or not */
  translationOngoing: Scalars['Boolean']['output'];
  type: ContentType;
  /** When the stream was last updated */
  updatedAt: Scalars['Time']['output'];
  /** The number of upvotes the content piece has received */
  upvoteCount: Scalars['Int']['output'];
  /** The authenticated users current progress tracking */
  userContentTracking: UserContentTracking;
  /**
   * The video url to the video on S3 in the provided language
   * If language not provided, it defaults to users preferred language and if that is not available too, finally defaults to EN
   */
  video: StreamMedia;
  /** The URL to the video on S3 in the default language EN */
  videoUrl: Scalars['String']['output'];
  /** When a stream transitioned from backstage to live */
  wentLiveAt?: Maybe<Scalars['Time']['output']>;
};


export type StreamCommentsArgs = {
  afterCursor?: InputMaybe<Scalars['String']['input']>;
  beforeCursor?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
};


export type StreamLearningPathsArgs = {
  filter: LearningPathFilter;
  sorting?: InputMaybe<SortOrdering>;
};


export type StreamLengthArgs = {
  language?: InputMaybe<Scalars['String']['input']>;
};


export type StreamMessagesArgs = {
  limit: Scalars['Int']['input'];
};


export type StreamNotificationPreferenceArgs = {
  type: NotificationType;
};


export type StreamPublishedAtArgs = {
  language?: InputMaybe<Scalars['String']['input']>;
};


export type StreamRelatedContentArgs = {
  limit: Scalars['Int']['input'];
};


export type StreamSubtitleArgs = {
  language?: InputMaybe<Scalars['String']['input']>;
};


export type StreamVideoArgs = {
  language?: InputMaybe<Scalars['String']['input']>;
};

export type StreamChatMessage = {
  __typename?: 'StreamChatMessage';
  content: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  streamId: Scalars['ID']['output'];
  timestamp: Scalars['Int']['output'];
  user: User;
};

export type StreamChatMessageInput = {
  content: Scalars['String']['input'];
  streamId: Scalars['ID']['input'];
};

export type StreamChatMessagesFilter = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type StreamConnection = {
  __typename?: 'StreamConnection';
  edges: Array<Stream>;
  meta: PageInfo;
};

export type StreamFilter = {
  categories?: InputMaybe<Array<Scalars['ID']['input']>>;
  createdBefore?: InputMaybe<Scalars['Time']['input']>;
  entryLevel?: InputMaybe<Array<EntryLevelValue>>;
  experts?: InputMaybe<Array<Scalars['ID']['input']>>;
  includeDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  /** includeSensitiveContent filter the content basis of sensitivity of content */
  includeSensitiveContent?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  onlyRated?: InputMaybe<Scalars['Boolean']['input']>;
  organisationGroups?: InputMaybe<Array<Scalars['ID']['input']>>;
  organisationID?: InputMaybe<Array<Scalars['ID']['input']>>;
  status?: InputMaybe<Array<InputMaybe<StreamStatus>>>;
  uniqueExpertStream?: InputMaybe<Scalars['Boolean']['input']>;
};

export type StreamHost = {
  __typename?: 'StreamHost';
  /** If they have accepted the invite, if null then they have not replied */
  accepted?: Maybe<Scalars['Boolean']['output']>;
  /** The expert profile */
  expert: Expert;
  /** signifies if user is featured host or not */
  isFeatured: Scalars['Boolean']['output'];
  /** Order in which to sort the hosts */
  order: Scalars['Int']['output'];
  /** Agora UID during live stream */
  uid: Scalars['Uint32']['output'];
  /** The users ID */
  userId: Scalars['ID']['output'];
};

export type StreamInput = {
  /** Which categories are related to this stream */
  categories: Array<Scalars['ID']['input']>;
  /** In-depth description of the stream */
  contentSegments: Array<ContentSegmentInput>;
  /** Level of the content being discussed */
  entryLevel: EntryLevelValue;
  /** Experts that are part of this content piece */
  experts: Array<Scalars['ID']['input']>;
  /** List of users hosting the stream */
  hostedBy?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** The image that the stream should have */
  image: Scalars['String']['input'];
  /** isSensitive represents extra filter on fetching events to make person privacy intact */
  isSensitive: Scalars['Boolean']['input'];
  /** Name of the stream */
  name: Scalars['String']['input'];
  /** If only specific groups within the organisation should see the video */
  organisationGroups?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** If the stream should only be visible by a single organisation */
  organisationID?: InputMaybe<Scalars['ID']['input']>;
  /** A brief introduction to the topic */
  preamble: Scalars['String']['input'];
  /** When the stream should be published */
  publishedAt?: InputMaybe<Scalars['Time']['input']>;
  /** Which regions the content piece can be viewed in */
  regionRestrictions?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Tags represents hash tags which will be attached to content for better search and better content delivery */
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type StreamMedia = {
  __typename?: 'StreamMedia';
  language: Scalars['String']['output'];
  length: Scalars['Int']['output'];
  publishedAt?: Maybe<Scalars['Time']['output']>;
  url: Scalars['String']['output'];
};

export type StreamMediaInput = {
  /** When the stream media should be published */
  publishedAt?: InputMaybe<Scalars['Time']['input']>;
  /** s3PresignedUrl path in s3 received after uploading the video via pre signed url */
  s3PresignedUrl?: InputMaybe<Scalars['String']['input']>;
};

export enum StreamStatus {
  /**
   * A stream will transition into this status when startStream is called and user goes in backstage to
   * test out their video etc before going live to the audience
   */
  Backstage = 'BACKSTAGE',
  /** Newly created streams that are going to be used for live streams are created with this status */
  Created = 'CREATED',
  /** Finished is the status assigned to a live stream once the host(s) have stopped streaming */
  Finished = 'FINISHED',
  /** A stream will transition into this status when user is ready to go live an the agora UID is provided */
  Live = 'LIVE',
  /**
   * The status a stream has once it's been transition into a recording, it's also the default status for streams
   * that are not created to be live streams.
   */
  Recording = 'RECORDING',
  /** Future streams that are created from an event are created with this status */
  Reserved = 'RESERVED'
}

export type StreamSubtitles = {
  __typename?: 'StreamSubtitles';
  language: Scalars['String']['output'];
  /** @deprecated Going to be removed. Not applicable for stream subtitles */
  length: Scalars['Int']['output'];
  publishedAt?: Maybe<Scalars['Time']['output']>;
  srtUrl: Scalars['String']['output'];
  /** @deprecated Use srt url instead */
  url: Scalars['String']['output'];
  vttUrl: Scalars['String']['output'];
};

export type StripeCoupon = {
  __typename?: 'StripeCoupon';
  /**
   * if coupon is not active, all promo code that uses this coupon
   * will also automatically be unusable
   */
  active: Scalars['Boolean']['output'];
  createdAt: Scalars['Time']['output'];
  id: Scalars['String']['output'];
  /**
   * indicate max amount of times this coupon and including
   * all it's child promo code can be redeem.
   */
  maxRedemptions: Scalars['Int']['output'];
  /** percentage off discount for this coupon */
  percentOff: Scalars['Float']['output'];
  /** the expiry date for this coupon and all it's child promo code */
  redeemBy?: Maybe<Scalars['Time']['output']>;
  totalRedeemed: Scalars['Int']['output'];
};

/** This presents all the types that can be a stripe customer */
export type StripeCustomer = Organisation | User;

export type StripePromotionCode = {
  __typename?: 'StripePromotionCode';
  /**
   * indicate if the promo code is still usable.
   * Once deactivated, promo code cant be reactivated.
   */
  active: Scalars['Boolean']['output'];
  code: Scalars['String']['output'];
  coupon?: Maybe<StripeCoupon>;
  createdAt: Scalars['Time']['output'];
  /**
   * the customer that has been authorized to use the code.
   * if this is empty, the promo code can be use by any registered stripe customer.
   */
  customer?: Maybe<StripeCustomer>;
  id: Scalars['String']['output'];
  /**
   * indicate max amount of times this promo code can be redeem.
   * each customer can only redeem the promo code once.
   * promo code max redemption must be lower than it's base coupon's.
   */
  maxRedemptions: Scalars['Int']['output'];
  totalRedeemed: Scalars['Int']['output'];
};

export type StripePromotionCodeInput = {
  code: Scalars['String']['input'];
  duration: Scalars['String']['input'];
  maxRedemptions?: InputMaybe<Scalars['Uint64']['input']>;
  onlyFirstTimeTransaction: Scalars['Boolean']['input'];
  organisationIds?: InputMaybe<Array<Scalars['String']['input']>>;
  percentOff: Scalars['Float']['input'];
  redeemableUntil?: InputMaybe<Scalars['Time']['input']>;
  userIds?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type Subscription = {
  __typename?: 'Subscription';
  /** Subscribe to the chat messages of a stream */
  chatMessages?: Maybe<StreamChatMessage>;
  /** Subscribe to the chat messages generic method */
  chatMessagesV2?: Maybe<ChatMessage>;
  /** This subscription pushes out all the on-going live streams that are currently live */
  onGoingStreams: Array<Stream>;
  /** Subscribe to a specific live stream to receive all the updates from it */
  stream?: Maybe<Stream>;
};


export type SubscriptionChatMessagesArgs = {
  streamId: Scalars['ID']['input'];
};


export type SubscriptionChatMessagesV2Args = {
  id: Scalars['ID']['input'];
};


export type SubscriptionStreamArgs = {
  id: Scalars['ID']['input'];
};

export type SubscriptionConnection = {
  __typename?: 'SubscriptionConnection';
  edges: Array<SubscriptionModel>;
  meta: PageInfo;
};

export type SubscriptionFilter = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

/** SubscriptionLevel denotes what type of subscription plan the user belongs to */
export enum SubscriptionLevel {
  /** @deprecated No longer relevant */
  CommunityAccess = 'COMMUNITY_ACCESS',
  /** @deprecated No longer relevant */
  DigitalAccess = 'DIGITAL_ACCESS',
  Enterprise = 'ENTERPRISE',
  /** @deprecated No longer relevant */
  Free = 'FREE',
  /** @deprecated No longer relevant */
  FullAccess = 'FULL_ACCESS',
  Individual = 'INDIVIDUAL',
  Teams = 'TEAMS'
}

export type SubscriptionModel = {
  __typename?: 'SubscriptionModel';
  accessType: OrganisationSubscriptionAccessType;
  billingPeriod?: Maybe<Scalars['String']['output']>;
  cancelAtPeriodEnd: Scalars['Boolean']['output'];
  coupon?: Maybe<Coupon>;
  couponCode?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['Time']['output'];
  currentPeriodEnd?: Maybe<Scalars['Time']['output']>;
  customerId?: Maybe<Scalars['String']['output']>;
  endsAt?: Maybe<Scalars['Time']['output']>;
  /**
   * history list all previous ended (due to exceed subscription duration) or canceled
   * subscriptions
   *
   * only some fields are populated for historical subscriptions which are
   * customerId,subscriptionId,status,startAt,paidAt,currentPeriodEnd,cancelAtPeriodEnd
   */
  history?: Maybe<Array<SubscriptionModel>>;
  id: Scalars['ID']['output'];
  maxSeatsCount: Scalars['Int']['output'];
  paidAt?: Maybe<Scalars['Time']['output']>;
  paymentPlatform: Scalars['String']['output'];
  seats: Scalars['Int']['output'];
  startAt?: Maybe<Scalars['Time']['output']>;
  status: Scalars['String']['output'];
  subscriptionId?: Maybe<Scalars['String']['output']>;
  subscriptionPlan: SubscriptionPlan;
  taxRate: Array<TaxRate>;
  trialUntil?: Maybe<Scalars['Time']['output']>;
  updatedAt: Scalars['Time']['output'];
};

export type SubscriptionPlan = {
  __typename?: 'SubscriptionPlan';
  amount: Scalars['Int']['output'];
  countryCode: Scalars['String']['output'];
  createdAt: Scalars['Time']['output'];
  currency: Scalars['String']['output'];
  deletedAt?: Maybe<Scalars['Time']['output']>;
  /** @deprecated no longer relevant with new subscription types */
  digitalAccess?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  interval: Scalars['Int']['output'];
  show: Scalars['Boolean']['output'];
  stripePlanId: Scalars['String']['output'];
  subscriptionLevel: SubscriptionLevel;
  updatedAt: Scalars['Time']['output'];
};

export type SubscriptionPlanConnection = {
  __typename?: 'SubscriptionPlanConnection';
  edges: Array<SubscriptionPlan>;
  meta: PageInfo;
};

export type SubscriptionPlanFilter = {
  basedOnGeoTagging?: InputMaybe<Scalars['Boolean']['input']>;
  countryCode?: InputMaybe<Scalars['String']['input']>;
  currency?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  show?: InputMaybe<Scalars['Boolean']['input']>;
  subscriptionLevel?: InputMaybe<Scalars['String']['input']>;
};

export type SubscriptionPlanInput = {
  amount: Scalars['Int']['input'];
  countryCode: Scalars['String']['input'];
  currency: Scalars['String']['input'];
  interval: Scalars['Int']['input'];
  show: Scalars['Boolean']['input'];
  subscriptionLevel: Scalars['String']['input'];
};

export enum SubscriptionStatus {
  Active = 'ACTIVE',
  Expired = 'EXPIRED',
  Free = 'FREE',
  Trial = 'TRIAL'
}

export type SuggestedUsersToFollowFilter = {
  /**
   * Include users that the current authenticated user is already following
   *
   * Default: false
   */
  includeUsersAlreadyFollowed?: InputMaybe<Scalars['Boolean']['input']>;
  isAMemberOfSameOrganisation?: InputMaybe<Scalars['Boolean']['input']>;
  isExpert?: InputMaybe<Scalars['Boolean']['input']>;
  limit: Scalars['Int']['input'];
  offset: Scalars['Int']['input'];
  query?: InputMaybe<Scalars['String']['input']>;
};

export type SuggestedUsersToInteractWithFilter = {
  isExpert?: InputMaybe<Scalars['Boolean']['input']>;
  isMemberOfSameOrganisation?: InputMaybe<Scalars['Boolean']['input']>;
  limit: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  offset: Scalars['Int']['input'];
};

export type SurroundingCommentsConnection = {
  __typename?: 'SurroundingCommentsConnection';
  comment: Comment;
  edges: Array<CommentEdge>;
  meta: CursorInfo;
};

export enum TargetType {
  Organisation = 'ORGANISATION',
  User = 'USER'
}

export type TaxRate = {
  __typename?: 'TaxRate';
  active: Scalars['Boolean']['output'];
  country: Scalars['String']['output'];
  created: Scalars['Int']['output'];
  createdAt: Scalars['Time']['output'];
  description?: Maybe<Scalars['String']['output']>;
  displayName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  inclusive: Scalars['Boolean']['output'];
  jurisdiction?: Maybe<Scalars['String']['output']>;
  livemode?: Maybe<Scalars['Boolean']['output']>;
  percentage: Scalars['Float']['output'];
  state?: Maybe<Scalars['String']['output']>;
  stripeTaxRateID: Scalars['String']['output'];
  taxType: Scalars['String']['output'];
  updatedAt: Scalars['Time']['output'];
};

export type TaxRateConnection = {
  __typename?: 'TaxRateConnection';
  edges: Array<TaxRate>;
  meta: PageInfo;
};

export type TaxRateFilter = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  inclusive?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type TimeRangeFilter = {
  from: Scalars['Time']['input'];
  to: Scalars['Time']['input'];
};

/** Shows the timeline of a specific cohort */
export type Timeline = {
  __typename?: 'Timeline';
  /** Count of users currently on the content */
  activeUserCount: Scalars['Int']['output'];
  /** The chat associated to this timeline */
  chat: Chat;
  /** Content */
  content: ContentCard;
  /** Users which will be displayed over the content */
  featuredUsers: Array<User>;
  /** Unique identifier for the timeline */
  id: Scalars['ID']['output'];
  /** List of all the users on the content */
  users: UserCursorCollection;
};


/** Shows the timeline of a specific cohort */
export type TimelineUsersArgs = {
  filter?: InputMaybe<TimelineUserFilter>;
  pagination?: InputMaybe<CursorPaginationInput>;
};

export type TimelineUserFilter = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
};

export type TopCategoryConsumed = {
  __typename?: 'TopCategoryConsumed';
  category?: Maybe<Category>;
  duration?: Maybe<Scalars['Int']['output']>;
};

export type TrackingData = {
  current: Scalars['Int']['input'];
  currentPlacement: Scalars['Int']['input'];
};

export type Transcript = {
  __typename?: 'Transcript';
  index: Scalars['Int']['output'];
  page: Scalars['String']['output'];
};

export type UpdateComment = {
  /** To be deprecated: Use raw text instead */
  comment: Scalars['String']['input'];
  commentId: Scalars['ID']['input'];
  mentions?: InputMaybe<Array<InputMaybe<MentionInput>>>;
  rawText?: InputMaybe<Scalars['String']['input']>;
  type: CommentType;
};

export type UpdateContentUserNote = {
  body: Scalars['String']['input'];
  headline: Scalars['String']['input'];
};

export type UpdateEbookResult = Ebook | NotFoundError | ValidationError;

/** Backoffice needs an API that updates both user and backoffice fields */
export type UpdateExpertUserInput = {
  /** Avatar image ID */
  avatarImage?: InputMaybe<Scalars['ID']['input']>;
  /** Update the users biography */
  biography?: InputMaybe<Scalars['String']['input']>;
  /** Which categories this user is considered to be an expert in */
  categories: Array<Scalars['ID']['input']>;
  /** The users company */
  company?: InputMaybe<Scalars['String']['input']>;
  /** Cover image ID */
  coverImage?: InputMaybe<Scalars['ID']['input']>;
  /**
   * The users email
   *
   * This will be removed from this API Call in the future
   */
  email: Scalars['String']['input'];
  /** facebookLink represents facebook profile url */
  facebookLink?: InputMaybe<Scalars['String']['input']>;
  /** The users first name */
  firstName: Scalars['String']['input'];
  /** twitterHandle represents instagram handle name */
  instagramHandle?: InputMaybe<Scalars['String']['input']>;
  /** If an expert is a mentor */
  isMentor: Scalars['Boolean']['input'];
  /** The users job title */
  jobTitle?: InputMaybe<Scalars['String']['input']>;
  /** The users last name */
  lastName: Scalars['String']['input'];
  /** linkedinLink represents linkedin profile url */
  linkedinLink?: InputMaybe<Scalars['String']['input']>;
  /** If the mentor is available for mentoring this contains some brief information to their capabilities */
  mentorAvailableText: Scalars['String']['input'];
  /** How much the mentor would charge for a session */
  mentorPriceText: Scalars['String']['input'];
  /** If specified only groups within the provided organisation can view this thinkfluencer */
  organisationGroups: Array<Scalars['ID']['input']>;
  /** If specified only users that belong to this organisation can view this thinkfluencer */
  organisationID?: InputMaybe<Scalars['ID']['input']>;
  /** How important the thinkfluencer is when it comes to listen thinkfluencers */
  priority: Scalars['Int']['input'];
  /** If the thinkfluencer is restricted to certain regions */
  restrictedRegions: Array<Scalars['String']['input']>;
  /** Which roles the user should have, this only applies if the updating user is an admin */
  roles?: InputMaybe<Array<Scalars['String']['input']>>;
  /** twitterHandle represents twitter handle name */
  twitterHandle?: InputMaybe<Scalars['String']['input']>;
  /** Link to the users website */
  websiteLink?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateIamRoleResult = IamRole | NotFoundError | ValidationError;

export type UpdatePodcastResult = NotFoundError | Podcast | ValidationError;

export type UpdatePostInput = {
  attachments: Array<InputMaybe<AttachmentInput>>;
  description: Scalars['String']['input'];
  mentions?: InputMaybe<Array<MentionInput>>;
  postId: Scalars['ID']['input'];
  privacy: PrivacySettings;
};

export type UpdateStreamResult = NotFoundError | Stream | ValidationError;

/** Backoffice org admins should be able to update a number of fields on a user */
export type UpdateUserAsOrgAdmin = {
  /** Avatar image ID */
  avatarImage?: InputMaybe<Scalars['ID']['input']>;
  /** Update the users biography */
  biography: Scalars['String']['input'];
  /** The users company */
  company: Scalars['String']['input'];
  /** Cover image ID */
  coverImage?: InputMaybe<Scalars['ID']['input']>;
  /** The users email */
  email: Scalars['String']['input'];
  /** facebookLink represents facebook profile url */
  facebookLink: Scalars['String']['input'];
  /** The users first name */
  firstName: Scalars['String']['input'];
  /** twitterHandle represents instagram handle name */
  instagramHandle: Scalars['String']['input'];
  /** If the user should be able to perform organisation live streams */
  isAbleToLiveStream: Scalars['Boolean']['input'];
  /** If the user should be considered an expert within their own organisation, if called will add the org filter */
  isExpert: Scalars['Boolean']['input'];
  /** The users job title */
  jobTitle: Scalars['String']['input'];
  /** The users last name */
  lastName: Scalars['String']['input'];
  /** linkedinLink represents linkedin profile url */
  linkedinLink: Scalars['String']['input'];
  /** twitterHandle represents twitter handle name */
  twitterHandle: Scalars['String']['input'];
  /** Link to the users website */
  websiteLink: Scalars['String']['input'];
};

export type UpdateUserInput = {
  /** Avatar image ID */
  avatarImage?: InputMaybe<Scalars['ID']['input']>;
  /** Update the users biography */
  biography?: InputMaybe<Scalars['String']['input']>;
  /** The users businessEmail email */
  businessEmail?: InputMaybe<Scalars['String']['input']>;
  /** The users company */
  company?: InputMaybe<Scalars['String']['input']>;
  /** Cover image ID */
  coverImage?: InputMaybe<Scalars['ID']['input']>;
  /**
   * The users email
   *
   * This will be removed from this API Call in the future
   */
  email: Scalars['String']['input'];
  /** facebookLink represents facebook profile url */
  facebookLink?: InputMaybe<Scalars['String']['input']>;
  /** The users first name */
  firstName: Scalars['String']['input'];
  /** twitterHandle represents instagram handle name */
  instagramHandle?: InputMaybe<Scalars['String']['input']>;
  /** The users job title */
  jobTitle?: InputMaybe<Scalars['String']['input']>;
  /** The users last name */
  lastName: Scalars['String']['input'];
  /** linkedinLink represents linkedin profile url */
  linkedinLink?: InputMaybe<Scalars['String']['input']>;
  /** The users mobile number */
  mobileNumber?: InputMaybe<Scalars['String']['input']>;
  /**
   * The users password, if not specific it's not updated.
   *
   * This will be removed in the future
   */
  password?: InputMaybe<Scalars['String']['input']>;
  /** Which roles the user should have, this only applies if the updating user is an admin */
  roles?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Users job seniority */
  seniority?: InputMaybe<Scalars['String']['input']>;
  /** twitterHandle represents twitter handle name */
  twitterHandle?: InputMaybe<Scalars['String']['input']>;
  /** Link to the users website */
  websiteLink?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUserLifegoalsInput = {
  lifegoals?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type UpdateUserProductTourTrackingInput = {
  /**
   * Indicates the step number the user is at in the onboarding journey
   *
   * This should be called after each step
   */
  journeyProgress: Scalars['Int']['input'];
  state: ProductTourState;
};

export type UpsertEbookChaptersAndAudioResult = Ebook | NotFoundError | ValidationError;

export type UpsertEbookChaptersInput = {
  chapters: Array<ChapterInput>;
  language: Scalars['String']['input'];
  publishedAt?: InputMaybe<Scalars['Time']['input']>;
};

export type UpsertPodcastAudioAndTranscriptResult = NotFoundError | Podcast | ValidationError;

export type UpsertStreamMediaInput = {
  /** The StreamID. */
  id: Scalars['ID']['input'];
  /** The language for media / subtitle. */
  language: Scalars['String']['input'];
  /** input related to stream subtitle */
  subtitle?: InputMaybe<StreamMediaInput>;
  /** input related to stream video */
  video?: InputMaybe<StreamMediaInput>;
};

export type UpsertStreamMediaResult = NotFoundError | Stream | ValidationError;

export type User = {
  __typename?: 'User';
  /** @deprecated Use subscription status instead. */
  accessLevel: SubscriptionLevel;
  /** General statistics over all the content pieces the user has been assigned */
  assignmentContentStatistics: Array<UserAssignmentContentStatistics>;
  /** Statistics over how well the user their assignments */
  assignmentStatistics: UserAssignmentStatistics;
  /** Assignments associated to the user */
  assignments: AssignmentConnection;
  authBlockUntil?: Maybe<Scalars['Time']['output']>;
  /** Custom avatar image */
  avatarImage: Image;
  /** Users biography */
  biography?: Maybe<Scalars['String']['output']>;
  blocked: Scalars['Boolean']['output'];
  /** Business email of the user */
  businessEmail: Scalars['String']['output'];
  /** Trail cohorts that the user belong to */
  cohorts: CohortConnection;
  company: Scalars['String']['output'];
  /**
   * Indicates whether the user has completed his/her onboarding process
   * @deprecated Replaced by isOnboardingCompleted to match proper naming conventions
   */
  completedOnboarding: Scalars['Boolean']['output'];
  /** @deprecated This is deprecated and will be removed in the next major release */
  consumedTrialContent?: Maybe<Array<UserConsumedTrialContent>>;
  /** Retrieve the notes created by a user */
  contentCardsWithNotes: ContentConnection;
  /** Count of content user has completed */
  contentCompletedCount: Scalars['Int']['output'];
  /** Count of content user has created */
  contentCreatedCount: Scalars['Int']['output'];
  /** Get the recommended content for the user based on the Merlin project */
  contentRecommendations: ContentConnection;
  couponCode: Scalars['String']['output'];
  couponRemainingCharges: Scalars['Int']['output'];
  couponVisible: Scalars['Boolean']['output'];
  /** Custom cover image if the user has uploaded an image */
  coverImage?: Maybe<Image>;
  /** When the user was created */
  createdAt: Scalars['Time']['output'];
  creditCard?: Maybe<Array<UserCreditCard>>;
  /** When the user was deleted */
  deletedAt?: Maybe<Scalars['Time']['output']>;
  devices: Array<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  /** All of the events that the user has signed up to */
  events: EventConnection;
  /** Exposes if the user is associated to an expert profile */
  expert?: Maybe<Expert>;
  /** Categories in which this user is considered an expert */
  expertInTheseCategories: Array<Category>;
  /** We have this field because backoffice needs a way to associate thinkfluencer to organisers */
  expertOrg?: Maybe<Organisation>;
  /**
   * Which groups within the org this user is visible to
   * @deprecated dont use for the same reason a thinfkluencerOrg
   */
  expertOrgGroups: Array<OrganisationGroup>;
  /** A list of expert recommendations for a user */
  expertRecommendations: ExpertCollection;
  facebookId?: Maybe<Scalars['String']['output']>;
  /** facebookLink represents facebook profile url */
  facebookLink?: Maybe<Scalars['String']['output']>;
  /** The users social feed */
  feed: FeedConnection;
  /** Content the user has finished */
  finishedContent: ConsumableContentCollection;
  firstName: Scalars['String']['output'];
  /** No. of users following current user */
  followerCount: Scalars['Int']['output'];
  /** user follower list */
  followers: UserCollection;
  /** No. of users followed by current user */
  followingCount: Scalars['Int']['output'];
  /** user following list */
  followings: UserCollection;
  googleId?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** twitterHandle represents instagram handle name */
  instagramHandle?: Maybe<Scalars['String']['output']>;
  /**
   * IsBillable tells if user added to any organisation, should they be count towards their billable users or not
   * billable means those users will counted towards the number of licences(user count) set during contract
   */
  isBillable: Scalars['Boolean']['output'];
  /** If the user is an expert */
  isExpert: Scalars['Boolean']['output'];
  /** isFollowing flag to check user follow the respective person or not */
  isFollowing: Scalars['Boolean']['output'];
  /** If an expert is a mentor */
  isMentor: Scalars['Boolean']['output'];
  /** Indicates whether the user has completed his/her onboarding process */
  isOnboardingCompleted: Scalars['Boolean']['output'];
  jobTitle: Scalars['String']['output'];
  joiningReason: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  /** The last time a API call was made from this users device */
  lastOnlineAt?: Maybe<Scalars['Time']['output']>;
  lifegoals: Array<Lifegoal>;
  /** linkedinLink represents linkedin profile url */
  linkedinLink?: Maybe<Scalars['String']['output']>;
  /** If the mentor is available for mentoring this contains some brief information to their capabilities */
  mentorAvailableText?: Maybe<Scalars['String']['output']>;
  /** How much the mentor would charge for a session */
  mentorPriceText?: Maybe<Scalars['String']['output']>;
  microsoftId?: Maybe<Scalars['String']['output']>;
  mobileNumber: Scalars['String']['output'];
  /** Count of contents user has opened in current month */
  monthlyConsumedContentCount: Scalars['Int']['output'];
  /** The number of new notifications user received since last opening the notification centre */
  newNotifications: Scalars['Int']['output'];
  newsletter: Scalars['Boolean']['output'];
  /** Show the users current notification preferences */
  notificationPreferences: Array<UserNotificationPreference>;
  /** All the user notifications */
  notifications: NotificationConnection;
  /** Content the user has started but is yet to finish */
  ongoingContent: ConsumableContentCollection;
  /**
   * Organisation reflects the organisation in the JWT token associated to the GraphQL API call
   *
   * **Note:** This ONLY works when called against the current user ID
   */
  organisation?: Maybe<Organisation>;
  /** Organisation groups the user is associated to */
  organisationGroups?: Maybe<Array<OrganisationGroup>>;
  /** Organisations the user is associated to, will be deprecated in the future allowing only a single organisatio */
  organisations: Array<Organisation>;
  /** The number of pending cohort invitations */
  pendingCohortInvitations: Scalars['Int']['output'];
  permissions: Array<PermissionStatus>;
  /** @deprecated This is deprecated and will be removed in the next major release */
  persona?: Maybe<Persona>;
  /** @deprecated This is deprecated and will be removed in the next major release */
  personaQuestionAnswers: PersonaConnection;
  /** Preferred language of the user to watch or read content on */
  preferredLanguage?: Maybe<Scalars['String']['output']>;
  /** Prioritize the experts in search results */
  priority: Scalars['Int']['output'];
  productTourTracking: ProductTourTracking;
  /** Categories of which the user has recently consumed content from */
  recentlyConsumedCategories: Array<Category>;
  /** Retrieve the onboarding questions the user has replied to */
  repliedPollQuestions?: Maybe<PollQuestionConnection>;
  roles: Array<Scalars['String']['output']>;
  seniority: Scalars['String']['output'];
  /** URL Friendly slug that can be used as a unique identifier */
  slug: Scalars['String']['output'];
  stats: UserStats;
  /** The amount of time a user has spent consuming content in seconds */
  statsContentConsumedTotal: Scalars['Int']['output'];
  /**
   * Status of user account.
   * BLOCKED - user is blocked. This status will be priority over others.
   * ACTIVE - user has logged in before.
   * PENDING ACTIVATION - user never logged in before.
   */
  status: OrgMemberStatus;
  stripeCustomers: Scalars['Map']['output'];
  subscription?: Maybe<SubscriptionModel>;
  /** Current subscriptionStatus of the user. Can be free, active or trial */
  subscriptionStatus: SubscriptionStatus;
  /**
   * user following list from fastlane along with a set of users that the user
   * can possibly follow based on connections
   */
  suggestedUsersToFollow: UserCollection;
  suggestedUsersToInteractWith: UserCollection;
  /** twitterHandle represents twitter handle name */
  twitterHandle?: Maybe<Scalars['String']['output']>;
  type: ContentType;
  /** When the user was last updated */
  updatedAt: Scalars['Time']['output'];
  /**
   * userActivities is used to display all the feed contents that
   * has been performed by other user or yourself
   */
  userActivities: FeedContentConnection;
  /** user top categories consumed */
  userTopCategories: Array<TopCategoryConsumed>;
  /** user top listened experts */
  userTopListenedExperts: Array<User>;
  /** Users personal website */
  websiteLink?: Maybe<Scalars['String']['output']>;
};


export type UserAssignmentsArgs = {
  filter: AssignmentsFilter;
  sorting?: InputMaybe<SortOrdering>;
};


export type UserCohortsArgs = {
  filter: CohortFilter;
  pagination?: InputMaybe<CursorPaginationInput>;
};


export type UserContentCardsWithNotesArgs = {
  filter: ContentUserNoteFilter;
};


export type UserEventsArgs = {
  filter?: InputMaybe<EventFilter>;
  sorting?: InputMaybe<SortOrdering>;
};


export type UserFeedArgs = {
  filter: FeedFilter;
};


export type UserFinishedContentArgs = {
  filter: ConsumableContentFilter;
};


export type UserFollowersArgs = {
  filter?: InputMaybe<FollowersFollowingFilter>;
  sorting?: InputMaybe<SortOrdering>;
};


export type UserFollowingsArgs = {
  filter?: InputMaybe<FollowersFollowingFilter>;
  sorting?: InputMaybe<SortOrdering>;
};


export type UserNewNotificationsArgs = {
  filter?: InputMaybe<NotificationFilter>;
};


export type UserNotificationsArgs = {
  filter?: InputMaybe<NotificationFilter>;
  pagination?: InputMaybe<CursorPaginationInput>;
};


export type UserOngoingContentArgs = {
  filter: ConsumableContentFilter;
};


export type UserOrganisationsArgs = {
  isAdmin?: InputMaybe<Scalars['Boolean']['input']>;
};


export type UserRepliedPollQuestionsArgs = {
  filter: OnboardingQuestionsFilter;
  pagination: OffsetPagination;
};


export type UserSuggestedUsersToFollowArgs = {
  filter?: InputMaybe<SuggestedUsersToFollowFilter>;
  sorting?: InputMaybe<SortOrdering>;
};


export type UserSuggestedUsersToInteractWithArgs = {
  filter: SuggestedUsersToInteractWithFilter;
  sorting?: InputMaybe<SortOrdering>;
};


export type UserUserActivitiesArgs = {
  pagination?: InputMaybe<CursorPaginationInput>;
};

export type UserAssignmentContentStatistics = {
  __typename?: 'UserAssignmentContentStatistics';
  /** The users progress in percent */
  completionRate: Scalars['Float']['output'];
  /** The ID of the content piece */
  contentId: Scalars['ID']['output'];
  /** The estimated length of the content piece */
  contentLength: Scalars['Int']['output'];
  /** The name of the content piece */
  contentName: Scalars['String']['output'];
};

export type UserAssignmentStatistics = {
  __typename?: 'UserAssignmentStatistics';
  assignedEbooks: Scalars['Int']['output'];
  assignedPodcasts: Scalars['Int']['output'];
  assignedStreams: Scalars['Int']['output'];
  assignedTrails: Scalars['Int']['output'];
  completedEbooks: Scalars['Int']['output'];
  completedPodcasts: Scalars['Int']['output'];
  completedStreams: Scalars['Int']['output'];
  completedTrails: Scalars['Int']['output'];
};

export type UserChangePasswordInput = {
  newPassword: Scalars['String']['input'];
  oldPassword: Scalars['String']['input'];
};

export type UserCollection = {
  __typename?: 'UserCollection';
  edges: Array<User>;
  meta: PageInfo;
};

export type UserCollectionTracking = {
  __typename?: 'UserCollectionTracking';
  createdAt: Scalars['Time']['output'];
  /** @deprecated Will be removed in the future because we have dropped curated lists */
  curatedListId?: Maybe<Scalars['ID']['output']>;
  finishedAt?: Maybe<Scalars['Time']['output']>;
  following?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  learningPathId?: Maybe<Scalars['ID']['output']>;
  updatedAt?: Maybe<Scalars['Time']['output']>;
};

export type UserCollectionTrackingFilter = {
  /** Don't return trails or curated lists that been finished */
  excludeFinished?: InputMaybe<Scalars['Boolean']['input']>;
  finishedAt?: InputMaybe<Scalars['Time']['input']>;
  following?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type UserCollectionTrackingInput = {
  finishedAt?: InputMaybe<Scalars['Time']['input']>;
  following?: InputMaybe<Scalars['Boolean']['input']>;
  learningPathId?: InputMaybe<Scalars['ID']['input']>;
};

export type UserConsumedTrialContent = {
  __typename?: 'UserConsumedTrialContent';
  consumedAt: Scalars['Time']['output'];
  contentId: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  userId: Scalars['ID']['output'];
};

export type UserContentTracking = {
  __typename?: 'UserContentTracking';
  EbookId?: Maybe<Scalars['String']['output']>;
  EventId?: Maybe<Scalars['String']['output']>;
  PodcastId?: Maybe<Scalars['String']['output']>;
  StreamId?: Maybe<Scalars['String']['output']>;
  bookmarkedAt?: Maybe<Scalars['Time']['output']>;
  checkedInAt?: Maybe<Scalars['Time']['output']>;
  createdAt: Scalars['Time']['output'];
  /** Current represents the current page in an ebook, episode in a podcast (zero indexed) or for streams it should simply be 1 */
  current: Scalars['Int']['output'];
  /** CurrentPlacement represents the current time in the podcast or stream for ebooks it will be zero */
  currentPlacement: Scalars['Int']['output'];
  finishedAt?: Maybe<Scalars['Time']['output']>;
  id: Scalars['ID']['output'];
  isAttending: Scalars['Boolean']['output'];
  /** @deprecated use bookmarkedAt */
  isBookmarked: Scalars['Boolean']['output'];
  /** @deprecated use bookmarkedAt */
  isFavorite: Scalars['Boolean']['output'];
  isFinished: Scalars['Boolean']['output'];
  lastOpenedAt?: Maybe<Scalars['Time']['output']>;
  /** Retrieve a users notes on the content card */
  notes: NotesConnection;
  /** Total represents the total number of pages in an ebook, episodes in a podcast or for streams it should simply be 1 */
  total: Scalars['Int']['output'];
  updatedAt: Scalars['Time']['output'];
  userRating?: Maybe<Scalars['Float']['output']>;
};


export type UserContentTrackingNotesArgs = {
  filter: ContentUserNoteFilter;
};

export type UserCreditCard = {
  __typename?: 'UserCreditCard';
  /**
   * Brand of credit card used
   *
   * - "American Express"
   * - "Discover"
   * - "Diners Club"
   * - "JCB"
   * - "MasterCard"
   * - "Unknown"
   * - "UnionPay"
   * - "Visa"
   */
  brand: Scalars['String']['output'];
  /** Expiration month of the credit card */
  expMonth: Scalars['Int']['output'];
  /** Expiration year of the credit card */
  expYear: Scalars['Int']['output'];
  /**
   * What type of card
   *
   * - credit
   * - debit
   * - prepaid
   * - unknown
   */
  funding: Scalars['String']['output'];
  /** Last four digits of the credit card */
  last4: Scalars['String']['output'];
  /** Can either be apple_pay / google_pay or an empty string */
  tokenizationMethod: Scalars['String']['output'];
};

export type UserCursorCollection = {
  __typename?: 'UserCursorCollection';
  edges: Array<UserEdge>;
  meta: CursorInfo;
};

export type UserEdge = {
  __typename?: 'UserEdge';
  cursor: Scalars['String']['output'];
  user: User;
};

export type UserFilter = {
  createdAt?: InputMaybe<TimeRangeFilter>;
  email?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type UserInAppSubscriptionInput = {
  planId: Scalars['ID']['input'];
  transactionReceipt: Scalars['String']['input'];
};

export type UserNotificationPreference = {
  __typename?: 'UserNotificationPreference';
  name: Scalars['String']['output'];
  platform: NotificationPlatform;
  state: NotificationPreferenceState;
  type: NotificationType;
};

export type UserReaction = {
  __typename?: 'UserReaction';
  createdAt: Scalars['Time']['output'];
  emoji: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  reactionType: ReactionType;
  user: User;
};

export type UserReactionConnection = {
  __typename?: 'UserReactionConnection';
  edges: Array<UserReactionEdge>;
  meta: CursorInfo;
};

export type UserReactionEdge = {
  __typename?: 'UserReactionEdge';
  cursor: Scalars['String']['output'];
  userReaction: UserReaction;
};

export enum UserRole {
  Admin = 'admin',
  Expert = 'expert',
  Guest = 'guest',
  Livestream = 'livestream',
  OrgAdmin = 'org_admin',
  OrgLivestream = 'org_livestream',
  User = 'user'
}

export type UserStats = {
  __typename?: 'UserStats';
  ebooksRead: Scalars['Int']['output'];
  eventsAttended: Scalars['Int']['output'];
  eventsBooked: Scalars['Int']['output'];
  podcastsCompleted: Scalars['Int']['output'];
  videosCompleted: Scalars['Int']['output'];
};

export enum UserType {
  B2B = 'B2B',
  B2C = 'B2C'
}

export type ValidationError = {
  __typename?: 'ValidationError';
  fieldErrors: Array<FieldError>;
};

export type Unnamed_1_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_1_Query = { __typename?: 'Query', contentCards: { __typename?: 'ContentConnection', edges: Array<{ __typename?: 'Ebook' } | { __typename?: 'Event' } | { __typename?: 'Expert' } | { __typename?: 'LearningPath' } | { __typename?: 'Podcast', name: string, length: number, timeSpentOnByUsers: number, image?: (
        { __typename?: 'Image' }
        & { ' $fragmentRefs'?: { 'ImageFragment': ImageFragment } }
      ) | null, categories: Array<(
        { __typename?: 'Category' }
        & { ' $fragmentRefs'?: { 'CategoryFragment': CategoryFragment } }
      )>, experts: Array<(
        { __typename?: 'Expert' }
        & { ' $fragmentRefs'?: { 'ExpertFragment': ExpertFragment } }
      )> } | { __typename?: 'Stream' }> } };

export type ImageFragment = { __typename?: 'Image', uri: string } & { ' $fragmentName'?: 'ImageFragment' };

export type CategoryFragment = { __typename?: 'Category', name: string } & { ' $fragmentName'?: 'CategoryFragment' };

export type ExpertFragment = { __typename?: 'Expert', firstName: string, lastName: string, title: string, company?: string | null } & { ' $fragmentName'?: 'ExpertFragment' };

export const ImageFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Image"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Image"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uri"}}]}}]} as unknown as DocumentNode<ImageFragment, unknown>;
export const CategoryFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Category"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Category"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]} as unknown as DocumentNode<CategoryFragment, unknown>;
export const ExpertFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Expert"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Expert"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"company"}}]}}]} as unknown as DocumentNode<ExpertFragment, unknown>;
export const Document = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contentCards"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"20"}},{"kind":"ObjectField","name":{"kind":"Name","value":"keywords"},"value":{"kind":"StringValue","value":"","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"types"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"PODCAST"}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Podcast"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"length"}},{"kind":"Field","name":{"kind":"Name","value":"timeSpentOnByUsers"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Category"}}]}},{"kind":"Field","name":{"kind":"Name","value":"experts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Expert"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Image"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Image"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uri"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Category"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Category"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Expert"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Expert"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"company"}}]}}]} as unknown as DocumentNode<Query, QueryVariables>;