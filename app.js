gsap.registerPlugin(ScrollTrigger);

console.log('gsap pushed');
console.log('gsap mobile push');

const wrapper = document.querySelector('.wrapper');

const container = document.querySelector(".container");

console.log(container);

const sections = gsap.utils.toArray(".slide");
// console.log(sections);

  const scrollLength = (sections.length - 1) * window.innerWidth;

  gsap.to(sections, {
    xPercent: -100 * (sections.length-1),
    ease: 'none',
    scrollTrigger: {
      trigger: ".container",
      pin: true,
      scrub: 1,
      end: '+=3000',
      toggleAction: "reset pause none reset",
      invalidateOnRefresh: true,
//        onUpdate: (self) => {
// if (self.direction === -1) { // Scrolling upwards
// gsap.set(container, { x: 0 }); // Reset horizontal scroll position
// }
//        },
      onEnter: () => {
        console.log('entering')
      },
      onLeave: (self) => {
        console.log('leaving')
      },
      onEnterBack: (self) => {
        console.log("entering back")
        self.scroll(self.start)
        self.animation.progress(100)
      },
      onLeaveBack: () => {
        console.log("Leaving back")
      }
    }
  })

  // let scrollTween = gsap.to(sections, {
//   xPercent: -100 * (sections.length - 1),
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".container",
//     pin: true,
//     scrub: 1,
//     end: "+=3000",
//     invalidateOnRefresh: true,
//     // Reset when user scrolls down past the section
//     // onLeave: () => {
//     //   gsap.to(sections, {
//     //     xPercent: -100 * sections.length -1 ,
//     //     duration: 0.5,
//     //     ease: "power1.out"
//     //   });
//     // },
//      onLeaveBack: () => {
//       gsap.set(sections, { xPercent: 0, duration: 0.5});
//     },
//  },
// });

//    let scrollTween = gsap.to(container, {
//     x: () => `-${scrollLength}px`,
//     ease: 'none',
//     scrollTrigger: {
//       trigger: ".wrapper",
//       start: "top top",
//       end: () => `+=${scrollLength}`,
//       scrub: true,
//       pin: true,
//       anticipatePin: 1,

//  onLeave: function(self) {    
//   gsap.set(container, { x: 0 });

//   // console.log(self.direction)
//     // self.scroll(self.start);	// <-- sets position to start of ScrollTrigger
//     // self.disable()
//     // self.animation.progress(1)
//   },
//   onEnterBack: (self) => {
//  console.log(self.direction)
//  if(self.direction === -1) {
//   console.log(self.isActive)
//   self.disable()
//  }
//   },
//   onLeaveBack: (self) => {
//     console.log("on leave back")
//   },
//   onEnter: (self) => {
//     self.enable()
//     console.log("on enter")
//   },
//   onLeaveBack: (self) => {
//     console.log(self.direction)
// self.enable()
//   }
  
//     }
//   });






// let scrollTween = gsap.to(container, {
//   xPercent: -100 * (slides.length - 1),
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".wrapper",
//     pin: true,
//     scrub: 1,
//     end: () => "+=" + container.offsetWidth,
//     invalidateOnRefresh: true,

//     // Reset container to first slide after scrolling past horizontal section
//     onLeave: () => {
//       gsap.set(container, { xPercent: 0 });
//     },

//     // When scrolling up, skip horizontal scroll — do nothing here
//   },
// });

ScrollTrigger.create({
  trigger: ".container",
  start: "top top",
  // endTrigger: ".slide-last",
  end: "right center",
  toggleClass: { targets: ".container", className: "border-animated" },
});

// gsap.to(container, {
//   scrollTrigger: {
//     trigger: ('.container'),
//   }
// })

// let borderTween = gsap.to(wrapper, {
 
//   scrollTrigger: {
//      start: "top bottom",
//   end: "bottom top",
//     trigger: ".wrapper",
//     toggleClass: "border-animated",
//   },
// });

