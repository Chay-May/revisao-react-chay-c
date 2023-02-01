import { Box } from "@chakra-ui/react"
import { useContext, useEffect } from "react"
import Cards from "../Components/Cards"
import { GlobalContext } from "../GlobalSatate/GlobalContext"

const ListaReceitas = () =>{
const context = useContext(GlobalContext)
const {listaReceitas, recipes} = context

useEffect((
    listaReceitas()
),[])

return(

        <Box   display="flex"
        flexWrap="wrap"
        gap={20}
        justifyContent="center"
        alignItems="center" >
            {
                recipes.map((recipe) => {
                    return (
                        <Cards
                            key={recipe.id}
                            title={recipe.title}
                            img={recipe.imageUrl}
                        />
                    )
                })
            }
        </Box>

)
}
export default ListaReceitas;