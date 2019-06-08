/**
 * External dependencies
 */
import React from 'react';
import { connect } from 'react-redux';
import { flowRight as compose } from 'lodash';
import Gridicon from 'gridicons';
import { hot } from 'react-hot-loader/root';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * Internal dependencies
 */
import { addColor } from './store';
import {
	Button,
	ColorList,
	Credits,
	Flag,
	Selector,
	Title,
} from './components';
import { getSvgUrl, list } from './utils/colors';

const Container = styled.div`
	max-width: 830px;
	padding: 0;
	margin: 0 auto;
	display: grid;
	grid-template-columns: 1fr 500px;
	grid-template-rows: auto;
	grid-gap: 0 50px;
`;

const LeftWrap = styled.div`
	grid-column: 1;
	min-width: 270px;
	padding-top: 80px;
`;

const RightWrap = styled.div`
	margin-top: 20px;
	max-width: 100%;
	height: auto;
	grid-column: 2;
	text-align: center;
`;

const App = ( { add, colors } ) => (
	<Container>
		<LeftWrap>
			<Title>Build your own WordPress Pride flag</Title>
			<Selector label="Select a preset flag" options={ list } />
			<p>
				Customize the colors using the fields below. You can also add or remove
				rows as you need
			</p>
			<ColorList />
			<Button onClick={ () => add( '#33333A' ) }>
				<Gridicon icon="plus-small" />
				<span>Add Row</span>
			</Button>
		</LeftWrap>
		<RightWrap>
			<Flag type="stripe" colors={ colors } />
			<Button as="a" href={ getSvgUrl( colors ) }>
				Download SVG
			</Button>
		</RightWrap>
		<Credits />
	</Container>
);

App.propTypes = {
	// from redux
	add: PropTypes.func.isRequired,
	colors: PropTypes.array.isRequired,
};

export default compose(
	connect(
		( state ) => ( {
			colors: state.colors,
		} ),
		( dispatch ) => ( {
			add: ( color ) => dispatch( addColor( color ) ),
		} )
	),
	hot
)( App );
