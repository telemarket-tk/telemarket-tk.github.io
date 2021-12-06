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

function string_to_slug (str) {
    str = str.replace(/^\s+|\s+$/g, ''); // trim
    str = str.toLowerCase();
  
    // remove accents, swap ñ for n, etc
    var from = "àáäâèéëêìíïîòóöôùúüûñç·/,:;'";
    var to   = "aaaaeeeeiiiioooouuuunc______";
    for (var i=0, l=from.length ; i<l ; i++) {
        str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }

    str = str.replace(/[^a-z0-9 _]/g, '') // remove invalid chars
        .replace(/\s+/g, '_') // collapse whitespace and replace by _
        .replace(/_+/g, '_'); // collapse underscores

    return str;
}
