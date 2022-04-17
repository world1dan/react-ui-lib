import React from 'react'


const Button = () => {

    return (
        <div>

            {new Array(1000).fill(0).map((_, i) => <div key={i}>Test</div>)}
        </div>
    )
}


export default Button