import { StyleHeader } from '../styles';
import { GradientColor } from '../../../../styles/Home';

interface Props {
  leftText?: string;
  rightText?: string;
}

const DisplayHeader: React.FC<Props> = ({ leftText, rightText }) => {
  return (
    <StyleHeader>
      <h1 id="filters-header">{leftText}</h1>
      <GradientColor>
        <h3 id="clear-all" onClick={() => alert('todo clear')}>
          {rightText}
        </h3>
      </GradientColor>
    </StyleHeader>
  );
};

export default DisplayHeader;
