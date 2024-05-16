const dateOpt = new Date();

var day = dateOpt.getDate();
var month = dateOpt.getMonth()+1; 
var year = dateOpt.getFullYear();
if(day<10){
    day = "0" + day; 
}
if(month<10){
    month = "0" + month; 
}
module.exports = day + "." + month + "." + year;

