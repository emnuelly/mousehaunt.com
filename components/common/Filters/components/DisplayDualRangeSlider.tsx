import { useState } from 'react';
import Slider from '@mui/material/Slider';
import { Component, Input } from '../styles/FilterSlider';

interface Props {
  sliderRange?: number[];
  defaultValue?: number[];
  containerDisplayed?: boolean;
  setFilters?: (data: {}) => void;
  filter?: {};
  containerName?: string;
}

const DisplayDualRangeSlider: React.FC<Props> = ({
  sliderRange,
  containerDisplayed,
  defaultValue,
  setFilters,
  filter,
  containerName,
}) => {
  const [inputValue, setInputValue] = useState(sliderRange);
  if (!sliderRange) return null;

  const handleChange = e => {
    setInputValue(e.target.value);
    return setFilters(filter => ({
      ...filter,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    containerDisplayed && (
      <Component>
        <Slider
          name={containerName}
          defaultValue={defaultValue}
          value={inputValue}
          onChange={e => handleChange(e)}
          min={sliderRange[0]}
          max={sliderRange[1]}
        />
        <Input>
          <div>{inputValue[0]}</div>
          <div>{inputValue[1]}</div>
        </Input>
      </Component>
    )
  );
};

export default DisplayDualRangeSlider;
