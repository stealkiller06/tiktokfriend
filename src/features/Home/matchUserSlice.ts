import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { login } from '../../api/auth/authAPI'
import { User } from '../../api/auth/types/auth'
import * as SecureStore from 'expo-secure-store';
import { getUsersByLocation } from '../../api/user/userApi';
import { likeUser } from '../../api/match/matchAPI';

// Define a type for the slice state
interface AuthState {
  profileList: User[],
  loading: boolean,
  location: {
    latitude: number,
    longitude: number
  } | null,
  loadingLocation: boolean

}

// Define the initial state using that type
const initialState: AuthState = {
  profileList: [],
  loading: false,
  location: null,
  loadingLocation: true

}

export const matchUserSlice = createSlice({
  name: 'matchUserSlice',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setProfileList(state, action: PayloadAction<User[]>) {
      state.profileList = action.payload;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload
    },
    setLocation(state, action: PayloadAction<{ longitude: number, latitude: number }>) {
      state.location = action.payload
    },
    setLoadingLocation(state, action: PayloadAction<boolean>) {
      state.loadingLocation = action.payload
    },
    removeFirstUserFromProfileList(state) {
      state.profileList.shift()
    }

  },
})

export const { setProfileList, setLoading, setLocation, setLoadingLocation, removeFirstUserFromProfileList } = matchUserSlice.actions



export default matchUserSlice.reducer

// Define a thunk that dispatches those action creators
export const sendGetProfileListRequest = (latitude: number, longitude: number, gender: string = "") => async (dispatch: any) => {
  try {
    dispatch(setLoading(true))
    const userToken = await SecureStore.getItemAsync('userToken');
    const profileList = await getUsersByLocation(latitude, longitude, gender, userToken || "");

    dispatch(setProfileList(profileList))
  } catch (err) {
    console.log(err)

  } finally {
    dispatch(setLoading(false))
  }

}


export const sendLikeRequest = (userId: string, type: string) => async (dispatch: any) => {
  try {
    dispatch(setLoading(true))
    const userToken = await SecureStore.getItemAsync('userToken');
    const userLiked = await likeUser(userId, type, userToken || "")

    dispatch(removeFirstUserFromProfileList())
  } catch (err) {
    console.log(err)

  } finally {
    dispatch(setLoading(false))
  }

}