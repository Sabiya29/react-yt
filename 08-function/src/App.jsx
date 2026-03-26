// import React from 'react'

// const App = () => {
//   // function MouseEnter(){
//   //   console.log("mouse enter")
//   // }
//   return (
//     <div>
//       {/* <button onClick={function(){
//         console.log("buttion was clicked");
//       }}>click on me</button> */}


//     </div>
//   )
// }

// export default App

// import React from 'react'

// const App = () => {
//   function inputChanging(){
//     console.log("user is typing");
//   }
//   return (
//     <div>
//       <input onChange={inputChanging()} type="text" placeholder='enter name' />
//     </div>
//   )
// }

// export default App


// import React from 'react'

// const App = () => {
//   function inputChanging(elem){
//     console.log(elem);
//   }
//   return (
//     <div>
//       <input onChange={function(elem){
//         inputChanging(elem.target.value);
//       }} type="text" placeholder='Enter a name' />
//     </div>
//   )
// }

// export default App

//PAGE SCROLLING
import React from 'react';

const App = () => {
  const pageScrolling=(elem)=>{
    console.log('page scrolling---at speed', elem)
  }
  return (
    <div onWheel={function(elem){
      pageScrolling(elem.clientX);
    }}>
      <div className='page1'></div>
      <div className='page2'></div>
      <div className='page3'></div>
    </div>
  );
}

export default App;

