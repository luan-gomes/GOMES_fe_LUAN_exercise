import * as React from 'react';
import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import * as API from '../../api';
import TeamOverview from '../TeamOverview';

jest.mock('react-router-dom', () => ({
    useLocation: () => ({
        state: {
            name: 'Some Team',
        },
    }),
    useNavigate: () => ({}),
    useParams: () => ({
        teamId: '1',
    }),
}));

describe('TeamOverview', () => {
    beforeAll(() => {
        jest.useFakeTimers();
    });

    afterEach(() => {
        jest.clearAllTimers();
    });

    afterAll(() => {
        jest.useRealTimers();
    });

    const setup = () => {
        const teamOverview = {
            id: '1',
            name: 'Some Team',
            teamLeadId: '2',
            teamMemberIds: ['3', '4', '5'],
        };
        const userData = {
            id: '2',
            firstName: 'userFirstName',
            lastName: 'userLastName',
            displayName: 'userData',
            location: '',
            avatar: '',
        };

        jest.spyOn(API, 'getTeamOverview').mockImplementationOnce(() => Promise.resolve(teamOverview));
        jest.spyOn(API, 'getUserData').mockImplementation(() => Promise.resolve(userData));

        render(<TeamOverview />);
    };

    it('should render team overview users', async () => {
        setup();

        await waitFor(() => {
            expect(screen.queryAllByText('userData')).toHaveLength(4);
        });
    });

    it('should render users list filtered', async () => {
        setup();

        await waitFor(() => {
            expect(screen.queryAllByText('userData')).toHaveLength(4);
        });
        fireEvent.change(screen.getByRole('textbox'), {target: {value: 'Test'}});
        expect(screen.queryAllByText('userData')).toHaveLength(1);
    });
});
