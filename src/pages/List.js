import React from 'react';

const User = ({userData}) => {
    return (
        <tr>
            <td>{userData.name}</td>
            <td>{userData.email}</td>
        </tr>
    )
}

const UserList = () => {
    const users = [
        {email : 'user1@example.com', name : 'John'},
        {email : 'user2@example.com', name : 'David'},
        {email : 'user3@example.com', name : 'Tom'},
        {email : 'user4@example.com', name : 'Mark'},
        {email : 'user5@example.com', name : 'Mathew'},
    ];

    return (
        <table>
            <thead>
                <tr>
                    <th>Name : </th>
                    <th>Email : </th>
                </tr>
            </thead>
            <tbody>
                {users.map(user =><User userData={user} />)}
            </tbody>
        </table>
    )
}

export default UserList;