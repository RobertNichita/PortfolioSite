import './cardgrid.scss';
import ContentCard, {CardProps} from './contentcard';
import React from 'react';
import { map } from 'jquery';

type Props = {
    cards:CardProps[]
};

type State = {};

export default class CardGrid extends React.Component<Props, State> {
	render() {
		return (
            <div className="cardgrid">
                {this.props.cards.map( (card, index) => 
                    {return (
                        <ContentCard 
                        description={card.description}
                        picture={card.picture} 
                        style={card.style} 
                        link={card.link}
                        key={index}
                        id={index} />
                    )}
                )}
            </div>
		);
	}
}
