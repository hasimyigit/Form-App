import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
const FeedBack = () => {
  return (
    <div className='flex justify-center items-center h-4/5'>
        <FontAwesomeIcon icon={faSpinner} size="5x" spin />
    </div>
  )
}

export default FeedBack