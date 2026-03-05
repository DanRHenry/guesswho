export const categories = {
  faces: {
    overrides: {
      earrings: "earrings",
      smiling: "a smile",
      dreadlocks: "dreadlocks",
      closed: "a straight face",
      hat: "a hat on",
      smiling: "a smile",
      glasses: "glasses on",
      ponytail: "a ponytail",
    },
    items: [
      {
        name: "Sofia",
        descriptions: {
          ears: ["earrings", { description: "different desc for ears" }],
          hair: ["brown"],
          eyes: ["green"],
          skin: ["brown"],
          mouth: ["visible teeth"],
            shirt: ["visible"]
        },
        portrait: "assets/faces/sofia.jpg",
      },
      {
        name: "Olivia",
        descriptions: {
          ears: ["hidden"],
          hair: ["black", "red", "ponytail", "multicolored"],
          eyes: ["brown"],
          skin: ["brown"],
          mouth: ["closed", "a straight face"],
          shirt: ["visible"],
        },
        portrait: "assets/faces/olivia.jpg",
      },
      {
        name: "Mike",
        descriptions: {
          ears: [""],
          hair: ["black", "short"],
          hat: ["red", "beanie", "toque"],
          eyes: ["brown"],
          skin: ["white"],
          mouth: ["visible teeth"],
          shirt: ["visible"]
        },
        portrait: "assets/faces/mike.jpg",
      },
      {
        name: "Ben",
        descriptions: {
          hair: ["brown"],
          eyes: ["brown", "glasses"],
          skin: ["white"],
        },
        portrait: "assets/faces/ben.jpg",
      },
      {
        name: "Jordan",
        descriptions: {
          skin: ["brown"],
          eyes: ["brown"],
          ears: ["earrings"],
          ["facial hair"]: ["beard", "moustache"],
          hair: ["short", "multicolored", "yellow", "black"],
        },
        portrait: "assets/faces/jordan.jpg",
      },
      {
        name: "Laura",
        descriptions: {
          eyes: ["green"],
          skin: ["brown"],
          hair: ["black", "long"],
          ears: ["earrings"],
          mouth: ["visible teeth"],
        },
        portrait: "assets/faces/laura.jpg",
      },
        {
          name: "Farah",
          descriptions: {
            eyes: ["blue"],
            skin: ["brown"],
            hair: ["black", "ponytail"],
          },
          portrait: "assets/faces/farah.jpg",
        },
        {
          name: "Katie",
          descriptions: {
            eyes: ["blue"],
            skin: ["white"],
            hair: ["ponytail", "blonde", "yellow"],
            hat: ["green", "baseball cap"],
          },
          portrait: "assets/faces/katie.jpg",
        },
        {
          name: "David",
          descriptions: {
            hair: ["blonde", "yellow", "short"],
            skin: ["white"],
            ["facial hair"]: ["moustache"],
            hat: ["blue", "baseball cap"],
            mouth: ["visible teeth"],
            shirt: ["visible"]
          },
          portrait: "assets/faces/david.jpg",
        },
      //   {
      //     name: "Amy",
      //     descriptions: {},
      //     portrait: "assets/faces/amy.jpg",
      //   },
      //   {
      //     name: "Al",
      //     descriptions: {},
      //     portrait: "assets/faces/al.jpg",
      //   },
      //   { name: "Sam", descriptions: {}, portrait: "assets/faces/sam.jpg" },
      //   { name: "Joe", descriptions: {}, portrait: "assets/faces/joe.jpg" },
      //   { name: "Gabe", descriptions: {}, portrait: "assets/faces/gabe.jpg" },
      //   {
      //     name: "Eric",
      //     descriptions: {},
      //     portrait: "assets/faces/eric.jpg",
      //   },
      //   { name: "Emma", descriptions: {}, portrait: "assets/faces/emma.jpg" },
      //   {
      //     name: "Carmen",
      //     descriptions: {},
      //     portrait: "assets/faces/carmen.jpg",
      //   },
      //   {
      //     name: "Daniel",
      //     descriptions: {},
      //     portrait: "assets/faces/daniel.jpg",
      //   },
      //   {
      //     name: "Rachel",
      //     descriptions: {},
      //     portrait: "assets/faces/rachel.jpg",
      //   },
      //   { name: "Nick", descriptions: {}, portrait: "assets/faces/nick.jpg" },
      //   { name: "Lily", descriptions: {}, portrait: "assets/faces/lily.jpg" },
      //   {
      //     name: "Leo",
      //     descriptions: {},
      //     portrait: "assets/faces/leo.jpg",
      //   },
      //   {
      //     name: "Liz",
      //     descriptions: {},
      //     portrait: "assets/faces/liz.jpg",
      //   },
      //   {
      //     name: "Mia",
      //     descriptions: {},
      //     portrait: "assets/faces/mia.jpg",
      //   },
    ],
  },
  foods: {
    overrides: {
      stem: "a stem",
    },
    items: [
      {
        name: "cheese",
        descriptions: {
          type: ["dairy"],
          color: ["yellow"],
        },
        portrait: "assets/foods/cheese.jpg",
      },
      {
        name: "strawberry",
        descriptions: {
          type: ["fruit", "produce"],
          color: ["red"],
          stem: ["stem"],
        },
        portrait: "assets/foods/strawberry.jpg",
      },
      {
        name: "tomato",
        descriptions: {
          type: ["fruit", "produce"],
          color: ["red"],
        },
        portrait: "assets/foods/tomato.avif",
      },
      {
        name: "bread",
        descriptions: {},
        portrait: "assets/foods/bread.jpeg",
      },
      {
        name: "pickle",
        descriptions: {},
        portrait: "assets/foods/pickle.jpeg",
      },
      {
        name: "blueberry",
        descriptions: {},
        portrait: "assets/foods/blueberry.png",
      },
      {
        name: "kiwi",
        descriptions: {},
        portrait: "assets/foods/kiwi.webp",
      },
      {
        name: "pineapple",
        descriptions: {
          stem: ["stem"],
        },
        portrait: "assets/foods/pineapple.jpg",
      },
      {
        name: "apple",
        descriptions: {
          stem: ["stem"],
          color: ["red"],
        },
        portrait: "assets/foods/apple.webp",
      },
      {
        name: "peach",
        descriptions: {},
        portrait: "assets/foods/peach.jpg",
      },
      {
        name: "pizza",
        descriptions: {},
        portrait: "assets/foods/pizza.jpg",
      },
      {
        name: "mac & cheese",
        descriptions: {},
        portrait: "assets/foods/mac&cheese.jpg",
      },
      {
        name: "chicken nugget",
        descriptions: {},
        portrait: "assets/foods/chicken_nugget.jpeg",
      },
      {
        name: "pretzel",
        descriptions: {},
        portrait: "assets/foods/pretzel.jpg",
      },
      {
        name: "brownie",
        descriptions: {},
        portrait: "assets/foods/brownie.jpg",
      },
      {
        name: "cake",
        descriptions: {},
        portrait: "assets/foods/cake.webp",
      },
    ],
  },
};
