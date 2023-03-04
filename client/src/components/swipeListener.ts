import $ from 'jquery';
import { SwipeDirection } from '../const/Const';
export class SwipeListener {


    touchstartX = 0;
    touchendX = 0;
    touchstartY = 0;
    touchendY = 0;
    deadzoneX = 0;
    deadzoneY = 0;
    callback;
    

    constructor(deadzoneX:number, deadzoneY:number, callback:(direction:SwipeDirection|undefined)=>void){
        this.deadzoneX = deadzoneX;
        this.deadzoneY = deadzoneY;
        this.callback = callback;
    }

    checkDirection() {
        if (this.touchendX + this.deadzoneX < this.touchstartX){
            return SwipeDirection.LEFT;
        } 
        else if (this.touchendX - this.deadzoneX > this.touchstartX){
            return SwipeDirection.RIGHT;
        }
        if (this.touchendY + this.deadzoneY < this.touchstartY){
            return SwipeDirection.DOWN;
        } 
        else if (this.touchendY - this.deadzoneY > this.touchstartY){
            return SwipeDirection.UP;
        }
    }
    
    listen(elem:HTMLElement){
        //mouse
        elem.addEventListener('mousedown', e=>{
            this.touchstartX = e.screenX;
            this.touchstartY = e.screenY;
        })
        elem.addEventListener('mouseup', e=>{
            this.touchendX = e.screenX;
            this.touchendY = e.screenY;
            let dir = this.checkDirection();
            this.callback(dir);
        })
        //touchscreen
        elem.addEventListener('touchstart', e => {
            this.touchstartX = e.changedTouches[0].screenX;;
            this.touchstartY = e.changedTouches[0].screenY;
        })
        elem.addEventListener('touchend', e => {
            this.touchendX = e.changedTouches[0].screenX;
            this.touchendY = e.changedTouches[0].screenY;
            let dir = this.checkDirection();
            this.callback(dir);
        })
    }
}

