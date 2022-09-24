import "./App.css";

import { GiBoba } from "react-icons/gi";
import Product from "./Product";
import { data } from "./data";
import { nanoid } from "nanoid";

function DisplayAllProducts() {
  return data.map((item) => <Product data={item} key={nanoid()} />);
}

function App() {
  return (
    <div className="App-container">
      <div className="header-container">
        <div className="header__img-container">
          <GiBoba size="4rem" />
        </div>
        <div className="header__discription-container">
          <h2>About my company</h2>
          <p>
            Here is the random text that goes in the header about boba tea.Then
            i Keep writting and it doesnt stop becuase i keep going.
          </p>
        </div>
      </div>
      <div className="products">
        <DisplayAllProducts />
      </div>
    </div>
  );
}

export default App;
