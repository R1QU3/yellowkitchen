import "./lib/Splide.js";

// Create Splide instances for restaurants and specialties
const splideRestaurants = new Splide('.splide.splide-rest', {
  type: 'loop',
  focus: 'center',
  perPage: 3,
  breakpoints: {
    768: {
      perPage: 2
    },
    668: {
      perPage: 1
    }
  }
});

const splideSpecialities = new Splide('.splide.splide-speci', {
  type: 'loop',
  focus: 'center',
  perPage: 8,
  perMove: 1,
  fixedWidth: "136px",
  fixedHeight: "136px",
  breakpoints: {
    968: {
      perPage: 6
    },
    768: {
      perPage: 3
    },
    568: {
      perPage: 1,
      fixedWidth: "70%"
    }
  }
});

// Mount Splide instances
splideRestaurants.mount();
splideSpecialities.mount();