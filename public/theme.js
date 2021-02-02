import { extendTheme } from "@chakra-ui/react"

const config = {
    black: "#0a0a0a", 
    fonts: {
        body: "comic-sans, sans-serif",
        heading: "Roboto, serif",
        mono: "Menlo, monospace",
    },
}
  
const theme = extendTheme({ config })
export default theme;
