function dateAndTime(){
    var date=new Date()
    var hh=date.getHours();
    var mm=date.getMinutes();
    var ss=date.getSeconds();
    var am_pm="Am";
    if(hh>=12){
        am_pm="Pm"
        if(hh>12){
            hh-=12;
        }
    }
    if(hh==0){
        hh=12;
    }
    var dd=date.getDate();
    var mo=date.getMonth();
    var yy=date.getFullYear();
    var arrMo=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    mo=arrMo[mo];
    var day=date.getDay();
    var arrDay=["ఆదివారం", "సోమవారం", "మంగళవారం", "బుధవారం", "గురువారం", "శుక్రవారం"," శనివారం"]
    day=arrDay[day]
    if(hh<=9){
        hh="0"+hh
    }
    if(mm<=9){
        mm="0"+mm
    }
    if(ss<=9){
        ss="0"+ss
    }
    if(dd<=9){
        dd="0"+dd
    }
    document.getElementById("time").innerHTML=`${hh}:${mm} ${am_pm}`
    document.getElementById("date").innerHTML=`${dd}-${mo}-${yy}`
    document.getElementById("day").innerHTML=day;
    document.getElementById("ss").innerHTML=ss;
}
setInterval(dateAndTime,1000);