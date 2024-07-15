
var fs = require("fs")

// const { require } = require("yargs");

// // fs.writeFileSync("bb.txt", "hi")
// console.log(fs.readFileSync("bb.txt").toString())

// fs.appendFileSync("bb.txt", " captin qosa")



// const validator = require("validator")

// console.log(validator.isEmail("alo@sos.com"))

// console.log(process.argv)

// console.log(process.argv[2])

// const x = process.argv[2]

// if (x == "add"){
//     console.log("you added item")
// } else if (x == "delete"){
//     console.log("you deleted item")
// }else {
//     console.log("erroe")
// }

const data10 = require("./data10")
const yargs = require("yargs")
const { type } = require("os")

// console.log(yargs.argv)

yargs.command({
    command : "add",
    describe :"to add",
    builder : {
        city: {
            describe : " this is  city",
            demandOption : false,
            type :"string"
        },
        fname :{
            describe : " this is  fname",
            demandOption : true,
            type :"string"
        },
        lname :{
            describe : " this is  lname",
            demandOption : true,
            type :"string"
        },
    },
    handler : (print)=>{
        data10.addPerson(print.id,print.fname, print.lname, print.city, print.age)
        
  
    }

}

)

yargs.command({
    command : "del",
    describe :"to del",
    builder : {
        city: {
            describe : " this is  city",
            demandOption : false,
            type :"string"
        },
        fname :{
            describe : " this is  fname",
            demandOption : false,
            type :"string"
        }
    },
    handler : (deleted)=>{
        data10.delData(deleted.id)
    }

}

)


yargs.command({
    command : "read",
    describe :"to read",
    builder : {
        id : {
            describe : "This id",
            demandOption : true,
            type : "string",
        }
    },
    handler : (Read)=>{
        data10.readData(Read.id)
    }

}

)

yargs.command({
    command : "list",
    describe :"to list",
    handler : ()=>{
        data10.listData()
    }

}

)
// console.log(yargs.argv)

yargs.parse() // works on handler  only
// fs.writeFileSync("data10.json","1")
