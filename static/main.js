
const $bigBall = document.querySelector('.cursor__ball--big');
const $smallBall = document.querySelector('.cursor__ball--small');
const $hoverables = document.querySelectorAll('.hoverable');

document.body.addEventListener('mousemove', onMouseMove);
for (let i = 0; i < $hoverables.length; i++) {
  $hoverables[i].addEventListener('mouseenter', onMouseHover);
  $hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
}

function onMouseMove(e) {
    TweenMax.to($bigBall, .4, {
      x: e.clientX - 15,
      y: e.clientY - 15

    })
    $(".cursor").css("display", "block")
  TweenMax.to($smallBall, .1, {
    x: e.clientX - 5,
    y: e.clientY - 5
  })
}

function onMouseHover() {
  TweenMax.to($bigBall, .3, {
    scale: 2
  })
}
function onMouseHoverOut() {
  TweenMax.to($bigBall, .3, {
    scale: 1
  })
}
;(function(){
    function id(v){ return document.getElementById(v); }
    function loadbar() {
      var ovrl = id("overlay"),
          stat = id("progstat"),
          img = document.images,
          c = 0,
          tot = img.length;
      if(tot == 0) return doneLoading();
  
        function imgLoaded(){
          c += 1;
          var perc = ((100/tot*c) << 0) ;
          stat.innerHTML = perc;
          if(c===tot) return doneLoading();
        }
      
      function doneLoading(){
        ovrl.style.opacity = 0;
        setTimeout(function(){ 
          ovrl.style.display = "none";
        }, 700);
        $(document).trigger("done_loading")
      }
      for(var i=0; i<tot; i++) {
        var tImg     = new Image();
        tImg.onload  = imgLoaded;
        tImg.onerror = imgLoaded;
        tImg.src     = img[i].src;
      }    
    }
    document.addEventListener('DOMContentLoaded', loadbar, false);
  }());
$(".nav-user-logo").css("cursor", "pointer")
$(".nav-user-logo").click(function(){
  $(".toggle-thing").show("slide", {direction: "right"}, 400)
})
$(".toggle-close").css("cursor", "pointer")
$(".toggle-close").click(function(){
  $(".toggle-thing").hide("slide", {direction: "right"}, 400)
})


$(".user-bio-edit").click(function(){
  document.querySelector(".user-bio-value").removeAttribute("disabled")
  document.querySelector(".user-bio-value").focus()
  $(".wee").fadeIn(400)
})

$(".menu-link-home").click(function(){
  window.location.href = "/";
})

$(".menu-link-discover").click(function(){
  window.location.href = "/discover";
})

$(".menu-link-courses").click(function(){
  window.location.href = "/courses";
})

$(".menu-link-blog").click(function(){
  window.location.href = "/blog";
})

$(".menu-link-subscribe").click(function(){
  window.location.href = "/subscribe";
})

$(".menu-logout").click(function(){
  window.location.href = "/auth/logout";
})

var soundeffrr = new Audio("/static/soundeffect.mp3")

$(".socials-insta").click(function(){
  window.open("https://instagram.com/ncryptdps")
  soundeffrr.play()
})

$(".socials-twitter").click(function(){
  window.open("https://twitter.com/VasishthG/status/1554838976841670658")
  soundeffrr.play()
})

$(".socials-discord").click(function(){
  window.open("https://discord.com/users/823237564130525184")
  soundeffrr.play()
})

$(".menu-to-login").click(function(){
  window.location.href = "/auth"
})

