import { useContext } from 'react';

import { AuthDispatchContextType } from 'context/auth/authContext/AuthContext.types';
import { AuthDispatchContext } from 'context/auth/authContext/AuthContext';

export const useAuthDispatch: () => AuthDispatchContextType = () => {
  const context = useContext(AuthDispatchContext);

  if (context === undefined) {
    throw new Error('useAuthDispatch must be used within an AuthContextController');
  }

  return context;
};
