function collectStrings(obj) {
  let stringsArr = [];
   function gatherStrings(o) {
     for (let key in o) {
       if (typeof o[key] === 'string') {
         stringsArr.push(o[key]);
       } else if(typeof o[key] === 'object') {
         return gatherStrings(o[key]);
       }
     }
   }
   gatherStrings(obj);
   return stringsArr;
}
