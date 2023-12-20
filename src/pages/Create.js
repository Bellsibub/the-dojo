import _ from 'lodash';
import { timestamp } from 'services/config';
import { useHistory } from 'react-router-dom';

// hooks
import { useAuth } from 'hooks/useAuth';
import { useDB } from 'hooks/useDB';

// components
import { Form, Card } from 'components';

const Create = () => {
  const fields = {
    title: {
      type: 'text',
      title: 'Name:',
      value: '',
    },
    details: {
      type: 'textarea',
      title: 'Details:',
      value: '',
    },
    dueDate: {
      type: 'date',
      title: 'Due date:',
      value: '',
    },
    category: {
      type: 'select',
      title: 'Category:',
      value: '',
      options: [
        { value: 'development', label: 'Development' },
        { value: 'design', label: 'Design' },
        { value: 'sales', label: 'Sales' },
        { value: 'marketing', label: 'Marketing' },
      ],
    },
    assignedUsers: {
      type: 'dataselect',
      title: 'Assign to:',
      value: '',
      datacollection: 'users',
    },
  };

  const { user } = useAuth();
  const { response, addDocument } = useDB('projects');
  const history = useHistory();

  const handleSubmit = async (data) => {
    const formData = _.mapValues(data, 'value');
    const newProject = {
      ...formData,
      assignedUsers: _.map(formData.assignedUsers, (user) => {
        return {
          displayName: user.value.displayName,
          id: user.value.id,
          photoURL: user.value.photoURL,
        };
      }),
      dueDate: timestamp.fromDate(new Date(formData.dueDate)),
      comments: [],
      createdBy: {
        displayName: user.displayName,
        id: user.uid,
        photoURL: user.photoURL,
      },
    };

    await addDocument(newProject);
    if (!response.error) {
      history.push('/');
    }
  };

  return (
    <Card page>
      <Form
        _fields={fields}
        title="Create a new project"
        handleSubmit={handleSubmit}
        request={response}
        submitButton="Add Project"
      />
    </Card>
  );
};

export default Create;
