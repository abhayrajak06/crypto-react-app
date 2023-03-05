import { Button, HStack, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import {} from "./Header.css"

const Header = () => {
  return (
    <HStack bgColor={'blackAlpha.900'} p={'4'} shadow={'base'} justifyContent={["space-evenly","flex-start"]} gap="4" >
        <Button variant={'unstyled'} color={'white'} className="btn">
            <Link to="/"><Text m={2}>Home</Text></Link>
        </Button>
        <Button variant={'unstyled'} color={'white'} className="btn">
            <Link to='/coins'><Text m={2}>Coins</Text></Link>
        </Button>
        <Button variant={'unstyled'} color={'white'} className="btn">
            <Link to='/exchanges'><Text m={2}>Exchanges</Text></Link>
        </Button>
        
    </HStack>
  )
}

export default Header