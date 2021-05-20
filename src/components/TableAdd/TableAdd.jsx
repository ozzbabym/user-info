import React from 'react'
import styles from './TableAdd.module.css'

function TableAdd(props) {
    const [firstName, setFirstName] = React.useState('')
    const [lastName, setLastName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [phone, setPhone] = React.useState('')
    const [validate, setValidate] = React.useState(false)

    const addUser = () => {
        if(firstName && lastName && email && phone && email.match('@' && ('.ru' || '.com'))) {
            props.dispatch({type: 'ADD_USER', payload: {id: 111, firstName, lastName, email, phone}})
            setFirstName('')
            setLastName('')
            setEmail('')
            setPhone('')
            setValidate(false)
            props.setShow(false)
        }else{
            setValidate(true)
        }
    }

    return (
        <div className={styles.width}>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">FirstName</th>
                        <th scope="col">LastName</th>
                        <th scope="col">email</th>
                        <th scope="col">phone</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row"></th>
                        <td><input onChange={(e)=>setFirstName(e.currentTarget.value)} value={firstName} style={validate?{borderBottom: '3px solid red'}:{}}></input></td>
                        <td><input onChange={(e)=>setLastName(e.currentTarget.value)} value={lastName} style={validate?{borderBottom: '3px solid red'}:{}}></input></td>
                        <td><input onChange={(e)=>setEmail(e.currentTarget.value)} value={email} style={validate?{borderBottom: '3px solid red'}:{}}></input></td>
                        <td><input onChange={(e)=>setPhone(e.currentTarget.value)} value={phone} style={validate?{borderBottom: '3px solid red'}:{}}></input></td>
                    </tr>
                </tbody>
            </table>
            {validate && <div style={{display: "flex", justifyContent: "center", alignItems: "center", color: 'red', marginBottom: 20}}>Какое-то из полей заполнено не правильно</div>}
            <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                <button onClick={addUser} type="button" className="btn btn-primary">Добавить</button>
            </div>
        </div>
    )
}

export default TableAdd
