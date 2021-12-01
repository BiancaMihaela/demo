import React,{useState} from 'react'
import './tech.scss'
import data from './data.json'
import './link'
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

const getColor=(activitate)=>{
    if(activitate<2) return 'red';
    return ' ';
};


function Tabel() {
    
    const[members, setMembers]=useState(data);

    return (
        <div className="tabel-container">
                <div className="links"> 
                    <li class="active">
                        <a href="tech">Tech</a>
                    </li>
                    <li class>
                        <a href="promo">Promovare</a>
                    </li>
                    <li class>
                        <a href="rep">Reprezentare</a>
                    </li>
                    <li class>
                        <a href="hr">HR</a>
                    </li>
                
                </div>
            <table className="table" id="table-to-xls">
                <ReactHTMLTableToExcel
                    id="xls-button"
                    className="download"
                    table="table-to-xls"
                    filename="tablexls"
                    sheet="tablexls"
                    buttonText="Export Data to Excel Sheet"/>
                   
                    <thead>
                        <tr>
                            <th>Nume</th>
                            <th>Prenume</th>
                            <th>Numar perioade active</th>
                            <th>Numar de telefon</th>
                            <th>Adresa de mail institutionala</th>
                            <th>Platforme</th>
                        </tr>
                    </thead> 

                <tbody>
                    {members.map((member)=>
                        <tr style={{color:getColor(member.activitate)}}>
                            <td>{member.nume}</td>
                            <td>{member.prenume}</td>
                            
                            <td>{member.activitate}</td>
                            <td>{member.nr_tel}</td>
                            <td>{member.mail}</td>
                        </tr>
                    
                    )}
                    
                </tbody>
            </table>
            
            <div className="save-button">
                <button> save changes</button>
            </div>
            
            
            
        </div>
    )
}

export default Tabel