// img = document.querySelector(".auth-img")
// selector = document.querySelector(".auth-selector")
// tag = document.querySelector(".auth-tag")
// login = document.querySelector(".login")
// $(".to-register").click(function(){
//   img.classList.add("animate__animated", "animate__fadeOutUp")
//   setTimeout(function(){
//     img.src = "/static/authimg2.svg"
//     img.classList.remove("animate__fadeOutUp")
//     img.classList.add("animate__animated", "animate__fadeInUp")
//   }, 500)
//   selector.classList.add("animate__animated", "animate__slideOutRight")
//   tag.classList.add("animate__animated", "animate__fadeOutDown")
//   setTimeout(function(){
//     tag.innerHTML = "Lets Do this"
//     tag.classList.remove("animate__fadeOutDown")
//     tag.classList.add("animate__fadeInDown")
//   }, 500)
//   setTimeout(function(){
//     $(".login").css("display", "block")
//     login.classList.remove("animate__fadeOutDown")
//     login.classList.remove("animate__fadeOutUp")
//     login.setAttribute("class", "animate__animated animate__fadeInUp")
//   }, 600)
//   setTimeout(function(){
//     login.setAttribute("class", "animate__animated animate__fadeInUp login")
//   })
// })

// img2 = document.querySelector(".auth-img")
// selector = document.querySelector(".auth-selector")
// tag = document.querySelector(".auth-tag")
// register = document.querySelector(".register")
// $(".to-login").click(function(){
//   img2.classList.add("animate__animated", "animate__fadeOutUp")
//   setTimeout(function(){
//     img2.src = "/static/authimg4.svg"
//     img2.classList.remove("animate__fadeOutUp")
//     img2.classList.add("animate__animated", "animate__fadeInUp")
//   }, 500)
//   selector.classList.add("animate__animated", "animate__slideOutRight")
//   tag.classList.add("animate__animated", "animate__fadeOutDown")
//   setTimeout(function(){
//     tag.innerHTML = "Welcome Back"
//     tag.classList.remove("animate__fadeOutDown")
//     tag.classList.add("animate__fadeInDown")
//   }, 500)
//   setTimeout(function(){
//     $(".register").css("display", "block")
//     register.setAttribute("class", "animate__animated animate__fadeInUp")
//   }, 600)
//   setTimeout(function(){
//     register.setAttribute("class", "animate__animated animate__fadeInUp register")
//   })
// })

// $(".auth-go-back").click(function(){
//   img.classList.add("animate__animated" ,"animate__fadeOutUp")
//   img2.classList.add("animate__animated", "animate__fadeOutUp")
//   setTimeout(function(){
//     img.src = "/static/authimg1.svg"
//     img2.src = "/static/authimg1.svg"
//     img.classList.remove("animate__fadeOutUp")
//     img2.classList.remove("animate__fadeOutUp")
//     img.classList.add("animate__fadeInUp")
//     img2.classList.add("animate__fadeInUp")
//   }, 500)
//   selector.classList.add("animate__animate", "animate__slideInRight")
//   selector.classList.remove("animate__animate", "animate__slideOutRight")
//   tag.classList.add("animate__animated", "animate__fadeOutDown")
//   setTimeout(function(){
//     tag.innerHTML = "Jump Into Action"
//     tag.classList.remove("animate__fadeOutDown")
//     tag.classList.add("aimate__fadeInDown")
//   }, 600)
//   setTimeout(function(){
//     login.classList.add("animate__fadeOutUp")
//     register.classList.add("animate__fadeOutUp")
//     $(".login").css("display", "none")
//     $(".register").css("display", "none")
//     login.classList.remove("animate__fadeInUp")
//     login.classList.add("animate__fadeOutDown")
//     register.classList.remove("animate__fadeInUp")
//     register.classList.add("animate__fadeOutDown")
//   }, 600)
// })

$(".nav-collection").click(function(){
  $(".owned").hide("slide", {direction: "left"}, 350)
  $(".createdd").hide("slide", {direction: "left"}, 350)
  setTimeout(function(){
    $(".collections").show("slide", {direction: "right"}, 350)
  }, 350)
  $(".umt-nav").animate({
    "border-bottom-color": "#CCADFF"
  }, 400)
})

