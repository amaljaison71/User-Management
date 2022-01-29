const AddUser = (props) => {
    /**
     * This method adds new user to existing list of users
     * @param {*} event 
     */
    const addUserHandler = (event) => {
        event.preventDefault(); // prevents the form's default submit behaviour and hence prevent reoading the page
    };
    
    return (
        <form onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
            <input id="username" type="text" />
            <label htmlFor="age">Age (Years)</label>
            <input id="age" type="number" />
            <button type="submit">Add User</button>
        </form>
    );
};

export default AddUser;