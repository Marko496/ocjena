import React from 'react';
import slikaa from './povijest.jpg'
import {Link} from 'react-router-dom';
import centar from './centar.jpg'

import ivo from './ivo.jpg'


function Druga() {
return (
    <center>
<div classname="Druga">
<h1>Povijest Plitvickih jezera</h1>
   <img src={slikaa}></img>
   <br></br>
    
    <p>Velika znanstvena vrijednost i atraktivnost područja Plitvičkih jezera najbolje se očituje kroz gotovo 170 godina dugu povijest znanstvenih istraživanja. Prva istraživanja provedena su 1850. godine kada major Franz Bach provodi limnološko mjerenje dubina, a dr. Josip Sauch prvo geološko istraživanje. Na inicijativu sveučilišnog profesora dr.sc. Gustava Janečeka  1893. osniva se Društvo za uređenje i poljepšanje Plitvičkih jezera i okolice, što daje dodatan poticaj znanstvenom radu i istraživanju.</p>
<br></br>
<img src={ivo}></img>
<p>Od brojnih zaljubljenika u Plitvička jezera i znanstvenih istraživača posebno se isticao akademik Ivo Pevalek. Profesor Pevalek je zbog svojih otkrića da su vodene mahovine i alge presudne za jedinstvenu geomorfologiju Plitvičkih jezera, te da je temeljni fenomen Plitvičkih jezera stvaranje sedrenih tvorevina jedan od najzaslužnijih pojedinaca za konačno proglašenje Plitvičkih jezera nacionalnim parkom, 8. travnja 1949. godine.</p>
<br></br>
<img src={centar}></img>
<p>Uslijed Domovinskog rata dolazi do prekida u znanstvenim istraživanjima, ali se veći broj projekata pokreće ubrzo, u godinama nakon rata, dok se rad Znanstvene stanice nastavlja u okviru Znanstveno-stručnog centra „dr. Ivo Pevalek“ otvorenog 2003. godine u novoizgrađenoj zgradi na lokaciji Velika Poljana.</p>
<Link to='/' >Nazad</Link>

</div>
</center>





);





}
export default Druga;