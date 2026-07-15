class ApiRes{
    constructor(
        statusCode,
        message,
        data
    ){
        this.statusCode = statusCode > 500,
        this.message = message,
        this.data = data
    }
}

export { ApiRes }