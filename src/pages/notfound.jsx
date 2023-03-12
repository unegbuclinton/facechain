import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
const Notfound = () => {
  return (
    <Layout>
      <div className="flex items-center justify-center w-screen h-screen bg-black ">
        <div className="px-40 py-10 mt-20 bg-[#7676801F] rounded-md shadow-xl">
          <div className="flex flex-col items-center">
            <h1 className="font-bold text-primary text-9xl ">404</h1>
            <h6 className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
              <span className="text-red-500">Oops!</span> Page not found
            </h6>
            <p className="mb-8 text-center text-gray-500 md:text-lg">
              The page you’re looking for doesn’t exist.
            </p>
            <Link to={'/home'}>
              <div className=" text-black flex justify-center items-center py-3 w-[132px] bg-primary rounded-[40px] text-[14px] font-bold">
                <FontAwesomeIcon icon="home" /> &nbsp; Go home
              </div>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Notfound;
