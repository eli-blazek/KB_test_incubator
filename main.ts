let url: string = "https://postman-echo.com/status/";
let statusCodes: any[] = [200, 201, 302, 400, 404, 418, 500, 502, 1046, 86, "nonsensical value"];

statusCodes.forEach((statusCode: any) => {
    fetch(url+ statusCode, {
        method: "GET"
    }).then((response: Response):void => {
        if (response.status === statusCode) {
            console.log(`${statusCode}: correct call`);
        } else {
            console.log(`${statusCode}: incorrect call`)
        }
    })
});