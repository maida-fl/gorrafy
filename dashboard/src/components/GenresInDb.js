import React, { Component } from 'react';
import Genre  from './Genre';


class GenresInDb extends Component{
    constructor(){
        super()
        this.state = {
            categoriesList: []
        }
    }

    componentDidMount(){
        fetch("/api/products")
        .then(respuesta => {
            return respuesta.json()
        })
        .then(categories => {
            // console.log(categories.meta[0].countByCategory)
            let newCategories = Object.keys(categories.meta[0].countByCategory);
            this.setState({categoriesList: newCategories})
        })
    }
    render(){
    return (
        <React.Fragment>
            {console.log(this.state.categoriesList)}
                {/*<!-- Categories in DB -->*/}
                {/* <div className="col-lg-6 mb-4">						
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-gray-800">Categorías</h6>
                        </div> */}
                        {/* <div className="card-body fondoCaja">
                            <div className="row">
                                {   
                                    this.state.categoriesList.map((category,index)=>{
                                        return  <Genre  {...category}  key={index} />
                                    })
                                }
                            </div>
                        </div> */}
                    {/* </div>
                </div> */}
           
        </React.Fragment>
    )
    }
}
export default GenresInDb;