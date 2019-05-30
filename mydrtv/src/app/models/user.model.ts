export class UserModel {
    constructor(
    public _id: string,
    public Name: string,
    public Email: string,
    public Password: string,
    public Gender: string,
    public History: []
    ) {  }
  }