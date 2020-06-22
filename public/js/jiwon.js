

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
            if (qNo == 10) { //1
              resultTest();
            }
            // for(var i = 0; i<10; i++){
            //     swiper.slideNext();
            // }
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

function whichCountry(){
  var index = 0;

  if(optionArr[5]=="1" && optionArr[6]=="2" && optionArr[7]=="2" && optionArr[8]=="2"){
    index = 0;
    $(".result_country_img").attr("src", "static/public/img/country/멕시코1.jpg");
    $("#result_text01").text("주체 하지 못할 흥을 지니고 있는 당신! 푸르른 바다에서의 수영을 할 수 있는 체투말 혹은 아름다운 건축물과 도자기를 볼 수 있는 마법과도 같은 마을이 있는 푸에블라에서의 약국실습은 어떤가요? 여러분을 위해 특별히 숙박은 무료로 제공됩니다.");
    $("#result_country").text("멕시코 (Mexico, FEFARMEX)");
    var setText02 = "도시 :  Chetumal, Puebla<br>실습 기관: 지역약국, 병원약국, 대학교 연구 실험실<br>숙박: 무료 (Chetumal 방문하는 학생에게 300 USD 지원)<br>실습 외 문화행사: National Symposium of TOFARMEX (4월, 11월 무료)<br><br>1) Puebla : Huejotzingo, Cholula, Tlaxcala, Orizaba, and Pachuca 등 주말 근교 여행<br>2) Chetumal : Cancun, Merida, Bacalar, Kohunlich, Campeche city 등 주말 근교 여행";
    $("#result_text02").html(setText02);
  }
  else if(optionArr[2]=="2" && optionArr[3]=="1" && optionArr[6]=="1" && optionArr[7]=="2"){
    index = 1;
    $(".result_country_img").attr("src", "static/public/img/country/크로아티아1.jpg");
    $("#result_country").text("크로아티아 (Croatia, CPSA)");
    $("#result_text01").text("해가 지는 고즈넉한 지중해를 바라보며 낭만적인 저녁 식사를 하는 모습이 어울리는 당신, 유익한 실습 경험과 다른 나라의 약학 전공생들과 어울리는 것을 동시에 하고 싶은 워라밸을 추구하는 당신, 그런 당신과 어울리는 나라는 “크로아티아 (Croatia)”입니다.");
    var setText02 = "도시: 자그레브(Zagreb), 스플릿 (Split)<br>언어: 영어<br>파견 기간: 2주 ~ 3주 (Summer / Winter)<br>실습 기관: 지역 약국, 대학교 연구 실험실<br>숙박: 기숙사 (무료)<br>실습 외 문화 행사: Festival을 포함한 다양한 Social Event";
    $("#result_text02").html(setText02);
  }
  else if(optionArr[4]=="1" && optionArr[5]=="1" && optionArr[7]=="2" && optionArr[8]=="2"){
    index = 2;
    $(".result_country_img").attr("src", "static/public/img/country/이집트1.jpg");
    $("#result_country").text("이집트 (Egypt, EPSF)");
    $("#result_text01").text("낯선 것에 도전하는 것을 즐기는 용감한 당신! 나일강에서 일몰을 바라보고 피라미드의 웅장함을 느낄 수 있는 이집트는 어떤가요? 4대 문명의 발상지 이집트에서 따뜻한 사람들과 새로운 문화를 접하며 잊지 못할 실습을 경험해보세요!");
    var setText02 = "도시: 자그레브(Zagreb), 스플릿 (Split)<br>파견 기간: 2주 ~ 3주 (Summer / Winter)<br>언어: 영어<br>실습 기관: 지역 약국, 대학교 연구 실험실<br>숙박: 기숙사 (무료)<br>실습 외 문화 행사: Festival을 포함한 다양한 Social Event";
    $("#result_text02").html(setText02);
  }
  else if(optionArr[5]=="1" && optionArr[7]=="2" && optionArr[9]=="1"){
    index = 3;
    $(".result_country_img").attr("src", "static/public/img/country/인도1.jpg");
    $("#result_country").text("인도 India (MAPS)");
    $("#result_text01").text("호기심 대마왕 당신, 무엇을 상상하든 그 이상! Incredible India! ‘한 번도 인도에 안 가본 사람은 있어도, 한 번만 인도에 가 본 사람은 없다’ 는 말이 있을 만큼 신비하고 아름답고 기묘한 인도는 어떤가요? 다양한 국가, 인도 내 다양한 지역에서 온 학생들과 함께 인도의 다양한 문화, 음악, 예술, 음식을 체험하며 추억을 만들어 봅시다!");
    var setText02 = "실습 기관: 병원 약국, 지역 약국<br>파견 기간: 6월, 7월, 12월, 1월 (3-8 주)<br>언어: 영어<br>숙박: 대학교 기숙사, 게스트하우스(약$15/night)<br>실습 외 문화행사: 학습, 문화, 스포츠 등 MAPS 교환학생관리국에서 기획한 다양한 행사";
    $("#result_text02").html(setText02);
  }
  else if(optionArr[5]=="2" && optionArr[6]=="2" && optionArr[7]=="2"){
    index = 4;
    $(".result_country_img").attr("src", "static/public/img/country/대만1.jpg");
    $("#result_country").text("대만 (Taiwan, PSA)");
    $("#result_text01").text("친구들과의 맛집 탐방과 시끌벅적한 여행을 즐기는 당신, 대만에서의 잊지 못할 여름은 어떤가요? 우리 입맛에도 잘 맞는 먹거리가 가득한 야시장과 대만의 문화를 SEP 친구들과 즐기며 잊지 못할 추억을 만들어요!");
    var setText02 = "실습 기관: 병원 약국, 대학교 실험 연구실, 지역 약국<br>기간: 3~6주(보통 4주)<br>언어: 영어<br>숙박: 기숙사<br>실습 외 문화 행사: 평일에는 대만 문화를 경험할 수 있는 여러 가지 활동이, 주말에는 대만 PSA-Taiwan 학생들과의 근교 여행이 준비되어있습니다.";
    $("#result_text02").html(setText02);
  }
  else if(optionArr[0]=="2" && optionArr[1]=="1" && optionArr[4]=="1" && optionArr[5]=="2"){
    index = 5;
    $(".result_country_img").attr("src", "static/public/img/country/일본1.jpg");
    $("#result_text01").text("다양한 활동에 대한 설렘과 기대감을 가지는 당신, 일본의 약업 기관을 방문하여 여러 약사님들과 대화를 하고 한국과 비슷하지만 다른 다양한 먹거리를 즐길 수 있는 일본은 어떠신가요? 훗카이도, 간토, 간사이, 큐슈 등 일본 내 지역에서 견학과 체험을 하며 경험 부자로 변신해봅시다!");
    $("#result_country").text("일본");
    var setText02 = "실습 기관: 병원, 지역 약국, 연구기관, 제약산업기관으로의 견학<br>기간: 2월, 8월(2주)<br>언어: 영어<br>숙박: 게스트 하우스 (3500JPY/night)<br>실습 외 문화 행사: APS-JAPAN 교환학생관리국 부원들과 함께 지역 축제 방문, 다양한 Social night 프로그램";
    $("#result_text02").html(setText02);
  }
  else if(optionArr[0]=="2" && optionArr[1]=="2" && optionArr[6]=="1" && optionArr[7]=="1"){
    index = 6;
    $(".result_country_img").attr("src", "static/public/img/country/영국1.jpg");
    $("#result_country").text("영국 (UK, BPSA)");
    $("#result_text01").text("음악을 사랑하고 박물관과 미술관에서 자유롭게 문화생활을 즐기는 당신! 해리포터와 셜록의 나라 영국에서의 SEP는 어떤가요? Day trip, night out 프로그램으로 새로운 친구들과 교류하는 즐거움을 누려보세요!");
    var setText02 = "실습 기관: 지역약국, 대학교 연구 실험실, 병원 약국<br>파견 기간: 2~4주, 6~9월 중 가능<br>언어: 영어<br>지역: 영국의 주요 도시 (런던 포함)<br>숙박: 학교 숙박시설, 호텔, 에어비엔비, 홈스테이<br>실습 외 문화행사: 지역 관광명소를 방문하는 day trip, 도시의 밤을 즐길 수 있는 night out 프로그램이 준비되어 있습니다!";
    $("#result_text02").html(setText02);
  }
  else if(optionArr[0]=="1" && optionArr[1]=="1" && optionArr[2]=="2" && optionArr[4]=="1"){
    index = 7;
    $(".result_country_img").attr("src", "static/public/img/country/호주1.jpg");
    $("#result_country").text("호주 (Australia, NAPSA)");
    $("#result_text01").text("새로운 관계와 따스한 정을 좋아하고 환자들과 더 가깝고 친밀한 약사가 되고 싶은 당신, 광대한 자연과 현대적인 도시의 모습 두 마리 토끼를 다 잡고 싶은 당신, 그런 당신과 어울리는 나라는 호주 입니다.");
    var setText02 = "도시: 호주 전역<br>파견 기간: 2주 ~ 4주 (Summer / Winter)<br>언어: 영어<br>실습 기관: 지역 약국 (약대 1년 이상 수료 후 지원 가능)<br>숙박: 현지 약대생 Homestay (96유로/주)<br>실습 외 문화행사: 각 주마다 Pharmacy Student Association이 있어 지역마다의 개성이 담긴Local Event 준비되어있습니다!";
    $("#result_text02").html(setText02);
  }
  else if(optionArr[0]=="1" && optionArr[4]=="2" && optionArr[6]=="1"){
    index = 8;
    $(".result_country_img").attr("src", "static/public/img/country/네덜란드1.jpg");
    $("#result_country").text("네덜란드 (Netherlands, K.N.P.S.V.)");
    $("#result_text01").text("일상 속 힐링과 휴식을 즐기는 당신, 네덜란드에서 행복지수 가득한 여름은 어떤가요? 세계 1등 워라밸과 쾌적한 여름 날씨를 자랑하는 네덜란드에서 친절한 호스트와 SEP 친구들이 기다려요~");
    var setText02 = "실습 기관: 지역 약국, 병원약국<br>기간: 2주~2달(병원: 최소 3달), 5월~8월<br>언어: 영어<br>파견 도시: 네덜란드 전역<br>숙박: 약사 또는 네덜란드 약대생 호스트의 홈스테이 제공 가능 (무료)<br>실습 외 문화 행사: SEP day, SEP weekend 등을 통해 함께 여행을 떠나기도 하고, 네덜란드 현지 약학 전공자들과의 만남이 준비되어있습니다<br><br>*졸업한 학생 파견 불가, 교육 과정의 절반 이상을 수료한 학생 선호";
    $("#result_text02").html(setText02);

  }
  else {
    index = 9;
    $(".result_country_img").attr("src", "static/public/img/country/프랑스1.jpg");
    $("#result_country").text("프랑스 (France, ANEFP)");
    $("#result_text01").text("바게트를 한 손에 들고 샹젤리제 거리를 여유롭게 걷고 싶은 당신! 파리를 포함한 23개의 도시에서 실습이 가능한 프랑스에서의 지역 약국 실습 혹은 대학교 실험실 리서치 프로그램은 어떤가요? 여유를 즐기는 당신과 걸맞은 프랑스에서의 Social event인 SEP week-ends도 준비 되어있습니다! ");
    var setText02 = "실습 기관: 지역약국, 대학교 연구 실험실, 병원약국<br>실습 도시: 프랑스 전역 (23개의 도시)<br>언어: 지역약국(프랑스어 또는 영어) 대학교 실험실(영어), 병원(프랑스어 또는 영어)";
    $("result_text02").text(setText02);
  }

  return index;
}

    // var setTag = "<input type='text'><br/>텍스트태그 동적추가하기";



var countrylist = ['멕시코', '크로아티아', '이집트', '인도', '대만',
              '일본', '영국', '호주', '네덜란드', '프랑스'];

//result page
function resultTest(){

  console.log(optionArr);
  var index = whichCountry();

  // $("#result_country").text(countrylist[index]);



  swiper.speed = 20000;
  swiper.slideNext();
}

swiper.disableTouchControl();

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
