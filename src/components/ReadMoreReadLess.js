import { Button } from '@chakra-ui/react'
import React from 'react'

const ReadMoreReadLess = ({children}) => {
  return (
    <div>
        {children}
        <Button variant={'link'}>Read More...</Button>
    </div>
  )
}

export default ReadMoreReadLess