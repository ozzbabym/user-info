import React from 'react'

function ActiveUser(props) {
    const data = props.state.activeUser
    return (
        <div>
            <div className="card" style={{width: 360, margin:'0 auto', marginTop: 50}}>
            {/* <img class="card-img-top" src="..." alt="Card image cap"/> */}
            <div className="card-body">
            <h5 className="card-title">{`${data.firstName}  ${data.lastName}`}</h5>
            {data.description && <p className="card-text">{data.description}</p>}
            </div>
            <ul className="list-group list-group-flush">
            <li clasNames="list-group-item" style={{marginLeft: 20}}><b>Email:</b> {data.email}</li>
            <li className="list-group-item"><b>Phone:</b> {data.phone}</li>
            {data.address &&
            <div>
            <li className="list-group-item"><b>City:</b> {data.address.city}</li>
            <li className="list-group-item"><b>State:</b> {data.address.state}</li>
            <li className="list-group-item"><b>Adress:</b> {data.address.streetAddress}</li>
            <li className="list-group-item"><b>Index:</b> {data.address.zip}</li>
            </div>
            }
            </ul>
            
        </div>
      </div>
       
    )
}

export default ActiveUser
