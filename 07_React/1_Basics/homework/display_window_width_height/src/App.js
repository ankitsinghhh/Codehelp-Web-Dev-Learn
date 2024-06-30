
import './App.css';
// Importing necessary functions from React
import React, { useState, useEffect } from 'react';

// Defining our main App component
function App() {
  // Setting up state to store window width and height
  // useState initializes the state with the current window size
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth, // Initial width of the window
    height: window.innerHeight, // Initial height of the window
  });

  // useEffect is used to run code after the component is rendered
  useEffect(() => {
    // Function to update state with new window size when window is resized
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth, // Update width with the current window width
        height: window.innerHeight, // Update height with the current window height
      });
    };

    // Adding an event listener that calls handleResize when window is resized
    window.addEventListener('resize', handleResize);

    // Cleanup function that removes the event listener when the component is unmounted
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // The empty array means this effect runs only once after the initial render

  // Returning JSX to display window size on the screen
  return (
    <div className='wrapper'>
      <h1>Window Size</h1> {/* Displaying a heading */}
      <p>Width: {windowSize.width}px</p> {/* Displaying the current window width */}
      <p>Height: {windowSize.height}px</p> {/* Displaying the current window height */}
    </div>
  );
}

// Exporting the App component as the default export
export default App;
