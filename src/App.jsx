import { GiBoba } from "react-icons/gi";
import Product from "./Product";
import { data } from "./data";
import { nanoid } from "nanoid";
import "./input.css";

function DisplayAllProducts() {
  return data.map((item) => <Product data={item} key={nanoid()} />);
}

function App() {
  return (
    <div className="bg-blue-500 w-screen h-screen">
      <GiBoba size="" />
      <div className="">
        <h2 className="text-lg">About my company</h2>
        <p>
          Here is the random text that goes in the header about boba tea.Then i
          Keep writting and it doesnt stop becuase i keep going.
        </p>
      </div>
      <div className="">
        <DisplayAllProducts />
      </div>
    </div>
  );
}

export default App;
