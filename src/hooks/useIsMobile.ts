import { useState, useEffect } from 'react';

export const CUTOFF_WIDTH_SM = 680; // according to tailwindcss 'sm' breakpoint

function useIsMobile(cutoff: number = CUTOFF_WIDTH_SM): boolean {
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