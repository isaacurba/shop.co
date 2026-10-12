import versace from "../../assets/images/icons/versace.svg" 
import zara from "../../assets/images/icons/zara-logo-1 1.svg" 
import gucci from "../../assets/images/icons/gucci-logo-1 1.svg" 
import prada from "../../assets/images/icons/prada-logo-1 1.svg" 
import calvin from "../../assets/images/icons/calvin-klein.svg" 


const Brand = () => {
  return (
    <>
        <div className="bg-black flex flex-wrap items-center justify-around gap-6 px-4 py-6">          <img src={versace} alt="Versace" />
          <img src={zara} alt="Zara" className="w-20 sm:w-24"/>
          <img src={gucci} alt="Gucci" className=""/>
          <img src={prada} alt="Prada" className=""/>
          <img src={calvin} alt="Calvin Klein" className=""/>
        </div>
    </>
  )
}

export default Brand    