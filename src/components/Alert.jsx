import React, { useState } from 'react';

const AlertComponent = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleClick = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);  // Alert disappears after 3 seconds
  };

  return (
    <div>
      <button onClick={handleClick}>Show Alert</button>

      {showAlert && (
        <div style={alertStyles} role="alert">
          <strong>Alert!</strong> This is an important message.
        </div>
      )}
    </div>
  );
};

// Basic styles for the alert box
const alertStyles = {
  padding: '20px',
  backgroundColor: '#f44336',
  color: 'white',
  borderRadius: '5px',
  marginTop: '10px',
  textAlign: 'center',
  width: '250px',
  margin: '0 auto',
};

export default AlertComponent;