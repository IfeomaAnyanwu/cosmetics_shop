// IMPORT ALL IMAGES FROM PROJECT IMAGE FOLDER
import img1 from "./images/img1.PNG";
import img2 from "./images/img2.PNG";
import img3 from "./images/img3.PNG";
import img4 from "./images/img4.PNG";
import img5 from "./images/img5.PNG";
import img6 from "./images/img6.PNG";
import img7 from "./images/img7.PNG";
import img8 from "./images/img8.PNG";
import img9 from "./images/img9.PNG";
import img10 from "./images/img10.PNG";
import img11 from "./images/img11.PNG";
import img12 from "./images/img12.PNG";
import img13 from "./images/img13.PNG";
import img14 from "./images/img14.PNG";
import img15 from "./images/img15.PNG";
import img16 from "./images/img16.PNG";
import img17 from "./images/img17.PNG";
import img18 from "./images/img18.PNG";
import img19 from "./images/img19.PNG";
import img20 from "./images/img20.PNG";
import img21 from "./images/img21.PNG";
import img22 from "./images/img22.PNG";
import img23 from "./images/img23.PNG";
import img24 from "./images/img24.PNG";
import img25 from "./images/img25.PNG";
import img26 from "./images/img26.PNG";
import img27 from "./images/img27.PNG";
import img28 from "./images/img28.PNG";
import img29 from "./images/img29.PNG";
import img30 from "./images/img30.PNG";
import img31 from "./images/img31.PNG";
import img32 from "./images/img32.PNG";
import img33 from "./images/img33.PNG";
import img34 from "./images/img34.PNG";
import img35 from "./images/img35.PNG";
import img36 from "./images/img36.PNG";
import img37 from "./images/img37.PNG";
import img38 from "./images/img38.PNG";
import img39 from "./images/img39.PNG";
import img40 from "./images/img40.PNG";

// CREATE ARRAY OF PRODUCT OBJECTS

