import { 
    Container, 
    Box
} from '@chakra-ui/react'
import About from './partials/_about'
import Education from './partials/_education'
import OtherSkills from './partials/_other-skills'
import Layout from '../components/layouts/article'
import SocialLinks from './partials/_social-links'
import Avatar from '../components/avatar'
import Toolkit from './partials/_toolkit'
import Intro from './partials/_intro'
import Section from '../components/section'

const Page = () => {
    return (
        <Layout>
            <Container maxW={{sm:'100%', md:'container.lg'}}>
                <Intro />
                
                <Section delay={0.1}>
                    <Box 
                        display={{md:'flex'}}
                        flexWrap='wrap'
                        justifyContent='space-between'
                        alignItems='center'
                    >
                        {/* <Box>
                            <Heading as="h2" variant="page-title">
                                Patrick-Lam Nguyen
                            </Heading>
                            <p>Full Stack Web Developer</p>
                        </Box> */}
                        <Avatar />
                        <About />
                        <SocialLinks />
                    </Box>
                </Section>

                <Box>
                    <Toolkit />
                </Box>

                <Box
                    display={{md:'flex'}}
                    flexWrap='wrap'
                    justifyContent='space-between'
                >
                    <Container maxW='45ch'><Education /></Container>
                    <Container maxW='45ch'><OtherSkills /></Container>
                </Box>
                
                
            </Container>
        </Layout>
    )
}

export default Page