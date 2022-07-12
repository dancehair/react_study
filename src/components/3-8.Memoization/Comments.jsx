import React, { useCallback } from 'react';
import CommentItem from './CommentItem';

// 메모를 사용한 컴포넌트에 동일한 props 를 전달하면 해당 컴포넌트는 리렌더링 하지 않고 재사용
// 만약 props 에 함수를 넘겨준다면 매번 함수가 생성되어 메모가 작동하지 않음
// 이때 useCallback 함수를 사용하여 해당 함수를 전달하면 메모 기능이 다시 작동함

function Comments({ commentList }) {
  // useCallback 은 특정한 함수를 메모이제이션
  // const handleClick = () => {
  //   console.log('눌림');
  // };

  // useCallback 은 특정한 함수를 메모이제이션
  const handleClick = useCallback(() => {
    console.log('눌림');
  }, []);

  return (
    <div>
      {commentList.map(comment => (
        <CommentItem
          key={comment.title}
          title={comment.title}
          content={comment.content}
          likes={comment.likes}
          onClick={handleClick}
        />
      ))}
    </div>
  );
}

export default Comments;
