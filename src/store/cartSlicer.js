import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
  count:0
}

export const cartSlice = createSlice({
    name : 'cartSlice',
    initialState,
    reducers :{
        additems : (state,action)=>{
            state.items.push({...action.payload,quantity : 1});
            state.count++;
        },

        increment: (state,action)=>{
            const obj = state.items.find(item=>item.id ===action.payload.id)
            obj.quantity+=1;
            state.count++;
        },

        decrement : (state,action)=>{
            const obj = state.items.find(item=>item.id ===action.payload.id)
            if(obj.quantity >1){
                 obj.quantity-=1;
            }
            else{
                state.items = state.items.filter(item=>item.id!=action.payload.id)
            }
            state.count--;
        }
    }
})

export const {increment,decrement,additems} = cartSlice.actions

export default cartSlice.reducer