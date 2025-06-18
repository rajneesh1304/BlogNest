import { div } from 'motion/react-client'
import React from 'react'

const Loader = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
        <div className='animate-spin rounded-full border-4 border-gray-700 h-16 w-16 border-t-white'>
        
        </div>
    </div>
  )
}

export default Loader