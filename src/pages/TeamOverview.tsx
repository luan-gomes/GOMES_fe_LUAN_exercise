import * as React from 'react';
import {useLocation, useParams} from 'react-router-dom';
import {UserData} from 'types';
import {convertUsersDataToListItems} from 'utils/convertTypes';
import {SearchFilter} from 'components/SearchFilter';
import {getTeamOverview, getUserData} from '../api';
import Card from '../components/Card';
import {Container} from '../components/GlobalComponents';
import Header from '../components/Header';
import List from '../components/List';

const renderTeamLeadCard = (teamLead: UserData) => {
    const columns = [
        {
            key: 'Team Lead',
            value: '',
        },
        {
            key: 'Name',
            value: `${teamLead.firstName} ${teamLead.lastName}`,
        },
        {
            key: 'Display Name',
            value: teamLead.displayName,
        },
        {
            key: 'Location',
            value: teamLead.location,
        },
    ];
    return <Card columns={columns} url={`/user/${teamLead.id}`} navigationProps={teamLead} />;
};

interface PageState {
    teamName?: string;
    teamLead?: UserData;
    teamMembers?: UserData[];
}

const TeamOverview = () => {
    const location = useLocation();
    const {teamId} = useParams();
    const [pageData, setPageData] = React.useState<PageState>({});
    const [isLoading, setIsLoading] = React.useState<boolean>(true);
    const [searchTerm, setSearchTerm] = React.useState<string>('');

    React.useEffect(() => {
        const getTeamUsers = async () => {
            const {teamLeadId, teamMemberIds = [], name: teamName} = await getTeamOverview(teamId);
            const teamLead = await getUserData(teamLeadId);

            const teamMembers = [];
            for(const teamMemberId of teamMemberIds) {
                const data = await getUserData(teamMemberId);
                teamMembers.push(data);
            }
            setPageData({
                teamLead,
                teamMembers,
                teamName,
            });
            setIsLoading(false);
        };
        getTeamUsers();
    }, [teamId]);

    const filteredTeamMembers = React.useMemo(() => {
        return searchTerm ? pageData?.teamMembers?.filter(team => team.displayName.toLowerCase().includes(searchTerm.toLowerCase())) : pageData?.teamMembers;
    }, [pageData?.teamMembers, searchTerm]);

    return (
        <Container>
            <Header title={`Team ${location.state?.name ?? pageData?.teamName ?? ''}`} />
            {!isLoading && renderTeamLeadCard(pageData.teamLead)}
            {!isLoading &&  <SearchFilter searchTerm={searchTerm} updateSearchTerm={setSearchTerm}/>}
            <List items={convertUsersDataToListItems(filteredTeamMembers ?? [])} isLoading={isLoading} />
        </Container>
    );
};

export default TeamOverview;
