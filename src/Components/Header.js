import { Box, Button, Flex } from "@chakra-ui/react"

const Header = () => {

    return(
        <Flex p="6" justifyContent={"space-between"} bg="#3a5a40">
            <Menu>
            <Button color={"white"} variant="link">
MENU
            </Button>
            </Menu>
           
            <Button color={"white"} variant="link">
PERFIL
            </Button>

        </Flex>
    )
}