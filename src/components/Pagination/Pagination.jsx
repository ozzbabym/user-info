import React from 'react'

function Pagination(props) {
    
    let countUsers 
    if(props.state.usersSearch && props.state.usersSearch.length>0){
        countUsers = props.state.usersSearch
    }else{
        countUsers = props.state.users
    }

    const countUsersPage = 50


    const countPages = Math.ceil(countUsers.length/countUsersPage)
    let arrayUsersPages = []
    for (let i = 1; i < countPages+1; i++) {
        arrayUsersPages.push(i);
    }
    
    const activePage = (pageId) => {
        props.dispatch({type: 'ACTIVE_PAGE', payload: pageId })
    }
   
    return (
        <div style={{display:'flex', justifyContent: 'center', alignItems: 'center'}}>
            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item">
                        <a class="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                            <span class="sr-only">Previous</span>
                        </a>
                    </li>
                    {arrayUsersPages.map((item, i)=> 
                    <li onClick={()=>activePage(i)} key={item} className="page-item"><a className="page-link" href="#" style={props.state.activePage === i ?{background: "#87CEFA", opacity: '0.5'}:{}}>{item}</a></li>
                    )}
                    <li class="page-item">
                        <a class="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                            <span class="sr-only">Next</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Pagination
