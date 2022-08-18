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