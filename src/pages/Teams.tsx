import * as React from 'react';
import {Team} from 'types';
import {convertTeamListToListItems} from 'utils/convertTypes';
import {SearchFilter} from 'components/SearchFilter';
import {getTeams as fetchTeams} from '../api';
import Header from '../components/Header';
import List from '../components/List';
import {Container} from '../components/GlobalComponents';

const Teams = () => {
    const [teams, setTeams] = React.useState<Team[]>([]);
    const [isLoading, setIsLoading] = React.useState<boolean>(true);
    const [searchTerm, setSearchTerm] = React.useState<string>('');

    React.useEffect(() => {
        const getTeams = async () => {
            const response = await fetchTeams();
            setTeams(response);
            setIsLoading(false);
        };
        getTeams();
    }, []);

    const filteredTeams = React.useMemo(() => {
        return searchTerm ?
            teams?.filter(team => team.name.toLowerCase().includes(searchTerm.toLowerCase())) : teams;
    }, [searchTerm, teams]);

    return (
        <Container>
            <Header title="Teams" showBackButton={false} />
            <SearchFilter searchTerm={searchTerm} updateSearchTerm={setSearchTerm}/>
            <List items={convertTeamListToListItems(filteredTeams)} isLoading={isLoading} />
        </Container>
    );
};

export default Teams;
