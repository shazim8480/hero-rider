import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <div className="bg-indigo-50 px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-28">
      <div className="flex flex-col items-center justify-between lg:flex-row">
        <div className="mb-12 lg:max-w-lg lg:pr-5 lg:mb-0">
          <div className="max-w-xl mb-6">
            <h4 className="max-w-lg mb-6 text-3xl font-bold text-indigo-800 sm:text-4xl sm:leading-none">
              Be it Renting Cars,
              <span className="mt-2 block"> or Learning to Drive, </span>
              <span className="inline-block text-indigo-400 mt-3">
                Hero Rider is Here!
              </span>
            </h4>
            <p className="text-base text-gray-700 md:text-lg">
              Hero Rider brings you the facility to rent your cars, as well as
              provides the best packages to learn how to drive by yourself...be
              sure to make the best use of "Earning by Learning!"
            </p>
          </div>
        </div>
        <div className="px-8 pt-6 pb-5 text-center border border-indigo-200 rounded lg:w-2/5">
          <div className="mb-5 font-bold tracking-wider text-indigo-900 text-xl uppercase">
            Ready to GIve the Best Rental Service?
          </div>
          <div className="flex justify-center w-full mb-3 ">
            <Link
              to="/be-a-rider"
              className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-indigo-600 hover:bg-indigo-700 focus:shadow-outline focus:outline-none"
            >
              <div className="flex items-center ">
                <div className="uppercase mr-3 font-semibold text-indigo-50">
                  Register as a Rider
                </div>
              </div>
            </Link>
          </div>
          <p className="max-w-md px-5 mb-3 text-sm text-gray-600 sm:text-sm md:mb-5">
            Being a Rider and making money has never been this much easy! Just
            follow some simple steps and you're good to go!
          </p>
          <div className="flex items-center w-full mb-5">
            <hr className="flex-1 border-gray-300" />
            <div className="px-3 text-xs text-gray-500 sm:text-sm">or</div>
            <hr className="flex-1 border-gray-300" />
          </div>
          <Link
            to="/driving-lesson-learner"
            className="inline-flex tracking-wide text-indigo-700 items-center justify-center w-full h-12 px-6 font-semibold transition duration-200 bg-white border border-gray-300 rounded md:w-auto hover:bg-gray-100 focus:shadow-outline focus:outline-none uppercase"
          >
            Learn Driving Lessons
          </Link>
        </div>
      </div>
    </div>
  );
};
