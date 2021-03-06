import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Container, Badge, List, ListItem, Link } from '@chakra-ui/react'
// import { ExternalLinkIcon } from '@chakra-ui/icons'
import Layout from '../../components/layouts/article'
import { Title, Meta, WorkImage } from '../../components/layouts/project'

import Paragraph from '../../components/paragraph'

const Work = () => {
    return (
        <Layout title="Braid">
            <Container maxWidth='container.lg'>
                <Title>
                    Braid&nbsp;
                    <Badge>2021</Badge>
                </Title>
                <Paragraph>
                    E-commerce MVP built with a team of 3 as the final project for my bootcamp at Le Wagon.
                </Paragraph>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        Demo website no longer available, see&nbsp;
                        <Link href="https://github.com/AntoineBoucherCodes/Braid" target="_blank">
                            source code <ExternalLinkIcon />.
                        </Link>
                    </ListItem>

                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Web</span>
                    </ListItem>

                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Ruby on Rails</span>
                    </ListItem>
                </List>

                <WorkImage src="/images/works/braid.jpg" alt="braid" />
            </Container>
        </Layout>
    )
}

export default Work