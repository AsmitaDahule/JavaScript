const tinderUser = new Object()

tinderUser.id = "5dfd"
tinderUser.name ="sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser)

const regularuser = {
    email: "sfdf@mail.com",
    fullname: {
        userfullname:{
            firstname:"mekochan",
            lastname: "jo"
        }
    }
} 

console.log(regularuser.fullname.userfullname.firstname)

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj4 = {5:"a",4:"b"}

// const obj3 = {obj1, obj2}
 
console.log(obj3)
const obj3 = Object.assign({},obj1,obj2,obj4)
console.log(obj3)

const obj5 = {...obj1, ...obj2}
console.log(obj5)


const users = [
    {
        id:1,
        email:"df@mail.com"
    },
    {
        id:1,
        email:"df@mail.com"
    },
    {
        id:1,
        email:"df@mail.com"
    }
]

users[1].email
console.log(tinderUser)

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('name'))


const course = {
    id:554,
    name:"JS one shot",
    courseInstructor:"hitesh"
}

console.log(course.courseInstructor)


// de-structuring                             
const {courseInstructor} = course
const {courseInstructor:instructor} = course

console.log(courseInstructor)
console.log(instructor)



// JSON API
// {
//     "name":"mekochan",
//     "course":"js",
//     "email":"fds@gmail.com"
// }

// [
//     {},
//     {},
//     {}
// ]

