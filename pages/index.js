import NextLink from 'next/link'
import { 
    Button,
    Container, 
    Box, 
    Heading, 
    Image, 
    Link,
    useColorModeValue 
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'

const Page = () => {
    return (
    <Container>
        <Box 
            borderRadius="lg" 
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} 
            p={3} 
            mb={6} 
            align="center"
        >
            Hello, I am a full-stack developer based in Montreal.
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

        <Section delay={0.1}>
            <Heading as="h3" variant="section-title">
                About
            </Heading>
            <Paragraph>
                New aspiring web developer based in Montreal looking for opportunities in the industry. 
                Curious and driven to learn, and eager to put that knowledge to application.
                Offline, I am passionate about learning Japanese and photography.
            </Paragraph>

            <Box align="center" my={4}>
                <NextLink href="/project">
                    <Button rightIcon={<ChevronRightIcon />} colorScheme="purple">
                        Projects
                    </Button>
                </NextLink>
            </Box>
        </Section>
    </Container>
    )
}

export default Page