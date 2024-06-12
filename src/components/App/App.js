import "./App.css";
import Navbar from "../MyNavbar/MyNavbar";
import Authentication from "../Authentication/Authentication";
// const PageList = [
//   { id:1, name: "Produits", adress: "./products.html" },
//   { id:2, name: "Catégories", adress: "./categories.html" },
//   { id:3, name: "Panier", adress: "./panier.html" },
//   { id:4, name: "Contact", adress: "./contacts.html" },
//   { id:5, name: "Catégories_Details", adress: "./detailscategorie.html" },
// ];

function App() {
  

  return (
    <>
      {/* <Navbar pageList={PageList} /> */}
      <Navbar />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </>
  );
}

export default App;
