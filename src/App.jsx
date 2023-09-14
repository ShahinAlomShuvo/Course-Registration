import { useState } from "react";
import Cart from "./components/Cart";
import Courses from "./components/Courses";

const App = () => {
  const [addCourse, setAddCourse] = useState([]);
  const [credit, setCredit] = useState(0);

  const cartHandler = (course) => {
    const isExits = addCourse.find((exitCourse) => exitCourse.id === course.id);
    if (isExits) {
      return alert("You Already Purchase This Course");
    }

    setCredit(credit + course.credit);
    setAddCourse([...addCourse, course]);
  };
  return (
    <>
      <h1 className='text-center text-3xl font-bold py-10'>
        Course Registration
      </h1>
      <div className='grid grid-cols-4 gap-5 container mx-auto px-3 md:px-0'>
        <Courses cartHandler={cartHandler}></Courses>
        <Cart addCourse={addCourse} credit={credit}></Cart>
      </div>
    </>
  );
};

export default App;
