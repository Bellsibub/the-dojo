import _ from 'lodash';

// hooks
import { useLogin } from 'hooks/useLogin';

// components
import { Form } from 'components';

const Login = () => {
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
  };
  const { login, error, loading } = useLogin();

  const handleSubmit = (data) => {
    login(_.mapValues(data, 'value'));
  };

  return (
    <Form
      _fields={fields}
      title="Login"
      handleSubmit={handleSubmit}
      request={{ error, loading }}
      submitButton="Login"
    />
  );
};

export default Login;
