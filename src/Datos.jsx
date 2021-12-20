import logo from './logo.svg';
import './App.css';
import { Link } from "react-router-dom";
import React, { Component } from 'react';


function Datos() {

  return (

    <><nav classNameName="sb-topnav navbar navbar-expand navbar-dark bg-dark">
      {/* <!-- Navbar Brand--> */}
      <Link to="/index" classNameName="navbar-brand ps-3">
        TECNOSOFT
      </Link>
    </nav>
      <body className="bg-primary">
        <div id="layoutAuthentication">
          <div id="layoutAuthentication_content">
            <main>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-7">
                    <div className="card shadow-lg border-0 rounded-lg mt-5">
                      <div className="card-header"><h3 className="text-center font-weight-light my-4">Registro de nómina individual</h3></div>
                      <div className="card-body">
                        <form>
                          <div className="row mb-3">
                            <div className="col-md-6">
                              <div className="form-floating mb-3 mb-md-0">
                                <input className="form-control" id="inputNombre" type="text" placeholder="Enter your first name" />
                                <label for="inputFirstName">Nombre y apellido</label>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-floating">
                                <input className="form-control" id="inputLastName" type="text" placeholder="Enter your last name" />
                                <label for="inputLastName">Cargo</label>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-floating">
                                <input className="form-control" id="inputLastName" type="text" placeholder="Enter your last name" />
                                <label for="inputLastName">Salud</label>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-floating">
                                <input className="form-control" id="inputLastName" type="text" placeholder="Enter your last name" />
                                <label for="inputLastName">Documento</label>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-floating">
                                <input className="form-control" id="inputLastName" type="text" placeholder="Enter your last name" />
                                <label for="inputLastName">Pension</label>
                              </div>
                            </div>

                            <div className="col-md-6">
                              <div className="form-floating">
                                <input className="form-control" id="inputLastName" type="text" placeholder="Enter your last name" />
                                <label for="inputLastName">Fecha de contratación</label>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-floating">
                              <input className="form-control" id="inputLastName" type="text" placeholder="Enter your last name" />
                              <label for="inputLastName">Quincena</label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-floating">
                              <input className="form-control" id="inputLastName" type="text" placeholder="Enter your last name" />
                              <label for="inputLastName">Salario basico</label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-floating">
                              <input className="form-control" id="inputLastName" type="text" placeholder="Enter your last name" />
                              <label for="inputLastName">Horas extras</label>
                            </div>
                          </div>
                          <div classNameName="form-check"  >
                            <input classNameName="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label classNameName="form-check-label" for="flexCheckDefault">
                              Vacaciones
                            </label>
                          </div>
                          <div classNameName="form-check">
                            <input classNameName="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
                            <label classNameName="form-check-label" for="flexCheckChecked">
                              Remuneración de Horas usentes
                            </label>
                          </div>
                          <br />
            <div className="col-6">
              <label className="visually-hidden" for="autoSizingSelect">Preference</label>
              <select className="form-select" id="autoSizingSelect">
                <option selected>Remunareción  sin extras</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <br />
            <div className="col-6">
              <label className="visually-hidden" for="autoSizingSelect">Preference</label>
              <select className="form-select" id="autoSizingSelect">
                <option selected>Remunareción  con extras </option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>

            </div>

                          
                            
                          <div className="mt-4 mb-0">
                            <div className="d-grid"><a className="btn btn-primary btn-block" href="login.html">Registrar Nómina</a></div>
                          </div>
                        </form>
                      </div>
                      <div className="card-footer text-center py-3">
                        <div className="small"><a href="login.html">Have an account? Go to login</a></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>

            
                      </div>
        </div>


      </body>
    </>
  );
}
export default Datos;
