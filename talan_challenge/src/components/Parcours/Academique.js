
import React, { Fragment } from "react";


import { Timeline, Event } from "react-timeline-scribble";


function Academique() {

    return <div className="academique">
<Fragment>
    <h1>Academique</h1>
    <Timeline>
      <Event interval={"2013 – 2017"} title={"Cycle secondaire"} subtitle={"Lycée Pilote Nabeul-Lycée Abd Aziz Khouja "}>
      Baccalauréat en mathématiques avec mention bien
      </Event>
      <Event interval={"2017 – 2019"} title={"Cycle préparatoire"} subtitle={"IPEIT"}>
      Formation préparatoire au sein de l'institut
      préparatoire aux études d'ingénieurs de Tunis
      </Event>
      <Event interval={"2017 – 2019"} title={"Cycle d'ingenieurs"} subtitle={"ENIS"}>
      Formation académique en génie informatique au sein
      de l'école nationale d'ingénieurs de Sfax

      </Event>
      
    </Timeline>
  </Fragment>
    </div>
}
export default Academique