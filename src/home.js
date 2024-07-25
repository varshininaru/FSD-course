import { useState } from "react";
import Login from "./login";
import Reg from "./register";

function Home(){
    const [islogin,setLogin] = useState(true);
    const showLogin = () => { setLogin(true)}
    const showRegister = () => {setLogin(false)}

    return(
        <div align="center">
            <button onClick={showLogin}>Login</button>
            <button onClick={showRegister}>Register</button>
        {islogin?
            <Login/>
            :
            <Reg/>
        }
        </div>
    );
}
export default Home;