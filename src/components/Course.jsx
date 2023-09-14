import { faBookOpen, faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Course = ({ course }) => {
  const { course_title, course_banner, course_details, price, credit } = course;
  return (
    <>
      <div className=''>
        <div className='card  bg-base-100 shadow-xl'>
          <figure className='px-4 pt-5'>
            <img src={course_banner} className='rounded-xl' />
          </figure>
          <div className='card-body px-4'>
            <h2 className='card-title text-[18px]'>{course_title}</h2>
            <p className='text-sm text-gray-500 '>{course_details}</p>
            <div className='flex justify-between py-2'>
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
              <button className='btn btn-info btn-block text-white'>
                Select
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Course;
