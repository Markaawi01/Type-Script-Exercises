interface User {
    username: string;
    password: string;
    email?: string;
    readonly id: number;
}

function login(user: User) {
    return "User ID:"+user.id+ "User name is " + user.username +
           " and Password is " + user.password +" and email is "+user.email;
}

console.log(login({ 
    id:5, 
    username: "Omar",
    password: "123456"

}));

// With Email
console.log(login({  
    id:6,
    username: "Omar",
    password: "123456",
    email:"markaawi01@gmail.com"
}));