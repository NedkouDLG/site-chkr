import React from 'react';
import { Box, Image, Center } from '@chakra-ui/react';

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


export default function CarouselElement() {
    return (
        <Box backgroundColor={'#000000'} >
            <Box backgroundColor={'#000000'} className="carousel-wrapper" w="80%" h="auto" top={0}
                right={0}
                left={0}
                bottom={0}
                margin="auto">
                <Carousel infiniteLoop useKeyboardArrows autoPlay showThumbs={false}>
                    <Box>
                        <Image src={require("./minyor-hero.jpg")} />
                    </Box>
                    <Box>
                        <Image src={require("./vitosha-hero.jpg")} />
                    </Box>

                </Carousel>
            </Box>
        </Box>
    );
}
