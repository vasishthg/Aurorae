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

$(".to-login").click(function(){
  document.querySelector(".auth-selector").classList.add('animate__animated', "animate__fadeOutUp")
  loadLogin();
})

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
//     filter: blur(4px);
// opacity: 40%;


const $bigBall = document.querySelector('.cursor__ball--big');
const $smallBall = document.querySelector('.cursor__ball--small');
const $hoverables = document.querySelectorAll('.hoverable');

// Listeners
document.body.addEventListener('mousemove', onMouseMove);
for (let i = 0; i < $hoverables.length; i++) {
  $hoverables[i].addEventListener('mouseenter', onMouseHover);
  $hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
}

// Move the cursor
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

// Hover an element
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

if ( window.history.replaceState ) {
  window.history.replaceState( null, null, window.location.href );
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

// File display shit(why am i doing this)
$(".user-pfp-change").change(function(e){
  var fileName = e.target.files[0].name;
  console.log(fileName)
  alert("hello" + fileName)
})

function imgPreview(){
  console.log("hello")
  var oFReader = new FileReader();
  oFReader.readAsDataURL(document.getElementById("pfp").files[0]);
  oFReader.onload = function (oFREvent){
    console.log(oFREvent.target.result)
    document.querySelector(".user-pfp").src = oFREvent.target.result;
  }
  savePfp();
}

function savePfp(){
  setTimeout(function(){
    $(".pfpsubmit-div").slideDown()
  }, 300)
}