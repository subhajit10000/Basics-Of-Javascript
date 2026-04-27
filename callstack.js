
function one(){

    console.log("one")

    two()

    console.log("new one")  

}


function two(){

    console.log("two")
    three()
    console.log("two")

}


function three(){

    console.log("three")

}


one()
