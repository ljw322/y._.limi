

console.log("HIHI");
//
// $('.option1').click(function(){
//   console.log('click');
// });

var optionArr = [];

$(document).ready(
  function() {

    //roulette
    var btns = $(".quest-option");
    $.each(btns, function(index, value) {
      $(this).click(
        function() {
          var btn = $(this);
          $(this).parent().parent().parent().parent().parent().fadeOut(300, function() {

            var qNo = btn.attr('id');
            var val = btn.attr('value');
            // addOption(qNo, val);
            optionArr.push(val);
            console.log("optionArr : "+ optionArr);
            if (qNo == 3) {
              resultTest();
            }
            swiper.slideNext();
          })

        })
    });
  });

var option = {
  speed: 20,
  duration: 1,
  stopImageNumber: 0
}

var countrylist = ['프랑스', '멕시코', '크로아티아', '호주', '영국',
              '이집트', '네덜란드', '대만', '인도', '일본'];

function resultTest(){
  console.log(optionArr);

  if(optionArr[0]=="1"){
    $("#result_country").text(countrylist[5]);
  }else{
    $("#result_country").text(countrylist[2]);
  }




  swiper.slideNext();
}

$("#clipboard-copy-btn").click(function() {
  copyClipboard();
});

function copyClipboard() {
  var copyText = document.getElementById("myInput");

  copyText.select();
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/

  document.execCommand("copy");
  alert("공유링크 복사완료 !!");
}
