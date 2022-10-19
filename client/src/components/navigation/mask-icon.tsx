import './navbar.scss';
import Resizable, { ResizableProps, ResizableState } from '../util/resizeable';

type Props = ResizableProps & {
    iconName: string
};

type State = ResizableState;

export default class NavIcon extends Resizable<Props, State> {

	render() {
		return (
            <div className="navIcon">
                <div className={`innerIcon ${this.props.iconName}`}></div>
            </div>
		);
	}
}
