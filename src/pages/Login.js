import _ from 'lodash';

// hooks
import { useLogin } from 'hooks/useLogin';

// components
import { Form, Card } from 'components';

const Login = () => {
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
  };
  const { login, error, loading } = useLogin();

  const handleSubmit = (data) => {
    login(_.mapValues(data, 'value'));
  };

  return (
    <Card central>
      <Form
        _fields={fields}
        title="Login"
        handleSubmit={handleSubmit}
        request={{ error, loading }}
        submitButton="Login"
      />
    </Card>
  );
};

export default Login;
