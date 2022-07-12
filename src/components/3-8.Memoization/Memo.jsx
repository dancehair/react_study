import React, { useEffect, useState } from 'react';
import Comments from './Comments';

// React.memo
// 동일한 props 로 렌더링 한다면, React.memo 를 사용하여 성능 향상을 누릴 수 있다
// memo 를 사용하면 React 는 컴포넌트를 렌더링하지 않고 마지막으로 렌더링 된 결과를 재사용

// Memoization
// React.memo -> HOC / Props 를 비교하여 메모
// Profiler -> 리액트 성능 분석 도구
// callback -> useCallback
// value  -> useMemo
// 반복되고 바뀌지 않은 것을 미리 그려놨다면(계산했다면) 메모리에 저장해 놓고 재사용
// 컴포넌트, 함수, 변수 모두 메모이제이션 할 수 있다
// 컴포넌트들이 얼마나 리렌더링 되고 성능에 누수가 있는지를 파악하기 위해  Profiler 를 사용함

const commentList = [
  { title: 'comment1', content: 'message1', likes: 1 },
  { title: 'comment2', content: 'message2', likes: 1 },
  { title: 'comment3', content: 'message3', likes: 1 },
];

function Memo(props) {
  const [comments, setComments] = useState(commentList);

  useEffect(() => {
    const interval = setInterval(() => {
      setComments(prevComments => [
        ...prevComments,
        { title: `comment${prevComments.length + 1}`, content: `message${prevComments.length + 1}`, likes: 1 },
      ]);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <Comments commentList={comments} />;
}

export default Memo;
