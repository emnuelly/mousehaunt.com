import { HiOutlineSearch } from 'react-icons/hi';
import React, { useState, useContext } from 'react';
import {MarketContext} from '../../../../contexts/MarketPlaceContext'


interface Props {
  setChangeInput?: ((any: any) => void | undefined) | undefined;
  filters?: {};
}

const DisplayHeader: React.FC<Props> = ({ setChangeInput }) => {
  const { filterOptions } = useContext(MarketContext);

  return (
    <div id="input-container">
      <HiOutlineSearch />
      <input
        id="filter_input"
        type="text"
        placeholder="Search"
        name="searchInput"
        onChange={e => filterOptions(filters => ({ ...filters, name: e.target.value  }))}
      />
    </div>
  );
};

export default DisplayHeader;
