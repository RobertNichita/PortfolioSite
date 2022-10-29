import "./landing.scss"
import React from 'react'
import Resizeable, { ResizableProps, ResizableState } from "./util/resizeable"

type Props = ResizableProps;
type State = ResizableState;

export default class Landing extends Resizeable<Props, State> {

    render() {
        return (
            <div className="landing" style={this.getStyle()}>

            </div>
        )
    }
}