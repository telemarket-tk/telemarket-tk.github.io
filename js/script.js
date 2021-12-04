init();
function init(){
	var current = 0;
	var audio = $('#audio');
	var playlist = $('#playlist');
	var tracks = playlist.find('li a');
	var len = tracks.length - 1;
	audio[0].volume = 1;
	// audio[0].play();
	playlist.find('a').click(function(e){
			e.preventDefault();
			link = $(this);
			current = link.parent().index();
			run(link, audio[0]);
	});
	audio[0].addEventListener('ended',function(e){
			current++;
			if(current == len){
					current = 0;
					link = playlist.find('a')[0];
			}else{
					link = playlist.find('a')[current];
			}
			run($(link),audio[0]);
	});
}
function run(link, player){
			player.src = link.attr('href');
			par = link.parent();
			par.addClass('active').siblings().removeClass('active');
			player.load();
			player.play();
			$('#title').html(link.text());
			$('#meta').html(link.attr('data-meta'));
}
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
