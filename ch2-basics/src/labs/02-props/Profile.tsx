import React from 'react';

type Props = {
  name: string;
  age: number;
};

const Profile = ({ name, age }: Props) => {
  return (
    <>
      <p>name: {name}</p>
      <p>age: {age}</p>
    </>
  );
};

export default Profile;
