import {
    Box, 
} from "@chakra-ui/react";

import theme from "../public/theme";


function Section ( props ) {
    return <Box py={[8, 10, 12]} px={[5, 5, 10]} bg={ props.bg || theme.white }>
        { props.children }
    </Box>
}

export default Section;