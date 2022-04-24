import { 
    Container, 
    Box, 
    Heading, 
    Image, 
    Link,
    useColorModeValue 
} from '@chakra-ui/react'
import About from './partials/_about'
import Education from './partials/_education'
import OtherSkills from './partials/_other-skills'
import Layout from '../components/layouts/article'
import SocialLinks from './partials/_social-links'

const Page = () => {
    return (
        <Layout>
            <Container>
                <Box 
                    borderRadius="lg" 
                    bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} 
                    p={3} 
                    mb={6} 
                    align="center"
                >
                    Hello, I am a full stack developer based in Montreal.
                </Box>

                <Box display={{md:'flex'}}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            Patrick-Lam Nguyen
                        </Heading>
                        <p>Full Stack Web Developer</p>
                    </Box>

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
                </Box>

                <About />
                <Education />
                <OtherSkills />
                <SocialLinks />
            </Container>
        </Layout>
    )
}

export default Page