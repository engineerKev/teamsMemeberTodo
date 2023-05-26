import React from 'react';
import Link from 'next/link';
import membersMockDataObj from 'mocks/members';
import { Table, TableBody, TableHeader } from 'components/Table';
import tableStyles from 'components/Table/table.module.css';
import utilStyles from 'styles/utiStyles.module.css';

export default function Members() {
  const { members } = membersMockDataObj;
  const { headerRow, td, tr } = tableStyles;
  const { center, largeHeader, outline } = utilStyles;

  return (
    <section id="members-page">
      <h1 className={`${center} ${largeHeader}`}>Team Members</h1>
      <Table auxClassNames={[outline]}>
        <TableHeader>
          <tr className={headerRow}>
            <th>Team Member</th>
            <th>Team Name</th>
          </tr>
        </TableHeader>
        <TableBody>
          {members.map((memberObj) => {
            return (
              <tr key={memberObj.id} className={tr}>
                <td className={td}>{`${memberObj['last_name']}, ${memberObj['first_name']}`}</td>
                <td className={td}><Link href={`/teams/${memberObj.team.name.toLowerCase()}`}>{memberObj.team.name}</Link></td>
              </tr>
            )
          })}
        </TableBody>
      </Table>
    </section>
  )
}