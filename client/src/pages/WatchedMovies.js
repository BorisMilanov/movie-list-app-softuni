import { useAuthContext } from "../hooks/useAuthContext"

const Profile = ()=> {
    const {user} = useAuthContext();

    return(<p>Hello</p>)
}

export default Profile