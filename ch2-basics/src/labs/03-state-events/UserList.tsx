import React, { useState } from 'react';
import UserItem from './UserItem';

type Props = {};

const UserList = (props: Props) => {
  const [users, setUsers] = useState([
    { id: 1, name: '윤유저' },
    { id: 2, name: '김유저' },
  ]);
  return (
    <div>
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserList;
