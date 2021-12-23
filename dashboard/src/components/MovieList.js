import React from 'react';
import {Link} from "react-router-dom"

function MovieList(props){
    return (
        <React.Fragment>
            <tr>
                <td>{props.id}</td>
                <td>{props.name}</td>
                <td>{props.price}</td>
                <td>{props.description}</td>
                <td>{props.categories.category}</td>
                <td><Link to={`/${props.detailURL}`}>Ver mas</Link></td>
            </tr>
        </React.Fragment>
    )
}
export default MovieList;