import { FilterContainer, Container, InputStyles } from './styles';
import React, { useState, useContext } from 'react';

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
  checkbox?: boolean;
  values?: string[];
  boxShadow?: string;
  dualRangeSlider?: boolean;
  sliderRange?: number[];
  defaultValue?: number[];
  containerName?: string;
}

import DisplayTitle from './components/DisplayTitle';
import DisplayBody from './components/DisplayBody';
import DisplayHeader from './components/DisplayHeader';
import DisplaySearchBar from './components/DisplaySearchBar';
import DisplayCheckBox from './components/DisplayCheckBox';
import DisplayDualRangeSlider from './components/DisplayDualRangeSlider';

import { MarketContext } from '../../../contexts/MarketPlaceContext';

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
  checkbox,
  boxShadow,
  values,
  dualRangeSlider,
  sliderRange,
  defaultValue,
  containerName,
}) => {
  const [containerDisplayed, setContainerDisplayed] = useState(isOpened);
  const { filterOptions, filters, clearFilter } = useContext(MarketContext);

  const changeIcon = () => {
    return setContainerDisplayed(!containerDisplayed);
  };

  return (
    <>
      <Container>
        <FilterContainer
          style={{ backgroundColor: background, boxShadow: boxShadow }}
        >
          <InputStyles>
            {type === 'filterHeader' && (
              <DisplayHeader
                leftText={'Filters'}
                rightText={'Clear All'}
                clearFilter={clearFilter}
              />
            )}
            {type === 'search' && (
              <DisplaySearchBar
                setChangeInput={filterOptions}
                filter={filters}
              />
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

          {checkbox && (
            <DisplayCheckBox
              containerDisplayed={containerDisplayed}
              values={values}
              containerName={containerName}
            />
          )}
          {dualRangeSlider && (
            <DisplayDualRangeSlider
              containerDisplayed={containerDisplayed}
              sliderRange={sliderRange}
              defaultValue={defaultValue}
              setFilters={filterOptions}
              filter={filters}
              containerName={containerName}
            />
          )}
        </FilterContainer>
      </Container>
    </>
  );
};

export default FilterChoices;
