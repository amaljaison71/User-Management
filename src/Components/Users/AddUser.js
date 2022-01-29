/**
 * Wrapper component for adding new user to the list
 */

import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
  //state handler for username
  const [enteredUsername, setEnteredUsername] = useState("");
  //state handler for age
  const [enteredAge, setEnteredAge] = useState("");
  //Error state
  const [error, setError] = useState();

  /**
   * On every keystroke in the username input box the username state get updated with the value entered in the text box
   * @param {*} event
   */
  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  /**
   * On every keystroke in the age input box the age state get updated with the value entered in the text box
   * @param {*} event
   */
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  /**
   * This method adds new user to existing list of users
   * @param {*} event
   */
  const addUserHandler = (event) => {
    event.preventDefault(); // prevents the form's default submit behaviour and hence prevent reoading the page
    /**
     * Checks if the entered username or age is empty, then do nothing and return
     */
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    /**
     * Checks if the entered age is a valid age, then continues the execution else do nothing and return
     */
    if (+enteredAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }

    /**
     * call the addUserHandler() on the app.js component and update the userslist state
     * reference to the addUserHandler() on the app.js component is passed as an argument(onAddUser) to this component
     */
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
  };

  /**
   * resets the error state and closes the error modal
   */
  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