$(".nav-owned").click(function(){
  $(".createdd").hide("slide", {direction: "left"}, 350)
  $(".collections").hide("slide", {direction: "left"}, 350)
  setTimeout(function(){
    $(".owned").show("slide", {direction: "right"}, 350)
  }, 350)
  $(".umt-nav").animate({
    "border-bottom-color": "#F7B3DE"
  }, 400)
})


$(".nav-created").click(function(){
  $(".collections").hide("slide", {direction: "left"}, 350)
  $(".owned").hide("slide", {direction: "left"}, 350)
  setTimeout(function(){
    $(".createdd").show("slide", {direction: "right"}, 350)
  }, 350)
  $(".umt-nav").animate({
    "border-bottom-color": "#D7ECA4"
  }, 400)
})

$(".auth-input").focus(function(){
  $(this).animate({
    "border-color": 'white',
  }, 1000)
})

$(".auth-input").focusout(function(){
  $(this).animate({
    "border-color": '#525252',
  }, 1000)
})

$(".to-login").click(function(){
  document.querySelector(".auth-selector").classList.add('animate__animated', "animate__fadeOutUp")
  loadLogin();
})
$(".val-false").hide()

img = document.querySelector(".auth-img")
tag = document.querySelector(".auth-tag-main")
loginform = document.querySelector(".register")
function loadLogin(){
    $(".login").hide()
    img.classList.remove("animate__animated", "animate__fadeInDown")
  setTimeout(function(){
    $(".auth-img").hide()
    img.src = "/static/authimg4.svg"
    $(".auth-img").show()
    img.classList.add("animate__animated", "animate__fadeInDown")
  },500)
  setTimeout(function(){
    $(".register").show()
    loginform.classList.add("animate__animated", "animate__fadeInRight")
  },400)
  tag.classList.add("animate__animated", "animate__fadeOutDown")
  setTimeout(function(){
    tag.innerHTML = "Welcome Back"
    tag.classList.remove("animate__fadeOutDown")
    tag.classList.add("animate__fadeInDown")
  }, 500)
}

$(".auth-go-back").click(function(){
  authGoBack();
})

function authGoBack(){
  document.querySelector(".auth-selector").classList.remove('animate__animated', "animate__fadeOutUp")
  document.querySelector(".auth-selector").classList.add('animate__animated', "animate__fadeInDown")
}

$(".to-signin").click(function(){
  document.querySelector(".auth-selector").classList.remove('animate__animated', "animate__fadeInDown")
  document.querySelector(".auth-selector").classList.add('animate__animated', "animate__fadeOutUp")
  loadRegister();
})

registerform = document.querySelector(".login")
function loadRegister(){
    $(".register").hide()
    img.classList.remove("animate__animated", "animate__fadeInDown")
  setTimeout(function(){
    $(".auth-img").hide()
    img.src = "/static/authimg2.svg"
    $(".auth-img").show()
    img.classList.add("animate__animated", "animate__fadeInDown")
  },500)
  setTimeout(function(){
    $(".login").show()
    registerform.classList.add("animate__animated", "animate__fadeInRight")
  },400)
  tag.classList.add("animate__animated", "animate__fadeOutDown")
  setTimeout(function(){
    tag.innerHTML = "Lets do this"
    tag.classList.remove("animate__fadeOutDown")
    tag.classList.add("animate__fadeInDown")
  }, 500)
}

$(document).bind('done_loading', authLoad());


if ( window.history.replaceState ) {
  window.history.replaceState( null, null, window.location.href );
}

$(".menu-icon").click(function(){
  $(".hamburger").show("slide", {direction: "right"}, 700)
})


$(".menu-go-back").click(function(){
  $(".hamburger").hide("slide", {direction: "right"}, 700)
})

// Tag Value ;-;
$(".tag-value-selector-art").click(function(){
  document.querySelector(".createnew-tag-art").setAttribute("value", "True")
  $(".tag-value-selector-art-false").slideToggle(300)
  $(".tag-value-selector-art").slideToggle(300)
})

