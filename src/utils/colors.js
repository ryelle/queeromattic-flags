/**
 * External dependencies
 */
import { isEqual, random } from 'lodash';

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
const LESBIAN_LP = [
	'#A40061',
	'#B75592',
	'#D063A6',
	'#F4F4F5',
	'#E4ACCF',
	'#C54E54',
	'#8A1E04',
];
const LESBIAN = [
	'#DF4C3E',
	'#F47C3B',
	'#FDB813',
	'#F4F4F5',
	'#EC77A0',
	'#B75592',
	'#921E79',
];

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
		label: 'Intersex',
		value: 'intersex',
		colors: [],
	},
	{
		label: 'Lesbian (lipstick)',
		value: 'lesbian-lipstick',
		colors: LESBIAN_LP,
	},
	{
		label: 'Lesbian',
		value: 'lesbian',
		colors: LESBIAN,
	},
	{
		label: 'LGBTQ (Philly)',
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
	'#5E4728',
	'#000105',
	'#222228',
	'#33333a',
	'#888890',
	'#C8C8CC',
	'#F4F4F5',
	// Row 2
	'#8A1E04',
	'#C54E54',
	'#DF4C3E',
	'#F47C3B',
	'#FDB813',
	'#F8CA00',
	'#FFE28C',
	// Row 3
	'#BEEB82',
	'#74B95C',
	'#61CDF6',
	'#3EA7D5',
	'#1D439B',
	'#744E97',
	'#8B79B8',
	// Row 4
	'#9B48A3',
	'#921E79',
	'#B75592',
	'#D063A6',
	'#D71673',
	'#EC77A0',
	'#F7ABB8',
];

export function getRandomColor() {
	const index = random( ALL_COLORS.length - 1 );
	return ALL_COLORS[ index ];
}

// Uses global list
export function getRandomFlag() {
	const index = random( list.length - 1 );
	return list[ index ];
}

export function getFlag( preset = false ) {
	let flag;
	if ( ! preset ) {
		flag = getRandomFlag();
	} else {
		flag = list.find( ( item ) => item.value === preset );
	}

	// If still no flag, get a random one.
	if ( ! flag ) {
		flag = getRandomFlag();
	}

	return flag;
}

export function getFlagFromName( name ) {
	return list.find( ( item ) => item.value === name );
}

export function getFlagFromColors( colors ) {
	return list.find( ( item ) => isEqual( colors, item.colors ) );
}
