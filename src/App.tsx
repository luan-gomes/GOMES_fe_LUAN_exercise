import {ThemeProvider} from 'styled-components';
import * as React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import TeamOverview from './pages/TeamOverview';
import Teams from './pages/Teams';
import UserOverview from './pages/UserOverview';
import {GlobalStyles} from './styles/global';
import {defaultTheme} from './styles/themes/default';

const App = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Teams />,
        },
        {
            path: '/team/:teamId',
            element: <TeamOverview />,
        },
        {
            path: '/user/:userId',
            element: <UserOverview />,
        },
    ]);
    return (
        <ThemeProvider theme={defaultTheme}>
            <RouterProvider router={router} />
            <GlobalStyles />
        </ThemeProvider>
    );
};

export default App;
