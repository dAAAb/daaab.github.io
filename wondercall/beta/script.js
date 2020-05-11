
window.onload = Create();
var roomContainerList = []

function Create() {
  
  var bodyContainer = document.createElement('div');
  bodyContainer.id = 'bodyContainer';
  bodyContainer.className = 'container'
  
  for (i = 0; i < 10; i++){
    // var roomcode1 = '<iframe class="room1open"  src="https://tico.chat/powercall?room=NTUTBR19863&entry=wondercall" width="1200" height="600" frameborder="0" allow="autoplay;encrypted-media;camera;microphone" allowfullscreen ></iframe>';
    var link = 'https://tico.chat/powercall?room=NTUTBR' + i + '9863&entry=wondercal';
    var roomContainer = document.createElement('iframe');
    roomContainer.id = 'roomNumber' + i
    roomContainer.src = link;
    roomContainer.clientWidth = 2000
    roomContainer.clientHeight = 1000
    //roomContainerList.push(roomContainer)
    bodyContainer.appendChild(roomContainer);
  }

  document.body.appendChild(bodyContainer)
  document.body.appendChild(mainContainer);

}

// Original Source code
$(document).ready(function(){
	// var roomcode2 = '<iframe class="room2open"  src="https://tico.chat/powercall?room=NTUTBR29863&entry=wondercall"width="1200"height="600"frameborder="0"allow="autoplay;encrypted-media;camera;microphone"allowfullscreen></iframe>';
	// var roomcode3 = '<iframe class="room3open"  src="https://tico.chat/powercall?room=NTUTBR39863&entry=wondercall"width="1200"height="600"frameborder="0"allow="autoplay;encrypted-media;camera;microphone"allowfullscreen></iframe>';
    $('#show1').click(function() {
	  $('#roomNumber1').appendChild(roomContainerList[0]);
       $('#roomNumber1').toggle("slide");
     });
  //   $('#show2').click(function() {
	//   $('.room2').replaceWith(roomcode2);
  //     $('.room2').toggle("slide");
  //   });
  //   $('#show3').click(function() {
	//   $('.room3').replaceWith(roomcode3);
  //     $('.room3').toggle("slide");
  //   });
	// //關閉
     $('#close1').click(function() {
	        $('.room1open').toggle("slide");
	        $('.room1open').replaceWith('<div class="room1" style="display: none;">');
     });
  //   $('#close2').click(function() {
	//   $('.room2open').toggle("slide");
	//   $('.room2open').replaceWith('<div class="room2" style="display: none;">');
  //   });
  //   $('#close3').click(function() {
	//   $('.room3open').toggle("slide");
	//   $('.room3open').replaceWith('<div class="room3" style="display: none;">');
  //   });

    


});
