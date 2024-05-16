const dateOpt = new Date();

var hour = dateOpt.getHours();
var min = dateOpt.getMinutes();

if(hour<10){
    hour = "0" + hour; 
}
if(min<10){
    min = "0" + min; 
}
module.exports = hour + ":" + min;

