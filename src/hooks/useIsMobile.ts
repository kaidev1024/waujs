import { useState, useEffect } from 'react';

function useIsMobile(cutoff: number = 680): boolean {
  // 680 is small in tailwindcss
  const [isMobile, setIsMobile] = useState(window.innerWidth < cutoff);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < cutoff);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [cutoff]);

  return isMobile;
}

export default useIsMobile;