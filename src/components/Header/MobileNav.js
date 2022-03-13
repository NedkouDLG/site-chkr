import React from 'react'
import {
    Stack,
} from '@chakra-ui/react'

import { NAV_ITEMS } from './NavItems'
import MobileNavItem from './MobileNavItem';

const MobileNav = () => {
    return (
        <Stack
            backgroundColor={'#000000'}
            p={4}
            display={{ md: 'none' }}>
            {NAV_ITEMS.map((navItem) => (
                <MobileNavItem key={navItem.label} {...navItem} />
            ))}
        </Stack>
    );
};
export default MobileNav;