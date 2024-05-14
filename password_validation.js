/*
1. Password Validation:
 
Imagine a program where users create accounts. 
You want to make sure their passwords are strong and not easily guessed. 
This function checks if a password follows these guidelines:
 
It cannot be blank (empty).
It cannot contain repeated characters in a row (like "1111" or "aaaaa" or "Jjjj").
Optionally, you can add a list of common words that users shouldn't use as passwords 
(like "password" or "123456").
*/
function passwordValidity(password, commonWords=[]) {
    if (password.length===0) {  //checking whether the password is blank.
        return false;
    }
    for (let i = 0; i < password.length-1; i++) {
        if (password[i]===password[i+1]) {  //checking repetition of characters using for loop.
            return false; 
        }
        
    }
    if (commonWords.includes(password.toLowerCase())) { //checking against common words.
        return false;
    }
    return true;  //if password meets all requirements.
}
const user_password = "12345";
const commonPasswords = ["password","12345","admin","hello"]; //array for common words.
//NB: My assumption here is that the site allows 5 characters minimum, hence 1-5.
if (passwordValidity(user_password,commonPasswords)) {
    console.log("Password is valid!");
}
else{
    console.log("Password is invalid!");
}