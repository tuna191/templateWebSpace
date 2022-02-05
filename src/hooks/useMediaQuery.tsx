import { useEffect, useState } from 'react'

 /*
 cơ chế của useMediaQuery nhân vào một cái chuỗi sau do check từ cái chuỗi đó vs 
 cái kích thước hiện tại của màn
 
 trả về true nếu cái chuỗi nhận vào khớp vs kích thước hiện tại và ngược lại sẽ là false
 */

// nhập vào một cái chuỗi
const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false); // khởi tạo giá trị cho matches là false

  useEffect(() => {
    const media = window.matchMedia(query); // nhận vào cái chuỗi để set
    console.log(media)
   
    // desktop  khi ma lan dau mo web len se roi vào day
    // vì sẽ có hai chuỗi nó sẽ đc lọi vào đây
    // chuỗi 90em và 48em
    // khi mà chuỗi 90em lọi vào thì matches sẽ là true và matches của useState là false nên cần set lại matches

  if(media.matches !== matches){
    setMatches(media.matches)
  }
  // theo dõi liên tục cái matches
    const listener = () => setMatches(media.matches);
    window.addEventListener('resize', listener);
    return () => window.removeEventListener('resize', listener);
  }, [matches, query]) // chỉ theo dõi sự thay đổi của matches và query

  return matches;
}

export default useMediaQuery;