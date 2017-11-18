/**
 * External dependencies
 */
import React from 'react';

export default function Credits() {
	const hugo = <a href="http://hugobaeta.com/">hugobaeta</a>;
	const mel = <a href="https://choycedesign.com/">melchoyce</a>;
	const ryelle = <a href="https://ryelle.codes">ryelle</a>;

	return (
		<div className="credits">
			<p>
				Original Queeromattic flag by {hugo}, with bisexual and
				transgender variations by {mel}. Other color combos and the rest
				of the app by {ryelle}.
			</p>
		</div>
	);
}
