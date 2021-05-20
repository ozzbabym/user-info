import React from 'react'
import styles from './TableSearch.module.css'

function TableSearch(props) {
    const [firstName, setFirstName] = React.useState('')
    const [lastName, setLastName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [phone, setPhone] = React.useState('')

    const [firstNameDisable, setFirstNameDisable] = React.useState(false)
    const [lastNameDisable, setLastNameDisable] = React.useState(false)
    const [emailDisable, setEmailDisable] = React.useState(false)
    const [phoneDisable, setPhoneDisable] = React.useState(false)



    const search = (data) => {
        props.dispatch({type: 'SEARCH_USER', payload: data})
    }
    

    React.useEffect(()=>{
        if(firstName){
            setLastNameDisable(true)
            setEmailDisable(true)
            setPhoneDisable(true)
        }else{
            setLastNameDisable(false)
            setEmailDisable(false)
            setPhoneDisable(false)
        }
    },[firstName])
    React.useEffect(()=>{
        if(lastName){
            setFirstNameDisable(true)
            setEmailDisable(true)
            setPhoneDisable(true)
        }else{
            setFirstNameDisable(false)
            setEmailDisable(false)
            setPhoneDisable(false)
        }
    },[lastName])
    React.useEffect(()=>{
        if(email){
            setLastNameDisable(true)
            setFirstNameDisable(true)
            setPhoneDisable(true)
        }else{
            setLastNameDisable(false)
            setFirstNameDisable(false)
            setPhoneDisable(false)
        }
    },[email])
    React.useEffect(()=>{
        if(phone){
            setLastNameDisable(true)
            setEmailDisable(true)
            setFirstNameDisable(true)
        }else{
            setLastNameDisable(false)
            setEmailDisable(false)
            setFirstNameDisable(false)
        }
    },[phone])
    
    

    
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
                        <td><input disabled={firstNameDisable} onChange={(e)=>setFirstName(e.currentTarget.value)} value={firstName}></input></td>
                        <td><input disabled={lastNameDisable} onChange={(e)=>setLastName(e.currentTarget.value)} value={lastName}></input></td>
                        <td><input disabled={emailDisable} onChange={(e)=>setEmail(e.currentTarget.value)} value={email}></input></td>
                        <td><input disabled={phoneDisable} onChange={(e)=>setPhone(e.currentTarget.value)} value={phone}></input></td>
                    </tr>
                </tbody>
            </table>
            <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                <button onClick={()=>search({firstName, lastName, email, phone})} type="button" class="btn btn-primary">Найти</button>
            </div>
        </div>
    )
}

export default TableSearch
