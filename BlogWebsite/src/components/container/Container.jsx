import React from 'react'

//conatiner accepts properties as a children
//it contain only styling properties
function Container({children}) {
  return <div className='w-full max-w-7xl mx-auto'>
      {children}
    </div>;
  
}

export default Container
