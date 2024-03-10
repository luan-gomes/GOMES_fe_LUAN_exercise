import * as React from 'react';
import {InputLabel, TextInput} from './styles';

interface Props {
  labelText?: string;
  searchTerm: string;
  updateSearchTerm: (value: string) => void;
}

export const SearchFilter = ({labelText = 'Filter by name:', searchTerm, updateSearchTerm}: Props) => {

  const handleInputChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    updateSearchTerm(value);
  }, [updateSearchTerm]);

    return (
      <InputLabel>
        {labelText}
        <TextInput
            type='text'
            placeholder='Type to search'
            value={searchTerm}
            onChange={handleInputChange}
        />
      </InputLabel>
    );
};
