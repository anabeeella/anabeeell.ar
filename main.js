/*
const drawer = document.querySelector('.list-nav');
const openDrawerElement = document.querySelector('#open-nav');
const closeDrawerElement = document.querySelectorAll('.close-drawer');

const openDrawer = ()=>{
  openDrawerElement.addEventListener('click', ()=> {
    drawer.style.setProperty("display", "flex")
  })
}

const closeDrawer = ()=> {
  closeDrawerElement.forEach(element => {
    element.addEventListener('click', ()=> {
      drawer.style.setProperty("display", "none")
    })
  })
}

closeDrawer();
openDrawer();*/

/* Dark & Light Theme Toggle */

var ThemeToggle = document.getElementById("theme-toggle");
var lightThemeIcon =  document.getElementById("light-on");
var darkThemeIcon = document.getElementById("dark-on");

ThemeToggle.addEventListener('click', () => {
  var theme = document.getElementById('theme');
  theme.classList.toggle("dark-theme");
  theme.classList.toggle("light-theme");

  
  lightThemeIcon.classList.toggle("active");
  darkThemeIcon.classList.toggle("active");
})



/*Marquee*/

var Marquee = function (element, defaults) {
  var elem = element,
    options = (defaults === undefined) ? {} : defaults,
    continuous = options.continuous || true,	// once or continuous
    direction = options.direction || 'ltr', 	// ltr or rtl
    loops = options.loops || -1,
    speed = options.speed || 0.5,
    milestone = 0,
    marqueeElem = null,
    elemWidth = null,
    self = this,
    ltrCond = 0,
    loopCnt = 0,
    start = 0,
    opacity = options.opacity || 1.0,
    process = null,
    constructor = function (elem) {

      // Build html
      var elemHTML = elem.innerHTML;
      var elemNode = elem.childNodes[1] || elem;
      elemWidth = elemNode.offsetWidth;
      marqueeElem = '<div>' + elemHTML + '</div>';
      elem.innerHTML = marqueeElem;
      marqueeElem = elem.getElementsByTagName('div')[0];
      elem.style.overflow = 'hidden';
      marqueeElem.style.whiteSpace = 'nowrap';
      marqueeElem.style.position = 'relative';
      marqueeElem.style.opacity = opacity;

      if (continuous) {
        marqueeElem.innerHTML += elemHTML;
        marqueeElem.style.width = '100%';

        if (direction === 'ltr') {
          start = -elemWidth;
        }
      } else {
        ltrCond = elem.offsetWidth;

        if (direction === 'rtl') {
          milestone = ltrCond;
        }
      }

      if (direction === 'ltr') {
        milestone = -elemWidth;
      } else if (direction === 'rtl') {
        speed = -speed;
      }

      self.start();

      return marqueeElem;
    }

  this.start = function () {
    process = window.setInterval(function () {
      self.play();
    });
  };

  this.play = function () {
    // beginning
    marqueeElem.style.left = start + 'px';
    start = start + speed;

    if (start > ltrCond || start < -elemWidth) {
      start = milestone;
      loopCnt++;

      if (loops !== -1 && loopCnt >= loops) {
        marqueeElem.style.left = 0;
      }
    }
  }

  this.end = function () {
    window.clearInterval(process);
  }

  // Init plugin
  marqueeElem = constructor(elem);
}
