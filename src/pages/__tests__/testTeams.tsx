import * as React from 'react';
import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import * as API from '../../api';
import Teams from '../Teams';

jest.mock('react-router-dom', () => ({
    useLocation: () => ({
        state: {
            firstName: 'Test',
            lastName: 'User',
            displayName: 'userName',
            location: 'location',
        },
    }),
    useNavigate: () => ({}),
}));

describe('Teams', () => {
    beforeAll(() => {
        jest.useFakeTimers();
    });

    afterEach(() => {
        jest.clearAllTimers();
    });

    afterAll(() => {
        jest.useRealTimers();
    });

    const setupWithMockedTeams = () => {
        jest.spyOn(API, 'getTeams').mockResolvedValue([
            {
                id: '1',
                name: 'Team1',
            },
            {
                id: '2',
                name: 'Team2',
            },
        ]);

        render(<Teams />);
    };

    it('should render spinner while loading', async () => {
        render(<Teams />);
        expect(screen.getByTestId('spinner')).toBeInTheDocument();
    });

    it('should render teams list', async () => {
        setupWithMockedTeams();

        await waitFor(() => {
            expect(screen.getByText('Team1')).toBeInTheDocument();
        });
        expect(screen.getByText('Team2')).toBeInTheDocument();
    });

    it('should render teams list filtered', async () => {
        setupWithMockedTeams();

        await waitFor(() => {
            expect(screen.getByText('Team1')).toBeInTheDocument();
        });
        fireEvent.change(screen.getByRole('textbox'), {target: {value: '2'}});
        expect(screen.getByText('Team2')).toBeInTheDocument();
        expect(screen.queryByText('Team1')).not.toBeInTheDocument();
    });
});
