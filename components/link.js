import Link from "next/link";
import {
    Box,
} from "@chakra-ui/react";

function PageLink ({ href, children }) {
    return (
        <Link href={ href || "/" }>
        <Box display="inline-block" _hover={{textDecoration: "underline"}} cursor="pointer" _focus={{outline: "lightblue"}}>
            { children }
        </Box>
        </Link>
    )
}

export default PageLink;