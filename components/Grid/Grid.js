import React from 'react';
import gridStyles from './grid.module.css';

export default function Grid({
  gridColumns = 'auto-fit',
  gridRows = 'auto-fit',
  colGap = '0',
  rowGap = '0',
  gridFlow = 'row',
  rowMin = '0',
  rowMax = '1fr',
  colMin = '0',
  colMax = '1fr',
  auxClassNames = [],
  auxStyles = {},
  isFullWidth = false,
  children = null1
}) {
  const { gridContainer, maxContentWidth, fullWidth } = gridStyles;
  return (
    <div
      className={`${gridContainer} ${isFullWidth ? fullWidth : maxContentWidth} ${auxClassNames.join(' ')}`}
      style={{
        gridTemplateColumns: `repeat(${gridColumns}, minmax(${colMin}, ${colMax}))`,
        gridTemplateRows: `repeat(${gridRows}, minmax(${rowMin}, ${rowMax}))`,
        columnGap: `${colGap}rem`,
        rowGap: `${rowGap}rem`,
        gridAutoFlow: `${gridFlow}`,
        ...auxStyles
      }}
    >
      {children}
    </div>
  )
}