// const beginObserver = new IntersectionObserver(
//   (entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         console.log("VISIBLE");
//         container.classList.add("border-animated");
//       } else {
//         console.log("NOT VISIBLE");
//         container.classList.remove("border-animated");
//       }
//     });
//   },
//   {
//     threshold: .8,
//   }
// );

// beginObserver.observe(container);

// const slides = document.querySelector(".slides");
// const lastSlide = document.querySelector(".last-slide");

// const sliderWrapper = document.querySelector(".slider-wrapper");
// const scrollEnd = document.querySelectorAll(".horizonal-scroll-end");

// const beginObserver = new IntersectionObserver(
//   (entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         console.log("VISIBLE");
//         slides.classList.toggle("is-sticky");
//         sliderWrapper.classList.add("border-animated");
//       } else {
//         console.log("NOT VISIBLE");
//         slides.classList.remove("is-sticky");
//         sliderWrapper.classList.remove("border-animated");
//       }
//     });
//   },
//   {
//     threshold: .8,
//     rootMargin: '0px 0px -10% 0px'
//   }
// );

// const lastSlideObserver = new IntersectionObserver(
//   (entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         console.log("lastSlide IsVisible");
//       }
//     });
//   },
//   {
//     threshold: 1,
//     rootMargin: "100px",
//   }
// );

// const resetObserver = new IntersectionObserver(
//   (entries) => {
//     entries.forEach(entry => {
//       if (!entry.isIntersecting && entry.boundingClientRect.top < 0) {
//         // Section is above the viewport — user scrolled past it downwards
//         slides.scrollTop = 0;
//       }
//     });
//   },
//   {
//     threshold: 0,
//   }
// );

// Convert vertical scroll to horizontal scrollTop movement
// slides.addEventListener('wheel', (e) => {
//   // Only convert if it's mostly vertical scrolling
//   if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
//     e.preventDefault();
//     slides.scrollTop += e.deltaY;
//   }
// }, { passive: false });

// const fadeInText = document.querySelectorAll ('.text-fade-in-anim');
// console.log(fadeInText);

// beginObserver.observe(sliderWrapper);

// observer.observe(slidingSection);

// lastSlideObserver.observe(lastSlide);

// resetObserver.observe(slides);

// const textFadeIn = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add('fade-in')
//     } else {
//       return;
//     }
//   })
// }, {
// threshold: 1
// }
// );

// const textFromBelow = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (!entry.isIntersecting) {
//       return;
//     } else {
//       entry.target.classList.add('from-below');
//     }
//   })
// }, {
//   threshold: 1
// })

// const slides = document.querySelector(".slides");

// console.log(slidingSection);

// const observer = new IntersectionObserver(
//   (entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         console.log("VISIBLE");
//         slidingSection.classList.add("is-sticky");
//       } else {
//         slidingSection.classList.remove("is-sticky");
//       }
//     });
//   },
//   {
//     threshold: .9,
//   }
// );

// const observer = new IntersectionObserver(
//   (entries) => {
//     entries.forEach((entry) => {
//       entry.target.classList.toggle("is-sticky", entry.isIntersecting);
//     });
//   },
//   {
//     threshold: 0.9,
//   }
// );

// const lastSlideObserver = new IntersectionObserver(
//   (entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         slidingSection.classList.remove("is-sticky");
//       }
//     });
//   },
//   {
//     threshold: 0.9,
//   }
// );

// const textFadeIn = new IntersectionObserver((entries) => {
// 	entries.forEach((entry) => {
// 		if (entry.isIntersecting) {
//       entry.target.classList.add('fade-in')
//     } else {
//       entry.target.classList.remove('fade-in')     }
// 	})
// }, {
// 	threshold: 1
// });

// fadeInText.forEach(fader => {
// 	textFadeIn.observe(fader)
// })

// const beginObserver = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       console.log("visible");
//     } else {
//       console.log("Not VISIBLE");
//     }
//   });
// });

