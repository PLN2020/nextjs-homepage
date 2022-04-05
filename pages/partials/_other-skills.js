import { Heading, Link } from "@chakra-ui/react"
import Paragraph from "../../components/paragraph"
import Section from "../../components/section"

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
                Picked up the skill since studying abroad in Japan and have been a hobbyist since. 
                Also familiar with editing softwares such as Lightroom CC and Photoshop.
                <br/>
                <Link href="https://www.flickr.com/gp/62652636@N04/434Lu5" target="_blank">
                    Visit my flickr
                </Link>
            </Paragraph>

            <Paragraph>
                <Heading as="h3" variant="skill-title">
                    Japanese Language Proficiency Test
                </Heading>
                The JLPT is a test taken by non native Japanese speakers to measure their proficiency level. 
                Acquired the certificate for the JLPT level N2 in 2017.
                <br/>
                <Link href="https://www.jlpt.jp/e/about/levelsummary.html" target="_blank">
                    Learn more about the JLPT
                </Link>
            </Paragraph>
        </Section>
    )
}

export default OtherSkills