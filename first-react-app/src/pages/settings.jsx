// src/components/Settings.js
import React, { useState } from "react";

const Settings = () => {
  const [theme, setTheme] = useState("light");
  const [notifications, setNotifications] = useState(true);

  const handleThemeChange = (e) => setTheme(e.target.value);
  const handleNotificationsChange = (e) => setNotifications(e.target.checked);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., save settings to backend or local storage)
    alert("Settings saved!");
  };

  return (
    <div className="settings-container">
      <header className="settings-header">
        <h1>Settings</h1>
      </header>
      <form className="settings-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="theme">Theme:</label>
          <select id="theme" value={theme} onChange={handleThemeChange}>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="notifications">Enable Notifications:</label>
          <input
            type="checkbox"
            id="notifications"
            checked={notifications}
            onChange={handleNotificationsChange}
          />
        </div>
        <button type="submit" className="submit-button">
          Save Settings
        </button>
      </form>
    </div>
  );
};

export default Settings;
