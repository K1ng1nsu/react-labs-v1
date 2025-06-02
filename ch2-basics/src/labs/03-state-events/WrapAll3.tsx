import Counter from './Counter';
import TodoList from './TodoList';
import ToggleMessage from './ToggleMessage';
import UserList from './UserList';

type Props = {};

const WrapAll3 = (props: Props) => {
  return (
    <div>
      <Counter />
      <ToggleMessage />
      <TodoList />
      <UserList />
    </div>
  );
};

export default WrapAll3;
