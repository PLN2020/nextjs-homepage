import Section from "../../components/section"
import Paragraph from "../../components/paragraph"
import { ChevronRightIcon } from '@chakra-ui/icons'
import { Heading, Box, Button } from '@chakra-ui/react'
import NextLink from 'next/link'

const About = () => {
    return (
        <Section delay={0.1}>
            <Heading as="h3" variant="section-title">
                About
            </Heading>
            <Paragraph>
                New aspiring web developer based in Montreal looking for opportunities in the industry. 
                Curious and driven to learn, and eager to put that knowledge to application.
                Offline, I am passionate about photograghy and learning Japanese.
            </Paragraph>

            <Box align="center" my={4}>
                <NextLink href="/projects" passHref>
                    <Button rightIcon={<ChevronRightIcon />} colorScheme="purple">
                        Projects
                    </Button>
                </NextLink>
            </Box>
        </Section>
    )
}

export default About