import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  items : Array<any>;
  totalAmount:number;
  totalQuantity:number;

}

const initialState: CounterState = {
  items : [],
  totalAmount : 0,
  totalQuantity : 0,

}

export const counterSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state) => {
      state.value += 1
    },
    removeFromCart: (state) => {
      state.value -= 1
    },
    clearCart: (state ) => {
      state =initialState
    },
  },
})

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions
export const counterAction = counterSlice.actions

export default counterSlice.reducer
