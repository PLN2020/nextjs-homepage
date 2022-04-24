import { Container } from "@chakra-ui/layout"
import { Box, Button } from '@chakra-ui/react'
import Paragraph from "../components/paragraph"
import NextLink from 'next/link'

const Photography = () => {
    return (
        <Container>
            <Paragraph>
                Page is under construction.
            </Paragraph>

            <Box my="6" align="center">
                <NextLink href="/" passHref>
                    <Button colorScheme="purple">Return to Landing Page</Button>
                </NextLink>
            </Box>
        </Container>
    )
}

export default Photography