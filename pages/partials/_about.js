import Paragraph from "../../components/paragraph"
import { Heading, Box } from '@chakra-ui/react'

const About = () => {
    return (
        <Box maxW="60ch">
            <Heading as="h3" variant="section-title">
                About
            </Heading>
            <Paragraph>
                Aspiring web developer based in Montreal looking for opportunities in the industry. 
                Curious and driven to learn, and eager to apply that knowledge.
                In my spare time, I am passionate about photograghy and learning Japanese.
            </Paragraph>
        </Box>
    )
}

export default About