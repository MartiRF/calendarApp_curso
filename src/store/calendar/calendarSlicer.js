import { createSlice } from '@reduxjs/toolkit'



// NO debe de estar aca
import { addHours } from 'date-fns';

const tempEvent = {
    _id: new Date().getTime(),
    title:'Cumplea;os del minino',
    notes:'comprar pasetel',
    start: new Date(),
    end: addHours(new Date(), 2),
    bgColor: '#fafafa',
    user:{
      _id:123,
      name:'martincito'
    }
  }
//

export const calendarSlice = createSlice({
    name: 'calendar',
    initialState:{
        events:[tempEvent],
        activeEvent:null,
    },
    reducers: {
      onSetActiveEvent: (state, {payload}) => {
        state.activeEvent = payload
      }
    },
})


export const { onSetActiveEvent } = calendarSlice.actions