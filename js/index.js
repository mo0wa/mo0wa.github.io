$(document).ready(function() {
  /*************** 창크기감지******************/
  var windowWidth = window.innerWidth;
  if (windowWidth > 1650) {
    if ($("body").find(".WidePC").length) {
      $("#wrap").removeClass("Tablet");
      $("#wrap").removeClass("Mobile");
      $("#wrap").removeClass("Wide");
    } else {
      $("#wrap").removeClass("Tablet");
      $("#wrap").removeClass("Mobile");
      $("#wrap").removeClass("Wide");
      $("#wrap").addClass("WidePC");
    }
  }
  if (windowWidth <= 1649 && windowWidth > 1023) {
    if ($("body").find(".Wide").length) {
      $("#wrap").removeClass("Tablet");
      $("#wrap").removeClass("Mobile");
      $("#wrap").removeClass("WidePC");
    } else {
      $("#wrap").removeClass("Tablet");
      $("#wrap").removeClass("Mobile");
      $("#wrap").removeClass("WidePC");
      $("#wrap").addClass("Wide");   
    }
  }
  if (windowWidth <= 1022 && windowWidth > 768) {
    if ($("body").find(".Tablet").length) {
      $("#wrap").removeClass("Wide");
      $("#wrap").removeClass("Mobile");
      $("#wrap").removeClass("WidePC");
    } else {
      $("#wrap").removeClass("Wide");
      $("#wrap").removeClass("Mobile");
      $("#wrap").removeClass("WidePC");
      $("#wrap").addClass("Tablet");
    }
  }
  if (windowWidth <= 768) {
    if ($("body").find(".Mobile").length) {
      $("#wrap").removeClass("Wide");
      $("#wrap").removeClass("WidePC");
      $("#wrap").removeClass("Tablet");
    } else {
      $("#wrap").removeClass("Wide");
      $("#wrap").removeClass("WidePC");
      $("#wrap").removeClass("Tablet");
      $("#wrap").addClass("Mobile");
    }
  }
  /*************** 창크기감지******************/
  /*************** 창크기변화감지******************/
  var navToggle = 1;
  var lastScroll = 0;
  ResizeSituation = 0;
  $(window).resize(function () {
    var windowWidth = window.innerWidth;

    if (windowWidth <= 1022 && windowWidth > 768) {
      if (ResizeSituation != 1) {
        if ($("body").find(".Tablet").length) {
          $("#wrap").removeClass("Wide");
          $("#wrap").removeClass("WidePC");
          $("#wrap").removeClass("Mobile");
        } else {
          $("#wrap").removeClass("Wide");
          $("#wrap").removeClass("WidePC");
          $("#wrap").removeClass("Mobile");
          $("#wrap").addClass("Tablet");
        }
        ResizeSituation = 1;
        KindOfEquipment = 2;
      } else {
        return false;
      }
    }
    if (windowWidth <= 768) {
      if (ResizeSituation != 2) {
        if ($("body").find(".Mobile").length) {
          $("#wrap").removeClass("Wide");
          $("#wrap").removeClass("WidePC");
          $("#wrap").removeClass("Tablet");
        } else {
          $("#wrap").removeClass("Wide");
          $("#wrap").removeClass("WidePC");
          $("#wrap").removeClass("Tablet");
          $("#wrap").addClass("Mobile");
        }
        ResizeSituation = 2;
        KindOfEquipment = 1;
      } else {
        return false;
      }
    }
    if (windowWidth <= 1649 && windowWidth > 1023) {
      if (ResizeSituation != 3) {
        if ($("body").find(".Wide").length) {
          $("#wrap").removeClass("Tablet");
          $("#wrap").removeClass("Mobile");
          $("#wrap").removeClass("WidePC");
        } else {
          $("#wrap").removeClass("Tablet");
          $("#wrap").removeClass("Mobile");
          $("#wrap").removeClass("WidePC");
          $("#wrap").addClass("Wide");
        }
        ResizeSituation = 3;
        KindOfEquipment = 3;
      } else {
        return false;
      }
    }
    if (windowWidth > 1650) {
      if (ResizeSituation != 4) {   
        if ($("body").find(".WidePC").length) {
          $("#wrap").removeClass("Tablet");
          $("#wrap").removeClass("Mobile");
          $("#wrap").removeClass("Wide");
        } else {
          $("#wrap").removeClass("Tablet");
          $("#wrap").removeClass("Mobile");
          $("#wrap").removeClass("Wide");
          $("#wrap").addClass("WidePC");
        }
        ResizeSituation = 4;
        KindOfEquipment = 4;
      } else {
        return false;
      }
    }
  });
  /*************** 창크기변화감지******************/
/* nav toggle ==> mobile~tablet 에서 작동 */
$('.m_btn').on('click', function() {
  if (navToggle === 1) {
    $(this).addClass('on');
    $('.nav_inner').removeClass().addClass('nav_inner').addClass('on');
    navToggle = 2;
  } else {
    navToggle = 1;
    $(this).removeClass('on');
    $('.nav_inner').removeClass().addClass('nav_inner')
  }
});
/* 여기서부터 상시작동 함수 */

/* header scroll event */
$(window).on('scroll', function(){
  var scrollTop = $(this).scrollTop();
  if(scrollTop > lastScroll) {
      //down
      $('header').removeClass('on').removeClass('trans');
  } else {
      // up
      $('header').addClass('on');
  }
  lastScroll = scrollTop;
});
/* scroll Top detect */
$(window).on({'scroll':function(){
  var scrollTop = $(window).scrollTop();
    if (scrollTop === 0) {
        $('header').addClass('top');
    } else {
        $('header').removeClass('top');
    }
  }});
/* scroll 애니메이션 이벤트 추가 */
$(window).on('scroll', function() {
    var scrollTop = $(window).scrollTop(); // 현재 스크롤 위치를 가져옵니다.
    var windowHeight = $(window).height();
    $('.news_slider').each(function(){
      var contentOffset = $(this).offset().top;
      var contentHeight = $(this).outerHeight();
      if (scrollTop + 500 >= contentOffset) { // 스크롤 위치가 대상 요소의 상단 위치에 도달하면
        $(this).addClass('on'); // 클래스 이름을 추가합니다.
    } else if(scrollTop > contentOffset + contentHeight || scrollTop + windowHeight < contentOffset) {
        $(this).removeClass('on'); // 그렇지 않으면 클래스 이름을 제거합니다.
    }
    });
    $('.banner2_section_wrap').each(function(){
      var contentOffset = $(this).offset().top;
      var contentHeight = $(this).outerHeight();
      if (scrollTop + 500 >= contentOffset) { // 스크롤 위치가 대상 요소의 상단 위치에 도달하면
        $(this).addClass('on'); // 클래스 이름을 추가합니다.
    } else if(scrollTop > contentOffset + contentHeight || scrollTop + windowHeight < contentOffset) {
        $(this).removeClass('on'); // 그렇지 않으면 클래스 이름을 제거합니다.
    }
    });
});
/* scroll 애니메이션 이벤트 추가 */
$(window).on('scroll', function() {
  var scrollTop = $(window).scrollTop(); // 현재 스크롤 위치를 가져옵니다.
  var windowHeight = $(window).height();
  $('.about_inner').each(function(){
    var contentOffset = $(this).offset().top;
    var contentHeight = $(this).outerHeight();
    if (scrollTop + 500 >= contentOffset) { // 스크롤 위치가 대상 요소의 상단 위치에 도달하면
      $(this).addClass('on'); // 클래스 이름을 추가합니다.
  } else if(scrollTop > contentOffset + contentHeight || scrollTop + windowHeight < contentOffset){
      $(this).removeClass('on'); // 그렇지 않으면 클래스 이름을 제거합니다.
  }
  });
  $('#portfolio_anchor').each(function(){
    var contentOffset = $(this).offset().top;
    var contentHeight = $(this).outerHeight();
    if (scrollTop + 500 >= contentOffset) { // 스크롤 위치가 대상 요소의 상단 위치에 도달하면
      $(this).addClass('on'); // 클래스 이름을 추가합니다.
  } else if(scrollTop > contentOffset + contentHeight || scrollTop + windowHeight < contentOffset) {
      $(this).removeClass('on'); // 그렇지 않으면 클래스 이름을 제거합니다.
  }
  });
  $('.portfolio_inner').each(function(){
    var contentOffset = $(this).offset().top;
    var contentHeight = $(this).outerHeight();
    if (scrollTop + 500 >= contentOffset) { // 스크롤 위치가 대상 요소의 상단 위치에 도달하면
      $(this).addClass('on'); // 클래스 이름을 추가합니다.
  } else if(scrollTop > contentOffset + contentHeight || scrollTop + windowHeight < contentOffset) {
      $(this).removeClass('on'); // 그렇지 않으면 클래스 이름을 제거합니다.
  }
  });
  $('.skills_inner').each(function(){
    var contentOffset = $(this).offset().top;
    var contentHeight = $(this).outerHeight();
    if (scrollTop + 500 >= contentOffset) { // 스크롤 위치가 대상 요소의 상단 위치에 도달하면
      $(this).addClass('on'); // 클래스 이름을 추가합니다.
  } else if(scrollTop > contentOffset + contentHeight || scrollTop + windowHeight < contentOffset) {
      $(this).removeClass('on'); // 그렇지 않으면 클래스 이름을 제거합니다.
  }
  });
  $('.story_inner').each(function(){
    var contentOffset = $(this).offset().top;
    var contentHeight = $(this).outerHeight();
    if (scrollTop + 500 >= contentOffset) { // 스크롤 위치가 대상 요소의 상단 위치에 도달하면
      $(this).addClass('on'); // 클래스 이름을 추가합니다.
  } else if(scrollTop > contentOffset + contentHeight || scrollTop + windowHeight < contentOffset) {
      $(this).removeClass('on'); // 그렇지 않으면 클래스 이름을 제거합니다.
  }
  });
});
    /* ======== portfolio slide start======== */
    var mainSwiper = new Swiper('.swiper-container-portfolio', {
      slidesPerGroup : 1, //한번에 슬라이딩될 개수
      centeredSlides: true,    //센터모드
      loop: true, //무한반복 할지말지
      loopedSlides: 1,
      lazy : {
        loadPrevNext : true // 이전, 다음 이미지는 미리 로딩
      },
      navigation: {
             nextEl: ".swiper-button-next",
             prevEl: ".swiper-button-prev",
      },
        pagination : {   // 페이저 버튼 사용자 설정
            el : '.swiper-pagination',  // 페이저 버튼을 담을 태그 설정
            type : 'progressbar', // 버튼 모양 결정
        },
         a11y: { // 웹접근성 
        enabled: true,
        prevSlideMessage: '이전 슬라이드',
        nextSlideMessage: '다음 슬라이드',   
        slideLabelMessage: '총 {{slidesLength}}장의 슬라이드 중 {{index}}번 슬라이드 입니다.',
      },
        breakpoints:{
          200: { //200px 이상의 크기에서 옵션 값 
            slidesPerView : 1, //보여질 개수
            spaceBetween : 100, //아이템 사이 간격
            },
            759 : {//759px 이상의 크기에서 옵션 값 
              slidesPerView : 1, //보여질 개수
              spaceBetween : 200, //아이템 사이 간격
            },
            1023 : {//1023px 이상의 크기에서 옵션 값 
              slidesPerView : 1, //보여질 개수
              spaceBetween : 250, //아이템 사이 간격
            },
            1650 : {//1919px 이상의 크기에서 옵션 값 
              slidesPerView : 1, //보여질 개수
              spaceBetween : 200, //아이템 사이 간격
            }
        }
    })
    /* ======== portfolio slide end ======== */
/* 타이핑 애니메이션 */
    $(function(){
      $(".typing-demo").typed({
        strings: ["MYS's Portfolio"],
        // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
        stringsElement: null,
        // typing speed
        typeSpeed: 200,
        // time before typing starts
        startDelay: 1200,
        // backspacing speed
        backSpeed: 20,
        // time before backspacing
        backDelay: 500,
        // loop
        loop: true,
        // false = infinite
        loopCount: 2,
        // show cursor
        showCursor: false,
        // character for cursor
        cursorChar: "|",
        // attribute to type (null == text)
        attr: null,
        // either html or text
        contentType: 'html',
        // call when done callback function
        callback: function() {},
        // starting callback function before each string
        preStringTyped: function() {},
        //callback for every typed string
        onStringTyped: function() {},
        // callback for reset
        resetCallback: function() {}
      });
    });
/* 스킬박스 호버효과 */
$('.skill_flip').mouseenter(function(){
  $(this).removeClass('front').addClass('back');
});
$('.skill_flip').mouseleave(function(){
  $(this).removeClass('back').addClass('front');
});
});

