import React from 'react'

const Card = (props) => {
    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <h1>{props.title}</h1>
                </div>
             </div>
        </div>
    )
}

export default Card
