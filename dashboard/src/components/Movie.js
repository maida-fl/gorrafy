import React from 'react';

import MovieList from './MovieList';

class Movie extends React.Component{
    constructor(){
        super()
        this.state = {
            productList: []
        }
    }

    componentDidMount(){
        fetch("/api/products")
        .then(respuesta => {
            return respuesta.json()
        })
        .then(products => {
            this.setState({productList: products.data})
        })
    }
	render(){
    return(
        <React.Fragment>
				    {/*<!-- PRODUCTS LIST -->*/}
					<h1 className="h3 mb-2 text-gray-800">Listado de productos</h1>
					
					{/*<!-- DataTales Example -->*/}
					<div className="card shadow mb-4">
						<div className="card-body">
							<div className="table-responsive">
								<table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
									<thead>
										<tr>
                                            <th>Id</th>
                                            <th>Nombre</th>
                                            <th>Precio</th>
                                            <th>Descripcion</th>
                                            <th>Categoria</th>
                                            <th>Ver mas</th>
										</tr>
									</thead>
									{/* <tfoot>
										<tr>
                                            <th>Id</th>
                                            <th>Titulo</th>
                                            <th>Calificación</th>
                                            <th>Premios</th>
                                            <th>Duración</th>
                                            <th>Ver mas</th>
										</tr>
									</tfoot> */}
									<tbody>
										{
											this.state.productList.map((product,index)=>{
												return  <MovieList  {...product}  key={index} />
											})
										}
									</tbody>
								</table>
							</div>
						</div>
					</div>            
        </React.Fragment>
    )
}}
export default Movie;