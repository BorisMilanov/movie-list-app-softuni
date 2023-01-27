import { useEffect } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

const Home = () => {
    const {user} = useAuthContext();

    return(<di>Hi</di>)
}

export default Home;