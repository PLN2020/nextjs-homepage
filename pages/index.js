import { 
    Container, 
    Box, 
    // Link,
    useColorModeValue,
} from '@chakra-ui/react'
import About from './partials/_about'
import Education from './partials/_education'
import OtherSkills from './partials/_other-skills'
import Layout from '../components/layouts/article'
import SocialLinks from './partials/_social-links'
import Avatar from '../components/avatar'
import Toolkit from './partials/_toolkit'

const Page = () => {
    return (
        <Layout>
            <Container maxWidth='90ch'>
                <Box 
                    borderRadius="lg" 
                    bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} 
                    p={3} 
                    mb={6} 
                    align="center"
                >
                    Hello, I am a full stack developer based in Montreal.
                </Box>

                <Box 
                    display={{md:'flex'}}
                    flexWrap='wrap'
                    justifyContent='space-between'
                >
                    {/* <Box>
                        <Heading as="h2" variant="page-title">
                            Patrick-Lam Nguyen
                        </Heading>
                        <p>Full Stack Web Developer</p>
                    </Box> */}
                    <Avatar />
                    <Container maxW='50ch'><About /></Container>
                    <SocialLinks />
                </Box>

                <Box>
                    <Toolkit />
                </Box>

                <Box
                    display={{md:'flex'}}
                    flexWrap='wrap'
                    justifyContent='space-between'
                    alignItems='center'
                >
                    <Container maxW='40ch'><Education /></Container>
                    <Container maxW='40ch'><OtherSkills /></Container>
                </Box>
                
                
            </Container>
        </Layout>
    )
}

export default Page