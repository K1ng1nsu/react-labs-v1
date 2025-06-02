import Greeting from './Greeting';
import Profile from './Profile';
import Welcome from './Welcome';
import Wrapper from './Wrapper';
import Button from './Button';
import UserList from './UserList';

type Props = {};

const WrapAll2 = (props: Props) => {
  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e.target);
    console.log('clicked');
  };

  const users = [
    { id: 1, name: '윤유저' },
    { id: 2, name: '김유저' },
    { id: 3, name: '이유저' },
  ];

  return (
    <div>
      <Greeting name="insu" />
      <Profile age={28} name="insu" />
      <Welcome nickname="" />
      <Wrapper>
        <Greeting name="insu" />
      </Wrapper>
      <Button onClick={clickHandler} />
      <UserList users={users} />
    </div>
  );
};

export default WrapAll2;
