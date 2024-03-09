import {ListItem, Team, UserData} from 'types';

export const convertTeamListToListItems = (teams: Team[]) => {
  return teams.map(team => {
      const listItem: ListItem = {
          id: team.id,
          url: `/team/${team.id}`,
          columns: [
              {
                  key: 'Name',
                  value: team.name,
              },
          ],
          navigationProps: team,
      };
      return listItem;
  });
};

export const convertUsersDataToListItems = (users: UserData[]) => {
    return users.map(user => {
        const listItem: ListItem = {
            id: user.id,
            url: `/user/${user.id}`,
            columns: [
                {
                    key: 'Name',
                    value: `${user.firstName} ${user.lastName}`,
                },
                {
                    key: 'Display Name',
                    value: user.displayName,
                },
                {
                    key: 'Location',
                    value: user.location,
                },
            ],
            navigationProps: user,
        };
        return listItem;
    });
};
