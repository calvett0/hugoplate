$(function() {
  if((MQBE.current_state()==="mobile")||(MQBE.current_state()==="tablet")){
    $('#main-menumobile').burgermenu();
  }

  CPC.init({
    lang: 'es',
    show_only_once: true
  });
});

$(document).on('enter.mobile.mqbe', function() {
  $('#main-menumobile').burgermenu();
})

.on('leave.mobile.mqbe', function() {
});
