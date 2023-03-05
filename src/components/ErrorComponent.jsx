import { Alert, AlertIcon } from '@chakra-ui/react'
import React from 'react'

const ErrorComponent = ({message}) => {
  return (
    <Alert status="error" position={"fixed"} bottom={"6"} left={"50%"}  transform={"translate(-50%)"} w={"container.lg"} >
      <AlertIcon textAlign={"center"} />
      {message}
    </Alert>
  )
}

export default ErrorComponent