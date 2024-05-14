/*
2. Password Generation:
 
This function helps users create secure passwords based on their names. 
It takes the user's first and last names and combines the first 3 characters of 
the first name with the last 3 characters of the last name, 
then adds "@2024" to the end. 
For example, if the user's name is "John Doe", the generated password would be "JohDoe@2024".
*/
function generateSecurePassword(firstName, lastName) {
    const firstThreeChars = firstName.slice(0, 3);//Taking first 3 characters of the first name.
    
    const lastThreeChars = lastName.slice(-3); //Taking last 3 characters of the last name.
    
    //Combining first three characters of the first name with the last three characters of the last name.
    const generatedPassword = firstThreeChars + lastThreeChars + "@2024";
    
    return generatedPassword;
}

// Example usage:
const user_firstName = "Rodgers";
const user_lastName = "Ndemo";
const password = generateSecurePassword(user_firstName, user_lastName);
console.log(password); 
