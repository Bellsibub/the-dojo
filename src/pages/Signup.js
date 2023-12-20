import _ from 'lodash';

// hooks
import { useSignup } from 'hooks/useSignup';

// components
import { Form, Card } from 'components';

const Signup = () => {
  const fields = {
    email: {
      type: 'email',
      title: 'Email:',
      value: '',
    },
    password: {
      type: 'password',
      title: 'Password:',
      value: '',
    },
    displayName: {
      type: 'text',
      title: 'Displayname:',
      value: '',
    },
    profilePic: {
      type: 'file',
      title: 'Profile picture:',
      value: null,
    },
  };
  const { signup, loading, error } = useSignup();

  const handleSubmit = (data) => {
    signup(_.mapValues(data, 'value'));
  };

  return (
    <Card central>
      <Form
        title="Sign up"
        _fields={fields}
        handleSubmit={handleSubmit}
        request={{ error, loading }}
        submitButton="Signup"
      />
    </Card>
  );
};

export default Signup;
