import React from 'react'
import {
    Text,
    Stack,
    Link,
    Collapse,
    Flex,
    useDisclosure
} from '@chakra-ui/react'
import { ChevronDownIcon} from '@chakra-ui/icons'
const MobileNavItem = ({ label, children, href }) => {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Stack spacing={4} onClick={children && onToggle}>
            <Flex
                py={2}
                as={Link}
                href={href ?? '#'}
                justify={'space-between'}
                align={'center'}
                _hover={{
                    textDecoration: 'none',
                }}>
                <Text
                    fontWeight={600}
                    color={'white'}>
                    {label}
                </Text>
                {children && (
                    <ChevronDownIcon
                        color='white'
                        transition={'all .25s ease-in-out'}
                        transform={isOpen ? 'rotate(180deg)' : ''}
                        w={6}
                        h={6}
                    />
                )}
            </Flex>

            <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
                <Stack
                    mt={2}
                    pl={4}
                    borderLeft={1}
                    borderStyle={'solid'}
                    borderColor={'white'}
                    align={'start'}>
                    {children &&
                        children.map((child) => (
                            <Link key={child.label} py={2} href={child.href}>
                                <Text color='white'>{child.label}</Text>
                            </Link>
                        ))}
                </Stack>
            </Collapse>
        </Stack>
    );
};
export default MobileNavItem;