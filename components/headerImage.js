
import ProgressiveImage from "./progressiveImage";
import Image from "next/image";
import {
    Box, 
} from "@chakra-ui/react";

function HeaderImage ( { src, alt, darken } ) {
    return <Box position="relative" height={["100px", "25vh"]} minHeight={[200, "300px"]} bg="gray.800">
      <Image src={ src } alt={ alt } layout="fill" objectFit="cover" />
    {/* <ProgressiveImage src={ src } alt={ alt } darken={ darken } /> */}
  </Box>
}

export default HeaderImage;