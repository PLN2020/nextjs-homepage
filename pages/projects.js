import { 
    Container,
    Heading,
    SimpleGrid,
} from "@chakra-ui/layout"
import { ProjectGridItem } from "../components/grid-item"
import Section from '../components/section'
import thumbBraid from '../public/images/works/braid.png'
import Layout from "../components/layouts/article"

const Projects = () => {
    return (
        <Layout>
            <Container maxWidth='90ch'>
                <Heading as="h3" fontSize={20} mb={4}>
                    Projects
                </Heading>

                <SimpleGrid columns={[1,1,2]} gap={6}>
                    <Section delay={0.2}>
                        <ProjectGridItem 
                            id="braid"
                            title="Braid"
                            thumbnail={thumbBraid}
                        >
                            E-commerce MVP built with Ruby on Rails at Le Wagon.
                        </ProjectGridItem>
                    </Section>

                    <Section delay={0.3}>
                        <ProjectGridItem 
                            id="braid"
                            title="Braid"
                            thumbnail={thumbBraid}
                        >
                            E-commerce MVP built with Ruby on Rails at Le Wagon.
                        </ProjectGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>
    )   
}

export default Projects