document.addEventListener(
  "DOMContentLoaded",
  function () {
    /* NAVIGATION
    ================================== */
    var el_menuBtn = document.querySelector(".menu-trigger");
    var el_BodyHtml = document.querySelector("html");
    var el_menuOverlay = document.querySelector(".main_navigation");
    if (el_menuBtn !== null) {
      el_menuBtn.onclick = function () {
        el_menuBtn.classList.toggle("is-clicked");
        el_BodyHtml.classList.toggle("main-navigation-visible");
        if (window.matchMedia("(max-width: 767px)").matches) {
          el_BodyHtml.classList.toggle("mobile-device");
        }
        if (el_menuBtn.classList.contains("active")) {
          el_menuOverlay.classList.add("opened");
        } else {
          el_menuOverlay.classList.remove("opened");
        }
      };
    }
    document.querySelectorAll("li.parent").forEach((theLi) => {
      theLi.addEventListener("mouseover", function () {
        theLi.classList.add("expanded");
      });
      theLi.addEventListener("mouseout", function () {
        theLi.classList.remove("expanded");
      });
    });
    const myCarouselElement = document.querySelector("#bigCarousel");
    if (myCarouselElement) {
      const carousel = new bootstrap.Carousel(myCarouselElement, {
        interval: 3000,
        pause: false,
      });
    }
    const scrollBtn = document.querySelector(".scrollup");
    window.addEventListener("scroll", function () {
      let scroll = window.scrollY;
      let el_header = document.querySelector("header");
      let el_Body = document.querySelector("body");
      if (scroll > 50) {
        el_header.classList.add("headerBg");
        el_Body.classList.add("scrolled");
      } else {
        el_header.classList.remove("headerBg");
        el_Body.classList.remove("scrolled");
      }
      if (scrollBtn) {
        if (scroll > 100) {
          scrollBtn.classList.add("is-visible");
        } else {
          scrollBtn.classList.remove("is-visible");
        }
      }
    });
    //START POPUP
    var myModalElement = document.getElementById("popupModal");
    if (myModalElement) {
      setTimeout(function () {
        let modal = bootstrap.Modal.getOrCreateInstance(
          document.getElementById("popupModal")
        );
        modal.show();
      }, 2000);
    }
    //END POPUP
    
    const firstSection = document.querySelectorAll("body section")[0];
    firstSection.id = "anchor-section";
    
        /*FILTERS
  ===============================*/  
 /* all-rooms*/
    const filtersDropMobile = document.querySelector('.filters-drop');
    if (filtersDropMobile){
    filtersDropMobile.addEventListener('click', function() {
        if (this.parentNode.classList.contains('open')) {
            this.parentNode.classList.remove('open');
        }else{
            this.parentNode.classList.add('open');
        }
    });
    }
    const filters = document.querySelectorAll('.filter');
    const filtersActiveOnLoad = document.querySelector(".filter.active");
    filters.forEach(filter => { 
      filter.addEventListener('click', function() {
        let selectedFilter = filter.getAttribute('data-filter');
        //let itemsToHide = document.querySelectorAll(`.all-rooms .room-box:not([data-filter='${selectedFilter}'])`);
        //let itemsToShow = document.querySelectorAll(`.all-rooms [data-filter='${selectedFilter}']`);
        let itemsToHide = document.querySelectorAll(`.all-rooms .room-box:not([data-filter*='${selectedFilter}'])`);
        let itemsToShow = document.querySelectorAll(`.all-rooms [data-filter*='${selectedFilter}']`);
        if (selectedFilter == 'all') {
          itemsToHide = [];
          itemsToShow = document.querySelectorAll('.all-rooms [data-filter]');
        }
        filters.forEach(el => {
          el.classList.remove('active');
        });
        filter.classList.add('active'); 
        itemsToHide.forEach(el => {
          el.classList.add('hide');
          el.classList.remove('show');
        });
        itemsToShow.forEach(el => {
          el.classList.remove('hide');
          el.classList.add('show'); 
        });
      });
    });
    if (filtersActiveOnLoad) {
        filtersActiveOnLoad.click();
    }
   /*END FILTERS
  ===============================*/


    // SWIPER CAROUSELS
    // ==============================
    var swiperIntroRooms = new Swiper(".roomsSwiper", {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        768: {
          slidesPerView: 1.3,
          spaceBetween: 15,
        },
        992: {
          slidesPerView: 1.5,
          spaceBetween: 20,
        },
      },
    });
    var swiperBoxes = new Swiper(".boxesSwiper", {
      slidesPerView: 1,
      spaceBetween: 0,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        768: {
          slidesPerView: 1.3,
          spaceBetween: 15,
        },
        992: {
          slidesPerView: 1.6,
          spaceBetween: 20,
        },
      },
    });
    var swiperExperiences = new Swiper(".expSwiper", {
      slidesPerView: 1,
      spaceBetween: 0,
      autoHeight: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        576: {
          slidesPerView: 1.5,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 1.3,
          spaceBetween: 15,
        },
        992: {
          slidesPerView: 2.3,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 2.3,
          spaceBetween: 20,
        },
      },
    });
    var swiperOtherBoxes = new Swiper(".othersSwiper", {
      slidesPerView: 1,
      spaceBetween: 0,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      },
    });
    var swiperReviews = new Swiper(".testimonialsSwiper", {
      slidesPerView: 1,
      spaceBetween: 0,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 50,
        },
      }
    });
    var swiperGal = new Swiper(".simpleGallerySwiper", {
      lazy: true,
      slidesPerView: 1,
      spaceBetween: 0,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      autoplay: {
        delay: 5000,
        waitForTransition: true,
      },
    });
    var swiperRoomGal = new Swiper(".roomGallerySwiper", {
      lazy: true,
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        768: {
          slidesPerView: 1.3,
          spaceBetween: 15,
        },
        992: {
          slidesPerView: 1.5,
          spaceBetween: 20,
        },
      },
    });
    var swiperAwards = new Swiper(".awardsSwiper", {
      slidesPerView: 2,
      spaceBetween: 0,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
      },
    });
    // SWIPER CAROUSELS
    // ==============================*/

   /* DATE PICKER -flatpickr  okkkkkkkkkkkkkkkkkkkkkkkk
====================================================== */
    var checkinDate=document.getElementById("checkin");
    var checkoutDate=document.getElementById("checkout");
    var currentDate=new Date();
    var openingDate=new Date("04/12/2025"); // m/d/yy
    if (openingDate > currentDate) {
        currentDate=openingDate;
    }


    if(checkinDate || checkoutDate){

        
        var checkinPicker= flatpickr(checkinDate, {
            dateFormat: 'd/m/Y',
            defaultDate:currentDate,
            minDate:"today",
            onChange: function(selectedDates, dateStr, instance) {
                checkoutDate.flatpickr({ 
                    dateFormat: 'd/m/Y',
                    minDate: dateStr
                });
            },
        });
        
        var checkoutPicker= flatpickr(checkoutDate, {
            dateFormat: 'd/m/Y',
            defaultDate: currentDate.setDate(currentDate.getDate() + 5)
        });
    }  
    
    var inputArrivalDate=document.getElementById("ArrivalDate");
    var inputDepartureDate=document.getElementById("DepartureDate");

    if(inputArrivalDate || inputDepartureDate){
        var endPicker= flatpickr(inputDepartureDate, {
            dateFormat: 'd/m/Y'
        });
        var startPicker= flatpickr(inputArrivalDate, {
            dateFormat: 'd/m/Y',
            minDate:"today",
            onChange: function(selectedDates, dateStr, instance) {
                inputDepartureDate.flatpickr({ 
                    dateFormat: 'd/m/Y',
                    minDate: dateStr
                });
            },
        });
    }  
      
        
    var pickerDate=document.getElementById("Date");
    if(pickerDate){
        var pickerDateStart= flatpickr(pickerDate, {
            dateFormat: 'd/m/Y',
            mode: "range"
            //defaultDate:new Date()
        });
    }   
  },
  false
);
// FOR SCROLL TO TOP
document.addEventListener("DOMContentLoaded", () => {
  const scrollProgress = document.getElementById("progress");
  const progressValue = document.getElementById("progress-value");

  const calcScrollValue = () => {
    const pos = document.documentElement.scrollTop;
    const calcHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrollValue = Math.round((pos * 100) / calcHeight);

    scrollProgress.style.display = pos > 100 ? "flex" : "none";
    scrollProgress.style.background = `conic-gradient(#fbbd39 ${scrollValue}%, #f3f2f1 ${scrollValue}%)`;
  };

  // Επιστροφή στην κορυφή όταν γίνεται κλικ
  scrollProgress.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // Υπολογισμός κατά την κύλιση
  window.addEventListener("scroll", calcScrollValue);
  calcScrollValue(); // Αρχική εκτέλεση
});
// FOR SCROLL TO TOP

//LAZYLOAD
document.addEventListener("DOMContentLoaded", function() {
  var lazyloadImages = document.querySelectorAll("img.lazyload");
  var lazyloadThrottleTimeout;

  function lazyload() {
    if(lazyloadThrottleTimeout) {
      clearTimeout(lazyloadThrottleTimeout);
    }    

    lazyloadThrottleTimeout = setTimeout(function() {
      var scrollTop = window.pageYOffset;
      lazyloadImages.forEach(function(img) {
          if(img.offsetTop < (window.innerHeight + scrollTop)) {
            img.src = img.getAttribute("data-src") || img.getAttribute("src");
            img.classList.remove('lazyload');
          }
      });
      if(lazyloadImages.length == 0) { 
        document.removeEventListener("scroll", lazyload);
        window.removeEventListener("resize", lazyload);
        window.removeEventListener("orientationChange", lazyload);
      }
    }, 20);
  }

  document.addEventListener("scroll", lazyload);
  window.addEventListener("resize", lazyload);
  window.addEventListener("orientationChange", lazyload);
});
//LAZYLOAD

