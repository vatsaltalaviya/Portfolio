import React from 'react';

const Transition = (Component) => {
  const WrappedComponent = (props) => {
    return <Component {...props} />;
  };
  return WrappedComponent;
};

export default Transition;
