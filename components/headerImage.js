
import ProgressiveImage from "./progressiveImage";

import {
    Box, 
} from "@chakra-ui/react";

function HeaderImage ( { src, alt, darken } ) {
    return <Box position="relative" height={["100px", "25vh"]}>
    <ProgressiveImage src={ src } alt={ alt } darken={ darken } />
  </Box>
}

export default HeaderImage;