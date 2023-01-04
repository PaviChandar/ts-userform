import "../assets/displayusers.css"
import { UserService } from "./user.service"

interface DisplayUserBoard{
    numberOfUsers:number
}
const y = new UserService()

const handleCreate = () => {
console.log("inside handle create")
const hi = y.getUsers()
console.log("hiiii", hi)
}

function DisplayUser({numberOfUsers} : DisplayUserBoard) {
    return (
        <div className="displayContainer">
            <h2>Users created</h2>
            <div className="displayInput">
                <div className="number">{numberOfUsers}</div>
                {/* <button className="create">Get All Users</button> */}
            </div>
        </div>
    )
}

export default DisplayUser