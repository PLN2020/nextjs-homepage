import { Heading, List, ListItem, Link, Button, Icon } from "@chakra-ui/react"
import Section from "../../components/section"
import { IoLogoFlickr, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import { ExternalLinkIcon } from "@chakra-ui/icons"

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
                            Github&nbsp;<ExternalLinkIcon />
                        </Button>
                    </Link>
                </ListItem>

                <ListItem>
                    <Link href="https://www.linkedin.com/in/plnguyen2021" target="_blank">
                        <Button variant="ghost" colorScheme="purple" leftIcon={<Icon as={IoLogoLinkedin} />}>
                            LinkedIn&nbsp;<ExternalLinkIcon />
                        </Button>
                    </Link>
                </ListItem>

                <ListItem>
                    <Link href="https://flic.kr/ps/Xn7sG" target="_blank">
                        <Button variant="ghost" colorScheme="purple" leftIcon={<Icon as={IoLogoFlickr} />}>
                            Flickr&nbsp;<ExternalLinkIcon />
                        </Button>
                    </Link>
                </ListItem>
            </List>
        </Section>
    )
}

export default SocialLinks