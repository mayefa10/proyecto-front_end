import React from "react";
import React, { Fragment, useState, useEffect, useRef } from "react";
import { v4 as uuidv4 } from 'uuid';
import logo from './logo.svg';
import './App.css';

const RecuperarContra = () => {
    return (
       
            <div id="layoutAuthentication_content">
                <main>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-5">
                                <div className="card shadow-lg border-0 rounded-lg mt-5">
                                    <div className="card-header"><h3 className="text-center font-weight-light my-4">Recuperar Contraseña</h3></div>
                                    <div className="card-body">
                                        <div className="small mb-3 text-muted">Ingrese su dirección de correo electrónico y le enviaremos un enlace para restablecer su contraseña.</div>
                                        <form>
                                            <div className="form-floating mb-3">
                                                <input className="form-control" id="inputEmail" type="email" placeholder="name@example.com" />
                                                <label for="inputEmail">Correo Elctrónico</label>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                                                <a className="small" href="login.html">Retornal a login</a>
                                                <a className="btn btn-primary" href="login.html">Restablecer la contraseña</a>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="card-footer text-center py-3">
                                        <div className="small"><a href="register.html">Necesito una cuenta? Inscribirse!</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>



            );
    }
  export default RecuperarContra;
