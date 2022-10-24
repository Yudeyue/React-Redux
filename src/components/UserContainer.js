import React, {useEffect} from 'react'
import {connect, useSelector} from 'react-redux'
import {fetchUsers} from '../redux'

function UserContainer({ userData, fetchUsers}) {
   
    useEffect(() => {
        fetchUsers()
    }, [])
    
  return userData.loading? (
    <h2>Loading</h2>
  ) : userData.error? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
        <h2>User list</h2>
        <div>
            {
                userData && userData.users && userData.users.map(user => <p>{user.name}</p>)
            }
        </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    userData: state.user
  }
}

const mapDispatchProps = (dispatch) => {
    return {
        fetchUsers: ()=> dispatch(fetchUsers())
 }
}



export default connect (mapStateToProps, mapDispatchProps)(UserContainer)