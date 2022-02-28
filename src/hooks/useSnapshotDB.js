import { useEffect, useState, useRef } from 'react';
import { db } from 'services/config';

export const useSnapshotDB = (collection, _query, _orderBy) => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // creating a mutable object to avoid infinte loop in side effect
  const query = useRef(_query).current;
  const orderBy = useRef(_orderBy).current;

  useEffect(() => {
    setLoading(true);
    let ref = db.collection(collection);

    if (query) ref = ref.where(...query);
    if (orderBy) ref = ref.orderBy(...orderBy);

    const unsubscribe = ref.onSnapshot(
      (snapshot) => {
        let results = [];
        snapshot.docs.forEach((doc) =>
          results.push({ ...doc.data(), id: doc.id })
        );

        // update state
        setDocuments(results);
        setError(null);
        setLoading(false);
      },
      (error) => {
        setError("Could not fetch data");
        setLoading(false);
        console.error(error);
      }
    );

    return () => unsubscribe();
  }, [collection, query, orderBy]);

  return { error, documents, loading };
};
