import React from "react";
import './App.css';
import { Link } from "react-router-dom";
const Body = () => {
    return(
    <div id="layoutSidenav_content">
          <main>
            <div className="container-fluid px-4">
              <h1 className="mt-4">Nomina</h1>
              <ol className="breadcrumb mb-4">
                <li className="breadcrumb-item active">Personal</li>
              </ol>
              <div className="row">
                <div className="col-xl-3 col-md-6">
                  <div className="card bg-primary text-white mb-4">
                    <div className="card-body">Datos de nomina individual</div>
                    <div className="card-footer d-flex align-items-center justify-content-between">
                      <Link to="/Visinfo" className="small text-white stretched-link" href="#">Ver detalles</Link>
                      <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                    </div>
                  </div>
                </div>


                <div className="col-xl-3 col-md-6">
                  <div className="card bg-danger text-white mb-4">
                    <div className="card-body">Reportes y solicitudes</div>
                    <div className="card-footer d-flex align-items-center justify-content-between">
                      <a className="small text-white stretched-link" href="#">Ver detalles</a>
                      <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                    </div>
                  </div>
                </div>
                </div>
              </div>
              </main>
              </div>
              
              );
}
export default Body;