import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { activateUser } from '@/actions/userActions';

const ActivationPage = () => {
  const [message, setMessage] = useState("");
  const router = useRouter();
  const { uid, token } = router.query;

  const dispatch = useDispatch();
  const userActivateReducer = useSelector((state) => state.userActivateReducer);
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
        router.push('/');
      }, 3000);
    } else if (error) {
      setMessage("Activation failed. Please try again.");
    }
  }, [success, error, router]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (uid && token) {
      dispatch(activateUser(uid, token));
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl mb-4">Account Activation</h1>
      {message && <p className="mb-4">{message}</p>}
      <button
        onClick={handleSubmit}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg"
        disabled={loading}
      >
        {loading ? 'Activating...' : 'Activate Account'}
      </button>
    </div>
  );
};

export default ActivationPage;
