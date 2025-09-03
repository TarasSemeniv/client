import {Outlet} from "react-router"
import Header from "./components/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAuthUser } from "./thunks/authThunk";
import { getToken } from "./utils/token";

const App = () => {
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth)

    useEffect(() => {
        if (getToken())
            dispatch(getAuthUser())
    }, [])

    return (
        <div>
            <Header />
            <div style={{padding: "0 40px"}}>
                
                <Outlet  />
            </div>
        </div>
    )
}

export default App;
