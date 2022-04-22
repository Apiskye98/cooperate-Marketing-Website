let database = [
    {
        username: "dada",
        passWord: "hello133"
    },
    {
        username: "yemi",
        passWord: "hello123"
    }
]

let userInputUsername=prompt("Enter your Username");
let userInputPassowrd=prompt("Enter your Username");

console.log(userInputUsername, userInputPassowrd, database[0].username, database[0].passWord );

function isUserValid(a, b){
    for (let i =0; i<database.length; i++){
        if ((database[i].username === a) && (database[i].passWord === b)){
            return true;
        }
    }
}

function userLogin(){
    if(isUserValid(userInputUsername, userInputPassowrd)===true){
        console.log(`welcome ${userInputUsername} you are sucessfully logged`);

    }else{
        console.log(`wrong Password or Username.`);
    }
}

userLogin();


