import { Heading, List, ListItem, Link, Button, Icon } from "@chakra-ui/react"
import Section from "../../components/section"
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'

const SocialLinks = () => {
    return (
        <Section delay={0.3}>
            <Heading as="h3" variant="section-title">
                Social Links
            </Heading>
            <List>
                <ListItem>
                    <Link href="https://github.com/PLN2020" target="_blank">
                        <Button variant="ghost" colorScheme="purple" leftIcon={<Icon as={IoLogoGithub} />}>
                            Github
                        </Button>
                    </Link>
                </ListItem>

                <ListItem>
                    <Link href="www.linkedin.com/in/plnguyen2021" target="_blank">
                        <Button variant="ghost" colorScheme="purple" leftIcon={<Icon as={IoLogoLinkedin} />}>
                            LinkedIn
                        </Button>
                    </Link>
                </ListItem>
            </List>
        </Section>
    )
}

export default SocialLinks