import React, { useState } from 'react'

import { Calendar } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'

import { Navbar, CalendarBox, CandedarModal, FabAddNew, FabDelete } from '../components/'

import { localizer, getMessageES } from '../../helpers/'
import { useCalendarStore, useUiStore } from '../../hooks'




export const CalendarPage = () => {
  
  const { openDateModal } = useUiStore()
  const { events, setActiveEvent } = useCalendarStore()

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
    openDateModal();
  }

  // Cuando seleciono un evento
  const onSelect = (event) => {
    setActiveEvent(event)
  }

  // Guarda la ultima vista
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
      <FabAddNew />
      <FabDelete />
    </>
  )
}
