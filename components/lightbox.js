import { Image, ModalOverlay, Modal, ModalContent, useDisclosure, ModalCloseButton } from "@chakra-ui/react"
import React from "react"

const LightBox = ({src, alt}) => {
    const OverlayOne = () => (
        <ModalOverlay
            bg='blackAlpha.300'
            backdropFilter='blur(10px) hue-rotate(90deg)'
        />
    )

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [overlay, setOverlay] = React.useState(<OverlayOne />)

    return (
        <>
            <Image 
                src={src}
                alt={alt}
                onClick={() => {
                    setOverlay(<OverlayOne />)
                    onOpen()
                }}
                display="block"
                objectFit="cover"
                transition="all 400ms ease-out"
                _hover={{
                    transform: 'scale(1.1)'
                }}
                _active={{
                    transform: 'scale(1.01) translateY(0.2rem)'
                }}
                w="100%"
                h="100%"
                placeholder="blur"
            />

            <Modal
                isCentered
                isOpen={isOpen}
                onClose={onClose}
                size="lg"
            >
                {overlay}
                <ModalContent>
                    <ModalCloseButton />
                    <Image src={src} alt={alt} placeholder="blur"/>
                </ModalContent>
            </Modal>
        </>
    )
}

export default LightBox