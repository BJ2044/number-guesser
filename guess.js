/*
create a program that guesses a number from 1-10 then asks us to guess that number.
if it is higher say "too high" and ask again.
if it is lower say "too low" and ask again.
if it's the right number say "congratulations" and exit

*/
import readline from "readline-sync"

let userGuessedRight = false

//while(true) { // me playing
    // guess a number fom 1-10
let NumberChosen = Math.ceil(Math.random() *10)
//console.log(NumberChosen)

while(!userGuessedRight) {
let guess = readline.question("what is your guess?")
if (guess == NumberChosen)
    {
        console.log("congratulations")
        userGuessedRight = true
        }
if (guess > NumberChosen)
    {
        console.log("too high try again buddy")
        }
if (guess < NumberChosen)
    {
        console.log("too low buddy try again")
        }
//console.log(guess)
}
//}
//while(!userGuessedRight) {
//    console.log("what is your guess?")
//}