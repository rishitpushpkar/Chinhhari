import product1 from "../assets/Images/product1.webp";
import product2 from "../assets/Images/product2.webp";
import product3 from "../assets/Images/product3.webp";
import product4 from "../assets/Images/product4.webp";

import category1 from "../assets/Images/pexels-angela-roma-7364206.jpg";
import category2 from "../assets/Images/coleen-rivas-B2JCzlHRzY4-unsplash.jpg";
import category3 from "../assets/Images/11032018_TribedIndia_AK_01.jpg";
import category4 from "../assets/Images/2.png";
import category5 from "../assets/Images/pexels-angela-roma-73642064.jpg";
import category6 from "../assets/Images/5db811df6510bb46a02b3721_1572344287029.jpg";
import category7 from "../assets/Images/Sarhul-Painting1.png";
import category8 from "../assets/Images/mock_up_carved_decor.webp";

import { v4 as uuidv4 } from "uuid";

const products = [
  {
    id: uuidv4(),
    product_quantity: 1,
    product_name: "Wooden Horse Wall Rack",
    product_description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, velcury",
    type: "wooden",
    product_images: [
      product1,
      product2,
      product2,
      product2,
      product2,
      product3,
      product4,
      product4,
      product4,
      product4,
    ],
    product_price: 160,
  },
  {
    id: uuidv4(),
    product_quantity: 3,
    product_name: "Wooden Horse Wall Rack",
    product_description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, vel?",
    type: "wooden",
    product_images: [
      product1,
      product2,
      product2,
      product2,
      product2,
      product3,
      product4,
      product4,
      product4,
      product4,
    ],
    product_price: 160,
  },
  {
    id: uuidv4(),
    product_quantity: 49,
    product_name: "Wooden Horse Wall Rack",
    product_description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, vel?",
    type: "wooden",
    product_images: [
      product1,
      product2,
      product2,
      product2,
      product2,
      product3,
      product4,
      product4,
      product4,
      product4,
    ],
    product_price: 160,
  },
  {
    id: uuidv4(),
    product_quantity: 5,
    product_name: "Wrought Iron",
    type: "wroughtiron",
    product_description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, vel?",
    product_images: [
      product1,
      product2,
      product2,
      product2,
      product2,
      product3,
      product4,
      product4,
      product4,
      product4,
    ],
    product_price: 160,
  },
  {
    id: uuidv4(),
    product_quantity: 27,
    product_name: "Wrought Iron",
    type: "wroughtiron",
    product_description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, vel?",
    product_images: [
      product1,
      product2,
      product2,
      product2,
      product2,
      product3,
      product4,
      product4,
      product4,
      product4,
    ],
    product_price: 160,
  },
  {
    id: uuidv4(),
    product_quantity: 13,
    product_name: "Painting",
    type: "painting",
    product_description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, vel?",
    product_images: [
      product1,
      product2,
      product2,
      product2,
      product2,
      product3,
      product4,
      product4,
      product4,
      product4,
    ],
    product_price: 160,
  },
  {
    id: uuidv4(),
    product_quantity: 30,
    product_name: "Textiles Horse Wall Rack",
    type: "textiles",
    product_description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, vel?",
    product_images: [
      product1,
      product2,
      product2,
      product2,
      product2,
      product3,
      product4,
      product4,
      product4,
      product4,
    ],
    product_price: 160,
  },
  {
    id: uuidv4(),
    product_quantity: 3,
    product_name: "Textiles Horse Wall Rack",
    type: "textiles",
    product_description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, vel?",
    product_images: [
      product1,
      product2,
      product2,
      product2,
      product2,
      product3,
      product4,
      product4,
      product4,
      product4,
    ],
    product_price: 160,
  },
];
const product_filter = [
  { type: "WroughtIron", quantity: 20 },
  { type: "Wooden", quantity: 40 },
  { type: "Painting", quantity: 65 },
  { type: "Pottery", quantity: 75 },
  { type: "Textiles", quantity: 75 },
  { type: "Jewelry", quantity: 25 },
];

const ourCollection = [
  {
    title: "Gifting",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Estpariatur laudantium quae error ullam impedit.",
    image: category1,
  },
  {
    title: "Handcrafted",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Estpariatur laudantium quae error ullam impedit.",
    image: category2,
  },
  {
    title: "Metal Figures",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Estpariatur laudantium quae error ullam impedit.",
    image: category3,
  },
  {
    title: "Summer Collection",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Estpariatur laudantium quae error ullam impedit.",
    image: category4,
  },
  {
    title: "Festivals",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Estpariatur laudantium quae error ullam impedit.",
    image: category5,
  },
  {
    title: "Wrought Iron",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Estpariatur laudantium quae error ullam impedit.",
    image: category6,
  },
  {
    title: "Paintings",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Estpariatur laudantium quae error ullam impedit.",
    image: category7,
  },
  {
    title: "Home Decor",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Estpariatur laudantium quae error ullam impedit.",
    image: category8,
  },
];

export { products, product_filter, ourCollection };
