import React, { useContext, useEffect } from 'react'
import CarouselElement from '../components/Carousel'
import { ShopContext } from '../context/ShopContext'
import { Box, Grid, Text, Image, Center, Heading, Stack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Home = () => {
    const { fetchAllProducts, products } = useContext(ShopContext);

    useEffect(() => {
        fetchAllProducts()
    }, [fetchAllProducts])

    if (!products) return <div>Loadings...</div>
    return (
        <Box>
            <CarouselElement />
            <Grid templateColumns={["repeat(1, 1fr)", "repeat(3, 1fr)"]}>
                {
                    products.map(product => (
                        <Link to={`/products/${product.handle}`} key={product.id}>
                            <Center py={12}>
                                <Box
                                    role={'group'}
                                    p={6}
                                    maxW={'330px'}
                                    w={'full'}
                                    bg={'white'}
                                    boxShadow={'2xl'}
                                    rounded={'lg'}
                                    pos={'relative'}
                                    zIndex={1}>
                                    <Box
                                        rounded={'lg'}
                                        mt={-12}
                                        pos={'relative'}
                                        height={'230px'}
                                        top={0}
                                        right={0}
                                        left={9}
                                        bottom={0}
                                        margin="auto"
                                    // _after={{
                                    //     transition: 'all .3s ease',
                                    //     content: '""',
                                    //     w: 'full',
                                    //     h: 'full',
                                    //     pos: 'absolute',
                                    //     top: 5,
                                    //     left: 0,
                                    //     backgroundImage: `url(${product.images[0].src})`,
                                    //     filter: 'blur(15px)',
                                    //     zIndex: -1,
                                    // }}
                                    // _groupHover={{
                                    //     _after: {
                                    //         filter: 'blur(20px)',
                                    //     },
                                    // }}>
                                    >
                                        <Image
                                            rounded={'lg'}
                                            // height={230}
                                            // width={282}
                                            h='100%'
                                            objectFit={'cover'}
                                            src={product.images[0].src}
                                        />
                                    </Box>
                                    <Stack pt={10} align={'center'}>
                                        <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                                            Jumper
                                        </Text>
                                        <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                                            {product.title}
                                        </Heading>
                                        <Stack direction={'row'} textAlign={'center'}>
                                            <Text fontWeight={800} fontSize={'xl'} textAlign='center'>
                                                {product.variants[0].price} лв.
                                            </Text>
                                        </Stack>
                                    </Stack>
                                </Box>
                            </Center>
                        </Link>
                    ))
                }
            </Grid>
        </Box>
    )
}

export default Home