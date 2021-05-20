import React from 'react'
import styles from './Users.module.css'
import arrow from '../../assets/img/arrow.png'
import Preloader from '../Preloader/Preloader';

const items = ['#','FirstName','LastName', 'email', 'phone' ]

function Users(props) {
    const [arrowActive, setArrowActive] = React.useState(null)
    let users = props.state.usersSearch || props.state.users
    if(props.state.usersSearch && props.state.usersSearch.length>0){
        users = props.state.usersSearch
    }else{
        users = props.state.users
    }
    
    const array = [], result = [], length = 50; 
    for (let i = 0; i <= users.length-1; i++) array.push(users[i]); 
    while(array.length) result.push(array.splice(0,length));
    
    const sortId = (id) => {
        if(Number(id) !== arrowActive){
        props.dispatch({type: 'ACTIVE_POPUP', payload: {id: Number(id), active: true }})
        setArrowActive(Number(id))
        }else{
            props.dispatch({type: 'ACTIVE_POPUP', payload: {id: Number(id), active: false}})
            setArrowActive(null)
        }
    }

    const activeUser = (data) => {
        props.dispatch({type: 'ACTIVE_USER', payload: data})
    }

   

    return (
        <div className={styles.wrapper}>
            <table className="table">
                <thead>
                    <tr>
                        {items.map((item, i)=><th key={item} id={i} onClick={(e)=>sortId(e.currentTarget.id)} scope="col">{item}<img className={arrowActive === i?styles.activeArrow:""} src={arrow} alt="" /></th>)}
                    </tr>
                </thead>
                    <tbody>
                      
                    {users && users.length===0 && <Preloader />}
                   
                    {users.length>0 && result[props.state.activePage].map((item, i)=>
                        <tr  onClick={(() => activeUser(item))}>
                            <th scope="row">{item.id}</th>
                            <td>{item.firstName}</td>
                            <td>{item.lastName}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                        </tr>
                        )}
                    </tbody>
            </table>
        </div>
    )
}

export default Users
