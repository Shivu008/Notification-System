import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios library

const App = () => {
  const [notifications, setNotifications] = useState([]);
  const [notificationPreferences, setNotificationPreferences] = useState({});

  // Fetch notifications from backend using Axios
  useEffect(() => {
    axios.get('/api/notifications')
      .then(response => setNotifications(response.data))
      .catch(error => console.error('Error fetching notifications:', error));
  }, []);

  // Fetch notification preferences from backend using Axios
  useEffect(() => {
    axios.get('/api/preferences')
      .then(response => setNotificationPreferences(response.data))
      .catch(error => console.error('Error fetching preferences:', error));
  }, []);

  // Function to update notification preferences using Axios
  const updatePreferences = (newPreferences) => {
    axios.post('/api/preferences', newPreferences)
      .then(response => setNotificationPreferences(response.data))
      .catch(error => console.error('Error updating preferences:', error));
  };

  // Render your components
  return (
    <div className="App">
      {/* Your components go here */}
    </div>
  );
};

export default App;
