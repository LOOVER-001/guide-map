// let a = "hello nowcoder1"
// let arr = a.split(' ')
// print(arr[arr.length-1].length)

// let a = "ABCabcA".toLowerCase()
// let b = "A".toLowerCase()
// print(a.split(b).length-1)

// let N = readline()
// let set = new Set()
// let arr = []

// for(let i = 0; i <= N-1; i++){
//     set.add(readline())
// }
// arr = [...set]
// print(arr.sort())

// let str = "abcabcabcabc";
// let over = str.length%8

// let tar = str.concat(new String('0').repeat(over ? (8-over) : 0))

// for (let i = 0; i < tar.length; i += 8) {
//     print(tar.substring(i, i+8))
// }

// let num = 0.256
// print(Math.round(parseFloat(num)))

// let num = 4
// let arr = ["0 1",'0 2','3 2','2 4']
// let tar = {}

// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     let childArr = element.split(' ')
//     let key = childArr[0]
//     let value = parseInt(childArr[1])
//     if(tar[key]){
//         tar[key] += value
//     }else {
//         tar[key] = value
//     }
// }

// tar = Object.keys(tar).sort(function(a,b){ return a-b})

// for (const key in tar) {
//     if (Object.hasOwnProperty.call(tar, key)) {
//         const element = tar[key];
//         print(key + " " + element)
//     }
// }

// let str = '9876673'
// let arr = str.split('').reverse()
// let set = new Set()
// for(let i = 0; i < arr.length; i++){
//     set.add(arr[i])
// }
// print([...set].join(''))

// let str = 5
// let num = parseInt("5",2)
// let arr = num.split('')
// let tar = 0
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] == 1){
//         tar++
//     }
// }
// print(tar)

// let arr = new String('A10;S20;W10;D30;X;A1A;B10A11;;A10;').split(';')
// let reg = /^(A|D|W|S)[0-9]{1,2}$/
// let tar = []
// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     if(reg.test(element)){
//         tar.push(element)
//     }
// }
// let x = 0,y=0
// for (let j = 0; j < tar.length; j++) {
//     const element = tar[j];
//     let key = element.charAt(0)
//     let value = parseInt(element.slice(1))

//     switch (key) {
//         case 'A':
//             x -= value
//             break;
//         case 'D':
//             x += value
//             break;
//         case 'W':
//             y += value
//             break; 
//         case 'S':
//             y -= value
//             break;  
//         default:
//             break;
//     }
// }
// print(x + "," + y)

// let str = 'YUANzhi1987'
// let arr = ['abc',2,'def',3,'ghi',4,'jkl',5,'mno',6,'pqrs',7,'tuv',8,'wxyz',9]
// str = str.replace(/[a,z]/g,a => {
//     for (let i = 0; i < arr.length; i++) {
//         const element = arr[i];
//         if(typeof element == 'string' && element.indexOf(a) != -1){
//             return arr[i+1]
//         } 
//     }
// })
// str = str.replace(/[A,Z]/g,a => {
//     if(a == 'Z'){
//         return 'a'
//     }else{
//         return String.fromCharCode(a.toLowerCase().charCodeAt(0)+1)
//     }
// })

// let num = 0
// let arr = []
// while(num = readline()){
//     if(num != 0){
//         arr.push(num)
//     }
// }

// function cale( n ) {
//     n = 4
//     let over = n%3 
//     let tar = Math.floor(n/3)
//     if(over == 2) {
//         tar++
//     }
// }

// function dg(n) {
//     let element = Math.floor(n/3)
//     if( element > 3) {
//         dg(element)
//     }
// }

let str = 'assssa'
let arr = str.split('')
let obj = {}

for(let i = 0; i < arr.length; i++){
    
    let key = arr[i]
    if(obj[key]){
        obj[key]++
    }else{
        obj[key] = 1
    }
}

let min = 20
for(let key in obj){
    if(obj[key] < min){
        min = obj[key]
    }
}

let tar = []
for(let key in obj){
    if(obj[key] == min){
        let reg = new RegExp(key, 'g');
        str = str.replace(reg, '')
    }
}

print(str)

function print(out) {
    console.log(out)
}
