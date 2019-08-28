  class api_validate{
    constructor(username,password)
    {
        this.username = username;
        this.password = password;
    }

    init(username , password) {
        if(username == 'admin')
       return 0;
    }
}