import React from 'react';
import Link from 'next/link';
import useWindowSize from 'components/Hooks/useWindowSize';
import Grid, { GridItem } from 'components/Grid';
import navigationStyles from './navigation.module.css';


export default function Navigation() {
  const {isMobile } = useWindowSize();
  const { topnavContainer, navMenuItem } = navigationStyles;
  return (
    <div className={`${topnavContainer}`}>
      <Grid
        auxClassNames={[topnavContainer]}
        gridColumns={isMobile ? '14' : '12'}
        gridRows='3'
        isFullWidth={true}
      >
        <GridItem
          rowStart='2'
          rowEnd='3'
          colStart={isMobile ? '2' : '3'}
          colEnd='5'
          alignment='center'
        >
          <Link className={navMenuItem} href='/teams'>
            Teams
          </Link>

        </GridItem>
        <GridItem
          rowStart='2'
          rowEnd='3'
          colStart='6'
          colEnd={isMobile ? '9' :'8' }
          alignment='center'
        >
          <Link className={navMenuItem} href='/members'>
            Members
          </Link>

        </GridItem>
        <GridItem
          rowStart='2'
          rowEnd='3'
          colStart={isMobile ? '10' : '9'}
          colEnd={isMobile ? '14' : '11'}
          alignment='center'
        >
          <Link className={navMenuItem} href='/todo-list'>
            Todo List
          </Link>
        </GridItem>
      </Grid>
    </div>
  )
}