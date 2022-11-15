import './contentcontainer.scss';
import Resizeable, { ResizableProps, ResizableState } from '../util/resizeable';
import ReactMarkdown from 'react-markdown';
import $ from 'jquery'
import { debounce } from 'lodash';
import rehypeRaw from 'rehype-raw'

type Props = ResizableProps;

type State = ResizableState & {
	md:string;
};

export default class ContentContainer extends Resizeable<Props, State> {
	constructor(props:Props)
	{
		super(props);
		$(window).on('load', ()=>{
			$(window).on('hashchange', this.loadMarkdown)
			this.loadMarkdown({originalEvent: {newURL:window.location.hash}})
		})
	}

	loadMarkdown = debounce(async (e:any) => {
				if(!e.originalEvent || !e.originalEvent.newURL){
					this.setState((state:State)=>{
						return {...state, md:"# Select an article to read above!"}
					});
					return;
				}
				let URL = (e.originalEvent as HashChangeEvent).newURL.split("#")[1];
				let dir = URL.split("/")[1];
				if(dir !== "portfolioMd"){
					return;
				}
				let file = URL.split('/')[2];
				fetch(`/assets/Markdown/${file}.md`)
				.then((response)=>{
					console.log("resp" + JSON.stringify(response));
					return response.text();
				})
				.then((text)=>{
					console.log("set"+text);
					this.setState((state:State)=>{
						return {...state, md:text}
					})
				})
				.catch((reason:any)=>{
					console.log("error")
					this.setState((state:State)=>{
						return {...state, md:""}
					})
				})
			}, 100, {leading:true})

	render() {
		return (
            <div className={`content_container`} style={this.getStyle()}>
				<ReactMarkdown children={this.state.md} rehypePlugins={[rehypeRaw]}/>
            </div>
		);
	}
}
