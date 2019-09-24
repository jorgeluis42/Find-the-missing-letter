function findMissingLetter(array) {
 let missing = array[0].charCodeAt(0)
 for (let i = 1; i < array.length; i++) {
   if (missing + i !== array[i].charCodeAt(0)) {
     return String.fromCharCode(missing + i)
   }
 }
}