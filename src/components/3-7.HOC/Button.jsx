import React from 'react';
import withLoading from './withLoading';

function Button(props) {
  return <button>Button</button>;
}

export default withLoading(Button);
