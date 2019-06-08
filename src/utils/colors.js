/**
 * External dependencies
 */
import { find, isEqual, random } from 'lodash';

const ACE = [ '#333344', '#888899', '#F4F4F5', '#921E79' ];
const ARO = [ '#74B95C', '#BEEB82', '#F4F4F5', '#888890', '#33333A' ];
const AGENDER = [
	'#333344',
	'#888899',
	'#F4F4F5',
	'#BEEB82',
	'#F4F4F5',
	'#888899',
	'#333344',
];
const BI = [ '#1D439B', '#1D439B', '#744E97', '#D71673', '#D71673' ];
const LGBTQ = [
	'#DF4C3E',
	'#F47C3B',
	'#FDB813',
	'#74B95C',
	'#3EA7D5',
	'#8B79B8',
];
const LGBTQ_POC = [
	'#000105',
	'#5E4728',
	'#DF4C3E',
	'#F47C3B',
	'#FDB813',
	'#74B95C',
	'#3EA7D5',
	'#8B79B8',
];
const GQ = [ '#74B95C', '#F4F4F5', '#8B79B7' ];
const GF = [ '#EC77A0', '#F4F4F5', '#9B48A3', '#222233', '#1D439B' ];
const NB = [ '#FDB813', '#F4F4F5', '#9B48A3', '#333344' ];
const PAN = [ '#D71673', '#FDB813', '#3EA7D5' ];
const POLY = [ '#D71673', '#74B95C', '#219CD3' ];
const TRANS = [ '#61CDF6', '#F7ABB8', '#F4F4F5', '#F7ABB8', '#61CDF6' ];

export const list = [
	{
		label: 'Agender',
		value: 'agender',
		colors: AGENDER,
	},
	{
		label: 'Aromantic',
		value: 'aromantic',
		colors: ARO,
	},
	{
		label: 'Asexual',
		value: 'asexual',
		colors: ACE,
	},
	{
		label: 'Bisexual',
		value: 'bisexual',
		colors: BI,
	},
	{
		label: 'Genderfluid',
		value: 'genderfluid',
		colors: GF,
	},
	{
		label: 'Genderqueer',
		value: 'genderqueer',
		colors: GQ,
	},
	{
		label: 'LGBTQ #MoreColorMorePride',
		value: 'more-color',
		colors: LGBTQ_POC,
	},
	{
		label: 'LGBTQ (Rainbow)',
		value: 'rainbow',
		colors: LGBTQ,
	},
	{
		label: 'Nonbinary',
		value: 'nonbinary',
		colors: NB,
	},
	{
		label: 'Pansexual',
		value: 'pansexual',
		colors: PAN,
	},
	{
		label: 'Polysexual',
		value: 'polysexual',
		colors: POLY,
	},
	{
		label: 'Transgender',
		value: 'transgender',
		colors: TRANS,
	},
];

export const ALL_COLORS = [
	// Row 1
	'#000105',
	'#222228',
	'#33333a',
	'#888890',
	'#C8C8CC',
	'#F4F4F5',
	// Row 2
	'#DF4C3E',
	'#F47C3B',
	'#FDB813',
	'#FFE28C',
	'#BEEB82',
	'#74B95C',
	// Row 3
	'#61CDF6',
	'#3EA7D5',
	'#1D439B',
	'#744E97',
	'#8B79B8',
	'#9B48A3',
	// Row 3
	'#921E79',
	'#D71673',
	'#EC77A0',
	'#F7ABB8',
	'#5E4728',
];

// const PLACEHOLDER = '#33333A';

// Uses global list
export function getRandomFlag() {
	const index = random( list.length - 1 );
	return list[ index ];
}

export function getSvgUrl( colors ) {
	const existingFlag = find( list, ( item ) => isEqual( colors, item.colors ) );
	if ( existingFlag ) {
		return `/name/${ existingFlag.value }.svg`;
	}
	const colorsList = colors.map( ( c ) => c.replace( '#', '' ) ).join( '-' );
	return `/hex/${ colorsList }.svg`;
}
