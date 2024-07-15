
const fs = require("fs");

const addPerson = (id, fname, lname , city, age) => {
    const allData = loadDat()

    const dupData = allData.filter((item) => {
        return item.id == id
    } ) 

    if (dupData.length == 0) {    

    allData.push({
        id : id,
        fname : fname,
        lname : lname,
        city,
        age
    })

    saveAllData(allData)
    console.log("you addded")

    } else {
        console.log ("EROR DUPLICATED DATA")
    }
}

/////////////////////////////////
const loadDat = () => {
    try {
        const dataJson = fs.readFileSync("data10.json").toString()  // to conert from buffer to string
        return JSON.parse(dataJson)
    } catch {
        return  []
    }
}

////////////////////////////////////

const saveAllData =(allData) => {
    const saveData = JSON.stringify(allData)
    fs.writeFileSync("data10.json", saveData)
}

/////////////////////////////

 const delData = (id) => {
    const allData = loadDat()

    const keepData = allData.filter((item) => {
        return  item.id !== id
    })
       
        saveAllData(keepData)
        console.log("you Deleted")

 }

/////////////////////////////////////////
 
const readData = (id) => {
    const allData = loadDat()

    const dataReq = allData.find((item) => {
        return item.id == id
    })
    
    if (dataReq) {
    console.log(dataReq)
    } else {
        console.log("Data not Found")
    }
 }
///////////////////////////////////////////
 const listData = () => {
    const allData = loadDat()

    allData.forEach((item) => {
        console.log(item.fname, item.city)
        
    });
 }

module.exports = {
    addPerson,
    delData,
    readData,
    listData,
}