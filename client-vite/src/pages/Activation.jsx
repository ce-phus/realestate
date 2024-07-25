import React, { useEffect } from 'react'
import { FaCheckCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Spinner } from 'react-bootstrap';
import { Title } from '../components';
import { activateUser } from '../actions/userActions';
import { userActivateReducer } from '../reducers/userReducer';

const Activation = () => {
    const { uid, token } = useParams()
    const navigate = useNavigate()
    const dispatch  = useDispatch()

    const userActivateReducer = useSelector((state) => state,userActivateReducer);
    const { loading, error, success } = userActivateReducer;

    useEffect(() => {
        if (uid && token) {
          dispatch(activateUser(uid, token));
        }
      }, [dispatch, uid, token]);
    
    useEffect(() => {
        if (success) {
          setMessage("Your account has been activated! You can login now.");
          setTimeout(() => {
            navigate('/');
          }, 3000);
        } else if (error) {
          toast.error(message);
        }
      }, [success, error, navigate]);

      const handleSubmit = (e) => {
        e.preventDefault();
        if (uid && token) {
          dispatch(activateUser(uid, token));
          toast.success("Your account has been activated! You can login now");
        }
      };

  return (
    <div className='flex flex-col items-center justify-center h-screen bg-white dark:bg-dark pt-20'>
        <h1 className="text-2xl mb-4 dark:text-white">
        <FaCheckCircle />Activate your Acount</h1>
        { loading && <Spinner/> }
        <div className='flex'>
            <div className='flex flex-col text-center'>
                <button onClick={handleSubmit} className='px-2.5 py-1.5 bg-blue-500 hover:bg-blue-700 text-white rounded-lg'>
                    {loading ? 'Activating...' : 'Activate Account'}
                </button>
            </div>
        </div>
    </div>
  )
}

export default Activation