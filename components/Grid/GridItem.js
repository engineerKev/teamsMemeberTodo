import React from 'react';
import gridStyles from './grid.module.css';

export default function GridItem({
  rowStart,
  colStart,
  rowEnd,
  colEnd,
  auxStyles = {},
  auxClassNames = [],
  alignment = 'start',
  justify = 'center',
  hasBackgroundColor = false,
  children
}) {
  const { addColoredBackground, gridItem } = gridStyles;
  return (
    <div
      className={`${auxClassNames.join(' ')} ${hasBackgroundColor ? addColoredBackground : ''} ${gridItem}`}
      style={{
        gridColumn: colStart ? `${colStart} / ${colEnd}` : 'auto',
        gridRow: rowStart ? `${rowStart} / ${rowEnd}` : 'auto',
        alignItems: alignment,
        justifyContent: justify,
        ...auxStyles
      }}
    >
      {children}
    </div>
  )
}