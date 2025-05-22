import { useEffect, useCallback } from 'react';
import { ZeroFuncType } from 'src/functions';

const useEscKeydown = (callback: ZeroFuncType) => {
  const escFunction = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') callback();
  }, []);

  useEffect(() => {
    callback();
    document.addEventListener('keydown', escFunction, false);
    return () => {
      document.removeEventListener('keydown', escFunction, false);
    };
  }, [escFunction]);
};

export default useEscKeydown;
