import { useEffect, useState } from 'react'

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    console.log(media)
    // desktop  khi ma lan dau mo web len se roi vào day
   if(media.matches !== matches){
     setMatches(media.matches)
   }
    const listener = () => setMatches(media.matches);
    window.addEventListener('resize', listener);
    return () => window.removeEventListener('resize', listener);
  }, [matches, query])

  return matches;
}

export default useMediaQuery;