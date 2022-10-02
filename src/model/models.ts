export interface Home {
    totalUsers?: number;
    totalFirmAccounts?: number;
    totalCommunities?: number;
    totalChannels?: number;
    newUsersToday?: number;
    newFirmAccountsToday?: number;
    newCommunitiesToday?: number;
    newChannelsToday?: number;
    allFeedPosts?: number;
    feedPostsToday?: number;
    allSocialPosts?: number;
    allExperiencePosts?: number;
    allCommunityPosts?: number;
    allChannelPosts?: number;
    allReports?: number;
    socialPostsToday?: number;
    experiencePostsToday?: number;
    communityPostsToday?: number;
    channelPostsToday?: number;
    reportsPostsToday?: number;
}

/** Master Response */
export interface MasterResponse {
    masterId : string;    
    masterType : string;
    masterValue : string;
    createdTime : string;
    updatedTime : string;
}


/*
COMMUNITY
*/
export interface Community {
    communityId: string,
    name?: string,
    description?: string,
    fileId?: number,
    rules?: string,
    profileCommunityStatus?: string,
    loginProfileId?: number,
    acceptedUserCount?: number,
    createdTime?: string
    updatedTime?: string
    isBlocked: boolean;
}

export interface Communities {
    pageCount: number;
    list : Community [];
}

/* PROFILES*/

export class Profile {
    profileId :  string;
    name :  string;
    fileId :  string;
    profileType :  string;
    location :  string;
    thumbsUpCount :  number;
    thumbsDownCount :  number;
    isBlocked: boolean;
}

export interface Users {
    pageCount: number;
    list : Profile [];
}

/** CHANNELS */
export interface Channel {
    channelId: string;
    name: string;
    description: string;
}

export interface Channels {
    pageCount: number;
    list : Channel [];
}

/** FEEDS */
export interface Feeds {
    pageCount: number;
    list : Feed [];
}

export interface Feed {
    feedId : number;
    profileId : number;
    minimalProfileResponse : Profile;
    description : string;
    commentsCount : number;
    likesCount : number;
    reportsCount : number;
    createdTime : string;
    updatedTime : string;
    feedComments : FeedComment [];
}

export interface FeedComment {
    feedCommentId : number;
    commentorProfileId: number;
    comment : string;
    createdTime : string;
    updatedTime : string;
}

/** SOCIAL */

export interface Socials {
    pageCount: number;
    list : Social [];
}

export interface Social {

    socialId : string;
    profileId : string;
    minimalProfileResponse : Profile;
    categoryId : string;
    type : string;
    subject : string;
    description : string;
    contact : string;
    alternateContact : string;
    fileId  : string;
    createdTime : string;
    updatedTime : string;
    /*List<SocialSendToResponse> sendTo;
    List<CommentResponse> comments;
    List<LikesResponse> likes;
    List<SocialFileResponse> fileResponses;
    List<SocialCallRequestResponse> socialCallRequestResponses;*/
    categoryName : string;
    categoryColorCode : string;
    createdTimeStr : string;
    location : string;
    callRequestStatusOfLoginUser : string;
    likesCount : number;
    commentsCount : number;
    starsCount : number;

}


/** EXPERIENCES */

export interface Experiences {
    pageCount: number;
    list : Experience [];
}

export interface Experience {

 experienceId : string;
 minimalProfileResponse : Profile;
 categoryResponse: MasterResponse;
 categoryId : string;
 profileId : string;
 title : string;
 description : string;
 location : string;
 //List<ExperienceFileResponse> experienceFileList;
 //List<ExperienceCommentResponse> commentResponseList;
 //List<ExperienceLikesResponse> likesResponseList;
 createdTimeStr : string;
 commentsCount : number;
 likesCount : number;
 loginUserLiked : boolean;
 viewsCount : number;
 createdTime : string;
 updatedTime : string;
}


