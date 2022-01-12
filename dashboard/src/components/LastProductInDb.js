import React, { Component } from 'react';

class LastProductInDb extends Component {
    constructor() {
        super();
        this.state = {
            lastProduct: {}
        };
    }    
    componentDidMount(){
        fetch('/api/products/last')
        .then(respuesta => {
            return respuesta.json()
        })
        .then(product => {
            // console.log(producto)
            this.setState({lastProduct:product.data})
        })
        .catch(error => console.log(error))
    }
    render(){
        return (
            <div className="row">
            {/*<!-- Last Movie in DB -->*/}
            <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800">{this.state.lastProduct.name}</h5>
                    </div>
                    <div className="card-body">
                        <div className="text-center">
                            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={`img/${this.state.lastProduct.image}`} alt={this.state.lastProduct.image}/>
                        </div>
                        <p>{this.state.lastProduct.description}</p>
                        <a className="btn btn-danger" target="_blank" rel="nofollow" href="/" style={{backgroundColor: '#212a2f', border:'#212a2f' }}>Ver detalle de producto</a>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default LastProductInDb
