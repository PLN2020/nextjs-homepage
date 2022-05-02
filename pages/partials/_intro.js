import { Box, useColorModeValue } from '@chakra-ui/react'

const Intro = () => {
    return (
            <Box 
                borderRadius="lg" 
                bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} 
                p={3} 
                mb={6} 
                align="center"
            >
                Hello, name is Patrick-Lam Nguyen I am a full stack developer based in Montreal.
            </Box>
    )
}

export default Intro