
import ShoppingList from "./components/ShoppingList";


function App() {
  
  return (
    <>
      <div className=" min-h-screen bg-custom-bg bg-cover bg-center font-sans">
      <h1 className="text-4xl font-bold text-center mb-4 pt-12 text-neutral-600">Shopping List</h1>
      <ShoppingList />
    </div>
    </>
  );
}

export default App;
