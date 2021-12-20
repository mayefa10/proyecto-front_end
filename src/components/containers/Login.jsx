import React  from "react";
import React, { Fragment, useState, useEffect, useRef } from "react";
import logo from './logo.svg';
import './App.css';
import { v4 as uuidv4 } from 'uuid';

const Login = () => {
    return(
        <div id="layoutAuthentication">
        <div id="layoutAuthentication_content">
            <main>
                <div classNameName="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-5">
                            <div className="card shadow-lg border-0 rounded-lg mt-5">
                                <div className="card-header"><h3 className="text-center font-weight-light my-4">Login</h3></div>
                                <div className="card-body">
                                    <form>
                                        <div className="form-floating mb-3">
                                            <input className="form-control" id="inputEmail" type="email" placeholder="name@example.com" />
                                            <label for="inputEmail">Correo Elctrónico</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input className="form-control" id="inputPassword" type="password" placeholder="Password" />
                                            <label for="inputPassword">Contraseña</label>
                                        </div>
                                        <div className="form-check mb-3">
                                            <input className="form-check-input" id="inputRememberPassword" type="checkbox" value="" />
                                            <label className="form-check-label" for="inputRememberPassword">Recordar Contraseña</label>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                                            <a className="small" href="password.html">Olvido su contraseña?</a>
                                            <a className="btn btn-primary" href="index.html">Login</a>
                                        </div>
                                    </form>
                                </div>
                                <div className="card-footer text-center py-3">
                                    <div className="small"><a href="register.html">Necasiata una cuenta? Registrese!</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
        </div>
   




    );
}
export default Login;