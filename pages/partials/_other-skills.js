import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Heading, Link } from "@chakra-ui/react"
import Paragraph from "../../components/paragraph"
import Section from "../../components/section"
import NextLink from 'next/link'

const OtherSkills = () => {
    return (
        <Section delay={0.3}>
            <Heading as="h3" variant="section-title">
                Other Skills
            </Heading>

            <Paragraph>
                <Heading as="h3" variant="skill-title">
                    Photography
                </Heading>
                Picked this hobby up while studying abroad in Japan and have stuck with it after I returned to Montreal. 
                Also familiar with editing softwares such as Lightroom CC and Photoshop.
                <br/>
                <NextLink href="/photography" passHref>
                    <Link>See my photos</Link>
                </NextLink>
            </Paragraph>

            <Paragraph>
                <Heading as="h3" variant="skill-title">
                    Japanese Language Proficiency Test
                </Heading>
                The JLPT is a test taken by non native Japanese speakers to measure their proficiency level. 
                Acquired the JLPT N2 level certificate in 2017.
                <br/>
                <Link href="https://www.jlpt.jp/e/about/levelsummary.html" target="_blank">
                    Learn more about the JLPT&nbsp;<ExternalLinkIcon />
                </Link>
            </Paragraph>
        </Section>
    )
}

export default OtherSkills