
auto;

toast('1');

if (device.isScreenOn)
{   
var daka = confirm("需要打卡吗？");
if(daka)
    {
    toast("接下来进入打卡");   
    }
else
    {
    toast("朕暂时不方便打卡");
    sleep(1000);
    toast("5min后再提醒你打卡")
    sleep(240000);
    toast("1min后再叫你打卡");
    sleep(60000); 

var scriptsPath = "/sdcard/脚本/";
if(!files.exists(scriptsPath)){
    scriptsPath = "/sdcard/Scripts/";
}
engines.execScriptFile("daka2.js");
    exit();
    }
}
app.launchApp("完美校园"); //添加判定是否在该应用中
sleep(2000);
toast('2');
//id("menuTitle").className("android.widget.TextView").text("健康打卡").waitFor().click();
//id("menuTitle").className("android.widget.TextView").text("健康打卡").findOne().click();
///id("menuTitle").className("android.widget.TextView").text("健康打卡").findOne().parent().waitFor()
id("menuTitle").className("android.widget.TextView").text("健康打卡").findOne().parent().click();


className("android.widget.TextView").text("专业/部门").waitFor()
//className("android.widget.TextView").text("专业/部门").findOne().parent().parent().waitFor();
toast('3');
swipe(500,2036,500,138,300);
sleep(500);
swipe(500,2036,500,248,300);
sleep(500);
swipe(500,2036,500,58,300);
sleep(500);
swipe(500,2036,500,58,300);
sleep(500);
swipe(500,2036,500,58,300);
sleep(500);
swipe(500,2036,500,58,300);
sleep(500);
swipe(500,2036,500,58,300);
sleep(500);
click(500,2200);
toast('end');
exit();


/*
auto;

if (device.isScreenOn)
{   
var daka = confirm("需要打卡吗？");
if(daka)
    {
    toast("接下来进入打卡");   
    }
else
    {
    toast("朕暂时不方便打卡");
    sleep(1000);
    toast("5min后再提醒你打卡")
    sleep(240000);
    toast("1min后再叫你打卡");
    sleep(60000); 

var scriptsPath = "/sdcard/脚本/";
if(!files.exists(scriptsPath)){
    scriptsPath = "/sdcard/Scripts/";
}
engines.execScriptFile("打卡.js");
    exit();
    }
}

home();
sleep(1000);
home();
sleep(1000);
click(355,1191);
sleep(9000);


swipe(500,2036,500,448,500);
sleep(500);
swipe(500,2036,500,448,500);
sleep(500);
swipe(500,2036,500,448,500);
sleep(500);
click(500,2200);
exit();





*/




