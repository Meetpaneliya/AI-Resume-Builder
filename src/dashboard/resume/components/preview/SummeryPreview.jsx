//import React from 'react'

function SummeryPreview({resumeInfo}) {
  return (
    <p className='text-xs mt-3 font-sans'>
        {resumeInfo?.summery}
    </p>
  )
}

export default SummeryPreview