import { AiOutlineCheckCircle } from "react-icons/ai";
import { useState } from "react";
import { nanoid } from "nanoid";

export default function Product(props) {
  const [isFlipped, setIsFlipped] = useState(false);
  console.log(isFlipped);

  const includes = props.data.includes.map((item) => (
    <p key={nanoid()}>
      <AiOutlineCheckCircle /> {item}
    </p>
  ));

  return (
    <div
      className="products-container"
      onClick={() => setIsFlipped((prev) => !prev)}
    >
      {isFlipped ? (
        <div
          className="products-container__product"
          style={{ borderColor: props.data.color }}
        >
          <h3>Includes</h3>
          <ul>{includes}</ul>
          <a href="https://www.etsy.com/">Buy</a>
          <p className="product__price">${props.data.price}</p>
        </div>
      ) : (
        <div
          className="products-container__product"
          style={{
            backgroundImage: props.data.img,
            backgroundSize: "cover",
            borderColor: props.data.color,
          }}
        >
          <h3 className="product__title">{props.data.title}</h3>
        </div>
      )}
    </div>
  );
}
