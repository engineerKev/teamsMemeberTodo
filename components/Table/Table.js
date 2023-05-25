import React from 'react';
import TableStyles from './table.module.css'

export default function Table({children, auxClassNames}) {
  const { table } = TableStyles
  return (
    <table className={`${table} ${auxClassNames.join(' ')}`}>
      {children}
    </table>
  )
}