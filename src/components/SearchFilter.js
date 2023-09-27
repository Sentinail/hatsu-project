import React, { useContext, useState } from 'react';
import Select from 'react-select';
import { SearchFilterContainer } from '../styled-components/SearchFilterContainer';
import { themeContext } from '../context/themeContext';

const SearchFilter = ({options, placeholder, ...props}) => {
  const [isClearable, setIsClearable] = useState(false);
  const [isSearchable, setIsSearchable] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRtl, setIsRtl] = useState(false);
  const { tertiaryColor } = useContext(themeContext)

  return (
    <>
    <SearchFilterContainer $tertiaryColor={tertiaryColor}>
      <Select 
        {...props}
        className="basic-single"
        classNamePrefix="select"
        isDisabled={isDisabled}
        isLoading={isLoading}
        isRtl={isRtl}
        isSearchable={isSearchable}
        isClearable={isClearable}
        name="color"
        options={options}
        placeholder={placeholder}
      />
    </SearchFilterContainer>
    </>
  );
};

export default SearchFilter