// 
// var xhrObject = new XMLHttpRequest();
//
// xhrObject.onreadystatechange = function() {
//   if (xhrObject.readyState === 4) {
//     if (xhrObject.status === 200 || xhrObject.status === 304) {
//       obj = JSON.parse(xhrObject.responseText);
//       console.log(obj);
//       // pager = obj.response.pager;
//       // episodes = pager.results;
//       // currentPage = pager.current_page;
//       // lastPage = pager.last_page;
//       // add( episodes );
//       // if ( currentPage < lastPage ){
//       //   readSpreaker( currentPage + 1 );
//       // }
//     }
//   }
// };
//
// function readSpreaker(page){
//   xhrObject.open(
//     "GET",
//     "https://api.clyp.it/vhlukloz",
//     true
//   );
//   xhrObject.setRequestHeader("Content-Type",'text/xml');
//   xhrObject.send();
// }
//
// readSpreaker(1);
// // https://api.clyp.it/vhlukloz.mp3
