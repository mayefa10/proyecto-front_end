import logo from './logo.svg';
import './App.css';
import { Link } from "react-router-dom";
import React, { Component } from 'react';


function Visinfo() {
return (
    <><nav classNameName="sb-topnav navbar navbar-expand navbar-dark bg-dark">
      {/* <!-- Navbar Brand--> */}
      <Link to="/index" classNameName="navbar-brand ps-3">
        TECNOSOFT
      </Link>
    </nav>
    <div className="card-body">
                  <table id="datatablesSimple" > 
                    <thead >
                      <tr>
                        <th>Nombre y apellido</th>
                        <th>Cargo</th>
                        <th>Horas extras trabajadas</th>
                        <th>Quincena</th>
                        <th>EPS</th>
                        <th>Documento</th>
                        <th>Fecha ingreso</th>
                        <th>Salario</th>
                      </tr>
                    </thead>

                    <tbody>
                      <td>Laura Perico</td>
                      <td>Ingeniero de sistemas</td>
                      <td>40</td>
                      <td>$2.000.000</td>
                      <td>Sursalud</td>
                      <td>33444444</td>
                      <td>2019/06/11</td>
                      <td>$4.000.000</td>
                      <tr></tr>
              </tbody>
              </table>
              </div>
              
    </>
);
}
export default Visinfo;