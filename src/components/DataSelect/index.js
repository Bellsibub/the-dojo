import { useState, useEffect } from 'react';
import Select from 'react-select';

import { useSnapshotDB } from 'hooks/useSnapshotDB';

const DataSelect = ({ collection, onChange, ...props }) => {
  const { documents } = useSnapshotDB(collection);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (documents) {
      const options = documents.map((doc) => {
        return { value: doc, label: doc.displayName };
      });
      setData(options);
    }
  }, [documents]);

  return <Select options={data} onChange={onChange} {...props} />;
};

export default DataSelect;
