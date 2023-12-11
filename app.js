// let num = prompt("Enter Your Number: ")
// let result = reverseNumber(num);
// console.log(result)

// function reverseNumber(num){
//     return num.split("").reverse().join("");
// }

// Without Method

let num = +prompt("Enter You Number: ");
let result = reverseNumber(num);
console.log(result);

function reverseNumber(num){//123
    //0 to 9 same result:
    if(num >= 0 && num <=9){
        return num;
    }

    let reverseNum = 0;
    while(num !== 0){
        reverseNum = reverseNum * 10 + (num % 10);// 1==> 0*10 + (123 % 10) = 0 +  3 = 3; 2==> 3 * 10 + (12 % 10) = 30 + 2 = 32; 3==> 32 * 10 + (1 % 10) = 320 + 1 = 321
        num = Math.floor(num / 10) // 1==> (123 / 10) = 12.3 = 12; 2==> (12 / 10) = 1.2 = 1; 3==> 1 / 10 = 0.1 = 0
    }
    return reverseNum;
}
