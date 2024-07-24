import { useEffect, useRef,useState } from "react";

function Login(){

    const firstref = useRef(null);
    const secondref = useRef(null);
    //reference
    const [loginmessage,setMessage] = useState('');
    useEffect(() => {
        firstref.current.focus();
});
    const formSubmit = (event) => {
        event.preventDefault();//prevent reload
        console.log("Form submitted");
       // console.log(firstref.current.value);
        //console.log(secondref.current.value);
        // firstref.current.value = '';
        // secondref.current.value = '';
        if(firstref.current.value == secondref.current.value){
            console.log("Correct");
            setMessage("Correct");
        }else{
            console.log("Incorrect");
            setMessage("Incorrect");
        }
        firstref.current.value = '';
        secondref.current.value = '';

        
        // clear value
    }
    return(
        <div className="container" align="center">
        <div className="card" style= {{width : '300px', display:'flex',flexDirection:'row',padding:'20px'}} align="center">
            <form  onSubmit={formSubmit} style={{display:'flex',flexDirection:'column',gap:'10px'}} align="center">
            <h2>Login</h2>
            <p>Provide your details to login</p>
            <h5>College Id</h5>
            <input type="text" ref={firstref} placeholder="College Id"/>
            <h5>Password</h5>
            <input type="password" ref={secondref} placeholder="Password"/><br/><br/>
            <button type = "submit">Login</button>
            <p>{loginmessage}</p>
            </form>
            </div>
        </div>
    );
}
export default Login;