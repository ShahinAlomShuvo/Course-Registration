const CartItem = ({ title, idx }) => {
  const { course_title, price } = title;
  return (
    <div className='pt-2 '>
      <span className='text-gray-600 '>
        {idx + 1}. {course_title}
      </span>
    </div>
  );
};

export default CartItem;
