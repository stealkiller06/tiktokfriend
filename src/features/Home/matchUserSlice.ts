import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { login } from '../../api/auth/authAPI'
import { User } from '../../api/auth/types/auth'
import * as SecureStore from 'expo-secure-store';
import { claimLoginReward, getUsersByLocation } from '../../api/user/userApi';
import { getMatches, likeUser } from '../../api/match/matchAPI';
import { Match } from '../../api/match/types/like';
import { getPointsTotal } from '../../api/point/pointAPI';

// Define a type for the slice state
interface AuthState {
  profileList: User[],
  loading: boolean,
  location: {
    latitude: number,
    longitude: number
  } | null,
  loadingLocation: boolean,
  matches:Match[],
  totalPoints:number

}

// Define the initial state using that type
const initialState: AuthState = {
  profileList: [],
  loading: false,
  location: null,
  loadingLocation: true,
  matches:[],
  totalPoints:0
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
    },
    setMatches(state,action:PayloadAction<Match[]>){
      state.matches = action.payload
    },
    setTotalPoints(state,action:PayloadAction<number>){
      state.totalPoints = action.payload
    },
    setPoints(state,action:PayloadAction<{value:number,type:string}>){

      if(action.payload.type == "add"){
        state.totalPoints += action.payload.value
      }else{
        state.totalPoints -= action.payload.value
      }
      
    }

  },
})

export const { setProfileList,setMatches, setLoading, 
  setLocation, setLoadingLocation, 
  removeFirstUserFromProfileList,
setTotalPoints,
setPoints
} = matchUserSlice.actions



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

export const sendGetMatchListRequest = () => async (dispatch: any) => {
  try {
    dispatch(setLoading(true))
    const userToken = await SecureStore.getItemAsync('userToken');
    const matches = await getMatches( userToken || "");

    dispatch(setMatches(matches))
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
      // const userLiked = await likeUser(userId, type, userToken || "")

    if(type === "like"){
      dispatch(setPoints({value:10, type:'remove'}))
    }
    dispatch(removeFirstUserFromProfileList())
  } catch (err) {
    console.log(err)

  } finally {
    dispatch(setLoading(false))
  }

}
export const sendGetPointsRequest = () => async (dispatch: any) => {
  try {
    dispatch(setLoading(true))
    const userToken = await SecureStore.getItemAsync('userToken');
    const pointsTotal = await getPointsTotal( userToken || "")

    if(pointsTotal && pointsTotal.total != undefined){
      dispatch(setTotalPoints(pointsTotal.total))
    }

  } catch (err) {
    console.log(err)

  } finally {
    dispatch(setLoading(false))
  }

}


export const sendClaimLoginRewardRequest = (callback?:(user:User|null, err?:any)=>void) => async (dispatch: any) => {
  try {
    dispatch(setLoading(true))
    const userToken = await SecureStore.getItemAsync('userToken');
    const rewardResponse = await claimLoginReward( userToken || "")

    if(rewardResponse && callback){
      callback(rewardResponse)
    }

  } catch (err) {
    if(callback){
      callback(null, err)
    }
    console.log(err)

  } finally {
    dispatch(setLoading(false))
  }

}