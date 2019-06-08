/**
 * External dependencies
 */
import React from 'react';
import styled from 'styled-components';

// import './style.scss';

const Link = styled.a`
	color: currentColor;

	:hover,
	:active,
	:focus {
		color: var(--primary-color);
	}
`;

export default function Credits() {
	const hugo = <Link href="http://hugobaeta.com/">hugobaeta</Link>;
	const mel = <Link href="https://choycedesign.com/">melchoyce</Link>;
	const ryelle = <Link href="https://ryelle.codes">ryelle</Link>;
	const github = (
		<Link href="https://github.com/ryelle/queeromattic-flags">github repo</Link>
	);

	return (
		<div className="credits">
			<p>
				Original Queeromattic flag by { hugo }, with bisexual and
				transgender variations by { mel }. Other color combos and the
				generator itself by { ryelle }. For more info, head on over to the{ ' ' }
				{ github }. ✨🏳️‍🌈
			</p>
		</div>
	);
}
