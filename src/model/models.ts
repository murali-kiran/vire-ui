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