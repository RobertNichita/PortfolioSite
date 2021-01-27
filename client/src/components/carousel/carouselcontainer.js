import './carouselcontainer.scss'
import $ from "jquery"
import React from 'react'
import ArrowR from "../../assets/ArrowR.png"
import ArrowL from "../../assets/ArrowL.png"
import {ProjectPage} from './projectspage.js'
import {ExperiencePage} from './exppage.js'
import {HobbyPage} from './hobbypage.js'
import {General} from '../../utils/general.js'
import PageIndication from './pageindication'

export class Carousel extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            rotation : 0,
            front : 0,
            root : $('html, body'),
            self: this
        }

        $(window).on('load',() => {
            $('.element').on('swiperight', {d:"n",state: this.state}, this.rotate);
            $(".next").on('click',{d:"n",n: 1, state: this.state}, this.rotate);
            $(".prev").on('click',{d:"p",n: 1, state: this.state}, this.rotate);
            $(window).on("scroll",{offBottom: this.props.floatOffsetBottom, state: this.state},this.positionFloat);
        })
        
    }

    positionFloat(e){
        let scroll = $(window).scrollTop();
        let carouselTop =  ($('.carousel').offset().top);
        let floatHeight = $('.base-float').height();
        let cssProp = {"top": ""}
        
        if(scroll < carouselTop - $(window).height() + floatHeight){
            cssProp.top = 0;
        }else if(scroll > carouselTop + $('.carousel').height() - $(window).height()){
            cssProp.top = $('.carousel').height()-floatHeight;
        }else{
            cssProp.top = Math.trunc(scroll + $(window).height() - carouselTop-floatHeight);
        }

        $('.base-float').css(cssProp);
    }

    rotate(e){
        let state = e.data.state;
        let direction = e.data.d;
        let number = e.data.n;
        if(e.data.d === "n"){
            state.front = General.mod((state.front + 1), 3);
            state.rotation = state.rotation - 120;
        }
        if(e.data.d === "p"){
            state.front = General.mod((state.front - 1), 3);
            state.rotation = state.rotation + 120;
        }
        $('.carousel').css({
            "-webkit-transform": "rotateY("+state.rotation+"deg)",
            "-moz-transform": "rotateY("+state.rotation+"deg)",
            "-o-transform": "rotateY("+state.rotation+"deg)",
            "transform": "rotateY("+state.rotation+"deg)"
        });
        let i = 0;
        for(; i<3;i++){
            let element = $("#"+i+".element");
            if(i === state.front){
                
                element.css({"z-index":1});
            }else{
                element.css({"z-index":-1});
            }
            
        }
        
        $(state.root).animate({scrollTop: $('.carousel').offset().top},300);
        PageIndication.updatePageIndication(state.front);
        e.stopPropagation();
    }

    render(){
        return(
            <div class="top">
                <div class="container">
                    <div class="carousel">
                        <div class="element" id="0"><ProjectPage/></div>
                        <div class="element" id="1"><ExperiencePage/></div>
                        <div class="element" id="2"><HobbyPage/></div>
                    </div>
                </div>
                <div class="base-float">
                    <div class="prev"><img src={ArrowL} alt="Left\nArrow"/></div>
                    <PageIndication floatOffsetBottom = "0px"/>
                    <div class="next"><img src={ArrowR} alt="Right\nArrow"/></div>
                </div>

            </div>
        );
    }

}

