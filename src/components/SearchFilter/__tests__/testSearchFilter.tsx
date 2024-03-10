import React from 'react';
import {render, screen} from '@testing-library/react';
import {SearchFilter} from '..';

describe('SearchFilter', () => {
    it('should render search filter', () => {
        render(<SearchFilter searchTerm='' updateSearchTerm={jest.fn()}/>);

        expect(screen.getByRole('textbox')).toBeInTheDocument();
    });

    it('should display the search term', () => {
        render(<SearchFilter searchTerm='Test' updateSearchTerm={jest.fn()}/>);

        expect(screen.getByDisplayValue('Test')).toBeInTheDocument();
    });
});
