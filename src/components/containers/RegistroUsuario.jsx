import React  from "react";
import React, { Fragment, useState, useEffect, useRef } from "react";
import { v4 as uuidv4 } from 'uuid';
import logo from './logo.svg';
import './App.css';
import { Link} from "react-router-dom";
import React, {Component} from 'react';


const RegistroUsuario = () => {
return(

            <div id="layoutAuthentication_content">
                <main>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-7">
                                <div className="card shadow-lg border-0 rounded-lg mt-5">
                                    <div className="card-header"><h3 className="text-center font-weight-light my-4">Registro usuario</h3></div>
                                    <div className="card-body">
                                        <form>
                                            <div className="row mb-3">
                                                <div className="col-md-6">
                                                    <div className="form-floating mb-3 mb-md-0">
                                                        <input className="form-control" id="inputFirstName" type="text" placeholder="Enter your first name" />
                                                        <label for="inputFirstName">Nombre</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-floating">
                                                        <input className="form-control" id="inputLastName" type="text" placeholder="Enter your last name" />
                                                        <label for="inputLastName">Apellido</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-floating mb-3">
                                                <input className="form-control" id="inputEmail" type="email" placeholder="name@example.com" />
                                                <label for="inputEmail">Correo Elctr??nico</label>
                                            </div>
                                            <div className="row mb-3">
                                                <div className="col-md-6">
                                                    <div className="form-floating mb-3 mb-md-0">
                                                        <input className="form-control" id="inputPassword" type="password" placeholder="Create a password" />
                                                        <label for="inputPassword">Contrase??a</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-floating mb-3 mb-md-0">
                                                        <input className="form-control" id="inputPasswordConfirm" type="password" placeholder="Confirm password" />
                                                        <label for="inputPasswordConfirm">Confirmar Contrase??a</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-4 mb-0">
                                                <div className="d-grid"><a className="btn btn-primary btn-block" href="login.html">Crear Cuenta</a></div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="card-footer text-center py-3">
                                        <div className="small"><a href="login.html">No tiene cuenta? registrate</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
);
}
export default RegistroUsuario;
        