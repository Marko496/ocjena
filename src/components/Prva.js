import React from 'react';
import Slika from './yes.jpg'
import {Link} from 'react-router-dom';




function Prva() {
return (
    <center>
<div classname="App">
    
    <h1>Stranica plitvicka jezera</h1>
    <img src={Slika}></img>
<br></br>
<p>Nacionalni park Plitvička jezera osobita je geološka i hidrogeološka krška pojava. Kompleks Plitvičkih jezera proglašen je nacionalnim parkom 8. travnja 1949. godine. To je najveći, najstariji i najposjećeniji hrvatski nacionalni park. Predstavlja šumovit planinski kraj u kojem se nalazi 16 jezera različite veličine, ispunjenima kristalnom modrozelenom vodom. Jezera dobivaju vodu od brojnih rječica i potoka, a međusobno su spojena kaskadama i slapovima. Sedrene barijere, koje su nastale u razdoblju od desetak tisuća godina, jedna su od temeljnih osobitosti Parka</p>
<Link to='/Druga' >Druga stranica</Link>

<br>
</br>

<align left><Link to='/Izradio' >Izradio</Link></align>
  
  


</div>
</center>





);





}
export default Prva;