$(".tag-value-selector-art-false").click(function(){
  document.querySelector(".createnew-tag-art").setAttribute("value", "False")
  $(".tag-value-selector-art-false").slideToggle(300)
  $(".tag-value-selector-art").slideToggle(300)
})

$(".tag-value-selector-music").click(function(){
  document.querySelector(".createnew-tag-music").setAttribute("value", "True")
  $(".tag-value-selector-music-false").slideToggle(300)
  $(".tag-value-selector-music").slideToggle(300)
})

$(".tag-value-selector-music-false").click(function(){
  document.querySelector(".createnew-tag-music").setAttribute("value", "False")
  $(".tag-value-selector-music-false").slideToggle(300)
  $(".tag-value-selector-music").slideToggle(300)
})

$(".tag-value-selector-abstract").click(function(){
  document.querySelector(".createnew-tag-abstract").setAttribute("value", "True")
  $(".tag-value-selector-abstract-false").slideToggle(300)
  $(".tag-value-selector-abstract").slideToggle(300)
})

$(".tag-value-selector-abstract-false").click(function(){
  document.querySelector(".createnew-tag-abstract").setAttribute("value", "False")
  $(".tag-value-selector-abstract-false").slideToggle(300)
  $(".tag-value-selector-abstract").slideToggle(300)
})

$(".tag-value-selector-fantasy").click(function(){
  document.querySelector(".createnew-tag-fantasy").setAttribute("value", "True")
  $(".tag-value-selector-fantasy-false").slideToggle(300)
  $(".tag-value-selector-fantasy").slideToggle(300)
})

$(".tag-value-selector-fantasy-false").click(function(){
  document.querySelector(".createnew-tag-fantasy").setAttribute("value", "False")
  $(".tag-value-selector-fantasy-false").slideToggle(300)
  $(".tag-value-selector-fantasy").slideToggle(300)
})

$(".tag-value-selector-nft").click(function(){
  document.querySelector(".createnew-tag-nft").setAttribute("value", "True")
  $(".tag-value-selector-nft-false").slideToggle(300)
  $(".tag-value-selector-nft").slideToggle(300)
})

$(".tag-value-selector-nft-false").click(function(){
  document.querySelector(".createnew-tag-nft").setAttribute("value", "False")
  $(".tag-value-selector-nft-false").slideToggle(300)
  $(".tag-value-selector-nft").slideToggle(300)
})

$(".tag-value-selector-tech").click(function(){
  document.querySelector(".createnew-tag-tech").setAttribute("value", "True")
  $(".tag-value-selector-tech-false").slideToggle(300)
  $(".tag-value-selector-tech").slideToggle(300)
})

$(".tag-value-selector-tech-false").click(function(){
  document.querySelector(".createnew-tag-tech").setAttribute("value", "False")
  $(".tag-value-selector-tech-false").slideToggle(300)
  $(".tag-value-selector-tech").slideToggle(300)
})

$(".tag-value-selector-anime").click(function(){
  document.querySelector(".createnew-tag-anime").setAttribute("value", "True")
  $(".tag-value-selector-anime-false").slideToggle(300)
  $(".tag-value-selector-anime").slideToggle(300)
})

$(".tag-value-selector-anime-false").click(function(){
  document.querySelector(".createnew-tag-anime").setAttribute("value", "False")
  $(".tag-value-selector-anime-false").slideToggle(300)
  $(".tag-value-selector-anime").slideToggle(300)
})

