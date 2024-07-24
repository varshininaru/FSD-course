// import React, { useState } from 'react';

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <div className="App">
//       <header className="App-header">
//         <div style={{dispaly:'flex'}}>
//           <button className="button" onClick={() => setCount(count - 1)}>-</button>
//           <span className="display">{count}</span>
//           <button className="button" onClick={() => setCount(count + 1)}>+</button>
//         </div>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
//import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const btnAddToCard = () => {
    setCount(0)
  }
 
  return (
    <div>
        {(count==0)} ?
        <button className="btn btn-outline-dark btn-sm btn-success" onClick={btnAddToCard}>Add To Cart</button>
    <div style={{display:'flex'}}>
        
          <button className="btn btn-outline-dark btn-sm" onClick={()=> 
    setCount(count-1)}>-</button>
          <span className="display">{count}</span>
          <button className="btn btn-outline-dark btn-sm" onClick={()=> 
    setCount(count+1)}>+</button>
        </div>
        </div>
      
    );
}

export default App;