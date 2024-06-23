// ---------------Math Object------------------

// console.log(Math.random())

// console.log(Math.PI)

// console.log(Math.round(1.2))

// console.log(Math.max(1,3,5))

// console.log(Math.min(3,3,6,2))

// console.log(Math.abs(2))

// console.log(Math.abs(-2))




// ----------------String Object-----------------------
// generally strings are primitive tyeps but in javascript strings can be primitive and non-primitive , that is can be primmitive and an object too

// 2 types 

// 1. primitive strings
// let lastName= 'Babbar'

// ye last name ko object me convert kr skte h 
// jab v lastname ke saath dot lgate h (lastName.) tb internally js ise object me convert krne lg jaata h 

//ye niche ke functions object pe apply hote h but still upr wale string apply ho rhe h kyuki internally js object me convert kr deta h 
// console.log(lastName.length)
// console.log(lastName[0])
// console.log(lastName.includes('Ba'))
// console.log(lastName.startsWith('B'))
// console.log(lastName.endsWith('ar'))
// console.log(lastName.toUpperCase())
// console.log(lastName.toLowerCase())
// console.log(lastName.trim())
// console.log(lastName.replace('Bab', 'car'))

// let message = "this is my first message"

// let words = message.split(' ')
// console.log(words)  (5) ['this', 'is', 'my', 'first', 'message']


// console.log(lastName)
// console.log(typeof lastName)

// Babbar
// string

// 2. non-primitive strings
// let firstName = new String('love')  //using String constructor fucntion
// console.log(firstName)
// console.log(typeof firstName)

// String {'love'}
// object

// --------------------Template Literal ----------------------------
// let lastName ='Babbar';
// let message = 'This is my first message'

// let message2 = 'this is \n my first\n \'quoted\' message'
// console.log(message2)
// // agr template literal use nhi krenge toh upr k jaise newline character ya backspace ko use krke in restricted chijon ko use kr paenge  

// // with template literal - jaisa type krenge vaise hi show hojaega , no need use backspaces 
// let message3=`i am writing this 
// message using 
// template literal and "its awesome" to write strings 
// in this way , gives more 'freedom' to developers 

// special thanks to ${lastName}`

// console.log(message3)


//-------------------------------Date Object----------------------

// let date = new Date()
// console.log(date);

// let date2 = new Date('Jan 5 2002 7:15')
// console.log(date2)

// let date3 = new Date(1998,5,20,7) //month indexing starts from zero
// console.log(date3)

// date3.setFullYear(1947)
// console.log(date3)

