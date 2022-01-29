/**
 * Wrapper component for adding new user to the list
 */

import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
  //state handler for username
  const [enteredUsername, setEnteredUsername] = useState("");
  //state handler for age
  const [enteredAge, setEnteredAge] = useState("");

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
    console.log(enteredUsername, enteredAge);
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" onChange={usernameChangeHandler} />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" onChange={ageChangeHandler} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
