function Cart(props){
  //const width=800;
  return(
    <div className="card" style={{width:'24rem'}} col sm-3 >
      <img className= "card-img-top" src = "ogt_800.jpg" width = {150} style = {{border:'10px solid red', borderRadius:'2px'}}/>
      <div className="card-body">
        <h2 className="card-title"></h2>
      <h1>{props.user.name}</h1>
      <h1>{props.user.branch}</h1>
    
      <button type="button" class="btn btn-success">Button</button>
    </div>
    </div>
    
  );
}
export default Cart;