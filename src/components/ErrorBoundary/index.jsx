import './styled.css';

import React from 'react';

import errorBoundaryConfig from './config';

const { errorBoundaryText } = errorBoundaryConfig;
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h1 className="ErrorBoundary">{errorBoundaryText}</h1>;
    }

    return this.props.children;
  }
}
export default ErrorBoundary;
