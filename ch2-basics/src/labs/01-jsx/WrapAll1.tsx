import Hello from './Hello';
import Expression from './Expression';

type Props = {};

const WrapAll1 = (props: Props) => {
  return (
    <div>
      <Hello />
      <Expression />
    </div>
  );
};

export default WrapAll1;
