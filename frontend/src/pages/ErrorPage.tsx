import React from 'react'
import { useAppSelector } from '../app/hooks'
import { log } from 'console';

const ErrorPage = () => {
    const error = useAppSelector(state => state.auth.error);
  return (
    <div>
        <h3 color='red'>{error}</h3>
    </div>
  )
}

export default ErrorPage