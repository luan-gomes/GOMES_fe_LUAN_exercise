import {ListItem, Team} from 'types';

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