$(".blog-head-tag-all").click(function(){
  $(".blog-tags").slideUp(350)
  setTimeout(function(){
    document.querySelector(".blog-head-tag-art").classList.remove("blog-tag-active")
    document.querySelector(".blog-head-tag-all").classList.add("blog-tag-active")
    document.querySelector(".blog-head-tag-music").classList.remove("blog-tag-active")
    document.querySelector(".blog-head-tag-abstract").classList.remove("blog-tag-active")
    document.querySelector(".blog-head-tag-fantasy").classList.remove("blog-tag-active")
    document.querySelector(".blog-head-tag-nft").classList.remove("blog-tag-active")
    document.querySelector(".blog-head-tag-tech").classList.remove("blog-tag-active")
    document.querySelector(".blog-head-tag-anime").classList.remove("blog-tag-active")
    setTimeout(function(){
      $(".blog-tags").slideDown(350)
    }, 100)
  }, 400)
})

$(".blogs-bigblog-cat-art").hide()
$(".blogs-bigblog-cat-music").hide()
$(".blogs-bigblog-cat-abstract").hide()
$(".blogs-bigblog-cat-fantasy").hide()
$(".blogs-bigblog-cat-nft").hide()
$(".blogs-bigblog-cat-tech").hide()
$(".blogs-bigblog-cat-anime").hide()


$(".blog-head-tag-art").click(function(){
  $(".blog-tags").slideUp(350)
  setTimeout(function(){
    document.querySelector(".blog-head-tag-art").classList.add("blog-tag-active")
    document.querySelector(".blog-head-tag-all").classList.remove("blog-tag-active")
    document.querySelector(".blog-head-tag-music").classList.remove("blog-tag-active")
    document.querySelector(".blog-head-tag-abstract").classList.remove("blog-tag-active")
    document.querySelector(".blog-head-tag-fantasy").classList.remove("blog-tag-active")
    document.querySelector(".blog-head-tag-nft").classList.remove("blog-tag-active")
    document.querySelector(".blog-head-tag-tech").classList.remove("blog-tag-active")
    document.querySelector(".blog-head-tag-anime").classList.remove("blog-tag-active")
    $(".blogs-bigblog-cat-art").show()
    document.querySelector(".blogs-bigblog-cat-art-author").setAttribute("style", "display: inline-block !important;")
    $(".blog-all").hide()
    $(".blogs-bigblog-cat-music").hide()
    $(".blogs-bigblog-cat-abstract").hide()
    $(".blogs-bigblog-cat-fantasy").hide()
    $(".blogs-bigblog-cat-nft").hide()
    $(".blogs-bigblog-cat-anime").hide()
    $(".blogs-bigblog-cat-tech").hide()
    setTimeout(function(){
      $(".blog-tags").slideDown(350)
    }, 100)
  }, 400)
})

$(".blog-head-tag-music").click(function(){
  $(".blog-tags").slideUp(350)
  setTimeout(function(){
    document.querySelector(".blog-head-tag-art").classList.remove("blog-tag-active")
    document.querySelector(".blog-head-tag-all").classList.remove("blog-tag-active")
    document.querySelector(".blog-head-tag-music").classList.add("blog-tag-active")
    document.querySelector(".blog-head-tag-abstract").classList.remove("blog-tag-active")
    document.querySelector(".blog-head-tag-fantasy").classList.remove("blog-tag-active")
    document.querySelector(".blog-head-tag-nft").classList.remove("blog-tag-active")
    document.querySelector(".blog-head-tag-tech").classList.remove("blog-tag-active")
    document.querySelector(".blog-head-tag-anime").classList.remove("blog-tag-active")
    $(".blogs-bigblog-cat-music").show()
    document.querySelector(".blogs-bigblog-cat-music-author").setAttribute("style", "display: inline-block !important;")
    $(".blog-all").hide()
    $(".blogs-bigblog-cat-art").hide()
    $(".blogs-bigblog-cat-abstract").hide()
    $(".blogs-bigblog-cat-fantasy").hide()
    $(".blogs-bigblog-cat-nft").hide()
    $(".blogs-bigblog-cat-anime").hide()
    $(".blogs-bigblog-cat-tech").hide()
    setTimeout(function(){
      $(".blog-tags").slideDown(350)
    }, 100)
  }, 400)
})

