let string="new.Var a => 10\nnew.Arr a => 23,2\n<테스트 용 코드>\nloop.a a==10 +1 => (\n)";
let returnCode = new Array();
let code=string.split("\n");
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
  if(startWith(nowLetters,"new")){
    if(nowLetters.substr(3,4)==".Var"){
      nowReturn="let "+nowLetter[1]+" = "+nowLetter[3]+";";
    }
    else if(nowLetters.substr(3,4)==".Arr"){
      nowReturn="let "+nowLetter[1]+" = new Array("+nowLetter[3]+")"+";";
    }
    else if(nowLetters.substr(3,4)==".Fun"){
      nowReturn="function "+nowLetter[1]+"{";
    }
    else if(nowLetters.substr(3,4)==".Con"){
      nowReturn="Const "+nowLetter[1]+" = "+nowLetter[3]+";";
    }
  }
  else if(startWith(nowLetters,"loop")){
    nowReturn="for(var "+nowLetter[0].substr(5,nowLetter[i].length)+";"+nowLetter[1]+";"+nowLetter[0].substr(5,nowLetter[i].length)+"="+nowLetter[0].substr(5,nowLetter[i].length)+nowLetter[2]+"){";
  }
  else if(startWith(nowLetters,")")){
    nowReturn="}";
  }
  else if(startWith(nowLetters,"<")){
    nowReturn="//"+nowLetters.substr(1,nowLetters.length-2);
  }
  //끝---------------------------------------------------------------------------------------------------------------
  spaceNum="";
  for(var k=0;k<o;k++){
    spaceNum=spaceNum+" ";
  }
  returnCode.push(spaceNum+nowReturn);
}
for(var i=0;i<returnCode.length;i++){
  console.log(returnCode[i]);
}
