// let line = '10000100101'
// let arr = line.split("")
// let temp = []
// let temp2 = []

// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     if(element == 1){
//         temp.push(i+1)
//     }
// }

// for (let j = 0; j < temp.length-1; j++) {
//     const fir = temp[j];
//     const las = temp[j+1];
//     temp2.push(las - fir)
// }

// tar = temp2.sort(function(a,b){return a-b})

// console.log(Math.floor(tar[tar.length - 1]/2))

// 2
// let H = 3
// let L = 4
// let arr = ['-3 5 -1 5','2 4 -2 4','-1 3 -1 3']
// let temp = []
// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i].split(" ");
//     temp.push(element)
// }
// let max = 0
// let tar = []
// for (let j = 0; j < H; j++) {
//     for (let k = 0; k < temp.length; k++) {// H = 0; H = 1
//         const element = temp[j][k];
//         max += element
//     }
//     tar.push(max)
// }

// 3

// let num = 10
// let arr = [1, 1, 1, 1, -4, 1]

// let people = 0
// let tarArr = []
// let tar = 0
// for (let i = 0; i < arr.length; i++) {
//     const element = parseInt(arr[i]);
//     if(element == 1){
//         if(people == 0){
//             tarArr.push(0)
//             people++
//         }else if( people == 1){
//             tarArr.push(num-1)
//             people++
//         }else {
//             let index = 0
//             let object = {}
//             for (let j = 0; j < tarArr.length-1; j++) {
                
//                 const fir = tarArr[j];
//                 const las = tarArr[j+1];
//                 let cen = Math.floor((las - fir)/2)
//                 cen = parseInt(cen) + parseInt(fir)
//                 let s1 = cen - fir
//                 let s2 = las - cen
//                 if(s2 > s1){
//                     object[cen] = s1
//                 }else {
//                     object[cen] = s2
//                 }

//                 let max = 0
//                 for (const key in object) {
//                     if(object[key] > max){
//                         max = object[key]
//                         index = key
//                     }
//                 }
//             }
//             tar = +index
//             tarArr.push(tar)
//             tarArr = tarArr.sort(function(a,b){return a-b})
//             people++
//         }
//     }else if(element < 0){
//         for (let k = 0; k < tarArr.length; k++) {
//             const tar = tarArr[k];
//             if(tar == -element){
//                 tarArr.splice(k,1)
//                 people--
//             }
//         }
//     } 
// }
// console.log(tar)

// 防抖
// const input = document.getElementById('input')
// let timer = null

// input.addEventListener('keyup',function(){
//     if(timer){
//         clearTimeout(timer)
//     }
//     timer = setTimeout(()=>{
//         console.log(input.value)

//         timer = null
//     },500)
// })

// //节流
// function myDrag() {
//     let timer = null

//     return function () {
//         if(timer){
//             return
//         }
//         timer = setTimeout(()=>{
//             console.log('drag')
//             timer = null
//         },100)
//     }
// }

// const div = document.getElementById('div')
// div.addEventListener('drag',myDrag())

// var arr = [["1","2"],["3","4","5"]];
// var fa = arr[0]
// var ch = arr[1]
// var tar = []

// for (let i = 0; i < fa.length; i++) {
//     for (let j = 0; j < ch.length; j++) {
//         tar.push([fa[i],ch[j]])
//     }
// }

// console.log(tar)

// let tar = []
// for (let i = 0; i < array.length; i++) {
//     const obj = array[i];
//     obj[obj.id] = obj.parent
//     tar.push(obj)
// }
// for (let j = 0; j < tar.length; j++) {
//     const o = tar[j];
//     if(0)
// }
function objFn(obj) {
    obj.map(item => {
        if(item.parent !== null){
            obj.map(o => {
                
            })
        }
    })
}