import { StyleHeader } from '../styles';
import { GradientColor } from '../../../../styles/Home';

interface Props {
  leftText?: string;
  rightText?: string;
  clearFilter?: () => void;
}

const DisplayHeader: React.FC<Props> = ({
  leftText,
  rightText,
  clearFilter,
}) => {
  return (
    <>
      <StyleHeader>
        <h1 id="filters-header">{leftText}</h1>
        <GradientColor>
          <h3 id="clear-all" onClick={() => clearFilter()}>
            {rightText}
          </h3>
        </GradientColor>
      </StyleHeader>
    </>
  );
};

export default DisplayHeader;
