import React from "react";
// Import the CSS module
import styles from "./Registration.module.sass";

function Registration() {
  return (
    <div className={styles.registrationContainer}>
      <form className={styles.registrationForm}>
        <h2>Register</h2>

        <div className={styles.formGroup}>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            required
          />
        </div>

        <button type="submit" className={styles.registrationButton}>
          Register
        </button>
      </form>
    </div>
  );
}

export default Registration;
