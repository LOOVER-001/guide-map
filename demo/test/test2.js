// 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。

// var lengthOfLongestSubstring = function(s) {
//     let arr = s.split('')
//     let tem = []
//     let tar = []
//     for(let i = 0; i < arr.length; i++){
//         let element = arr[i]
//         if(tem.indexOf(element)==-1){
//             tem.push(element)
//         }else {
//             tar.push(tem)
//             tem = [element]
//         }
//     }
//     let max = 0
//     tar = tar.length ? tar : [tem]
//     for(let j = 0; j < tar.length; j++){
//         let element = parseInt(tar[j].length)
//         if(element > max){
//             max = element
//         }
//     }
//     if(arr.length == 0){
//         return 0
//     }
//     if(arr.length == 1){
//         return 1
//     }
//     return max
// };

// console.log(lengthOfLongestSubstring("au"))

