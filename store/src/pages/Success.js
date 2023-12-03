import React, { useEffect } from 'react';
import Confetti from 'react-confetti';

function Success() {
  useEffect(() => {
    // Clean up the confetti effect after 3 seconds
    const timer = setTimeout(() => {
      // Perform any necessary cleanup here
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <h1>Success!</h1>
      <h1>Artwork has been Purchased</h1>
      <Confetti
        width={window.innerWidth}
        height={window.innerHeight}
      />
    </div>
  );
}

export default Success;