/**
 * External dependencies
 */
import styled from 'styled-components';

const Button = styled.button`
	display: inline-block;
	appearance: none;
	padding: 7px;
	font-size: 14px;
	line-height: 1;
	text-transform: uppercase;
	text-decoration: none;
	background: #F4F4F5;
	border: 1px solid #ccc;
	border-radius: 0;
	color: currentColor;

	span {
		display: inline-block;
		padding-right: 7px;
		vertical-align: middle;
	}

	.gridicon {
		top: 5px;
	}

	.gridicons-plus-small {
		margin-left: -4px;
	}
`;

export default Button;
