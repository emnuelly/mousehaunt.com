import {
  FilterContainer,
  Container,
  FilterTitle,
  InputStyles,
  StyleHeader,
} from './styles';
import { ButtonBody } from './styles/filterBody';
import React, { useState, useEffect } from 'react';
import { GradientColor } from '../../../styles/Home';
import {
  MdOutlineArrowDropUp,
  MdOutlineArrowDropDown,
  MdOutlineClose,
} from 'react-icons/md';
import { HiOutlineSearch } from 'react-icons/hi';
import { Link } from '../Link';

interface Props {
  type?: string;
  title?: string;
  background?: string;
  arrow?: boolean;
  isOpened?: boolean;
  buttonBody?: boolean;
  chosenMice?: any;
  displayHeart?: (id: number) => void;
  checkIfNotThere?: (id: number, bool?: boolean) => void;
  clickedChosenMice?: (mice?: []) => void;
}

const FilterChoices: React.FC<Props> = ({
  type,
  title,
  background,
  arrow,
  isOpened,
  buttonBody,
  chosenMice,
  checkIfNotThere,
  displayHeart,
  clickedChosenMice,
}) => {
  const [changeInput, setChangeInput] = useState('');
  const [displayHeroesList, setDisplayHeroesList] = useState(false);
  const [containerAppearance, setContainerAppearance] = useState(isOpened);
  const container = type !== 'filterHeader' || 'search';

  useEffect(() => {
    openMenu();
  }, [chosenMice]);

  const openMenu = () => {
    if (!chosenMice) return;

    return chosenMice.length > 0 ? setDisplayHeroesList(true) : null;
  };

  const changeIcon = () => {
    return setContainerAppearance(!containerAppearance);
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

  const filterHeader = () => {
    return (
      <StyleHeader>
        <h1 id="filters-header">Filters</h1>
        <GradientColor>
          <h3 id="clear-all" onClick={() => alert('todo clear')}>
            Clear All
          </h3>
        </GradientColor>
      </StyleHeader>
    );
  };

  const displayTitle = () => {
    return (
      <>
        <FilterTitle>
          <div id="title">{title}</div>
          {!arrow ? null : (
            <div onClick={() => changeIcon()}>
              {containerAppearance ? (
                <MdOutlineArrowDropDown />
              ) : (
                <MdOutlineArrowDropUp />
              )}
            </div>
          )}
        </FilterTitle>
        {buttonBody && displayButtonBody()}
      </>
    );
  };

  const displayButtonBody = () => {
    return (
      containerAppearance && (
        <ButtonBody>
          {chosenMice && chosenMice.length <= 0 && displayHeroesList ? (
            <div>No heroes selected</div>
          ) : (
            displayChosenMices()
          )}
          <Link>CHOOSE HEROES</Link>
        </ButtonBody>
      )
    );
  };

  interface Map {
    id: number;
    name: string;
  }
  interface MapArray extends Map {
    array: { id: number; name: string };
  }

  const displayChosenMices = () => {
    return Object.values(chosenMice).map((e: any) => {
      return (
        <div key={e.id}>
          <div>{e.name}</div>
          <div
            onClick={() => {
              clickedChosenMice(e);
              checkIfNotThere(e.id, true);
              displayHeart(e.id);
            }}
          >
            <MdOutlineClose />
          </div>
        </div>
      );
    });
  };

  return (
    <>
      <Container>
        <FilterContainer style={{ backgroundColor: background }}>
          <InputStyles>
            {type === 'filterHeader' ? filterHeader() : null}
            {type === 'search' ? displaySearchBar() : null}
          </InputStyles>

          {title && displayTitle()}
        </FilterContainer>
      </Container>
    </>
  );
};

export default FilterChoices;
