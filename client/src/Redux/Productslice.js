import {createSlice} from '@reduxjs/toolkit'

const ProductInfo=createSlice({
    name:"product",
    initialState:{
        ProductInformation:[],

    },
    reducers:{
        takeProductdata:(state,action)=>{
            console.log("action value",action);
            state.LoginInformation.push(action.payload)
        }
  
    }
})

export const {takeProductdata} =ProductInfo.actions
export default ProductInfo.reducer