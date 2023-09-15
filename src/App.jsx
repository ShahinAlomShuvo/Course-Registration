import { useState } from "react";
import Cart from "./components/Cart";
import Courses from "./components/Courses";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";

const App = () => {
  const [addCourse, setAddCourse] = useState([]);
  const [credit, setCredit] = useState(0);
  const [price, setPrice] = useState(0);
  const [remainingCredit, setRemainingCredit] = useState(20);

  const cartHandler = (course) => {
    const isExits = addCourse.find((exitCourse) => exitCourse.id === course.id);
    if (isExits) {
      return toast.warning("You Already Select This Course");
    }

    if (remainingCredit - course.credit < 0) {
      return toast.error("Insufficient Credit");
    }
    if (credit + course.credit > 20) {
      return toast.error("You Over Your Credit");
    }
    setRemainingCredit(remainingCredit - course.credit);
    setCredit(credit + course.credit);
    setPrice(price + course.price);
    setAddCourse([...addCourse, course]);
  };
  return (
    <>
      <Header></Header>
      <div className='grid grid-cols-4 gap-5 container mx-auto px-3 md:px-0'>
        <Courses cartHandler={cartHandler}></Courses>
        <Cart
          addCourse={addCourse}
          remainingCredit={remainingCredit}
          credit={credit}
          price={price}
        ></Cart>
      </div>
      <ToastContainer position='top-center' autoClose={5000} />
    </>
  );
};

export default App;
