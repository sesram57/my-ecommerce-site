import "./App.css";
import Navbar from "../Navbar/Navbar";
const PageList = [
  { id:1, name: "Produits", adress: "./products.html" },
  { id:2, name: "Catégories", adress: "./categories.html" },
  { id:3, name: "Panier", adress: "./cart.html" },
  { id:4, name: "Contact", adress: "./contacts.html" },
];

function App() {
  return (
    <>
      <Navbar pageList={PageList} />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </>
  );
}

export default App;
