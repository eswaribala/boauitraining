let getUser = (firstname, lastname, age) => {
    console.log(
        "Hi, My Name is " + firstname + " " + lastname + " and Age is " + age
    )
}
getUser("John", "Sonmez", 25)

//curry
function getuserCurry(firstname) {
    return function(lastname) {
        return function(age) {
            console.log(
                "Hi, My Name is " + firstname + " " + lastname + " and Age is " + age
            )
        }
    }
}
getuserCurry("Curry")("Function")(22)


let users = [
    {
        id: 1,
        name: "John",
        age: 22,
    },
    {
        id: 2,
        name: "Peters",
        age: 23,
    },
    {
        id: 3,
        name: "Smith",
        age: 24,
    },
    {
        id: 4,
        name: "Woakes",
        age: 25,
    },
]

let names = [
    {
        id: 5,
        name: "dfdsfds",
        age: 22,
    },
    {
        id: 6,
        name: "ewrwer",
        age: 23,
    },
    {
        id: 7,
        name: "retretret",
        age: 24,
    },
    {
        id: 8,
        name: "tyryt",
        age: 25,
    },
]

const get = function(property) {
    return function(object) {
        return object[property]
    }
}

const getId = get("id")
let userids = users.map(getId)
console.log("userids", userids)

const namelist = names.map(getId)
console.log("namelist", namelist)



