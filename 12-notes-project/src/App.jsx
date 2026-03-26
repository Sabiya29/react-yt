import { useState } from 'react';

const App = () => {
  
  const [title, setTitle]=useState('')
  const [detailed, setDetailed]=useState('')

  const [task, setTask]=useState([]);
  const submitHandler=(e)=>{
    e.preventDefault()

    const copyTask=[...task];

    copyTask.push({title,detailed})

    setTask(copyTask)
    console.log(copyTask)
    setTitle('')
    setDetailed('')
  }

  const deleteNote=(idx)=>{
    const copyTask=[...task]
    copyTask.splice(idx,1)

    setTask(copyTask)
  }
  
  return (
    <div className='h-screen lg:flex bg-black text-white'>
      <form onSubmit={(e)=>{
        submitHandler(e);
      }}
      className='flex gap-4 lg:w-1/2 flex-col items-start p-10  '>
      
      <h1 className='text-3xl font-bold'>Add Notes</h1>
      {/* first input */}
        <input type="text"
        placeholder='Write Notes'
        className='px-5 w-full font-medium py-2 border-2 outline-none rounded'
        value={title}
        onChange={(e)=>{
          setTitle(e.target.value)
        }}
        />
      {/* detailed input */}
        <textarea type="text"
        placeholder='Write deatils'
        className='px-5 w-full font-medium border-2 outline-none rounded py-2 h-32 flex items-start flex-row' 
        value={detailed}
        onChange={(e)=>{
          setDetailed(e.target.value)
        }}
        />

        <button className='bg-white font-medium text-black w-full outline-none px-5 py-2 rounded'>Add Notes</button>
      
      </form>
      
      <div className='lg:w-1/2 bg-black border-l-2 p-10'>
        <h1 className='text-3xl font-bold'>Your Notes</h1>
        <div className='flex flex-wrap items-start justify-start gap-5 mt-6 h-full overflow-auto'>
          {task.map((elem,idx)=>{
            return(
              <div key={idx} className=' flex justify-between flex-col items-start h-52 w-40 bg-cover rounded-xl p-4 pt-9 pb-4 relative bg-[url(https://th.bing.com/th/id/OIP.HiHK4Pa1BI9ovQXxBgBjygHaHy?w=164&h=188&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3)] text-black '>
                <div><h3 className='leading-tight text-xl font-bold '>{elem.title}</h3>
                <p className='mt-3 leading-tight font-medium text-gray-500'>{elem.detailed}</p>
                </div>
                <button onClick={()=>{
                  deleteNote(idx)
                }} className='w-full bg-red-600 text-white py-1 text-xs rounded font-bold cursor-pointer active:scale-95'>Delete</button>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default App;
