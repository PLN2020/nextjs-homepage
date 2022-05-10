import { 
    Container,
    Heading,
    SimpleGrid,
} from "@chakra-ui/layout"
import { ProjectGridItem } from "../components/grid-item"
import Section from '../components/section'
import thumbBraid from '../public/images/works/braid.jpg'
import thumbHomepage from '../public/images/works/homepage.jpg'
import Layout from "../components/layouts/article"

const Projects = () => {
    return (
        <Layout>
            <Container maxW='container.lg'>
                <Heading as="h3" fontSize={20} mb={4}>
                    Projects
                </Heading>

                <SimpleGrid columns={[1,1,2]} gap={6}>
                    <Section delay={0.2}>
                        <ProjectGridItem 
                            id="homepage"
                            title="This Website"
                            thumbnail={thumbHomepage}
                        >
                            Homepage built using NextJS and chakra-ui following Takuya Matsuyama&apos;s template.
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