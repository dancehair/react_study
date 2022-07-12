import React, { useEffect, useState } from 'react';

// HOC Higher Order Component
// 고차 컴포넌트는 컴포넌트를 가져와 새 컴포넌트를 반환하는 함수
// HOC  -> 함수를 받아서 함수를 리턴

function withLoading(Component) {
  const WithLoadingComponent = props => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => setLoading(false), 3000);

      return () => clearTimeout(timer);
    }, []);
    return loading ? <p>Loading...</p> : <Component {...props} />;
  };

  return WithLoadingComponent;
}

export default withLoading;
