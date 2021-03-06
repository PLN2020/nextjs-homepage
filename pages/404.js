import NextLink from 'next/link'
import {
    Box,
    Heading,
    Container,
    Divider,
    Button,
    Text
} from '@chakra-ui/react'
import { WarningIcon } from '@chakra-ui/icons'

const NotFound = () => {
    return (
        <Container maxWidth='90ch' pt={14}>
            <Heading as="h1">
                <WarningIcon w={8} h={8} color="red.500" />
                &nbsp;404
            </Heading>

            <Text>
                This page could not be found.
            </Text>

            <Divider my={6} />
            
            <Box my="6" align="center">
                <NextLink href="/" passHref>
                    <Button colorScheme="purple">Return to Landing Page</Button>
                </NextLink>
            </Box>
        </Container>
    )
}

export default NotFound