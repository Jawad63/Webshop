import React from 'react'
import { useMediaQuery, Box, IconButton, Typography } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { shades } from "../../theme";
import { BorderAll } from '@mui/icons-material';

// import all images:
// const importAll = (r) => 
// r.keys().reduce((acc, item) => {
//     acc[item.replace("./", "")] = r(item);
//     return acc;
// }, {});


function importAll(r) {
    let result = {};
    let keys = r.keys();
    for (let i = 0; i < keys.length; i++) {
      let item = keys[i];
      let itemName = item.replace("./", "");
      result[itemName] = r(item);
    }
    return result;
}
  
const heroTextureImports = importAll(
    require.context("../../assets", false, /\.(png|jpe?g|svg)$/)
)
  


const MainCarousel = () => {
    const isNonMobile = useMediaQuery("(min-width:600px)");
    return (
        <Carousel
            infiniteLoop={true}
            showThumbs={false}
            showIndicators={false}
            showStatus={false}

            renderArrowPrev={(onClickHandler, hasPrev, label) => (
                <IconButton
                    onClick={onClickHandler}
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "0",
                        color: "white",
                        padding: "5px",
                        zIndex: "10",
                        color: shades.secondaryIndigo[500],
                    }}
                >
                    <NavigateBeforeIcon sx={{ fontSize: 40 }} />
                </IconButton>
            )}

            renderArrowNext={(onClickHandler, hasNext, label) => (
                <IconButton
                    onClick={onClickHandler}
                    sx={{
                        position: "absolute",
                        top: "50%",
                        right: "0",
                        color: "white",
                        padding: "5px",
                        zIndex: "10",color: shades.secondaryIndigo[500]
                    }}
                >
                    <NavigateNextIcon sx={{ fontSize: 40 }} />
                </IconButton>
            )}
        >
            {Object.values(heroTextureImports).map((texture, index) => (
                <Box key={`carousel-image-${index}`}>
                    <img
                        src={texture}
                        alt={`carousel-${index}`}
                        style={{
                            width: "100%",
                            height: "700px",
                            objectFit: "cover",
                            backgroundAttachment: "fixed"
                        }}
                    />
                    <Box
                        color="white"
                        padding="20px"
                        textAlign="center"
                        backgroundColor= "rgba(0,0,0,0.8)"
                        position="absolute"
                        transform="translate(-50%, -50%)"
                        top="45%"
                        left={isNonMobile ? "30%" : "0"}
                        right={isNonMobile ? undefined: "0"}
                        margin={isNonMobile ? undefined: "0 auto"}
                        maxWidth={isNonMobile ? undefined: "240px"}
                    >
                        <Typography variant='h1' fontWeight="bold" color={shades.secondaryIndigo[300]}>NEW ARRIVALS</Typography>
                    </Box>
                </Box>
            ))}
        </Carousel>
    )
}

export default MainCarousel;