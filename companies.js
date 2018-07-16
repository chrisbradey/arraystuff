function company(name, uid,security, colour,){
    this.name = name;
    this.uid = uid;
    this.security = security
    this.colour = colour
}

const highSecurity = 'high'
const medSecurity = 'med'
const lowSecurity = 'low'
const black = 'black'
const blue = 'blue'
const red = 'red'
const yellow = 'yellow'

var Facebook = new company ('Facebook', 3195135, highSecurity, red)
var Youtube = new company ('Youtube', 53718957138957, lowSecurity, red)
var Pornhub = new company ('Pornhub', 319508135, highSecurity, yellow)
var Twitter = new company ('Twitter', 3915913, lowSecurity, black)
var companies = new Array(Facebook, Youtube)
var redArray = new Array()

var i;
for(i=0; i < companies.length; i++){
    if(companies[i].colour === red){
        redArray.push(companies[i].name)
    }
}
console.log(redArray)
