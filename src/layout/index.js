/**
 * Internal dependencies
 */
import './style.css';

export default function Layout( { sidebar, children } ) {
	return (
		<div className="layout">
			<header>
				<h1>Build your own WordPress Pride flag</h1>
			</header>
			<aside>{ sidebar }</aside>
			<main>{ children }</main>
		</div>
	);
}
