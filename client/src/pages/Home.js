// import { useEffect } from "react";

import { useAuthContext } from "../hooks/useAuthContext"

const Home = () => {
    const {user} = useAuthContext()

  
    return(<div>{user}
    <h1>A</h1></div>)
}

export default Home;