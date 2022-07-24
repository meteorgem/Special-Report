var msg="跨年訂位即將額滿 請趕快把握時間!";		
var interval = 400;			
var seq= 0;

function LenScroll() {
	document.nextForm.lenText.value = msg.substring(seq, msg.length) + "   " + msg;
	seq++;
	if ( seq > msg.length )
		seq = 0;
	window.setTimeout("LenScroll();", interval);
}