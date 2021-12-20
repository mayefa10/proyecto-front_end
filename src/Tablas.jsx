import React from "react";
const Tablas =  (props) => {
  const {data} = props;
    return(
        <div className="card mb-4" >
                <div className="card-header">
                  <i className="fas fa-table me-1"></i>
                  Nomina tecnosoft
                </div>
                <div className="card-body">
                  <table id="datatablesSimple" > 
                    <thead>
                      <tr>
                        <th>Id</th>
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
                      {
                      data.map(user => {
                        return(
                      <tr>
                      <td>{ user.id }</td>
                      <td>{ user.nombreap }</td>
                      <td>{ user.cargo }</td>
                      <td>{ user.horaexs }</td>
                      <td>{ user.salario }</td>
                      <td>{ user.salud }</td>
                      <td>{ user.documento }</td>
                      <td>{ user.fechaingr }</td>
                      <td>{ user.salariototal }</td>
                      </tr>
                      
                      
                        )
                      })
                      
                    }
                   </tbody>
                      </table>
                    </div>
                </div>  
    );
}
export default Tablas;