/**
 * External dependencies
 */
import { useEffect, useRef, useState } from 'react';

/**
 * Internal dependencies
 */
import './style.css';
import FlagMask from './flag-mask';
import IntersexFlag from './intersex';
import { useFlag } from '../use-flag';

export default function Canvas() {
	const [ flagSvg, setFlagSvg ] = useState( '' );
	const [ flag ] = useFlag();
	const ref = useRef();
	const { colors } = flag;

	useEffect( () => {
		let svg = ref.current.innerHTML;
		if ( ! svg ) {
			return;
		}
		svg = svg.replace(
			'<svg ',
			'<svg xmlns="http://www.w3.org/2000/svg" '
		);
		setFlagSvg( 'data:image/svg+xml,' + encodeURIComponent( svg ) );
	}, [ flag ] );

	const offsetX = 180;
	const offsetY = 142;
	const height = 220 / colors.length;
	const width = 190;
	const lines = `h${ width } v${ height + 10 } h-${ width } Z`;

	return (
		<>
			<div ref={ ref }>
				{ flag.value === 'intersex' ? (
					<IntersexFlag />
				) : (
					<FlagMask>
						{ colors.map( ( color, i ) => {
							const y = offsetY + height * i;
							return (
								<path
									key={ `row-${ i }` }
									fill={ color }
									d={ `M ${ offsetX }, ${ y } ${ lines }` }
									transform="rotate(-7)"
								/>
							);
						} ) }
					</FlagMask>
				) }
			</div>
			<a
				className="button download-button"
				href={ flagSvg }
				download={ `${ flag.value }.svg` }
			>
				Download SVG
			</a>
		</>
	);
}
