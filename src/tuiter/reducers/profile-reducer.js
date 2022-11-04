import {createSlice} from "@reduxjs/toolkit";

const initialProfile = {
    firstName: 'Jia',
    lastName: 'Xu',
    handle: '@jiaxu',
    profilePicture: 'avatar-icon.png',
    bannerPicture: 'inspiration4x.jpeg',
    bio: 'Faculty, Software Engineer, AI, Space, and renewable enthusiast.Retuits and likes are not endorsements.',
    website: 'youtube.com/webdevtv',
    location: 'Seattle, WA',
    dateOfBirth: '1990-11-17',
    dateJoined: '2018-08-01',
    followingCount: 340,
    followersCount: 223,
    tweetsCount: 6114
};

const profileSlice = createSlice({
    name: 'profile',
    initialState: initialProfile,
    reducers: {
        saveProfile(state, action) {
            return {...action.payload};
        }
    }
});

export const {saveProfile} = profileSlice.actions;
export default profileSlice.reducer;