/**
 * External dependencies
 */
import React from 'react';

export default function Credits() {
	const hugo = <a href="http://hugobaeta.com/">hugobaeta</a>;
	const mel = <a href="https://choycedesign.com/">melchoyce</a>;
	const ryelle = <a href="https://ryelle.codes">ryelle</a>;
	const github = (
		<a href="https://github.com/ryelle/queeromattic-flags">github repo</a>
	);

	return (
		<div className="credits">
			<p>
				Original Queeromattic flag by {hugo}, with bisexual and
				transgender variations by {mel}. Other color combos and the
				generator itself by {ryelle}. For more info, head on over to the{' '}
				{github}. ✨🏳️‍🌈
			</p>
		</div>
	);
}
