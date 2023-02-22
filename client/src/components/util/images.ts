
export default class Images {
    private static instance: Images | undefined = undefined;

    private constructor_(){

    }

    constructor(){
        if(Images.instance){
            return Images.instance;
        }else{
            this.constructor_();
        }
    }

    
}