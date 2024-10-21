// const user = {
//     userId: 1,
//     userName: "munawar",
//     logIn : 6,
//     signIn: true,
//     Gituserdetail: function(){
//         console.log("got user detail from database")
//         console.log(this);
        
//     },

//  user2:{
//     userId: 2,
//     userName: "shahan",
//     logIn : 4,
//     signIn: true,
//     Gituserdetail: function(){
//         console.log("got user detail from database")
        
//      console.log(this)
//     }
//     }
      
// }

// console.log(user);
// console.log(user.Gituserdetail())
// console.log(user1.user2.userName);



function user(username, logIncount, logIn){
    this.username = username;
    this.logIncount = logIncount;
    this.logIn = logIn;
 return this
//  username = this.username;
//  logIncount = this.logIncount;
//  logIn = this.logIn;
//  return this;
}


// const userone =  user("Munawar", 4, true)
// const usertwo =  user("jamal", 3, false)
// console.log(userone) 


const userone = new  user("Munawar", 4, true)
const usertwo =  new user("jamal", 3, false)
console.log(userone) 
console.log(usertwo) 

