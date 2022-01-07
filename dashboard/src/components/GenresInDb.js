import React, { Component } from 'react';
import Genre  from './Genre';


class GenresInDb extends Component{
    constructor(){
        super()
        this.state = {
            genresList: []
        }
    }

    componentDidMount(){
        fetch("/api/genres")
        .then(respuesta => {
            return respuesta.json()
        })
        .then(genres => {
            this.setState({genresList: genres.data})
        })
    }

    cambiarFondo(){
        let background = document.querySelector('.fondoCaja');
        background.classList.toggle('bg-secondary')
    }

    render(){
    return (
        <React.Fragment>
                {/*<!-- Categories in DB -->*/}
                <div className="col-lg-6 mb-4">						
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 onMouseOver={() => this.cambiarFondo()} className="m-0 font-weight-bold text-gray-800">Categorías</h6>
                        </div>
                        <div className="card-body fondoCaja">
                            <div className="row">
                                {
                                    this.state.genresList.map((genre,index)=>{
                                        return  <Genre  {...genre}  key={index} />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
           
        </React.Fragment>
    )
    }
}
export default GenresInDb;