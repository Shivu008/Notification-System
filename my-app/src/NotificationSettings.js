import React, { useState } from 'react';

const NotificationSettings = ({ preferences, onUpdatePreferences }) => {
  const [newPreferences, setNewPreferences] = useState(preferences);

  const handleToggle = (event) => {
    const { name, checked } = event.target;
    setNewPreferences(prevState => ({
      ...prevState,
      [name]: checked,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onUpdatePreferences(newPreferences);
  };

  return (
    <div className="NotificationSettings">
      <h2>Notification Preferences</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="checkbox"
            name="receiveTweets"
            checked={newPreferences.receiveTweets}
            onChange={handleToggle}
          />
          Receive Tweets Notifications
        </label>
        {/* Add more checkboxes for other notification types */}
        <button type="submit">Save Preferences</button>
      </form>
    </div>
  );
};

export default NotificationSettings;
