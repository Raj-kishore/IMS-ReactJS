import React from "react"

//since functional components don't support error boundry as of React 18. 
// I decided to create a ErrorBoudnry class in class based component and 
// used it in _app.js where I wrapper the entrie app within the error boundry
// Used class rather than try catch because, try cause render only once for the first time. 
// ref : https://stackoverflow.com/a/70179187
class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = {error: ""};
    }
  
    componentDidCatch(error) {
      this.setState({error: `${error.name}: ${error.message}`});
    }
  
    render() {
      const {error} = this.state;
      if (error) {
        return (
          <div>{error}</div>
        );
      } else {
        return <>{this.props.children}</>;
      }
    }
  }

  export default ErrorBoundary;