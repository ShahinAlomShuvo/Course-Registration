import Cart from "./components/Cart";
import Courses from "./components/Courses";

const App = () => {
  return (
    <>
      <div className='grid grid-cols-4 container mx-auto'>
        <Courses></Courses>
        <Cart></Cart>
      </div>
    </>
  );
};

export default App;
