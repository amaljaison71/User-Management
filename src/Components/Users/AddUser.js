/**
 * Wrapper component for adding new user to the list
 */

import Card from "../UI/Card";
import styles from './AddUser.module.css'

const AddUser = (props) => {
  /**
   * This method adds new user to existing list of users
   * @param {*} event
   */
  const addUserHandler = (event) => {
    event.preventDefault(); // prevents the form's default submit behaviour and hence prevent reoading the page
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" />
        <button type="submit">Add User</button>
      </form>
    </Card>
  );
};

export default AddUser;
