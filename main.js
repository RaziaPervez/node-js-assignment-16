//project=16
//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 14. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
//creating a guest list 
var guestlist1 = ["Maheen", "Nadia", "Isha", "Muskhan"];
//making variable for those guest who can't come
var dontcome = guestlist1[0];
//print the name of guest who unable to come 
console.log(dontcome, "She'll unable to come");
//add or remove guest from the guestlist
guestlist1.splice(0, 1, "Ayesha");
//message print for a bigger table
console.log("Good news!we found a bigger table");
//adding a new guest at the starting index of guestlist
guestlist1.unshift("samrah");
//adding new guest at the ending index of guestlist
guestlist1.push("kashaf");
//get a the middle index of our guestlist
var middlelndex = Math.floor(guestlist1.length / 2);
//adding a new guest to middl index array
guestlist1.splice(middlelndex, 0, "mahad");
//printing updated guest list
console.log("updated list of our guest");
guestlist1.forEach(function (oneguest) { return console.log("hello ".concat(oneguest, ", would you like to dinner with me")); });
