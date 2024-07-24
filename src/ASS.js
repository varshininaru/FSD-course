function Cmp4(){
    const inputvalue = (event) => {
        console.log("Input change");
        console.log(event.target.value);
    }
    const addReview = () => {
        console.log("Adding review!..");
    }
    return(
        <div>
            <h1>
                Reviews
            </h1>
            <input type="text" placeholder="Enter review"
            onChange={inputvalue}/>
            <button type = "button" className="btn btn-success" onClick={addReview}>Add Review</button>
        </div>
    );
}
export default Cmp4;