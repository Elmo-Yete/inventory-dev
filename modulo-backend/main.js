
const nombres = [
    "Andres",
    "Andres de Anda",
    "Christian",
    "Damian",
    "Dani",
    "Diego",
    "Dan",
    "Gustavo",
    "Ignacio",
    "Jorge",
    "Karla",
    "Lau",
    "Luis",
    "Mara",
    "Max",
    "Pao",
    "Roberto",
    "Samantha"
]

let shortNames = []
let longNames = []
let longShortName = (namesArray) => {
    for (let i=0; i<namesArray.length; i++){
        if (namesArray[i].length > 4) {
            longNames.push(namesArray[i])
        } else {
            shortNames.push(namesArray[i])
        }
    }
}

let printNames = longShortName(nombres)
console.log(printNames)