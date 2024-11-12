const formatedate = (date = new Date())=>{
    const day = date.getDate() ;
    const months = date.getMonth()+1;
    const year = date.getFullYear();
    return `${day}/${months}/${year}`
}

console.log(formatedate())


// que 5


const addnew = (str)=>
    str.indexOf("!new") ===0 ? str : `!new ${str}`


console.log(addnew(" usama "))


