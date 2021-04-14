var hashtag2hand= ['#2handshop',
'#2handshopping',
'#2handsale',
'#2handclothing',
'#2handhanoi',
'#2handvintage',
'#2handvietnam',
'#2handgiárẻ',
'#2handgiare',
'#2handcloth',
'#ao2hand',
'#2handstyle',
'#do2hand',
];
var hashtagvintage =['#vintageoutfit',
'#vintagestreetwear',
'#vintageforsale',
'#vintageshirt',
'#vintagetee',
'#vintageshopping',
'#vintagesale',
'#vintagevietnam',
];
var hashtagretro =['#retroclothing',
'#retrofashion',
'#retrostyles',
'#retrovietnam',
];
var hashtagclassic =[
'#classicshirts',
'#classicshirt',
'#classicshirtcollection',];
var hastagold=[
'#oldclothes',
'#oldcloth',
'#oldclothing',
'#oldshirt',
'#oldshirts',
'#oldshirtstore',

];

document.getElementsByClassName("big-button")[0].addEventListener("click", function() {
var arrayRandomHashTag=[];
var randomnumber = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
for(var i=0;i<randomnumber;i++){
    var item =  hashtag2hand[Math.floor(Math.random() * hashtag2hand.length)];
    arrayRandomHashTag.push(item);
}
for(var i=0;i<randomnumber;i++){
    var item =  hashtagvintage[Math.floor(Math.random() * hashtagvintage.length)];
    var item2= hashtagretro[Math.floor(Math.random() * hashtagretro.length)];
    var item3= hashtagclassic[Math.floor(Math.random() * hashtagclassic.length)];
    var item4= hastagold[Math.floor(Math.random() * hastagold.length)];
    arrayRandomHashTag.push(item);
    arrayRandomHashTag.push(item2);
    arrayRandomHashTag.push(item3);
    arrayRandomHashTag.push(item4);
}
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// Used like so
shuffle(arrayRandomHashTag);
  document.getElementsByTagName("div")[0].setAttribute("class", "main"); 
  document.getElementsByTagName("div")[0].innerHTML=`
  <p>
.
Follow @nt99.s để có thêm những chiếc áo phông mới trong bộ sưu tập của bạn.
.
${arrayRandomHashTag.join('')}</p>
  `;
  console.log(123);
});
