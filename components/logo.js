import Link from 'next/link'
import { Text, useColorModeValue, Icon } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { FaLaptopCode } from 'react-icons/fa';

const LogoBox = styled.span`
    font-weight: bold;
    font-size: 18px;
    display: inline-flex;
    align-items: center;
    height: 30px;
    line-height: 20px;
    padding: 10px;
`

const Logo = () => {
    return (
        <Link href="/">
            <a>
                <LogoBox>
                    {/* <FontAwesomeIcon icon={faLaptopCode} size={{ fontSize:20 }} /> */}
                    <Icon as={FaLaptopCode} />
                    <Text
                        color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                        fontFamily='Noto Sans", sans-serif'
                        fontWeight="bold"
                        ml={3}
                    >
                        &nbsp;&nbsp;Patrick-Lam Nguyen
                    </Text>
                </LogoBox>
            </a>
        </Link>
    )
}

export default Logo