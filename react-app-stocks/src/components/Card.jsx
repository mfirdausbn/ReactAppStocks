import React from 'react';

const Card = ({children}) => {
    return (
        <div className='w-full h-full rounded-md relative p-2 border-2  bg-blue-100 border-neutral-300'>
          {children}  
        </div>
    );
};

export default Card;