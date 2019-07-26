import React from 'react'

function Smurfs(props) {
    return (
        <div className="list">
            {props.data && props.data.map( smurf => {
                return (
                    <div key={smurf.id} className="card">
                        <h3>Name: {smurf.name}</h3>
                        <h4>Age: {smurf.age}</h4>
                        <h4>Height: {smurf.height}</h4>
                    </div>
                )
            })}
        </div>
    )
}

export default Smurfs
