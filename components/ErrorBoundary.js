import React from "react";
import styles from "../styles/Error.module.scss";


//since functional components don't support error boundry as of React 18. 
// I decided to create a ErrorBoudnry class in class based component and 
// used it in _app.js where I wrapper the entrie app within the error boundry
// Used class rather than try catch because, try cause render only once for the first time. 
// ref : https://nextjs.org/docs/advanced-features/error-handling

// class ErrorBoundary extends React.Component { // basic
//     constructor(props) {
//       super(props);
//       this.state = {error: ""};
//     }
  
//     componentDidCatch(error) {
//       this.setState({error: `${error.name}: ${error.message}`});
//     }
  
//     render() {
//       const {error} = this.state;
//       if (error) {
//         return (
//           <div>{error}</div>
//         );
//       } else {
//         return <>{this.props.children}</>;
//       }
//     }
//   }

class ErrorBoundary extends React.Component { // advanced
    constructor(props) {
      super(props)
  
      // Define a state variable to track whether is an error or not
      this.state = { hasError: false, error : "" }
    }
    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI
  
      return { hasError: true }
    }
    componentDidCatch(error, errorInfo) {
      // You can use your own error logging service here
      console.log({ error, errorInfo });
      this.setState({error: `${error.name}: ${error.message}`});
    }
    render() {
      const {error} = this.state.error;
      // Check if the error is thrown
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return (
          <div className={styles.container}>
            <div>
            <h2>Oops, there is an error!</h2>
            <div className={styles.messageWrapper}>{this.state.error}</div>
            </div>
       
            {/* <button
              type="button"
              onClick={() => this.setState({ hasError: false })}
            >
              Try again?
            </button> */}
          </div>
        )
      }
  
      // Return children components in case of no error
  
      return this.props.children
    }
  }
  

  export default ErrorBoundary;