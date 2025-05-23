const slides = document.querySelector(".slides");
const lastSlide = document.querySelector(".last-slide");

const sliderWrapper = document.querySelector(".slider-wrapper");
const scrollEnd = document.querySelectorAll(".horizonal-scroll-end");


const beginObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log("VISIBLE");
        slides.classList.toggle("is-sticky");
        sliderWrapper.classList.add("border-animated");
      } else {
        console.log("NOT VISIBLE");
        slides.classList.remove("is-sticky");
        sliderWrapper.classList.remove("border-animated");
      }
    });
  },
  {
    threshold: .8,
    rootMargin: '0px 0px -10% 0px'
  }
);


const lastSlideObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log("lastSlide IsVisible");
      }
    });
  },
  {
    threshold: 1,
    rootMargin: "100px",
  }
);

const resetObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting && entry.boundingClientRect.top < 0) {
        // Section is above the viewport — user scrolled past it downwards
        slides.scrollTop = 0;
      }
    });
  },
  {
    threshold: 0,
  }
);



const fadeInText = document.querySelectorAll ('.text-fade-in-anim');
console.log(fadeInText);
	


beginObserver.observe(sliderWrapper);

// observer.observe(slidingSection);

lastSlideObserver.observe(lastSlide);


resetObserver.observe(slides);



const textFadeIn = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in')
    } else {
      return;
    }
  })
}, {
threshold: 1
}
);

const textFromBelow = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add('from-below');
    }
  })
}, {
  threshold: 1
})





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