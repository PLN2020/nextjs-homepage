import { motion } from 'framer-motion'
import { chakra, shouldForwardProp } from '@chakra-ui/react'

const StyledDiv = chakra(motion.div, {
    shouldForwardProp: prop => {
        return shouldForwardProp(prop) || prop ==='transtition'
    }
})

const Section = ({ children, delay=0}) => (
    <StyledDiv
        initial={{y: 10, opacity: 0}}
        anitmate={{y:0, opacity: 1}}
        transtition={{duration: 0.8, delay}}
        mb={6}
    >
        {children}
    </StyledDiv>
)

export default Section