import axios from "axios"
import { useState } from "react"
import { GlobalContext } from "./GlobalContext"
import { BASE_URL } from "../constants/url"
import { goToFeedPage } from "../Router/coordinator"

const GlobalState = (props) => {
const [recipes,setRecipes] = useState([])

const cadastro = (body, navigate) => {
axios.post(`${BASE_URL}/user/signup`, body)
.then((res) => {localStorage.setItem("cadastro.token", res.data.token)
goToFeedPage(navigate)
})
.catch((err)=> alert(err))
}

const login = (body, navigate) => {
    axios.post(`${BASE_URL}/user/signup`, body)
    .then((res) => {localStorage.setItem("cadastro.token", res.data.token)
    goToFeedPage(navigate)
})
    .catch((err)=> console.log(err))
    }

    const listaReceitas = () => {
const headers = {
    headers:{
        Authorization: localStorage.getItem("cadastro.token")
    }
}
        axios.get(`${BASE_URL}/recipe/all`, headers)
        .then((res) => {setRecipes((res.data))
    })
        .catch((err)=> console.log(err))
        }

const data = {
    cadastro, login, listaReceitas, recipes
}

    return(
        <GlobalContext.Provider value={data}>
        {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalState;