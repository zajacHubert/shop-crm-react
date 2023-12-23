import React, { useState, ChangeEvent, useEffect, useRef } from 'react';
import SpinnerBtn from '../ui/SpinnerBtn';
import { EndpointDataByPageMap } from '../../types/request';
import useSearchRecordsDebounce from '../../hooks/useSearchDebounce';
import {
  StyledBoxMessage,
  StyledBoxSuggestion,
  StyledBoxSuggestions,
  StyledContainer,
  StyledInput,
  StyledPMessage,
  StyledPTitle,
} from './SearchInput.css';
import { useNavigate } from 'react-router-dom';

type ValidEndpoints = keyof EndpointDataByPageMap;

interface SearchInputProps {
  endpoint: ValidEndpoints;
}

const SearchInput = ({ endpoint }: SearchInputProps) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isSearchEdited, setIsSearchEdited] = useState<boolean>(false);
  const { data, isLoading } = useSearchRecordsDebounce(
    endpoint,
    searchTerm,
    500,
    isSearchEdited
  );
  const navigate = useNavigate();
  const [showSuggestions, setShowSuggestions] = useState<boolean>(true);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(event.target as Node)
    ) {
      setShowSuggestions(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <StyledContainer ref={containerRef}>
      <StyledInput
        type='text'
        value={searchTerm}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setSearchTerm(e.target.value)
        }
        onBlur={() => setIsSearchEdited(true)}
        onFocus={() => setShowSuggestions(true)}
        placeholder='Search products...'
      />

      {isLoading && <SpinnerBtn />}

      {showSuggestions && data && data.length && (
        <StyledBoxSuggestions>
          {Array.isArray(data) ? (
            data.map((product) => (
              <StyledBoxSuggestion
                key={product.id}
                onClick={() => navigate(`/${endpoint}/${product.id}`)}
              >
                <StyledPTitle>{product.title}</StyledPTitle>
              </StyledBoxSuggestion>
            ))
          ) : (
            <StyledBoxMessage>
              <StyledPMessage>{data}</StyledPMessage>
            </StyledBoxMessage>
          )}
        </StyledBoxSuggestions>
      )}
    </StyledContainer>
  );
};

export default SearchInput;
