
let string="new.Var a => 10\nnew.Arr a => 23,2\n<테스트 용 코드>\nloop.a a==10 +1 => (\n  log => '고양이'\n? a <==> b => (\n)\n)";
let returnCode = new Array();
//const request = require('request');
let code=string.split("\n");
const botCode = `var lastID="";
var text;
var id;
var botName;
var like;
var user;
var created;
console.log("-----------made by ex-----------");
console.log("---지금부터 봇 가동이 시작됩니다--");
alert("BOT - 실행됨");
function comment(a){
  $.ajax({
    url:"/api/comment",
    dataType:"json",
    type:"POST",
    data:{
      content: "["+botName+"] "+a,
      target: id,
      targetSubject: "discuss",
      targetType: "individual"
    }
  });
}
function write(a,b,c){
  $.ajax({
    url:"./api/discuss/",
    type:"POST",
    data:{
      content:a,
      title:b,
      groupNotice:false,
      images:[],
      category:c
    }
  });
}
setInterval(() => {
  $.get('https://playentry.org/api/discuss/find?category=free', d => {
    text=d.data[0].title;
    id=d.data[0]._id;
    like=d.data[0].likesLength;
    user=d.data[0].owner;
    user=user.username;
    created=d.data[0].created;
    $.get('https://playentry.org/api/discuss/'+id, d => {
      content=d.content;
    })
  })
  if(id != lastID){
    lastID=id;
    run();
  }
},220);
function run(){
`
let number=new Array('1','2','3','4','5','6','7','8','9','0');
function startWith(str,str2){
  for(var i=0;i<str2.length;i++){
    if(str.charAt(i)!=str2.charAt(i)){
      return 0;
    }
  }
  return 1;
}
let nowCode;
let nowLetters;
let nowLetter;
let nowReturn
let spaceNum="";
setInterval(() => {
returnCode.length = 0;
string=document.getElementById("form");
code=string.value.split("\n");
for(var i=0;i<code.length;i++){
  nowCode=code[i];
  nowLetters="";
  var o=0;
  for(o=0;nowCode[o]==" ";o++){
  }
  for(var k=o;k<nowCode.length;k++){
    nowLetters=nowLetters+nowCode.charAt(k);
  }
  nowLetter=nowLetters.split(" ");
  //시작-------------------------------------------------------------------------------------------------------------
  if(startWith(nowLetters,"변수")){
    nowReturn="let "+nowLetter[1]+" = "+nowLetter[2]+";";
  }
  if(startWith(nowLetters,"만약")){
    nowReturn="if("+nowLetters.substr(3,nowLetters.length-4)+"){";
  }
  else{
    nowReturn=nowLetters;
  }
  //끝---------------------------------------------------------------------------------------------------------------
  spaceNum="";
  for(var k=0;k<o;k++){
    spaceNum=spaceNum+" ";
  }
  returnCode.push(spaceNum+nowReturn);
}
var sdf="";
var numThis="";
for(var i=0;i<returnCode.length;i++){
  sdf=sdf+" "+returnCode[i]+"\n";
  numThis=numThis+(i+1)+"\n";
}
var str = document.getElementById("form1");
str.innerHTML = botCode+sdf+"}";
var str = document.getElementById("form2");
str.innerHTML = numThis;
},500);
