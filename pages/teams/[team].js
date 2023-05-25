import React from 'react';
import { useRouter } from 'next/router';
import membersMockDataObj from 'mocks/members';
import { Table, TableBody, TableHeader } from 'components/Table';
import tableStyles from 'components/Table/table.module.css';
import utilStyles from 'styles/utiStyles.module.css';

function getTeamMembers(membersData, teamName) {
  const teamMembers = membersData.filter((teamMember) => {
    const { team } = teamMember;
    return team.name.toLowerCase() === teamName;
  })
  return teamMembers;
}

export default function Team() {
  const router = useRouter();
  const teamName = router.query.team;
  const { members } = membersMockDataObj;
  const teamMembers = getTeamMembers(members, teamName)
  const { headerRow, td, tr } = tableStyles;
  const { center, largeHeader, outline, capitalize} = utilStyles;
  return (
    <section id="teams-page">
      <h1 className={`${center} ${largeHeader} ${capitalize}`}>{teamName} Team Details</h1>
      <Table auxClassNames={[outline]}>
        <TableHeader>
          <tr className={headerRow}>
            <th>Team Member</th>
            <th>Team Name</th>
          </tr>
        </TableHeader>
        <TableBody>
          {teamMembers.map((teamMemberObj) => {
            return (
              <tr key={teamMemberObj.id} className={tr}>
                <td className={td}>{`${teamMemberObj['last_name']}, ${teamMemberObj['first_name']}`}</td>
                <td className={td}>{teamName}</td>
              </tr>
            )
          })}
        </TableBody>
      </Table>
    </section>
  )
}