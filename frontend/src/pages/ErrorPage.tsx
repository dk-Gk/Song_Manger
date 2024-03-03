import React from 'react'
import { useAppSelector } from '../app/hooks'
import { log } from 'console';
import styled from '@emotion/styled';

const ErroContainer = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Text = styled.h3`
  color: #2b2020;
`

const ErrorPage = () => {
  return (
    <ErroContainer>
        <Text>Oops! Something went wrong. Please try again later.</Text>
    </ErroContainer>
  )
}

export default ErrorPage