import React, { useContext } from 'react'
import {
    Box, Flex, Icon, useDisclosure, IconButton, Image,
    Collapse, Badge,
    useBreakpointValue,
    Spacer,
} from '@chakra-ui/react'
import {
    HamburgerIcon, CloseIcon
} from '@chakra-ui/icons'
// import { Link } from 'react-router-dom'
import { MdShoppingBasket } from "react-icons/md"
import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'
import { ShopContext } from '../../context/ShopContext'
import { Link } from 'react-router-dom'

const NavBar = () => {
    const { openCart, checkout } = useContext(ShopContext);
    const { isOpen, onToggle } = useDisclosure();
    return (
        <Box>
            <Flex backgroundColor="#000000" minH={'100px'}
                py={{ base: 2 }}
                px={{ base: 4 }}
                align={'center'}>
                <Flex
                    flex={{ base: 1, md: 'auto' }}
                    display={{ base: 'flex', md: 'none' }}
                    >
                    <IconButton
                        onClick={onToggle}
                        icon={
                            isOpen ? <CloseIcon color="#ED8936" w={8} h={8} /> : <HamburgerIcon color="#ED8936" w={8} h={8} />
                        }
                        variant={'ghost'}
                        aria-label={'Toggle Navigation'}
                    />
                </Flex>
                <Spacer display={{ base: 'none', md: 'flex' }}/>
                <Flex  justify={{ base: 'center', md: 'start' }} >
                    <Link to="/"><Image src={require('./JUMPER_logo.png')} w={120} align={useBreakpointValue({ base: 'center', md: 'left' })} /></Link>

                </Flex>
                <Spacer display={{ base: 'none', md: 'flex' }}/>
                <Flex display={{ base: 'none', md: 'flex' }} >
                    <DesktopNav />
                </Flex>
                <Spacer display={{ base: 'none', md: 'flex' }}/>
                <Flex flex={{ base: 1, md: 0 }}
                    justify={'flex-end'}
                    direction={'row'}>
                    <Icon color="#ED8936" cursor="pointer" as={MdShoppingBasket} w={30} h={30} onClick={() => openCart()} />
                    <Badge backgroundColor="#FFFFFF" borderRadius={'100%'} h={4}>{checkout?.lineItems?.length}</Badge>
                </Flex>
                <Spacer display={{ base: 'none', md: 'flex' }}/>
            </Flex>

            <Collapse in={isOpen} animateOpacity>
                <MobileNav />
            </Collapse>
        </Box>

    )
}

export default NavBar