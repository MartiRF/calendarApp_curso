import React, { useState } from 'react'

import { Calendar } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'


import { addHours } from 'date-fns'
import { Navbar, CalendarBox, CandedarModal } from '../components/'

import { localizer, getMessageES } from '../../helpers/'


const events = [{
  title:'Cumplea;os del minino',
  notes:'comprar pasetel',
  start: new Date(),
  end: addHours(new Date(), 2),
  bgColor: '#fafafa',
  user:{
    _id:123,
    name:'martincito'
  }
}]

export const CalendarPage = () => {
  
  const [lasView, setLasView] = useState(localStorage.getItem('lastView') || 'week')

  const eventStyleGetter = ( event, start, end, isSelected ) => {
    
    const style = {
      backgroundColor: '347cf7',
      borderRadius: '0px',
      opacity: 0.8,
      color: 'white',
    }
    return {
      style
    }
  }

  const onDoubleClick = (event) => {
    console.log({doubleClick: event})
  }

  const onSelect = (event) => {
    console.log({click: event})
  }

  const onViewChanged = (event) => {
    localStorage.setItem('lastView', `${event}`);
  }

  return (
    <>
      <Navbar />
      <Calendar
      culture='es'
      localizer={localizer}
      events={events}
      defaultView={lasView}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 'calc( 100vh - 80px)' }}
      messages={ getMessageES()}
      eventPropGetter={ eventStyleGetter }
      components={{
        event: CalendarBox
      }}
      onDoubleClickEvent={onDoubleClick}
      onSelectEvent={onSelect}
      onView={onViewChanged}
      />
      <CandedarModal />
    </>
  )
}
