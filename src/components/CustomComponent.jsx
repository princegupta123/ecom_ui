import React from 'react'

const CustomComponent = (props) => {
  return (
  
     <div className='custom'>
       <p>{props.name}</p>
       <p>{props.value}</p>
    </div>
    
  )
}

export default CustomComponent