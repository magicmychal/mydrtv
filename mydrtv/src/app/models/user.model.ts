export class UserModel {
    constructor(
    public Name: string,
    public LastName: string,
    public Email: string,
    public Password: string,
    public Gender: string,
    public History: []
    ) {  }
  }