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
var randomnumber1 = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    var randomnumber2 = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    var randomnumber3 = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    var randomnumber4 = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    var randomnumber5 = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    console.log(randomnumber1,randomnumber2,randomnumber3,randomnumber4,randomnumber5);
for(var i=0;i<randomnumber1;i++){
    var item =  hashtag2hand[Math.floor(Math.random() * hashtag2hand.length)];
    arrayRandomHashTag.push(item);
}
    console.log(arrayRandomHashTag);
for(var i=0;i<randomnumber2;i++){
     var item =  hashtagvintage[Math.floor(Math.random() * hashtagvintage.length)];
    arrayRandomHashTag.push(item);
}
    console.log(arrayRandomHashTag);
for(var i=0;i<randomnumber3;i++){
    var item= hashtagretro[Math.floor(Math.random() * hashtagretro.length)];
    arrayRandomHashTag.push(item);
}
    console.log(arrayRandomHashTag);
for(var i=0;i<randomnumber4;i++){
    var item= hashtagclassic[Math.floor(Math.random() * hashtagclassic.length)];
    arrayRandomHashTag.push(item);
}
    console.log(arrayRandomHashTag);
for(var i=0;i<randomnumber5;i++){
    var item= hastagold[Math.floor(Math.random() * hastagold.length)];
    arrayRandomHashTag.push(item);
}
    console.log(arrayRandomHashTag);
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
    <p class ="js-text">
    .
    <br>
    Chất lượng :/10
    <br>
    .
    <br>
    #nt99sConHang
    <br>
    .
    <br>
    Follow @nt99.s để có thêm những chiếc áo phông mới trong bộ sưu tập của bạn.
    <br>
    .
    <br>
    ${arrayRandomHashTag.join(' ')}
    </p>
    <button class="big-button js-textareacopybtn">COPY!</button>   
`;
var copyTextareaBtn = document.querySelector('.js-textareacopybtn');

function iosCopyToClipboard(el) {
    var oldContentEditable = el.contentEditable,
        oldReadOnly = el.readOnly,
        range = document.createRange();

    el.contentEditable = true;
    el.readOnly = false;
    range.selectNodeContents(el);

    var s = window.getSelection();
    s.removeAllRanges();
    s.addRange(range);

    el.setSelectionRange(0, 999999); // A big number, to cover anything that could be inside the element.

    el.contentEditable = oldContentEditable;
    el.readOnly = oldReadOnly;

    document.execCommand('copy');
}

copyTextareaBtn.addEventListener('click', function() {
  var copyTextarea = document.querySelector('.js-text').innerText;
  var elem = document.createElement("textarea");
    document.body.appendChild(elem);
    elem.value = copyTextarea;
    elem.select();
    iosCopyToClipboard(elem);
    document.execCommand("copy");
    document.body.removeChild(elem);
});
});
