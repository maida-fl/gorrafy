import React, {Component} from 'react';
import CantidadUsuarios from './CantidadUsuariosContent';


class CantidadUsuariosContent extends React.Component{
    constructor(){
        super()
        this.state = {
            usersList: 0,
        }
    }

    componentDidMount(){
        fetch("/api/users")
        .then(respuesta => {
            return respuesta.json()
        })
        .then(users => {
            // console.log(users.data.length);
            this.setState({usersList: users.data.length})
        })
    }
    render(){
    return (
        <React.Fragment>
        {/* {console.log(this.state.userList)} */}
        {/*<!-- Content Row -->*/}
        <div className="col-md-4 mb-4">
                <div className={`card border-left-primary shadow h-100 py-2`}>
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className={`text-xs font-weight-bold text-primary text-uppercase mb-1`}>Cantidad de Usuarios</div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">{(this.state.usersList)}</div>
                            </div>
                            <div className="col-auto">
                                <i className={`fa-2x text-gray-300`}></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* {
                this.state.productList.map((producto,index)=>{
                    return <CantidadUsuarios  {...producto}  key= {index}/>
                })
            }       */}
        </React.Fragment>
    )
}}
export default CantidadUsuariosContent;