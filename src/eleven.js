import { useRef } from "react";

function Eleven(){

    const firstref = useRef(null);//reference
    const formSubmit = (event) => {
        event.preventDefault();//prevent reload
        // console.log("Form submitted");
        console.log(firstref.current.value);
        firstref.current.value = '';// clear value
    }
    return(
        <div>
            <form onSubmit={formSubmit}>
            <input type="text" ref={firstref}/>
            <button type="submit">Submit</button>
            </form>
        </div>
    );
}
export default Eleven;