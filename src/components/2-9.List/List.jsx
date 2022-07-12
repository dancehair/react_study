import React from 'react';

// List
// map  -> 배열의 개별 요소를 순회
// default key  -> 안주면 react 는 index 를 사용한다(워닝 O)
// 고유성  -> 형제 사이에서만 고유하면 됨
// key props  -> key 는 props 로 넘어가지 않음

function List(props) {
  // const numbers = [1, 2, 3, 4, 5];
  // return (
  //   <ul>
  //     {numbers.map(item => (
  //       <li key={item.toString()}>{item}</li>
  //     ))}
  //   </ul>
  // );

  const todos = [
    { id: 1, text: 'Drink Water' },
    { id: 2, text: 'Wash Car' },
    { id: 3, text: 'Listen Lecture' },
    { id: 4, text: 'Go to bed' },
  ];

  const Item = props => {
    return <li>{props.text}</li>;
  };

  const todoList = todos.map(todo => {
    return <Item key={todo.id} {...todo} />;
  });

  return <>{todoList}</>;
}

export default List;
