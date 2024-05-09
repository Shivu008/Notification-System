const express = require('express');
const app = express();
const PORT = 5000;

// Sample data for notifications and preferences
let notifications = [
  { id: 1, message: 'New tweet from user123' },
  // Add more sample notifications
];

let notificationPreferences = {
  receiveTweets: true,
  // Add more preferences
};

// Get notifications
app.get('/api/notifications', (req, res) => {
  res.json(notifications);
});

// Get notification preferences
app.get('/api/preferences', (req, res) => {
  res.json(notificationPreferences);
});

// Update notification preferences
app.post('/api/preferences', (req, res) => {
  notificationPreferences = req.body;
  res.json(notificationPreferences);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
