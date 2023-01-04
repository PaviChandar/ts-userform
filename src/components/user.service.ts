export class UserService {
    public users = [
        {
            firstName: "Elena",
            lastName: "Gilbert",
            email: "elena0501@gmail.com"
        },
        {
            firstName: "Caroline",
            lastName: "Forbes",
            email: "caroline3010@gmail.com"
        },
        {
            firstName: "Bonnie",
            lastName: "Bennet",
            email: "bonnie0612@gmail.com"
        },
    ]

    public addUser(user: any) {
        const x = this.users.concat(user)
        console.log("Pushed user : ", x)
        console.log("Pushed user length : ", x.length)
        return x
    }

    public getUsers(): any {
        console.log("user length : ", this.users.length)
        console.log("users in service : ", this.users)
        return this.users
    }
}