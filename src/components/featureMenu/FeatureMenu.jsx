import salad from "../../assets/salad.jpg";
import bruschetta1 from "../../assets//bruschetta1.jpg";
import creme from "../../assets/creme.jpg";
import { MdDeliveryDining } from "react-icons/md";
import { Link } from "react-router-dom";
import "./FeatureMenu.css";
import Card from "../card/Card";

const FeatureMenu = () => {
  const cardMenu = [
    {
      image: salad,
      title: "Greek Salad",
      price: "$12.99",
      description:
        "The famous Greek salad of crispy lettuce, peppers, olives and our Chicago styled feta cheese, garnished with crunchy garlic, rosemary croutons.",
      order: "Order a delivery"
    },
    {
      image: bruschetta1,
      title: "Bruschetta",
      price: "$5.99",
      description:
        "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil; made perfect for an evening dinner.",
      order: "Order a delivery"
    },
    {
      image: creme,
      title: "Lemon Dessert",
      price: "$5.00",
      description:
        "This comes straight from Grandma's recipe book. Every last ingredient has been sourced and is as authentic as can be imagined.",
      order: "Order a delivery"
    }
  ];
  return (
    <div className="feature-menu">
      {cardMenu.map((item) => {
        const { image, title, price, description, order } = item;
        return (
          <Card
            image={image}
            title={title}
            price={price}
            description={description}
            order={order}
          />
        );
      })}
    </div>
  );
};

export default FeatureMenu;
