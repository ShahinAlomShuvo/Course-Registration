import CartItem from "./CartItem";

const Cart = ({ addCourse }) => {
  return (
    <>
      <div className='col-span-2 md:col-span-1  '>
        <div className='card  bg-base-100 shadow-xl px-2'>
          <div className='py-4 border-b-2 text-[18px] text-blue-500 font-bold'>
            <h2>Credit Hour Remaining 7 hr</h2>
          </div>
          <h2 className='text-[18px] font-bold pt-4'>Course Name</h2>
          <div className='py-5'>
            {addCourse.map((title, idx) => (
              <CartItem key={title.id} title={title} idx={idx}></CartItem>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
