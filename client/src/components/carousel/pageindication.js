import './pageindication.scss';
import React from 'react'
import $ from "jquery"

export default class PageIndication extends React.Component {

    constructor(props) {
        super(props);
    }

    static updatePageIndication (front){
        
        let i=0;
        for(; i<3; i++){
            if(i === front){
                $("#ind"+i).addClass("highlight");
            }else{
                $("#ind"+i).removeClass("highlight");
            }
        }
    }

    render(){
        return(
            <div class="contain">
                <div class="indicator highlight" id="ind0"/>
                <div class="indicator" id="ind1"/>
                <div class="indicator" id="ind2"/>
            </div>
        );
    }
} 