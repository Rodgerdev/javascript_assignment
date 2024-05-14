/*
4. Capitalize Words
Write a program that accepts a string as input, capitalizes the first letter of each word in the 
string, and then returns the result string.
*/
function capitalizeWords(my_string) {
    let words = my_string.split(" ");
    
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);//Capitalizing the first 
    }                                                                   // letter of each word
    

    return words.join(" ");  //Joining the words back into a single string
}

let inputString = "my name is rodgers ndemo, a junior dev";
let capitalizedString = capitalizeWords(inputString);
console.log(capitalizedString);
