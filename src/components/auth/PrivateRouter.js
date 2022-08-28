import React from 'react'
import { useSelector } from 'react-redux'
import FeedBack from './FeedBack'

const PrivateRouter = ({children}) => {
    const user = useSelector(state => state.user)
  return (
    user ? children : <FeedBack/>
  )
}

export default PrivateRouter