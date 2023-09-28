import React from 'react'

const Logo = (white) => {
    return (
        <>
        {
            white ? (<div>

            
            
            </div>) : ( <img 
                src="/logo.png"
                alt="Next.js Logo"
                priority
            />)
        }
       
        </>
    )
}

export default Logo