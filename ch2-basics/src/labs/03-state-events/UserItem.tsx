import React from 'react';

type Props = {
  user: { id: number; name: string };
};

const UserItem = (props: Props) => {
  return <div>{props.user.name}</div>;
};

export default UserItem;
