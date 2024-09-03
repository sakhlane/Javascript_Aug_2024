
console.log('data type')

// 1. number data type
 console.log(190) //190
 console.log(typeof 180); // number
 
//  2. string data type 
  console.log('string using single quote');
  console.log("string using double quote");
  console.log(`string using back tick `);

// string to number 
console.log(+'5000')  // it converts the '5000' string to number 
console.log(-'2000') // it converts the '2000' string into -2000 number
console.log( + 'hello')  // it prints NaN (not a number)
console.log(- 'minus')   // it is prints NaN (not a number)

// number to string 
console.log(1000 + '' ) // it prints '1000' as string
console.log( 2000 - ''); // it prints 2000 as number but typeof is NaN 
console.log(3000 + 'hello') // it prints 3000hello as string 
//  number + string ===> string 

// 3. boolean
console.log(typeof true);  // boolean
console.log(false) // false

// 4. undefined
console.log( undefined);  // it prints undefined
console.log(typeof undefined); // it prints undefined but in dark color

// 5. null
console.log(null) // null
console.log(typeof null) // object ===> it is a bug but we consider null type of object 

// 6. bigInt
console.log(BigInt) // native code 
console.log(BigInt(2000)); // it prints 2000n 
console.log(BigInt('2999')) // it prints 2999n 

// 7.Symbol 