export const productDetails = [
  {
    id: "p1",
    name: "ICE Ceramide Moisturizing Cream",
    quantity: 1,
    price: "8.99",
    description:
      "Creamy cheddar cheese mixed with perfectly cooked macaroni, topped with crispy breadcrumbs. A classic comfort food.",
    image: img1,
    cat: "skin",
  },
  {
    id: "p2",
    name: "RESIST Intensive Repair Cream",
    quantity: 1,
    price: "12.99",
    description:
      "A classic pizza with fresh mozzarella, tomatoes, and basil on a thin and crispy crust.",
    image: img2,
    cat: "skin",
  },
  {
    id: "p3",
    name: "Wake up with me",
    quantity: 1,
    price: "7.99",
    description:
      "Romaine lettuce tossed in Caesar dressing, topped with croutons and parmesan shavings.",
    image: img3,
    cat: "skin",
  },
  {
    id: "p4",
    name: "TULA Skin Care",
    quantity: 1,
    price: "10.99",
    description:
      "Al dente spaghetti with a creamy sauce made from egg yolk, pecorino cheese, pancetta, and pepper.",
    image: img4,
    cat: "skin",
  },
  {
    id: "p5",
    name: "Clarins",
    quantity: 1,
    price: "9.99",
    description:
      "A juicy veggie patty served on a whole grain bun with lettuce, tomato, and a tangy sauce.",
    image: img5,
    cat: "skin",
  },
  {
    id: "p6",
    name: "Nature's Bounty",
    quantity: 1,
    price: "10.99",
    description:
      "Tender grilled chicken breast with avocado, bacon, lettuce, and honey mustard on a toasted bun.",
    image: img6,
    cat: "hair",
  },
  {
    id: "p7",
    name: "Kirkland Signature Adult Vitamin C Gummies",
    quantity: 1,
    price: "17.99",
    description:
      "Succulent steak cooked to your preference, served with crispy golden fries and herb butter.",
    image: img7,
    cat: "health",
  },
  {
    id: "p8",
    name: "Olehenriskenr",
    quantity: 1,
    price: "15.99",
    description:
      "An assortment of fresh sushi rolls including California, Spicy Tuna, and Eel Avocado.",
    image: img8,
    cat: "skin",
  },
  {
    id: "p9",
    name: "Peter Thomas Roth | Potent-C Power Serum",
    quantity: 1,
    price: "13.99",
    description:
      "Tender pieces of chicken simmered in a rich and aromatic curry sauce, served with basmati rice.",
    image: img9,
    cat: "skin",
  },
  {
    id: "p10",
    name: "Peter Thomas Roth",
    quantity: 1,
    price: "11.99",
    description:
      "A hearty bowl filled with quinoa, roasted veggies, avocado, and a tahini dressing.",
    image: img10,
    cat: "skin",
  },
  {
    id: "p11",
    name: "Paula's Choice",
    quantity: 1,
    price: "19.99",
    description:
      "A Spanish delicacy filled with saffron-infused rice, shrimp, mussels, and chorizo.",
    image: img11,
    cat: "skin",
  },
  {
    id: "p12",
    name: "Murad Essential-C Toner",
    quantity: 1,
    price: "8.99",
    description:
      "Fluffy pancakes stacked high, drizzled with maple syrup and topped with fresh berries.",
    image: img12,
    cat: "skin",
  },
  {
    id: "p13",
    name: "Bath & Body",
    quantity: 1,
    price: "12.99",
    description:
      "A warming bowl of ramen with miso broth, tender pork, soft-boiled egg, and green onions.",
    image: img13,
    cat: "skin",
  },
  {
    id: "p14",
    name: "Purlisse Dragonfruit",
    quantity: 1,
    price: "9.99",
    description:
      "Three soft tortillas filled with seasoned beef, fresh salsa, cheese, and sour cream.",
    image: img14,
    cat: "skin",
  },
  {
    id: "p15",
    name: "Chocolate Brownie",
    quantity: 1,
    price: "5.99",
    description:
      "A rich and fudgy brownie, topped with a scoop of vanilla ice cream and chocolate sauce.",
    image: img15,
    cat: "bath",
  },
  {
    id: "p16",
    name: "Lobster Bisque",
    quantity: 1,
    price: "14.99",
    description:
      "A creamy soup made from lobster stock, aromatic vegetables, and a touch of brandy.",
    image: img16,
    cat: "hair",
  },
  {
    id: "p17",
    name: "Mushroom Risotto",
    quantity: 1,
    price: "13.99",
    description:
      "Creamy Arborio rice cooked with a medley of wild mushrooms and finished with parmesan.",
    image: img17,
    cat: "hair",
  },
  {
    id: "p18",
    name: "Eggplant Parmesan",
    quantity: 1,
    price: "11.99",
    description:
      "Layers of breaded eggplant, marinara sauce, and melted mozzarella and parmesan cheeses.",
    image: img18,
    cat: "hair",
  },
  {
    id: "p19",
    name: "Lemon Cheesecake",
    quantity: 1,
    price: "6.99",
    description:
      "A creamy cheesecake with a tangy lemon flavor, served on a crumbly biscuit base.",
    image: img19,
    cat: "hair",
  },
  {
    id: "p20",
    name: "Falafel Wrap",
    quantity: 1,
    price: "8.99",
    description:
      "Crispy falafels wrapped in a warm pita with lettuce, tomatoes, and a tahini sauce.",
    image: img20,
    cat: "bath",
  },
  {
    id: "p21",
    name: "Falafel Wrap",
    quantity: 1,
    price: "8.99",
    description:
      "Crispy falafels wrapped in a warm pita with lettuce, tomatoes, and a tahini sauce.",
    image: img21,
    cat: "bath",
  },
  {
    id: "p22",
    name: "Margherita Pizza",
    quantity: 1,
    price: "12.99",
    description:
      "A classic pizza with fresh mozzarella, tomatoes, and basil on a thin and crispy crust.",
    image: img22,
    cat: "skin",
  },
  {
    id: "p23",
    name: "Caesar Salad",
    quantity: 1,
    price: "7.99",
    description:
      "Romaine lettuce tossed in Caesar dressing, topped with croutons and parmesan shavings.",
    image: img23,
    cat: "nail",
  },
  {
    id: "p24",
    name: "Spaghetti Carbonara",
    quantity: 1,
    price: "10.99",
    description:
      "Al dente spaghetti with a creamy sauce made from egg yolk, pecorino cheese, pancetta, and pepper.",
    image: img24,
    cat: "nail",
  },
  {
    id: "p25",
    name: "Veggie Burger",
    quantity: 1,
    price: "9.99",
    description:
      "A juicy veggie patty served on a whole grain bun with lettuce, tomato, and a tangy sauce.",
    image: img25,
    cat: "nail",
  },
  {
    id: "p26",
    name: "Grilled Chicken Sandwich",
    quantity: 1,
    price: "10.99",
    description:
      "Tender grilled chicken breast with avocado, bacon, lettuce, and honey mustard on a toasted bun.",
    image: img26,
    cat: "bath",
  },
  {
    id: "p27",
    name: "Steak Frites",
    quantity: 1,
    price: "17.99",
    description:
      "Succulent steak cooked to your preference, served with crispy golden fries and herb butter.",
    image: img27,
    cat: "skin",
  },
  {
    id: "p28",
    name: "Sushi Roll Platter",
    quantity: 1,
    price: "15.99",
    description:
      "An assortment of fresh sushi rolls including California, Spicy Tuna, and Eel Avocado.",
    image: img28,
    cat: "bath",
  },
  {
    id: "p29",
    name: "Chicken Curry",
    quantity: 1,
    price: "13.99",
    description:
      "Tender pieces of chicken simmered in a rich and aromatic curry sauce, served with basmati rice.",
    image: img29,
    cat: "bath",
  },
  {
    id: "p30",
    name: "Vegan Buddha Bowl",
    quantity: 1,
    price: "11.99",
    description:
      "A hearty bowl filled with quinoa, roasted veggies, avocado, and a tahini dressing.",
    image: img30,
    cat: "hair",
  },
  {
    id: "p31",
    name: "Mac & Cheese",
    quantity: 1,
    price: "8.99",
    description:
      "Creamy cheddar cheese mixed with perfectly cooked macaroni, topped with crispy breadcrumbs. A classic comfort food.",
    image: img31,
    cat: "hair",
  },
  {
    id: "p32",
    name: "Margherita Pizza",
    quantity: 1,
    price: "12.99",
    description:
      "A classic pizza with fresh mozzarella, tomatoes, and basil on a thin and crispy crust.",
    image: img32,
    cat: "hair",
  },
  {
    id: "p33",
    name: "Caesar Salad",
    quantity: 1,
    price: "7.99",
    description:
      "Romaine lettuce tossed in Caesar dressing, topped with croutons and parmesan shavings.",
    image: img33,
    cat: "bath",
  },
  {
    id: "p34",
    name: "Spaghetti Carbonara",
    quantity: 1,
    price: "10.99",
    description:
      "Al dente spaghetti with a creamy sauce made from egg yolk, pecorino cheese, pancetta, and pepper.",
    image: img34,
    cat: "bath",
  },
  {
    id: "p35",
    name: "Veggie Burger",
    quantity: 1,
    price: "9.99",
    description:
      "A juicy veggie patty served on a whole grain bun with lettuce, tomato, and a tangy sauce.",
    image: img35,
    cat: "bath",
  },
  {
    id: "p36",
    name: "Grilled Chicken Sandwich",
    quantity: 1,
    price: "10.99",
    description:
      "Tender grilled chicken breast with avocado, bacon, lettuce, and honey mustard on a toasted bun.",
    image: img36,
    cat: "health",
  },
  {
    id: "p37",
    name: "Steak Frites",
    quantity: 1,
    price: "17.99",
    description:
      "Succulent steak cooked to your preference, served with crispy golden fries and herb butter.",
    image: img37,
    cat: "health",
  },
  {
    id: "p38",
    name: "Sushi Roll Platter",
    quantity: 1,
    price: "15.99",
    description:
      "An assortment of fresh sushi rolls including California, Spicy Tuna, and Eel Avocado.",
    image: img38,
    cat: "health",
  },
  {
    id: "p39",
    name: "Chicken Curry",
    quantity: 1,
    price: "13.99",
    description:
      "Tender pieces of chicken simmered in a rich and aromatic curry sauce, served with basmati rice.",
    image: img39,
    cat: "health",
  },
  {
    id: "p40",
    name: "Vegan Buddha Bowl",
    quantity: 1,
    price: "11.99",
    description:
      "A hearty bowl filled with quinoa, roasted veggies, avocado, and a tahini dressing.",
    image: img40,
    cat: "health",
  },
];
