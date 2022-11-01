import {createSlice} from "@reduxjs/toolkit";

const initialProfile = {
    firstName: 'Jose',
    lastName: 'Annunziato',
    handle: '@jannunzi',
    profilePicture: 'avatar-icon-bob.png',
    bannerPicture: 'inspiration4x.jpeg',
    bio: 'Faculty, Software Engineer, AI, Space, and renewable enthusiast.Retuits and likes are not endorsements.',
    website: 'youtube.com/webdevtv',
    location: 'Boston, MA',
    dateOfBirth: '1968-07-07',
    dateJoined: '2009-04-01',
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