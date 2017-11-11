/**
 * External dependencies
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

function getColorsForLayout(colors, layout) {
	// switch layout {}
	return colors;
}

class Flag extends Component {
	static propTypes = {
		colors: PropTypes.array.isRequired,
		layout: PropTypes.string.isRequired,
	};

	static defaultProps = {
		layout: 'rainbow',
	};

	renderRows = colors => {
		const offsetX = 240;
		const offsetY = 243;
		const heightRow = 200 / colors.length;
		const lines = 'h240 v110 h-240 Z';
		return (
			<g mask="url(#flag-stripes)">
				{colors.map((color, i) => {
					const y = offsetY + heightRow * i;
					return (
						<path
							key={`row-${i}`}
							fill={color}
							d={`M ${offsetX}, ${y} ${lines}`}
							transform="rotate(-7)"
						/>
					);
				})}
			</g>
		);
	};

	render() {
		const { colors, layout } = this.props;
		const useColors = getColorsForLayout(colors, layout);
		return (
			<svg viewBox="0 0 540 482">
				<defs>
					<mask id="flag-stripes">
						<path
							fill="white"
							transform="translate(297,170)"
							d="M3.7,199.2c2.6-6.9,9.1-13.4,21.2-15l1.7-0.2c9.1-1.7,16.7-8,20.1-16.6c1.3-3.5,2.6-11.4,1.5-19.3l-5.9-44.5l0.1,0.4l-5.9-44.9l-5.8-43.7L142.2,1.5l5.9,43.9l5.8,44.9l5.8,43.8l5.7,43l0.2,0.9l5.4,43.4L32.2,239.6c-15.3,2-29.3-8.7-31.3-24C0.1,210,1.1,204.3,3.7,199.2"
						/>
					</mask>
				</defs>
				{this.renderRows(useColors)}
				<g>
					<path fill="#546670" d="M78,103h11.3v306.8H78V103z" />
					<circle fill="#546670" cx="83.7" cy="83.5" r="11.7" />
				</g>
				<path
					fill="#546670"
					d="M314.6,299l-27.6,3.6l10.9,82.9c-2-15.3,8.7-29.3,24-31.3c17.1-2.2,26.6-16.7,24.2-31.9
					C343.7,307.6,330.6,296.9,314.6,299L314.6,299z"
				/>
				<path
					fill="#3EA7D5"
					d="M314.6,299c15.2-2,29.2,8.8,31.2,24l-3.6-27.6l-2.5-18.6L316.8,103c-2-15.3-16-26-31.3-24
					l-184.9,24.4v223.8L314.5,299H314.6z"
				/>
				<path
					fill="#F4F4F5"
					d="M204.1,122.9c-41.5,5.1-71,42.9-65.9,84.4c5.1,41.5,42.9,71,84.4,65.9s71-42.9,65.9-84.4c0,0,0,0,0-0.1
					C283.3,147.3,245.6,117.8,204.1,122.9 M145.8,206.4c-1.2-9.5-0.3-19.1,2.5-28.2l43.2,84.3C166.8,254.1,149.1,232.3,145.8,206.4
					 M221.8,265.6c-6.5,0.8-13,0.7-19.4-0.4l13-61.4l27.8,54.3l0.6,0.9C236.9,262.4,229.5,264.7,221.8,265.6 M218.8,165.2
					c4-0.7,7.6-1.6,7.6-1.6c3.6-0.9,2.5-6.2-1.1-5.5c0,0-10.8,2.2-17.9,3.1s-17.9,1.3-17.9,1.3c-3.7,0.2-3.4,5.9,0.3,5.6
					c0,0,3.5,0,7.2-0.2l14,27.6l-9.3,46.2L168,171.6c4-0.7,7.7-1.6,7.7-1.6c3.6-0.9,2.5-6.2-1.1-5.5c0,0-10.8,2.2-17.9,3.1l-4.4,0.5
					c16.7-33.7,57.5-47.5,91.2-30.8c3.2,1.6,6.3,3.4,9.3,5.5H252c-6.6,0.8-10.6,7.2-9.9,13.4s4.5,9.9,8.6,15s6.8,9.6,7.9,17.9
					c0.7,5.8-0.7,12.8-2.4,22.5l-4,23.3L218.8,165.2z M268.7,158.3c21.5,30,15.2,71.6-14.1,93.9l13.2-62.2c2.7-10.1,3-18,2.1-24.8
					C269.6,162.9,269.2,160.6,268.7,158.3"
				/>
			</svg>
		);
	}
}

export default Flag;
