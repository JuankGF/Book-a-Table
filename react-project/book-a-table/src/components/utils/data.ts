type Testimonials = {
  author: string;
  user: string;
  text: string;
  rate: 1 | 2 | 3 | 4 | 5;
};

type Dish = {
  image: string;
  name: string;
  description: string;
  price: number;
};

const dishList = [
  {
    image:
      "https://domf5oio6qrcr.cloudfront.net/medialibrary/5850/e58e6784-ed7e-4aad-aa4f-822b8ae4bee4.jpg",
    name: "Greek Salad",
    price: 12.99,
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
  },
  {
    image:
      "https://myfoodbook.com.au/sites/default/files/collections_image/passage_to_asia_honey_soy_chicken_and_vegetable_skewers.jpg",
    name: "Bruchetta",
    price: 5.99,
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
  },
  {
    image:
      "https://joyfoodsunshine.com/wp-content/uploads/2022/04/easy-lemon-pie-recipe-8.jpg",
    name: "Lemon Dessert",
    price: 5.0,
    description:
      "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
  },
  {
    image:
      "https://www.saveur.com/uploads/2019/09/26/16-220816-PAMU-PESCADO_EMBARAZADO-018-scaled.jpg?auto=webp",
    name: "Grilled Fish",
    price: 20.0,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus.",
  },
  {
    image:
      "https://www.budgetbytes.com/wp-content/uploads/2013/07/Creamy-Spinach-Tomato-Pasta-bowl-500x500.jpg",
    name: "Pasta",
    price: 18.99,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus.",
  },
  {
    image:
      "https://kirbiecravings.com/wp-content/uploads/2019/09/easy-french-fries-1.jpg",
    name: "Peri Fries",
    price: 3.99,
    description:
      "Our Fries is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Toppings of tomato, veggies, beans, cured pork, or cheese are examples of variations. In Italy, a brustolina grill is frequently used to create bruschetta.",
  },
  {
    image:
      "https://www.seriouseats.com/thmb/e16lLOoVEix_JZTv7iNyAuWkPn8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2014__09__20140918-jamie-olivers-comfort-food-insanity-burger-david-loftus-f7d9042bdc2a468fbbd50b10d467dafd.jpg",
    name: "The Burger",
    price: 6.99,
    description:
      "Our Burger is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Toppings of tomato, veggies, beans, cured pork, or cheese are examples of variations. In Italy, a brustolina grill is frequently used to create bruschetta.",
  },
  {
    image:
      "https://joyfoodsunshine.com/wp-content/uploads/2022/04/mexian-ground-beef-tacos-recipe-9.jpg",
    name: "The Wrap",
    price: 12.99,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus.",
  },
] as Dish[];

const testimonials = [
  {
    author: "Sara Lopez",
    user: "sara72",
    rate: 5,
    text: "“Seriously cannot stop thinking about the Turkish Mac n’ Cheese!!”",
  },
  {
    author: "John Doe",
    user: "johnny_utah",
    rate: 5,
    text: "“We had such a great time celebrating my grandmothers bitthday!”",
  },
  {
    author: "Jane Doe",
    user: "jane_fl",
    rate: 5,
    text: "“Best Feta Salad in town. Flawless everytime!”",
  },
  {
    author: "Wang Mae",
    user: "wang_mae",
    rate: 5,
    text: "“Such a chilled out atmosphere - love it!”",
  },
] as Testimonials[];

export { dishList, testimonials };
