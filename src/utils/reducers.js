export default (state, action) => {
    switch (action.type) {

    case 'SET_USERS':
        return { ...state, users: action.payload }
    case 'ACTIVE_PAGE':
        return { ...state, activePage: action.payload }
    case 'ACTIVE_POPUP':
        return { ...state, activePopup: action.payload.id, active: action.payload.active }
    case 'ACTIVE_USER':
        return { ...state, activeUser: action.payload }
    case 'ACTIVE':
        return { ...state, active: action.payload }
    case 'ADD_USER':
        return { ...state, users: [...state.users, action.payload] }
    case 'SEARCH_USER':{
        let newUsers
        if(action.payload.firstName){
            newUsers = state.users.filter(item=>item.firstName.match(action.payload.firstName))
        }else
        if(action.payload.lastName){
            newUsers = state.users.filter(item=>item.lastName.match(action.payload.lastName))
        }else
        if(action.payload.email){
            newUsers = state.users.filter(item=>item.email.match(action.payload.email))
        }else
        if(action.payload.phone){
            newUsers = state.users.filter(item=>item.phone.match(action.payload.phone))
        }
        return { ...state, usersSearch:  newUsers }
        }
    default:
        return state
    }
}
