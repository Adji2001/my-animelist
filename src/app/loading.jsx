import React from 'react'

const loading = () => {
  return (
    <div className='w-full h-[85vh] flex flex-col justify-center items-center gap-3'>
        <div class="custom-loader"></div>
        <h1 className='text-warne-accent text-4xl font-semibold'>Loading ...</h1>
    </div>
  )
}

export default loading