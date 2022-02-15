import Informations from "./Informations";
import Image from "./Image"
import Entete from "./Entete"
import Cv from "./Cv"
import Description from "./Description";






function ProfilContenu() {

    return(
    <div className="profilcontenu"  >
    
    <Entete />
    <Informations />
    <Cv />
    <Image />
    <Description />

    
    
    </div>) 
    

}
export default ProfilContenu