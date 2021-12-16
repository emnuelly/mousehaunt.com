import { MdOutlineArrowDropUp, MdOutlineArrowDropDown } from 'react-icons/md';
import { FilterTitle } from '../styles';
interface Props {
  title?: string;
  changeIcon?: (() => void) | undefined;
  dropDown?: boolean;
  containerDisplayed?: boolean;
}

const DisplayTitle: React.FC<Props> = (
  { title, dropDown, changeIcon, containerDisplayed },
  ...props
) => {
  return (
    <FilterTitle>
      <div id="title">{title}</div>
      {!dropDown ? null : (
        <div onClick={() => changeIcon()}>
          {containerDisplayed ? (
            <MdOutlineArrowDropDown />
          ) : (
            <MdOutlineArrowDropUp />
          )}
        </div>
      )}
      {props.children}
    </FilterTitle>
  );
};

export default DisplayTitle;
