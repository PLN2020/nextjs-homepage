import { Box, Image } from '@chakra-ui/react'

const Avatar = () => {
    return (
        <Box 
            flexShrink={0} 
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
        >
            <Image 
                borderColor="whiteAlpha.800" 
                borderWidth={2} 
                borderStyle="solid" 
                maxWidth="100px" 
                display="inline-block" 
                borderRadius="full"
                src="/images/patrick.jpg"
                alt="Profile Picture"
            />
        </Box>
    )
}

export default Avatar