import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Container, Badge, List, ListItem, Link, UnorderedList } from '@chakra-ui/react'
// import { ExternalLinkIcon } from '@chakra-ui/icons'
import Layout from '../../components/layouts/article'
import { Title, Meta, WorkImage } from '../../components/layouts/project'

import Paragraph from '../../components/paragraph'

const Work = () => {
    return (
        <Layout title="Homepage">
            <Container maxWidth='container.lg'>
                <Title>
                    Homepage&nbsp;
                    <Badge>2022</Badge>
                </Title>
                <Paragraph>
                    Personal website built following&nbsp;
                    <Link href="https://www.craftz.dog/" target="_blank">
                        Takuya Matsuyama <ExternalLinkIcon />
                    </Link>
                    &apos;s tutorial (original website design and code by him). 
                    <br/>
                    The voxel PC was created by me using MagicaVoxel and Blender.&nbsp; 
                    <br/>
                    Pending updates include:
                    <UnorderedList>
                        <ListItem>Code Refactoring</ListItem>
                        <ListItem>Dynamic components for the project cards</ListItem>
                        <ListItem>A proper lightbox for the photos</ListItem>
                        <ListItem>Multi-language support</ListItem>
                    </UnorderedList>

                </Paragraph>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://github.com/PLN2020/nextjs-homepage" target="_blank">
                            Source <ExternalLinkIcon />
                        </Link>
                    </ListItem>

                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Web</span>
                    </ListItem>

                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>NextJS, chakra-ui</span>
                    </ListItem>
                </List>

                <WorkImage src="/images/works/homepage.jpg" alt="homepage" />
            </Container>
        </Layout>
    )
}

export default Work