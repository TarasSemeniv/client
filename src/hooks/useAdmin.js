import { useSelector } from "react-redux"

const useAdmin =  () => {
    const user =  useSelector( state => state.auth.user);
    console.log(user);
    return user?.role === "admin";
}

export default useAdmin;