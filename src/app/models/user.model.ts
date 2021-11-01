export class User{
    _id: string;
    username: string;
    email: string;
    password: string;
    roles: Array<string>;
    accessToken: string;

    constructor()
    constructor(_id?: string,
                username?: string,
                email?: string,
                password?: string,
                roles?: Array<string>,
                accessToken?: string){
                    this._id = (_id)? _id: '';
                    this.username = (username)? username: '';
                    this.email = (email)? email: '';
                    this.password = (password)? password: '';
                    this.roles = (roles)? roles: [];
                    this.accessToken = (accessToken)? accessToken: '';
    }
}
