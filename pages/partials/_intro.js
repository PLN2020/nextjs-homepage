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
                Hello, my name is Patrick-Lam Nguyen and I am a full stack developer.
            </Box>
    )
}

export default Intro