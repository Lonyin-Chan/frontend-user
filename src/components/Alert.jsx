import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AlertComponent = () => {
  const [showAlert, setShowAlert] = useState(true);
  const navigate = useNavigate();

  const handleRedirect = (url) => {
    navigate(url);
  };

  return (
    <div>
      {showAlert && (
        <div style={alertStyles} role="alert">
            <h3>Message from telephony agent!</h3>
          <button onClick={() => handleRedirect('/account')}>Go to account</button>
        </div>
      )}
    </div>
  );
};

// Basic styles for the alert box
const alertStyles = {
  padding: '20px',
  backgroundColor: '#00B6FF',
  color: 'white',
  borderRadius: '5px',
  marginTop: '10px',
  textAlign: 'center',
  width: '250px',
  margin: '0 auto',
};

export default AlertComponent;