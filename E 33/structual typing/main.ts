// // //nested objects mtlb 1 object k andar ek or object
// // let studentDetails = {
// //     name : "Ali",
// //     Age : 23,
// //     Address :{
// //         country : "Pakistan",
// //         City : "Karachi",
// //     }
// // }
// // console.log(studentDetails.Address.country)

// //type alises
// // type Istudents =  {
// //     name : string;
// //     Age : number;
// // }

// // let std1: Istudents={
// //     name : "Ali",
// //     Age : 23
// // }
// // let std2:Istudents={
// //     name : "Ali",
// //     Age : 23
// // }
// // let std3: Istudents={
// //     name: "okasha",
// //     Age : 20,
// // }

// //union type

// //let rollNo : string | number| boolean = "5"

// // type Irollno = string|number|boolean
// // let rollNo: Irollno = "5";

// // type IName = string|boolean|number
// // let myName:IName = "Rabia"
// // Age: 26
// // rollNo: 26266
// // console.log(myName)

// type Iteacher = {
//     name:string
//     age: number
//     experience: number
// }
// type Istudent ={
//     name: string
//     age: number
//     rollno: number
// }
// type Imanagement={
//     name: string
//     age: number
// }
// type Iboth= Iteacher & Istudent & Imanagement
// let both: Iboth= {
//     name: "okasha",
//     age: 23,
//     rollno: 5,
//     experience: 3
// }
// console.log(both)

// //structual typing

// let ball = {
//     diameter: 10
// }
// let sphere = {
//     diameter: 20
// }
// let tube =  {
//     diameter:30,
//     length:10
// }
// ball = tube
// //stale case: extra properties are allowed
// //fresh case: extra properties are not allowed
// console.log(ball)

let a : string|number|boolean|null|"hello"

type Idata = {
    name: string
    Adress: string
    DOB: number
}
type Istudent = {
    name: string
    RollNo: number
}
type Iteacher ={
    name: string
    experience: number
}
type IAll = Iteacher & Istudent & Idata
let itStudent = {
    name: "Rabia",
    Adress: "Karachi",
    DOB: 4_8_1996,
    experience: 2,
    class: "7 to 10"
}
console.log(itStudent)

let ball = {
    diameter: 10
}
let tube = {
    diameter: 20,
    length: 50
}
 