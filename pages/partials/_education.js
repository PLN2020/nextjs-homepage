import { Heading } from "@chakra-ui/react"
import { BioSection, BioYear } from "../../components/bio"
import Section from "../../components/section"

const Education = () => {
    return (
        <Section delay={0.2}>
            <Heading as="h3" variant="section-title">
                Education
            </Heading>
            <BioSection>
                <BioYear>2016</BioYear>
                Completed a 4 month semester exchange program at the University of Kanazawa in 2016 as part of my bachelor&apos;s degree.
            </BioSection>

            <BioSection>
                <BioYear>2019</BioYear>
                Completed my Bachelor of Arts in Asian Studies at the University of Montreal. I specialized in Japanese culture and language.
            </BioSection>

            <BioSection>
                <BioYear>2021</BioYear>
                Attended Le Wagon&apos;s 24 week part-time Web Development bootcamp as part of batch #517. Learned HTML, CSS, Bootstrap, Javascript, SQL, git, Heroku, Ruby on Rails, etc.
            </BioSection>
        </Section>
    )
}

export default Education