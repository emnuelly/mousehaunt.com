import { FilterContainer, Container, InputStyles } from './styles';
import React, { useState } from 'react';
import { HiOutlineSearch } from 'react-icons/hi';

interface Props {
  type?: string;
  title?: string;
  background?: string;
  dropDown?: boolean;
  isOpened?: boolean;
  buttonBody?: boolean;
  chosenMice?: any;
  displayHeart?: (id: number) => void;
  checkIfNotThere?: (id: number, bool?: boolean) => void;
  clickedChosenMice?: (mice?: []) => void;
}

import DisplayTitle from './components/DisplayTitle';
import DisplayBody from './components/DisplayBody';
import DisplayHeader from './components/DisplayHeader';
import DisplaySearchBar from './components/DisplaySearchBar';

const FilterChoices: React.FC<Props> = ({
  type,
  title,
  background,
  dropDown,
  isOpened,
  buttonBody,
  chosenMice,
  checkIfNotThere,
  displayHeart,
  clickedChosenMice,
}) => {
  const [changeInput, setChangeInput] = useState('');
  const [containerDisplayed, setContainerDisplayed] = useState(isOpened);

  const changeIcon = () => {
    return setContainerDisplayed(!containerDisplayed);
  };

  const displaySearchBar = () => {
    return (
      <div id="input-container">
        <HiOutlineSearch />
        <input
          id="filter_input"
          type="text"
          placeholder={`Search`}
          name="searchInput"
          onChange={e => setChangeInput(e.target.value)}
        />
      </div>
    );
  };

  return (
    <>
      <Container>
        <FilterContainer style={{ backgroundColor: background }}>
          <InputStyles>
            {type === 'filterHeader' && (
              <DisplayHeader leftText={'Filters'} rightText={'Clear All'} />
            )}
            {type === 'search' && (
              <DisplaySearchBar setChangeInput={setChangeInput} />
            )}
          </InputStyles>
          {title && (
            <DisplayTitle
              title={title}
              dropDown={dropDown}
              changeIcon={changeIcon}
              containerDisplayed={containerDisplayed}
            />
          )}
          <DisplayBody
            containerDisplayed={containerDisplayed}
            chosenMice={chosenMice}
            displayHeart={displayHeart}
            checkIfNotThere={checkIfNotThere}
            clickedChosenMice={clickedChosenMice}
            buttonBody={buttonBody}
          />
        </FilterContainer>
      </Container>
    </>
  );
};

export default FilterChoices;
