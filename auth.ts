const login = {
    username: "test01",
    password: "test01",

};





async function batata (){
    const rawResponse = await fetch("http://172.21.0.23:3000/api/auth/login", {
    method: "POST",
    headers: {
        
        "Content-Type": "application/json"
    },
    body: JSON.stringify(login)
    });
    const content = await rawResponse.json();

    console.log(content);
}

batata();

