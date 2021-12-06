var audio = $('#audio');
var player = audio[0]
var playlist = $('#playlist');
var tracks = playlist.find('li a');
var len = tracks.length;

init();
function init(){
  var current = 0;
  player.volume = 1;

  // Click link event
  tracks.click( function(e) {
    e.preventDefault();
    link = $(this);
    current = link.parent().index();
    run(link, true);
  });

  // Load next song
  player.addEventListener('ended', function(e){
    current++;
    if(current == len){ current = 0; }
    run($(tracks[current]), current);
  });

  run($(tracks[0]));
}

function run(link, play = false){
  player.src = link.attr('href');
  link.parent().addClass('active').siblings().removeClass('active');
  player.load();
  if (play) { player.play() };
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
