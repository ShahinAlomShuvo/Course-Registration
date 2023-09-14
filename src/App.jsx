import Cart from "./components/Cart";
import Courses from "./components/Courses";

const App = () => {
  return (
    <>
      <h1 className='text-center text-3xl font-bold py-10'>
        Course Registration
      </h1>
      <div className='grid grid-cols-4 gap-5 container mx-auto px-3 md:px-0'>
        <Courses></Courses>
        <Cart></Cart>
      </div>
    </>
  );
};

export default App;
