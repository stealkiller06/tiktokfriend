import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { login } from '../../api/auth/authAPI'
import { User } from '../../api/auth/types/auth'
import * as SecureStore from 'expo-secure-store';

// Define a type for the slice state
interface AuthState {
  user:User|null,
  userToken:string|null,
  loading:boolean
}

// Define the initial state using that type
const initialState: AuthState = {
  user:null,
  userToken:null,
  loading:true
}

export const authSlice = createSlice({
  name: 'auth',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    loginUser(state,action:PayloadAction<{user:User|null,userToken:string|null}>){
      state.user = action.payload.user;
      state.userToken = action.payload.userToken
    },
    logoutUser(state){
      state.user = null;
      state.userToken = null
    },
    setUser(state,action:PayloadAction<User>){
      state.user = action.payload
    },
    setLoading(state,action:PayloadAction<boolean>){
      state.loading = action.payload
    }
  },
})

export const {loginUser,setLoading,setUser,logoutUser} = authSlice.actions



export default authSlice.reducer

// Define a thunk that dispatches those action creators
export const sendLoginRequest = (email:string,password:string) => async (dispatch:any) => {
  try{
    dispatch(setLoading(true))
  const loginData = await login(email,password);
  await SecureStore.setItemAsync("userToken", loginData.userToken);
  dispatch(loginUser(loginData))
  
    
  }catch(err){
    console.log(err)

  }finally{
    dispatch(setLoading(false))
  }
  
}