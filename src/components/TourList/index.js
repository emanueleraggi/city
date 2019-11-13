import React, { Component } from "react"
import "./TourList.scss";
import Tour from "../Tour/Tour";
import {tourData} from '../tourData'

export default class TourList extends Component {

    state = {
        tours: tourData
    };


    removeTour = id => {
        const{tours} = this.state;
        // with a filter we are getting a new array. Only the tours that do not match the id are going to be placed in the 
        // new array sorteTours
        const sortedTours = tours.filter(tour=>tour.id !==id);
        this.setState({
            tours: sortedTours
        });
    };


    render() {
        const {tours} = this.state; // I have access to the tours array            


        return (
            <section className="tourlist">
                {tours.map(tour => {
                    return(
                        // for removing the tour I m only passing the reference.
                        // We are not putting parethesis, meaning that the tour is not going to be rendered. Again only
                        // passing the reference to the method (this.removeTour)
                        <Tour key={tour.id} tour = {tour} removeTour={this.removeTour}/>
                    )
                })}
            </section>
        )
    }
}
