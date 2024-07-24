import Cart from "./ex2";

function Cartlist(){
  const name="ReactJS"
  const college = "svecw"
  const userobject = {name:"Name 1",branch : "Branch 1",year:"3"}
  const users = ["Name 1","Name 2","Name 3","Name 4","Name 5"]
  return(
    <div style={{display:'flex',flexwrap:'wrap'}}>
      {
        users.map((user,index)=>
          (<Cart key={index}
          program={name}
          col={college}
          user={userobject}
          userFromArray = {user}/>
        ))
      }
      {/*Declare property */}
    
    </div>
  );
}
export default Cartlist;