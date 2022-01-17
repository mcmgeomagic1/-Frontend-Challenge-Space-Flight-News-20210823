import React, { useState } from 'react';
import useDebounce from './useDebounce';
import {StyledInput, StyledInputDiv, StyledSort, StyledOption} from './StyledInput.styled.js'

export default function  SearchInput ({ value, onChange, sortBy}) {
  const [displayValue, setDisplayValue] = useState(value);
  const debouncedChange = useDebounce(onChange, 500);

  function handleChange(event) {
    setDisplayValue(event.target.value)
    debouncedChange(event.target.value)
  }

  return (
      <StyledInputDiv>
          <StyledInput
            type="search"
            value={displayValue}
            onChange={handleChange}
          />
          <img src={require("../../assets/search.png")} alt="search"/>
          <StyledSort defaultValue="Sort" onChange={sortBy}>
            <StyledOption disabled value="Sort">Sort</StyledOption>
            <StyledOption value="Mais Novas">Mais Novas</StyledOption>
            <StyledOption value="Mais Antigas">Mais Antigas</StyledOption>
           </StyledSort>
      </StyledInputDiv>
  );
};
