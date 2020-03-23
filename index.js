let string="new Fun c :\n  new b 0\n  loop a=0 a<=10 a++:\n    b=b+1\n  :\n:";
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
  if(startWith(nowLetters,"new Arr")){
    var letter="";
    for(var j=3;j<nowLetter.length;j++){
      if(j!=nowLetter.length-1){
        letter=letter+nowLetter[j]+" ";
      }
      else{
        letter=letter+nowLetter[j];
      }
    }
    nowReturn="let "+nowLetter[2]+" = new Array("+letter+");"
  }
  else if(startWith(nowLetters,"new Fun")){
    var letter="";
    for(var j=3;j<nowLetter.length;j++){
      if(j!=nowLetter.length-1){
        letter=letter+nowLetter[j]+" ";
      }
      else{
        letter=letter+nowLetter[j];
      }
    }
    var leletter="";
    for(var j=0;j<letter.length-1;j++){
      leletter=leletter+letter.charAt(j);
    }
    nowReturn="function "+nowLetter[2]+"("+leletter+"){";
  }
  else if(startWith(nowLetters,"new")){
    var letter="";
    var isNum=1;
    for(var j=2;j<nowLetter.length;j++){
      if(isNaN(nowLetter[j]) == true){
        isNum=-1;
        console.log(nowLetter[j]);
      }
      if(j!=nowLetter.length-1){
        letter=letter+nowLetter[j]+" ";
      }
      else{
        letter=letter+nowLetter[j];
      }
    }
    if(isNum==1){
      nowReturn="let "+nowLetter[1]+" = "+letter+";";
    }
    else{
      nowReturn="let "+nowLetter[1]+" = '"+letter+"';";
    }
  }
  else if(nowLetters == ":"){

    nowReturn="}";
  }
  else if(startWith(nowLetters,"loop")){
    var leletter="";
    for(var j=0;j<nowLetter[3].length-1;j++){
      leletter=leletter+nowLetter[3].charAt(j);
    }
    nowReturn="for(var "+nowLetter[1]+";"+nowLetter[2]+";"+leletter+"){";
  }
  else{
    nowReturn=nowLetters+";";
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

