import './contentcontainer.scss';
import Resizeable, { ResizableProps, ResizableState } from '../util/resizeable';

type Props = ResizableProps;

type State = ResizableState;

export default class ContentContainer extends Resizeable<Props, State> {
	render() {
		return (
            <div className="content_container" style={this.getStyle()}>

            </div>
		);
	}
}
