import React from 'react'
import {HashLoader} from 'react-spinners';

const loading = () => {


  return (
        <div className='h-screen w-full bg-primary3 flex items-center justify-center text-3xl font-bold'>
        <HashLoader color='#000'
                          speedMultiplier={2}/>
      </div>
  )
}

export default loading;