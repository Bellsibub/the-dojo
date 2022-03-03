import _ from 'lodash';

// hooks
import { useSignup } from 'hooks/useSignup';

// components
import { Form } from 'components';

const Signup = () => {
  const fields = {
    email: {
      type: 'email',
      title: 'Email:',
      value: '',
      updateType: 'normal',
    },
    password: {
      type: 'password',
      title: 'Password:',
      value: '',
      updateType: 'normal',
    },
    displayName: {
      type: 'text',
      title: 'Displayname:',
      value: '',
      updateType: 'normal',
    },
    profilePic: {
      type: 'file',
      title: 'Profile picture:',
      value: null,
      updateType: 'file',
    },
  };
  const { signup, loading, error } = useSignup();

  const handleSubmit = (data) => {
    signup(_.mapValues(data, 'value'));
  };

  return (
    <Form
      title="Sign up"
      _fields={fields}
      handleSubmit={handleSubmit}
      request={{ error, loading }}
      submitButton="Signup"
    />
  );
};

export default Signup;
