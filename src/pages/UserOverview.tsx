import * as React from 'react';
import {useLocation, useParams} from 'react-router-dom';
import {UserData} from 'types';
import {getUserData} from 'api';
import {Spinner} from 'components/Spinner';
import Card from '../components/Card';
import {Container} from '../components/GlobalComponents';
import Header from '../components/Header';

const renderUserCard = (user?: UserData) => {
    const columns = [
        {
            key: 'Name',
            value: `${user?.firstName} ${user?.lastName}`,
        },
        {
            key: 'Display Name',
            value: user?.displayName,
        },
        {
            key: 'Location',
            value: user?.location,
        },
    ];
    return <Card columns={columns} hasNavigation={false} navigationProps={user} />;
};

const UserOverview = () => {
    const location = useLocation();
    const {userId} = useParams();
    const [user, setUser] = React.useState<UserData | undefined>(location.state);
    const [isLoading, setIsLoading] = React.useState<boolean>(!location.state);

    React.useEffect(() => {
        const getUser = async () => {
            if (!location.state) {
                const userData = await getUserData(userId);
                setUser(userData);
                setIsLoading(false);
            }
        };
        getUser();
    }, [location.state, userId]);


    return (
        <Container>
            <Header
                title={`User ${user ? `${user?.firstName} ${user?.lastName}` : ''}`}
            />
            {isLoading && <Spinner />}
            {!isLoading && renderUserCard(user)}
        </Container>
    );
};

export default UserOverview;
