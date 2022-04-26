import { Box, SimpleGrid, UnorderedList, ListItem, Heading, Button } from '@chakra-ui/react'
import Section from "../../components/section"
import { ToolkitData } from '../../data/toolkit-data'
import NextLink from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons'

const Toolkit = () => {

    const data = ToolkitData

    return (
        <Section delay={0.3}>
            <Heading as="h3" variant="section-title">
                Toolkit
            </Heading>
            <SimpleGrid 
                columns={[1, 3, 3]}
                borderWidth='1px'
                borderColor='purple.300'
                borderRadius='lg'
                overflow='hidden'
            >
                {data.map((item) => {
                    return(
                        // Toolkit container
                        <Box
                            key={item} 
                            pt={6}
                            pb={6}
                            borderBottom='1px'
                            borderColor='purple.300'
                            transition="all 0.2s ease-out"
                            _hover={{ 
                                boxShadow: '0 0 1em 0px rgba(0, 0, 0, 0.4)',
                                transform: 'scale(1.01)'
                            }}
                            _active={{
                                transform: 'scale(1.01) translateY(0.2rem)'
                            }}
                        >
                            <Box
                                display='flex'
                                justifyContent='center'
                                alignItems='center'
                                flexDirection='column'
                            >
                                <Box fontSize='60'>{item.icon}</Box>
                                <Heading as="h3" variant="skill-title">{item.type}</Heading>
                            </Box>

                            <Box>
                                {item.list.map((skill) => {
                                    return (
                                        <UnorderedList
                                            key={item.list.skill}
                                            display='flex'
                                            justifyContent='center'
                                            alignItems='center'
                                        >
                                            <ListItem listStyleType='none' pr={3}>
                                                <Button variant="ghost" leftIcon={skill.icon} cursor="default">
                                                    {skill.name}
                                                </Button>
                                            </ListItem>
                                        </UnorderedList>
                                    )
                                })}
                            </Box>
                        </Box>
                    )
                })}
            </SimpleGrid>

            <Box align="center" my={4}>
                <NextLink href="/projects" passHref>
                    <Button rightIcon={<ChevronRightIcon />} colorScheme="purple">
                        Projects
                    </Button>
                </NextLink>
            </Box>
        </Section>
    )
}

export default Toolkit