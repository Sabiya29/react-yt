// import React, {useState } from 'react';

// const App = () => {
//   const [num, setNum] = useState(10);
//   const [username, setUsername] = useState('sabiya');
//   function changeNum(){
//     setNum(20)
//     setUsername('khushi')
//   }
//   return (
//     <div>
//       <h1>value of num is {num} <br />value of user is {username}</h1>
//       <button onClick={changeNum}>Click me</button>
//     </div>
//   );
// }

// export default App;


// import React,{useState} from 'react';

// const App = () => {
//   const[num, setNum]= useState(0);
//   function increaseNum(){
//     setNum(num+1)
//   }
//   function decreaseNum(){
//     setNum(num-1)
//   }
//   function incby5(){
//     setNum(num+5)
//   }
//   return (
//     <div>
//       <h1>{num}</h1>
//       <button onClick={increaseNum}>Increase</button>
//       <button onClick={decreaseNum}>decrease</button>
//       <button onClick={incby5}>IncreaseBy5</button>
//     </div>
//   );
// }

// export default App;

// import React, {useState}from 'react';

// const App = () => {
//   const[num,setNum]=useState({user:'sabiya',age:21})
//   const btnClicked=()=>{
//     const newNum={...num};
//     newNum.user='khushi'
//     newNum.age='22'
//     setNum(newNum)
//   }
//   return (
//     <div>
//       <h1>{num.user}, {num.age}</h1>
//       <button onClick={btnClicked}>Click me</button>
//     </div>
//   );
// }

// export default App;


// import React,{useState} from 'react';

// const App = () => {
//   const[num,setNum]= useState([10,20,30]);
//   const btnClicked=()=>{
//     const newNum=[...num]
//     newNum.push(99)
//     setNum(newNum)
//   }
//   return (
//     <div>
//       <h1>{num}</h1>
//       <button onClick={btnClicked}>click me</button>
//     </div>
//   );
// }

// export default App;


import React,{useState} from 'react';
const App = () => {
  const[num,setNum]=useState(10)
  const btnClicked=()=>{
    setNum(prev=>(prev+1))
    setNum(prev=>(prev+1))
    setNum(prev=>(prev+1))
  }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={btnClicked}>Click me</button>
    </div>
  );
}

export default App;

