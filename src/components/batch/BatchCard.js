import React, { Component } from 'react'
import './Batches.css'
import fermenter from './fermenter.jpg'
import Moment from 'react-moment';
// import { Link } from "react-router-dom"

export default class Batch extends Component {

    render() {  

        return (
            <React.Fragment>
                <section className="batch">

                    <div key={this.props.batch.recipe.id} className="batch-card">
                        <div className="batch-card-body">
                        <img src={fermenter} className="batch-card-image" alt="fermenter" />
                        <h5 className="batchRecipe">{this.props.batch.recipe.name}</h5>
                        {/* <Link className="batch-nav-link text-dark" to={`/batches/${this.props.batch.recipe.id}`}>
                                <h5 className="batch-detail-button">Read More...</h5></Link> */}
                        <h6 className="batchStartDate">Start Date: <em>{this.props.batch.startDate}</em> </h6> 
                        <h6 className="batchBottleDate"><span>Ready to bottle: <em>{this.props.batch.bottleDate}</em> (<em><Moment fromNow>{this.props.batch.bottleDate}</Moment></em>)</span></h6> 
                        <h6 className="batchEndDate"><span>Ready to drink: <em>{this.props.batch.endDate}</em> (<em><Moment fromNow>{this.props.batch.endDate}</Moment></em>)</span></h6> 

                </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}