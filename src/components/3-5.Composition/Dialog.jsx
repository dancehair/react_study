import React from 'react';

// Composition(합성) vs Inheritance(상속)
// 컴포넌트에 다른 컴포넌트를 담기(children / custom)
// React 에서는 상속 계층 구조로 작성할 필요가 없다

// Composition(합성)
// Composition  -> 컴포넌트에 컴포넌트 담기
// 담는 방법  -> Children / Custom
function Dialog(props) {
  return <div style={{ backgroundColor: 'pink' }}>{props.children}</div>;
}

export default Dialog;
