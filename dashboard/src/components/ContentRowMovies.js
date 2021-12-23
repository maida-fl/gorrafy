import React from 'react';
import SmallCard from './SmallCard';

let productInDataBase = {
    color:   "primary",
    titulo: "Movies in Data Base",
    valor: 21,
    icono: "fas fa-film",
}

let amount ={
    color:   "success",
    titulo: "Total awards",
    valor: 79,
    icono: "fas fa-award",
}

let user = {
    color:   "warning",
    titulo: "Actors quantity",
    valor: 49,
    icono: "fas fa-user",
}

let cardProps = [productInDataBase,amount,user];


class ContentRowTop extends React.Component{
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
            this.setState({productList: products.meta})
        })
    }
    render(){
    return (
        <React.Fragment>
        {/*<!-- Content Row -->*/}
        <div className="row">
            {
                this.state.productList.map((producto,index)=>{
                    return <SmallCard  {...producto}  key= {index}/>
                })
            }      
        </div>
        </React.Fragment>
    )
}}
export default ContentRowTop;