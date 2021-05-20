import './App.css';
import Pagination from './components/Pagination/Pagination';
import TableSearch from './components/TableSearch/TableSearch';
import Users from './components/TableUsers/Users';
import React from 'react'
import reducer from './utils/reducers'
import axios from 'axios';
import ActiveUser from './components/ActiveUser/ActiveUser';
import TableAdd from './components/TableAdd/TableAdd';

function App() {
  const [show, setShow] = React.useState(false)

  const [state, dispatch] = React.useReducer(reducer, {
    users: [],
    usersSearch: '',
    activePage: 0,
    active: false,
    activePopup: null,
    activeUser: ''
  })
  
  React.useEffect(()=>{
    axios.get('http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}',{
      headers:{
        cors: '*'
      }
    })
        .then(item=>dispatch({type: "SET_USERS", payload: item.data}))
  },[])
  
  React.useEffect(() => {
    if(state.activePopup===0){
      if(!state.active){
          const newUsers = state.users.sort((prev, next)=>prev.id-next.id)
          dispatch({type: "SET_USERS", payload: newUsers})
      }
      else{
          const newUsers = state.users.sort((prev, next)=>prev.id-next.id)
          dispatch({type: "SET_USERS", payload: newUsers.reverse()})
      }
    }else if(state.activePopup===1){
      if(!state.active){
          const newUsers = state.users.sort(function (a, b) {
          return a.firstName.split('')[0].localeCompare(b.firstName.split('')[0]);
        })
          dispatch({type: "SET_USERS", payload: newUsers})
      }else{
        const newUsers = state.users.sort(function (a, b) {
          return a.firstName.split('')[0].localeCompare(b.firstName.split('')[0]);
        })
          dispatch({type: "SET_USERS", payload: newUsers.reverse()})
      }
    }else if(state.activePopup===2){
      if(!state.active){
        const newUsers = state.users.sort(function (a, b) {
          return a.lastName.split('')[0].localeCompare(b.lastName.split('')[0]);
        })
          dispatch({type: "SET_USERS", payload: newUsers})
      }else{
        const newUsers = state.users.sort(function (a, b) {
          return a.lastName.split('')[0].localeCompare(b.lastName.split('')[0]);
        })
          dispatch({type: "SET_USERS", payload: newUsers.reverse()})
      }
    }else if(state.activePopup===3){
      if(!state.active){
      const newUsers = state.users.sort(function (a, b) {
          return a.email.split('')[0].localeCompare(b.email.split('')[0]);
        })
          dispatch({type: "SET_USERS", payload: newUsers})
      }else{
        const newUsers = state.users.sort(function (a, b) {
          return a.email.split('')[0].localeCompare(b.email.split('')[0]);
        })
          dispatch({type: "SET_USERS", payload: newUsers.reverse()})
      }
    }else if(state.activePopup===4){
      if(!state.active){
      const newUsers = state.users.sort(function (a, b) {
          return a.phone.split('')[1].localeCompare(b.phone.split('')[1]);
        })
          dispatch({type: "SET_USERS", payload: newUsers})
      }else{
        const newUsers = state.users.sort(function (a, b) {
          return a.phone.split('')[1].localeCompare(b.phone.split('')[1]);
        })
          dispatch({type: "SET_USERS", payload: newUsers.reverse()})
      }
    }
      
  }, [state.activePopup, state.active])
  
  return (
    <div className="App">
      <TableSearch state={state} dispatch={dispatch} />
      <br/>
      {!show && <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
          <button onClick={() => setShow(true)} type="button" className="btn btn-primary">Добавить</button>
      </div>}
      {show && <TableAdd setShow={setShow} dispatch={dispatch}/>}
      <br/>
      <Pagination state={state} dispatch={dispatch}/>
      <Users state={state} dispatch={dispatch}/>
      {state.activeUser && <ActiveUser state={state} />}
    </div>
  );
}

export default App;
