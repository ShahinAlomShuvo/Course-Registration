import PropTypes from "prop-types";
const CartItem = ({ title, idx }) => {
  const { course_title } = title;
  return (
    <div className='pt-2 '>
      <span className='text-gray-600 '>
        {idx + 1}. {course_title}
      </span>
    </div>
  );
};
CartItem.propTypes = {
  title: PropTypes.object.isRequired,
  idx: PropTypes.number.isRequired,
};

export default CartItem;
