import React, { useState } from 'react';
import utilStyles from 'styles/utiStyles.module.css';
import Grid, { GridItem } from 'components/Grid';
import Input from 'components/Input';
import Button from 'components/Button/Button';
import buttonStyles from 'components/Button/button.module.css';
import inputStyles from 'components/Input/input.module.css';
import gridStyles from 'components/Grid/grid.module.css';
const defaultTodoListState = [
  'add item',
  'remove item',
  'update item'
]
export default function TodoList() {
  const { center, largeHeader, outline, capitalize, flexEnd} = utilStyles;
  const [inputFieldValue, setInputFieldValue] = useState('');
  const [isUpdatingItem, setIsUpdatingItem] = useState(false);
  const [todoListItems, setTodoListItems] = useState(defaultTodoListState);
  const [previousListItemValue, setPreviousListItemValue] = useState('');
  const { ghostButton, circleButton, tealButton } = buttonStyles;
  const { purpleInput } = inputStyles;
  const { gridOuterSpacing, gridItemFlush  } = gridStyles;

  const onUpdateListItemClick = (listItemValue) => {
    setIsUpdatingItem(true);
    setInputFieldValue(listItemValue);
    setPreviousListItemValue(listItemValue);
  };

  const onRemoveListItem = (listItemValue) => {
   const filteredTodoList = todoListItems.filter((todoItem) => todoItem !== listItemValue);
   const newTodoList = [...filteredTodoList];
   setTodoListItems(newTodoList); 
  };

  const updateTodoList = (e) => {
    e.preventDefault();
    if(isUpdatingItem) {
      const existingListItemIndex = todoListItems.findIndex((listItem) => listItem === previousListItemValue);
      todoListItems[existingListItemIndex] = inputFieldValue;
      const newTodoList = [...todoListItems];
      setTodoListItems(newTodoList);
      setPreviousListItemValue('');
      setIsUpdatingItem(!isUpdatingItem);
    } else {
      todoListItems.push(inputFieldValue);
      const newTodoList = [...todoListItems];
      setTodoListItems(newTodoList);
    }
    setInputFieldValue('');
  }

  return (
    <section id="todo-list">
      <h1 className={`${center} ${largeHeader}`}>Todo List</h1>
      <form onSubmit={updateTodoList}>
        <Grid
          gridRows='1'
          gridColumns='8'
          auxClassNames={[gridOuterSpacing]}
          rowMax='3.25rem'
        >
          <GridItem
            colStart='1'
            colEnd='5'
            justify='flex-start'
            alignment='center'
            auxClassNames={[gridItemFlush]}
          >
              <Input
                auxClassNames={[purpleInput]}
                value={inputFieldValue}
                label='todo-list-input'
                placeholder='new todo list item'
                inputOnChange={(e) => setInputFieldValue(e.currentTarget.value.toLowerCase())}
              />
          </GridItem>
          <GridItem
            colStart='7'
            colEnd='8'
            justify='center'
            alignment='center'
          >
              <Button
                auxClassNames={[circleButton, tealButton, ghostButton]}
                disabled={!Boolean(inputFieldValue.length)}
                type='submit'
              >
              {isUpdatingItem ? <>&#10004;</> : <>&#43;</> }
              </Button>
          </GridItem>
          <GridItem
            colStart='8'
            colEnd='9'
            justify='center'
            alignment='center'
          >
              <Button 
                type='button' 
                auxClassNames={[circleButton, tealButton, ghostButton]}
                disabled={!Boolean(inputFieldValue.length)}
                onButtonClick={() => {
                  setIsUpdatingItem(false);
                  setInputFieldValue('');
                }}
              >
                &#10006;
              </Button>
          </GridItem>
        </Grid>
      </form>
      <Grid
        gridFlow='column'
        gridColumns='8'
        gridRows={todoListItems.length}
        auxClassNames={[outline]}
        rowMax='3.25rem'
      >
        {todoListItems.map((todoItem, index) => {
          return (
            <React.Fragment key={`todo-list-item-${index}`}>
              <GridItem 
                hasBackgroundColor={!Boolean(index%2)}
                auxClassNames={[capitalize]}
                justify='flex-start'
                alignment='center'
                colStart='1'
                colEnd='7'
              >
                {todoItem}
              </GridItem>
              <GridItem
                colStart='7'
                colEnd='8'
                hasBackgroundColor={!Boolean(index%2)}
                justify='center'
                alignment='center'
              >
                <Button 
                  type='button'
                  auxClassNames={[tealButton, circleButton, ghostButton, flexEnd]}
                  onButtonClick={() => onUpdateListItemClick(todoItem)}
                >
                  &#9998;
                </Button>

              </GridItem>
              <GridItem
                colStart='8'
                colEnd='9'
                hasBackgroundColor={!Boolean(index%2)}
                justify='center'
                alignment='center'
              >

                <Button 
                  type='button'
                  auxClassNames={[tealButton, circleButton, ghostButton, flexEnd]}
                  onButtonClick={() => onRemoveListItem(todoItem)}
                >
                  &#10006;
                </Button>
              </GridItem>
            </React.Fragment>
          )
        })}
      </Grid>
    </section>
  )
}