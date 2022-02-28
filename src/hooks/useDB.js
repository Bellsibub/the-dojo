import { useReducer, useState, useEffect } from 'react';
import { db, timestamp } from 'services/config';

// hooks
import { useAuth } from 'hooks/useAuth';

let initialState = {
  document: null,
  loading: false,
  error: null,
  success: null,
};

const dbReducer = (state, action) => {
  switch (action.type) {
    case 'IS_LOADING':
      return {
        document: null,
        loading: true,
        error: null,
        success: false,
      };
    case 'ADD_DOCUMENT':
      return {
        document: action.payload,
        loading: false,
        error: null,
        success: true,
      };
    case 'DELETE_DOCUMENT':
      return {
        document: null,
        loading: false,
        error: null,
        success: true,
      };
    case 'ERROR':
      return {
        document: null,
        loading: false,
        error: action.payload,
        success: false,
      };
    default:
      return state;
  }
};

export const useDB = (collection) => {
  const [response, dispatch] = useReducer(dbReducer, initialState);
  const [cancelled, setCancelled] = useState(false);
  const { user } = useAuth();

  // collection ref
  const ref = db.collection(collection);

  // only dispatch if not cancelled
  const dispatchNotCancelled = (action) => {
    if (!cancelled) {
      dispatch(action);
    }
  };

  // add document
  const addDocument = async (doc) => {
    dispatch({ type: 'IS_LOADING' });
    try {
      const createdAt = timestamp.fromDate(new Date());
      const newDoc = await ref.add({ ...doc, createdAt, uid: user.uid });
      dispatchNotCancelled({ type: 'ADD_DOCUMENT', payload: newDoc });
    } catch (error) {
      dispatchNotCancelled({ type: 'ERROR', payload: error.message || error });
      console.error(error);
    }
  };

  // delete document
  const deleteDocument = async (id) => {
    dispatch({ type: 'IS_LOADING' });
    try {
      await ref.doc(id).delete();
      dispatchNotCancelled({ type: 'DELETE_DOCUMENT' });
    } catch (error) {
      dispatchNotCancelled({ type: 'ERROR', payload: error.message || error });
      console.error(error);
    }
  };

  useEffect(() => {
    return () => setCancelled(true);
  }, []);

  return { response, addDocument, deleteDocument };
};
