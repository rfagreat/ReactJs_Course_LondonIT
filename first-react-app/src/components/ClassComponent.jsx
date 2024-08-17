import React from "react";

/**
 * A React component that demonstrates the various lifecycle methods.
 *
 * This component displays a count and logs messages to the console
 * as it goes through its lifecycle.
 */
export class CountingComponent extends React.Component {
  /**
   * Initializes the component's state.
   *
   * @constructor
   */
  constructor() {
    super();
    // React state
    this.state = { count: 0 };
    console.log("Constructor: Component is initialized");
  }

  /**
   * Called when the component's props change.
   *
   * This method is used to sync the component's state with its props.
   *
   * @param {object} nextProps - The new props
   * @param {object} prevState - The previous state
   * @return {object} The new state or null if no changes are needed
   */
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("getDerivedStateFromProps: Syncing state with props if needed");
    return null; // Return new state or null if no changes are needed
  }

  /**
   * Called when the component has been rendered.
   *
   * This method is used to perform side effects like API calls.
   */
  componentDidMount() {
    console.log("componentDidMount: Component has been rendered");
    // Perform side effects like API calls here
  }

  /**
   * Called when the component's props or state change.
   *
   * This method is used to determine whether the component should re-render.
   *
   * @param {object} nextProps - The new props
   * @param {object} nextState - The new state
   * @return {boolean} Whether the component should re-render
   */
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate: Should the component re-render?");
    return true; // Return true or false based on whether you want to re-render
  }

  /**
   * Called before the component is updated.
   *
   * This method is used to capture a snapshot of the component's state
   * before it is updated.
   *
   * @param {object} prevProps - The previous props
   * @param {object} prevState - The previous state
   * @return {object} The snapshot to pass to componentDidUpdate
   */
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate: Snapshot before the DOM is updated");
    return null; // Return any value or null to pass to componentDidUpdate
  }

  /**
   * Called after the component has been updated.
   *
   * This method is used to react to DOM updates.
   *
   * @param {object} prevProps - The previous props
   * @param {object} prevState - The previous state
   * @param {object} snapshot - The snapshot returned from getSnapshotBeforeUpdate
   */
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate: Component has been updated");
    // React to DOM updates here
  }

  /**
   * Called when the component is about to be removed.
   *
   * This method is used to clean up listeners, cancel requests, etc.
   */
  componentWillUnmount() {
    console.log(
      "componentWillUnmount: Cleaning up before component is removed"
    );
    // Clean up listeners, cancel requests, etc.
  }
  /**
   * Handles the button click event.
   */
  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };
  /**
   * Renders the component.
   *
   * @return {ReactElement} The rendered component
   */
  render() {
    console.log("Render: Component is rendering");
    return (
      <div>
        <p>Class Component</p>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleClick}>Increment Count</button>
      </div>
    );
  }
}
