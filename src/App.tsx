import { useEffect, useState } from 'react';
import './App.css';
import DisplayUser from './components/DisplayUser';
import UserForm from './components/UserForm';
import { UserService } from './components/user.service';
import { Users } from './components/UserList';

const App = () => {

  const [user, setUser] = useState<any>({})
  const [users, setUsers] = useState<any>([])
  const [numberOfUsers, setNumberOfUsers] = useState<number>(0)

  const userService = new UserService()

  const createUser = (e: any) => {
    const response = userService.addUser(user)
    console.log("New user : ", response)
    console.log("Length of new user : ", response.length)
    setUsers(response)
    setNumberOfUsers(numberOfUsers + 1)
  }

  useEffect(() => {
    setUsers(userService.getUsers())
  }, [])

  useEffect(() => {
    setNumberOfUsers(users.length)
  }, [users])

  const onChangeForm = (e: any) => {
    const userState = { ...user }
    console.log("Userrrrrrrrrrr", userState);

    if (e.target.name === 'firstname') {
      userState.firstName = e.target.value
    } else if (e.target.name === 'lastname') {
      userState.lastName = e.target.value
    } else if (e.target.name === 'email') {
      userState.email = e.target.value
    }
    setUser(userState)
  }

  return (
    <div className="appContainer">
      <h1>USER FORM</h1>
      <div className="appComponent">
        <UserForm onChangeForm={onChangeForm} createUser={createUser} />
        <DisplayUser numberOfUsers={numberOfUsers} />
      </div>
      <Users users={users} />
    </div>
  );
}

export default App;