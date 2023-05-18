import React, { useEffect, useState } from 'react';

const MyComponent = () => {
  const [showComponent, setShowComponent] = useState(true);

  const toggleComponent = () => {
    setShowComponent(!showComponent);
  };

  return (
    <div>
      <button onClick={toggleComponent}>Toggle Component</button>

      {showComponent && <CleanUpComponent />}
    </div>
  );
};

const CleanUpComponent = () => {
  useEffect(() => {
    // Component did mount
    console.log('Component mounted');

    return () => {
      // Component will unmount
      console.log('Component unmounted');
    };
  }, []);

  return <div>CleanUpComponent</div>;
};

export default MyComponent;
