import React from 'react';
import teamsMockDataObj from 'mocks/teams';
import { Table, TableBody, TableHeader } from 'components/Table';
import tableStyles from 'components/Table/table.module.css';
import utilStyles from 'styles/utiStyles.module.css';

export default function Teams() {
  const { teams } = teamsMockDataObj;
  const { headerRow, td, tr } = tableStyles;
  const { center, largeHeader, outline} = utilStyles;
  return (
    <section id="teams-page">
      <h1 className={`${center} ${largeHeader}`}>Company Teams</h1>
      <Table auxClassNames={[outline]}>
        <TableHeader>
          <tr className={headerRow}>
            <th>Team Name</th>
            <th>No. of Members</th>
          </tr>
        </TableHeader>
        <TableBody>
          {teams.map((teamObj) => {
            return (
              <tr key={teamObj.id} className={tr}>
                <td className={td}>{teamObj.name}</td>
                <td className={td}>{teamObj['member_count']}</td>
              </tr>
            )
          })}
        </TableBody>
      </Table>
    </section>
  )
}