let user = {userName : "irmcomert" , isActive : true}
console.log (user)
localStorage.setItem('userInfo',JSON.stringify(user) )


let userInfo = localStorage.getItem('userInfo')
console.log(userInfo)
localStorage.setItem




let number = {passworld : "123456" , isActive : true}
console.log (number)
localStorage.setItem('counter',JSON.stringify(number) )

let counter = localStorage.getItem('counter')
console.log(counter)