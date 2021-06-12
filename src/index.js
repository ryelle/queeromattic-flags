/**
 * External dependencies
 */
import { render } from 'react-dom';

/**
 * Internal dependencies
 */
import './style.css';
import Canvas from './canvas';
import Controls from './controls';
import { FlagProvider } from './use-flag';
import { getFlag } from './utils/colors';
import Layout from './layout';

const preset = window.location.hash.replace( '#', '' );
const initialFlag = getFlag( preset );

function App() {
	return (
		<FlagProvider value={ initialFlag }>
			<Layout sidebar={ <Controls /> }>
				<Canvas />
			</Layout>
		</FlagProvider>
	);
}

render( <App />, document.getElementById( 'container' ) );
