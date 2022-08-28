import React from 'react'
import { useRecoilState } from 'recoil';
import { handleSide } from '../../atoms/sideAtom';
import Footer from './Footer'
import Header from './Header'

const Main = ({children}) => {
  const [handleside, sethandleside] = useRecoilState(handleSide);

  return (
    <div
    className={handleside == true 
      ? "float-right relative h-full mainContent "
     :"float-right relative h-full sm:mainContent w-full "}
    
  >
     <Header />
 
    {children}
    <Footer />
  </div>
  )
}

export default Main