$(".blog-head-tag-abstract").click(function(){
  $(".blog-tags").slideUp(350)
  setTimeout(function(){
    document.querySelector(".blog-head-tag-art").classList.remove("blog-tag-active")
    document.querySelector(".blog-head-tag-all").classList.remove("blog-tag-active")
    document.querySelector(".blog-head-tag-music").classList.remove("blog-tag-active")
    document.querySelector(".blog-head-tag-abstract").classList.add("blog-tag-active")
    document.querySelector(".blog-head-tag-fantasy").classList.remove("blog-tag-active")
    document.querySelector(".blog-head-tag-nft").classList.remove("blog-tag-active")
    document.querySelector(".blog-head-tag-tech").classList.remove("blog-tag-active")
    document.querySelector(".blog-head-tag-anime").classList.remove("blog-tag-active")
    $(".blogs-bigblog-cat-abstract").show()
    document.querySelector(".blogs-bigblog-cat-abstract-author").setAttribute("style", "display: inline-block !important;")
    $(".blog-all").hide()
    $(".blogs-bigblog-cat-music").hide()
    $(".blogs-bigblog-cat-art").hide()
    $(".blogs-bigblog-cat-fantasy").hide()
    $(".blogs-bigblog-cat-nft").hide()
    $(".blogs-bigblog-cat-anime").hide()
    $(".blogs-bigblog-cat-tech").hide()
    setTimeout(function(){
      $(".blog-tags").slideDown(350)
    }, 100)
  }, 400)
})


$(".blog-head-tag-fantasy").click(function(){
  $(".blog-tags").slideUp(350)
  setTimeout(function(){
    document.querySelector(".blog-head-tag-art").classList.remove("blog-tag-active")
    document.querySelector(".blog-head-tag-all").classList.remove("blog-tag-active")
    document.querySelector(".blog-head-tag-music").classList.remove("blog-tag-active")
    document.querySelector(".blog-head-tag-abstract").classList.remove("blog-tag-active")
    document.querySelector(".blog-head-tag-fantasy").classList.add("blog-tag-active")
    document.querySelector(".blog-head-tag-nft").classList.remove("blog-tag-active")
    document.querySelector(".blog-head-tag-tech").classList.remove("blog-tag-active")
    document.querySelector(".blog-head-tag-anime").classList.remove("blog-tag-active")
    $(".blogs-bigblog-cat-fantasy").show()
    document.querySelector(".blogs-bigblog-cat-fantasy-author").setAttribute("style", "display: inline-block !important;")
    $(".blog-all").hide()
    $(".blogs-bigblog-cat-music").hide()
    $(".blogs-bigblog-cat-abstract").hide()
    $(".blogs-bigblog-cat-art").hide()
    $(".blogs-bigblog-cat-nft").hide()
    $(".blogs-bigblog-cat-anime").hide()
    $(".blogs-bigblog-cat-tech").hide()
    setTimeout(function(){
      $(".blog-tags").slideDown(350)
    }, 100)
  }, 400)
})


$(".blog-head-tag-nft").click(function(){
  $(".blog-tags").slideUp(350)
  setTimeout(function(){
    document.querySelector(".blog-head-tag-art").classList.remove("blog-tag-active")
    document.querySelector(".blog-head-tag-all").classList.remove("blog-tag-active")
    document.querySelector(".blog-head-tag-music").classList.remove("blog-tag-active")
    document.querySelector(".blog-head-tag-abstract").classList.remove("blog-tag-active")
    document.querySelector(".blog-head-tag-fantasy").classList.remove("blog-tag-active")
    document.querySelector(".blog-head-tag-nft").classList.add("blog-tag-active")
    document.querySelector(".blog-head-tag-tech").classList.remove("blog-tag-active")
    document.querySelector(".blog-head-tag-anime").classList.remove("blog-tag-active")
    $(".blogs-bigblog-cat-nft").show()
    document.querySelector(".blogs-bigblog-cat-nft-author").setAttribute("style", "display: inline-block !important;")
    $(".blog-all").hide()
    $(".blogs-bigblog-cat-music").hide()
    $(".blogs-bigblog-cat-abstract").hide()
    $(".blogs-bigblog-cat-fantasy").hide()
    $(".blogs-bigblog-cat-art").hide()
    $(".blogs-bigblog-cat-anime").hide()
    $(".blogs-bigblog-cat-tech").hide()
    setTimeout(function(){
      $(".blog-tags").slideDown(350)
    }, 100)
  }, 400)
})

