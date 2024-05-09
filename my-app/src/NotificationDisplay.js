import React from 'react';

const NotificationDisplay = ({ notifications }) => {
  return (
    <div className="NotificationDisplay">
      <h2>Notifications</h2>
      <ul>
        {notifications.map(notification => (
          <li key={notification.id}>{notification.message}</li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationDisplay;
