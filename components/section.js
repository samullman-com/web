import {
    Box, 
} from "@chakra-ui/react";

function Section ( props ) {
    return <Box py={[5, 10, 12]} px={[3, 5, 10]} bg={ props.bg || "gray.100"}>
        { props.children }
    </Box>
}

export default Section;