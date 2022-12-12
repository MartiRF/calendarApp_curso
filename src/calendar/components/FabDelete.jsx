import React from 'react'
import { useCalendarStore } from '../../hooks'

export const FabDelete = () => {
    const {startDeletingEvent,hasEventSelected} = useCalendarStore()
    
    const handleClickDelte = () => {
       startDeletingEvent()
    }

  return (
    <button
        className='btn btn-danger fab-danger'
        onClick={handleClickDelte}
        style={{
          display: hasEventSelected ? '' : 'none'
        }}
    >
        <i className='fas fa-trash-alt'></i>
    </button>
  )
}