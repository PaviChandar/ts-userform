import "../assets/userform.css"

interface CreateUser {
    onChangeForm: Function
    createUser: Function
}

function UserForm({  onChangeForm, createUser }: CreateUser) {
    return (
        <div className="userContainer">
            <input type="text" placeholder="First Name" onChange={(e) => onChangeForm(e)} name="firstname" id="firstname" className="name" />
            <input type="text" placeholder="Last Name" onChange={(e) => onChangeForm(e)} name="lastname" id="lastname" className="name" />
            <input type="text" placeholder="Email" onChange={(e) => onChangeForm(e)} name="email" id="email" className="name" />
            <button onClick={(e) => createUser()} className="create">Create</button>
        </div>
    )
}

export default UserForm