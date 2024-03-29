import React from 'react'
import {
    Box,
    Stack,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent, useColorModeValue
} from '@chakra-ui/react'

import { NAV_ITEMS } from './NavItems'
import DesktopSubNav from './DesktopSubNav';

const DesktopNav = () => {
    const linkColor = '#FFFFFF';
    const linkHoverColor = "#ED8936";
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');

    return (
        <Stack direction={'row'} spacing={20} align="center" justifyContent="space-between">
            {NAV_ITEMS.map((navItem) => (
                <Box key={navItem.label}>
                    <Popover trigger={'hover'} placement={'bottom-start'}>
                        <PopoverTrigger>
                            <Box transform={{skewX:'30deg'}} p={4} _hover={{
                                backgroundColor: linkHoverColor
                            }}>
                                <Link
                                    p={2}
                                    href={navItem.href ?? '#'}
                                    fontSize={'md'}
                                    fontWeight={'bold'}
                                    color={linkColor}
                                    _hover={{
                                        textDecoration: 'none',
                                        // color: linkHoverColor,
                                    }}>
                                    {navItem.label}
                                </Link>
                            </Box>
                        </PopoverTrigger>

                        {navItem.children && (
                            <PopoverContent
                                border={0}
                                boxShadow={'xl'}
                                bg={popoverContentBgColor}
                                p={4}
                                rounded={'xl'}
                                minW={'sm'}>
                                <Stack>
                                    {navItem.children.map((child) => (
                                        <DesktopSubNav key={child.label} {...child} />
                                    ))}
                                </Stack>
                            </PopoverContent>
                        )}
                    </Popover>
                </Box>
            ))}
        </Stack>
    );
};
export default DesktopNav;
