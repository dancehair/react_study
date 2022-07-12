import React from 'react';
import withLoading from './withLoading';

function Input(props) {
  return <input defaultValue='Input' />;
}

export default withLoading(Input);
