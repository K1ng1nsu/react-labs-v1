import React from 'react';

type Props = {
  users: { id: number; name: string }[];
};

const UserList = (props: Props) => {
  return (
    <div>
      {props.users.map((user) => {
        return <li key={user.id}>{user.name}</li>;
      })}
    </div>
  );
};

export default UserList;
