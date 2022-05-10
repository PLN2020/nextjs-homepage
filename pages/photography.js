import { Container, Heading, Box, Button, SimpleGrid } from "@chakra-ui/react"
import NextLink from 'next/link'
import Layout from "../components/layouts/article"
import Section from "../components/section"
import LightBox from "../components/lightbox"
import { PhotoData } from "../data/photography-data"

const Photography = () => {

    const data = PhotoData

    return (
        <Layout>
            <Container maxW="container.lg">
                <Heading as="h3" fontSize={20} mb={4}>
                    Photography
                </Heading>

                {data.map((item) => {
                    return (
                        <Section delay={0.2} key={item}>
                            <Heading as="h3" variant="section-title" mb={4} ml={4}>
                                {item.section}
                            </Heading>

                            <SimpleGrid
                                columns={[1,1,3]}
                                spacing={6}
                                justifyItems="center" 
                            >   
                                {item.photos.map((photo) => {
                                    return (
                                        <Box
                                            w="28ch"
                                            h="28ch"
                                            boxShadow="0.3rem 0.4rem 0.4rem rgba(0,0,0,0.4)"
                                            overflow="hidden"
                                            border="2px solid white"
                                            mb="16px"
                                            key={item.photos.photo}
                                        >
                                            <LightBox
                                                src={photo.source}
                                                alt={photo.title}
                                            />
                                        </Box>                                    
                                    )
                                })}
                            </SimpleGrid>
                        </Section>
                    )
                })}

                <Box my="6" align="center">
                    <NextLink href="/" passHref>
                        <Button colorScheme="purple">Return to Landing Page</Button>
                    </NextLink>
                </Box>

            </Container>
        </Layout>
            
    )
}

export default Photography