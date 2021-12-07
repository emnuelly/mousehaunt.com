import { FilterContainer, FilterHeader, Container } from './styles';
import { useState } from 'react';

interface Props {
  type?: string;
}

const FilterChoices: React.FC<Props> = ({ type }) => {
  const [changeInput, setChangeInput] = useState('');

  const displaySearchBar = () => {
    return (
      <FilterContainer>
        <input
          id="filter_input"
          type="text"
          placeholder="Search"
          name="searchInput"
          onChange={e => setChangeInput(e.target.value)}
        />
      </FilterContainer>
    );
  };

  const filterHeader = () => {
    return (
      <FilterHeader>
        <h1>Filters</h1>
        <h3>Clear Filters</h3>
      </FilterHeader>
    );
  };

  return (
    <>
      <Container>
        {type === 'filterHeader' ? filterHeader() : null}
        {type === 'search' ? displaySearchBar() : null}
      </Container>
    </>
  );
};

export default FilterChoices;
