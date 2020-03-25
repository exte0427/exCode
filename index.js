let sdf="";
let sdfg="";
window.onbeforeunload = function() {};
document.querySelector(".copy").addEventListener("click", function(){
  var tempElem = document.createElement('textarea');
  tempElem.value = sdfg+botCode+sdf+"}";
  document.body.appendChild(tempElem);

  tempElem.select();
  document.execCommand("copy");
  document.body.removeChild(tempElem);
	alert("성공적으로 복사됨")
});
function bt(){
  var tempElem = document.createElement('textarea');
  tempElem.value = sdfg+botTest+sdf+"}alert('테스트 가 끝남');";
  document.body.appendChild(tempElem);

  tempElem.select();
  document.execCommand("copy");
  document.body.removeChild(tempElem);
	alert("자동 테스트 기능은 준비중입니다 > 테스트 코드를 복사해드렸으니 f12 > console 에 붙혀넣어주세요")
};
let ez=0;
let string="new.Var a => 10\nnew.Arr a => 23,2\n<테스트 용 코드>\nloop.a a==10 +1 => (\n  log => '고양이'\n? a <==> b => (\n)\n)";
let returnCode = new Array();
//const request = require('request');
let code=string.split("\n");
const botTest =`var lastID="";
var text;
var id;
var botName;
var like;
var user;
var created;
console.log("-----------made by ex-----------");
console.log("---지금부터 봇 테스트가 시작됩니다--");
alert("BOT - 테스트 실행");
function comment(a){
  alert(a+" 라는 댓글이 써짐")
}
function write(a,b,c){
  alert(b+" 라는 제목에 "+a+" 라는 글이 써짐")
}
function same(stringA,stringB){
  if(stringB.length>stringA.length){
    var temp = stringB;
    stringB=stringA;
    stringA=temp;
  }
  var ao=0;
  var af=0;
  ao=stringB.length;
  af=stringA.length;
  var count=0;
  for(var i=0;i<ao;i++){
    for(var j=0;j<af;j++){
      if(stringB.charAt(i)==stringA.charAt(j)){
        count++;
        break;
      }
    }
  }
  return (count/af)*100;
}
text= prompt("[테스트] 글을 써주세요");
id="324udfs93jf";
like="0";
user="exmuh";
created="2020..";
run();
function run(){`
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
function same(stringA,stringB){
  if(stringB.length>stringA.length){
    var temp = stringB;
    stringB=stringA;
    stringA=temp;
  }
  var ao=0;
  var af=0;
  ao=stringB.length;
  af=stringA.length;
  var count=0;
  for(var i=0;i<ao;i++){
    for(var j=0;j<af;j++){
      if(stringB.charAt(i)==stringA.charAt(j)){
        count++;
        break;
      }
    }
  }
  return (count/af)*100;
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
  if(i==0){
    nowReturn="botName = '"+nowLetters+"'";
  }
  else if(startWith(nowLetters,"변수")){
    nowReturn="var "+nowLetter[1]+" = "+nowLetter[2]+";";
  }
  else if(startWith(nowLetters,"만약")){
    nowReturn="if("+nowLetters.substr(3,nowLetters.length-4)+"){";
  }
  else if(startWith(nowLetters,"아니면 만약")){
    nowReturn="else if("+nowLetters.substr(6,nowLetters.length-4)+"){";
  }
  else if(startWith(nowLetters,"아니면")){
    nowReturn="else{";
  }
  else if(startWith(nowLetters,"댓글")){
    nowReturn="comment(`"+nowLetters.substr(3,nowLetters.length-3)+"`);";
  }
	else if(startWith(nowLetters,"리스트")){
    nowReturn="var "+nowLetter[1]+"= new Array();";
  }
	else if(startWith(nowLetters,"집어넣기")){
    nowReturn=nowLetter[1]+".push(`"+nowLetter[2]+"`);";
  }
	else if(startWith(nowLetters,"글")){
    nowReturn="write("+nowLetter[1]+","+nowLetter[2]+",free);";
  }
	else if(startWith(nowLetters,"반복 ")){
    nowReturn="for(var "+nowLetter[2]+";"+nowLetter[2]+"=="+nowLetter[1]+";"+nowLetter[2]+"++){";
  }
	else if(startWith(nowLetters,"함수 ")){
    nowReturn="function "+nowLetter[1]+"("+nowLetter[2]+"){";
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
sdf="";
var numThis="";
for(var i=0;i<returnCode.length;i++){
  sdf=sdf+" "+returnCode[i]+"\n";
  numThis=numThis+(i+1)+"\n";
}

//====================================================================
returnCode.length = 0;
string=document.getElementById("form3");
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
    nowReturn="var "+nowLetter[1]+" = "+nowLetter[2]+";";
  }
  else if(startWith(nowLetters,"만약")){
    nowReturn="if("+nowLetters.substr(3,nowLetters.length-4)+"){";
  }
  else if(startWith(nowLetters,"아니면 만약")){
    nowReturn="else if("+nowLetters.substr(6,nowLetters.length-4)+"){";
  }
  else if(startWith(nowLetters,"아니면")){
    nowReturn="else{";
  }
  else if(startWith(nowLetters,"댓글")){
    nowReturn="comment(`"+nowLetters.substr(3,nowLetters.length-3)+"`);";
  }
	else if(startWith(nowLetters,"리스트")){
    nowReturn="var "+nowLetter[1]+"= new Array();";
  }
	else if(startWith(nowLetters,"집어넣기")){
    nowReturn=nowLetter[1]+".push(`"+nowLetter[2]+"`);";
  }
	else if(startWith(nowLetters,"글")){
    nowReturn="write("+nowLetter[1]+","+nowLetter[2]+",free);";
  }
	else if(startWith(nowLetters,"반복 ")){
    nowReturn="for(var "+nowLetter[2]+";"+nowLetter[2]+"=="+nowLetter[1]+";"+nowLetter[2]+"++){";
  }
	else if(startWith(nowLetters,"함수 ")){
    nowReturn="function "+nowLetter[1]+"("+nowLetter[2]+"){";
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
sdfg="";
for(var i=0;i<returnCode.length;i++){
  sdfg=sdfg+returnCode[i]+"\n";
}
//============================================================================
if(ez==0){
	var str = document.getElementById("form1");
	str.innerHTML = sdfg+botCode+sdf+"}";
}
var str = document.getElementById("form2");
str.innerHTML = numThis;
},500);
