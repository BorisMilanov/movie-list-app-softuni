// import { useEffect } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

const Home = () => {
    const {user} = useAuthContext()

  
    return(<div>{user}</div>)
}

export default Home;