$(".blog-head-tag-tech").click(function(){
  $(".blog-tags").slideUp(350)
  setTimeout(function(){
    document.querySelector(".blog-head-tag-art").classList.remove("blog-tag-active")
    document.querySelector(".blog-head-tag-all").classList.remove("blog-tag-active")
    document.querySelector(".blog-head-tag-music").classList.remove("blog-tag-active")
    document.querySelector(".blog-head-tag-abstract").classList.remove("blog-tag-active")
    document.querySelector(".blog-head-tag-fantasy").classList.remove("blog-tag-active")
    document.querySelector(".blog-head-tag-nft").classList.remove("blog-tag-active")
    document.querySelector(".blog-head-tag-tech").classList.add("blog-tag-active")
    document.querySelector(".blog-head-tag-anime").classList.remove("blog-tag-active")
    $(".blogs-bigblog-cat-tech").show()
    document.querySelector(".blogs-bigblog-cat-tech-author").setAttribute("style", "display: inline-block !important;")
    $(".blog-all").hide()
    $(".blogs-bigblog-cat-music").hide()
    $(".blogs-bigblog-cat-abstract").hide()
    $(".blogs-bigblog-cat-fantasy").hide()
    $(".blogs-bigblog-cat-nft").hide()
    $(".blogs-bigblog-cat-anime").hide()
    $(".blogs-bigblog-cat-art").hide()
    setTimeout(function(){
      $(".blog-tags").slideDown(350)
    }, 100)
  }, 400)
})

$(".blog-head-tag-anime").click(function(){
  $(".blog-tags").slideUp(350)
  setTimeout(function(){
    document.querySelector(".blog-head-tag-art").classList.remove("blog-tag-active")
    document.querySelector(".blog-head-tag-all").classList.remove("blog-tag-active")
    document.querySelector(".blog-head-tag-music").classList.remove("blog-tag-active")
    document.querySelector(".blog-head-tag-abstract").classList.remove("blog-tag-active")
    document.querySelector(".blog-head-tag-fantasy").classList.remove("blog-tag-active")
    document.querySelector(".blog-head-tag-nft").classList.remove("blog-tag-active")
    document.querySelector(".blog-head-tag-tech").classList.remove("blog-tag-active")
    document.querySelector(".blog-head-tag-anime").classList.add("blog-tag-active")
    $(".blogs-bigblog-cat-anime").show()
    $(".blog-all").hide()
    document.querySelector(".blogs-bigblog-cat-anime-author").setAttribute("style", "display: inline-block !important;")
    $(".blogs-bigblog-cat-music").hide()
    $(".blogs-bigblog-cat-abstract").hide()
    $(".blogs-bigblog-cat-fantasy").hide()
    $(".blogs-bigblog-cat-nft").hide()
    $(".blogs-bigblog-cat-art").hide()
    $(".blogs-bigblog-cat-tech").hide()
    setTimeout(function(){
      $(".blog-tags").slideDown(350)
    }, 100)
  }, 400)
})

// File display shit(why am i doing this)
$(".user-pfp-change").change(function(e){
  var fileName = e.target.files[0].name;
  alert("hello" + fileName)
})

