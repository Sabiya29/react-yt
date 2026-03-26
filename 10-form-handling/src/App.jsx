// import React from 'react';

function App() {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log('form submitted');
  };
  return (
    <div>
      <form onSubmit={(e) => {
        submitHandler(e);
      } }>
        <input type="text" placeholder='enter your name' />
      </form>
      <button onClick={submitHandler}>submit</button>
    </div>
  );
}

export default App;
