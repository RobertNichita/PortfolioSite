import './carouselcontainer.scss';
import $ from "jquery"
import React from 'react';
import ArrowR from "../../assets/ArrowR.png"
import ArrowL from "../../assets/ArrowL.png"
import {ProjectPage} from './projectspage.js'
import {ExperiencePage} from './exppage.js'
import {HobbyPage} from './hobbypage.js'

export class Carousel extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            rotation : 0
        }
        var self = this;
        // $(".container").on('swiperight',this.rotate("n"));
        // $(".container").on('swipeleft',this.rotate("p"));
        // $("ProjectPage").on('click',this.rotate("n"));
        $(window).on('load',() => {
            $(document).on('swipeRight',{d:"p",state: this.state},this.rotate);
            $(document).on('swipeLeft',{d:"n",state: this.state},this.rotate);
            $(".next").on('click',{d:"n",state: this.state}, this.rotate);
            $(".prev").on('click',{d:"p",state: this.state}, this.rotate);
            console.log($(".next"));
        })
        
        // $("HobbyPage").on('click',this.rotate("n"));
        // if($(".element").length){
        //     $(".element").on("click",this.rotate("n"));
        // }else{
        //     console.log("no elements")
        // }
    }

    rotate(e){
        var state = e.data.state;
        if(e.data.d === "n"){
            state.rotation = state.rotation - 120;
        }
        if(e.data.d === "p"){
            state.rotation = state.rotation + 120;
        }
        $('.carousel').css({
            "-webkit-transform": "rotateY("+state.rotation+"deg)",
            "-moz-transform": "rotateY("+state.rotation+"deg)",
            "-o-transform": "rotateY("+state.rotation+"deg)",
            "transform": "rotateY("+state.rotation+"deg)"
        });
        e.stopPropagation();
    }

    render(){
        return(
            <div class="top">
                <div class="container">
                    <div class="carousel">
                        <div class="element"><ProjectPage/></div>
                        <div class="element"><ExperiencePage/></div>
                        <div class="element"><HobbyPage/></div>
                    </div>
                </div>
                <div class="next"><img src={ArrowR}/></div>
                <div class="prev"><img src={ArrowL}/></div>
            </div>
        );
    }

}

