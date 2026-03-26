import React from 'react'
import ParaText from './ParaText'
import Arrow from './Arrow'

const LeftContent = () => {
  return (
    <div className='h-full w-1/3 flex flex-col justify-between'>
        <ParaText/>
        <Arrow/>
    </div>
  )
}

export default LeftContent