function imgPreview(){
  var oFReader = new FileReader();
  oFReader.readAsDataURL(document.getElementById("pfp").files[0]);
  oFReader.onload = function (oFREvent){
    document.querySelector(".user-pfp").src = oFREvent.target.result;
  }
  savePfp();
}


function createPreview(){
  var oFReader = new FileReader();
  oFReader.readAsDataURL(document.getElementById("createnew-upload").files[0]);
  oFReader.onload = function (oFREvent){
    document.querySelector(".createnew-upload").src = oFREvent.target.result;
  }
  savePfp();
}

function createPreview2(){
  var oFReader = new FileReader();
  oFReader.readAsDataURL(document.getElementById("createnew-upload2").files[0]);
  oFReader.onload = function (oFREvent){
    document.querySelector(".createnew-upload2").src = oFREvent.target.result;
  }
  savePfp();
}

function createPreview3(){
  var oFReader = new FileReader();
  oFReader.readAsDataURL(document.getElementById("createnew-upload3").files[0]);
  oFReader.onload = function (oFREvent){
    document.querySelector(".createnew-upload3").src = oFREvent.target.result;
  }
  savePfp();
}

function createPreview4(){
  var oFReader = new FileReader();
  oFReader.readAsDataURL(document.getElementById("createnew-upload4").files[0]);
  oFReader.onload = function (oFREvent){
    document.querySelector(".createnew-upload4").src = oFREvent.target.result;
  }
  savePfp();
}

function createPreview5(){
  var oFReader = new FileReader();
  oFReader.readAsDataURL(document.getElementById("createnew-upload5").files[0]);
  oFReader.onload = function (oFREvent){
    document.querySelector(".createnew-upload5").src = oFREvent.target.result;
  }
  savePfp();
}

function createPreview6(){
  var oFReader = new FileReader();
  oFReader.readAsDataURL(document.getElementById("createnew-upload6").files[0]);
  oFReader.onload = function (oFREvent){
    document.querySelector(".createnew-upload6").src = oFREvent.target.result;
  }
  savePfp();
}


function savePfp(){
  setTimeout(function(){
    $(".pfpsubmit-div").slideDown()
  }, 300)
}


auth = document.querySelector("#auth")
if (auth.innerHTML === "discordauth"){
  loadDiscordOauth()
}
var discordauthh = document.querySelector(".discordauth")
function loadDiscordOauth(){
  $(".auth-selector").slideUp()
  img.classList.remove("animate__animated", "animate__fadeInDown")
  setTimeout(function(){
    $(".auth-img").hide()
    img.src = "/static/authimg3.svg"
    $(".auth-img").show()
    img.classList.add("animate__animated", "animate__fadeInDown")
  },500)
  setTimeout(function(){
    $(".discordauth").show()
    discordauthh.classList.add("animate__animated", "animate__fadeInRight")
  },400)
  tag.classList.add("animate__animated", "animate__fadeOutDown")
  setTimeout(function(){
    tag.innerHTML = "Complete Your Profile"
    tag.classList.remove("animate__fadeOutDown")
    tag.classList.add("animate__fadeInDown")
  }, 500)
}

function authLoad(){
  $(".auth-selector-logo").fadeOut(400)
  setTimeout(function(){
    $(".auth-selector-logo").fadeIn(1500)
    $(".auth-selector-vid").animate({
      'opacity': '50%',
    }, 1000)
    document.querySelector(".auth-selector-vid").classList.add("blurred")
    $(".auth-title").css("display", "block")
    document.querySelector(".auth-title-div").classList.add("animate__animated","animate__backInDown")
    $(".auth-desc").slideDown(400)
  },100)
}

function blogsUploadPrompt(){
  $(".blogs-createnew-thumb-overlay").fadeIn(300)
}

function blogsPreviewImage(){
  $(".blogs-createnew-thumb-overlay").fadeOut(300)
}

