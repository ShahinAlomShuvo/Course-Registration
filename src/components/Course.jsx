import { faBookOpen, faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

const Course = ({ course, cartHandler }) => {
  const { course_title, course_banner, course_details, price, credit } = course;
  return (
    <>
      <div>
        <div className='card  bg-base-100 shadow-xl'>
          <figure className='px-2 md:px-4 pt-5'>
            <img src={course_banner} className='rounded-xl' />
          </figure>
          <div className='card-body px-2 md:px-4'>
            <h2 className='card-title text-base xl:text-[18px]'>
              {course_title}
            </h2>
            <p className='text-sm text-gray-500 '>{course_details}</p>
            {/* price & credit  */}
            <div className='flex flex-col gap-2 xl:flex-row justify-between py-2'>
              <div className='flex items-center gap-2 text-gray-600'>
                <FontAwesomeIcon className='text-2xl' icon={faDollarSign} />
                <span>Price: {price} </span>
              </div>
              <div className='flex items-center gap-2 text-gray-600'>
                <FontAwesomeIcon className='text-xl' icon={faBookOpen} />
                <span>Credit: {credit} hrs </span>
              </div>
            </div>
            <div className='card-actions pt-2'>
              <button
                onClick={() => cartHandler(course)}
                className='btn btn-info btn-block text-white'
              >
                Select
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Course.propTypes = {
  course: PropTypes.object.isRequired,
  cartHandler: PropTypes.func.isRequired,
};

export default Course;
