
import React, { Fragment } from "react";


import { Timeline, Event } from "react-timeline-scribble";





function Professionnel() {






    return <div className="professionnel">
        <Fragment>
    <h1>Professionnel</h1>
    <Timeline>
      <Event interval={"aout 2020"} title={"Stagiaire"} subtitle={"Tunisie Télécom, Nabeul "}>
      Développement d'une application desktop <br></br>pour gérer
      les carnets de bord des véhicules au<br></br> sein de Tunisie
      Télécom en QT

      </Event>
      <Event interval={"aout 2021"} title={"Stagiaire"} subtitle={"OneGateAfrica "}>
      Développement du partie back-end d'un microservice<br></br>
      (gestion de la relation client-CRM) d'un projet<br></br>
      ERP(Progiciel de Gestion Intégré) en SpringBoot
      </Event>
      
    </Timeline>
  </Fragment>


    </div>
}
export default Professionnel