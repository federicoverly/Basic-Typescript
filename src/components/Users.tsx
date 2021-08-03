import React from 'react'
import { useUsers } from '../hooks/useUsers';
import { User } from '../interfaces/reqRes';

export const Users = () => {

    const { users, nextPage, prevPage } = useUsers()


    const renderItem = ( user: User) => {
        return (
            <tr key={user.id}>
                <td>
                    <img src={user.avatar} alt={user.first_name}
                    style={{ width:35, borderRadius: 100}}/>
                </td>
                <td>{user.first_name} {user.last_name}</td>
                <td>{user.email}</td>
            </tr>
        )
    }

    return (
        <>
            <h3>Users</h3>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map( user => renderItem(user))
                    }
                </tbody>
            </table>
            <button className='btn btn-primary' onClick={ () => prevPage()}>
                Previous
            </button>
            <button className='btn btn-primary' onClick={ () => nextPage()}>
                Next
            </button>
        </>
    )
}
