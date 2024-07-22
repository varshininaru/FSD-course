function Arr(){
    let a = [1,2,3,4,5];
    return ( 
    <>   {a.map((i)=>(
        <h1>{i}</h1>
       ))}
    </>  
);
}
export default Arr;