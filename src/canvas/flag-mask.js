export default function Mask( { children } ) {
	return (
		<svg viewBox="0 0 396 339" className="flag">
			<defs>
				<mask id="flag-mask">
					<path
						transform="translate(224,99)"
						fill="white"
						d="M3.7 198.2c2.6-6.9 9.1-13.4 21.2-15l1.7-.2c9.1-1.7 16.7-8 20.1-16.6 1.3-3.5 2.6-11.4 1.5-19.3l-5.9-44.5.1.4-5.9-44.9-5.8-43.7L142.2.5l5.9 43.9 5.8 44.9 5.8 43.8 5.7 43 .2.9 5.4 43.4-138.8 18.2c-15.3 2-29.3-8.7-31.3-24-.8-5.6.2-11.3 2.8-16.4"
					/>
				</mask>
			</defs>
			<g mask="url(#flag-mask)">{ children }</g>
			<g fill="#546670">
				<path d="M6 32h11.3v306.8H6z" />
				<circle cx="11.7" cy="12.5" r="11.7" />
			</g>
			<path
				fill="#546670"
				d="M242.6 228l-27.6 3.6 10.9 82.9c-2-15.3 8.7-29.3 24-31.3 17.1-2.2 26.6-16.7 24.2-31.9-2.4-14.7-15.5-25.4-31.5-23.3z"
			/>
			<path
				fill="#3EA7D5"
				d="M242.6 228c15.2-2 29.2 8.8 31.2 24l-3.6-27.6-2.5-18.6L244.8 32c-2-15.3-16-26-31.3-24L28.6 32.4v223.8L242.5 228h.1z"
			/>
			<path
				fill="#F4F4F5"
				d="M132.1 51.9c-41.5 5.1-71 42.9-65.9 84.4 5.1 41.5 42.9 71 84.4 65.9 41.5-5.1 71-42.9 65.9-84.4v-.1c-5.2-41.4-42.9-70.9-84.4-65.8m-58.3 83.5c-1.2-9.5-.3-19.1 2.5-28.2l43.2 84.3c-24.7-8.4-42.4-30.2-45.7-56.1m76 59.2c-6.5.8-13 .7-19.4-.4l13-61.4 27.8 54.3.6.9c-6.9 3.4-14.3 5.7-22 6.6m-3-100.4c4-.7 7.6-1.6 7.6-1.6 3.6-.9 2.5-6.2-1.1-5.5 0 0-10.8 2.2-17.9 3.1-7.1.9-17.9 1.3-17.9 1.3-3.7.2-3.4 5.9.3 5.6 0 0 3.5 0 7.2-.2l14 27.6-9.3 46.2L96 100.6c4-.7 7.7-1.6 7.7-1.6 3.6-.9 2.5-6.2-1.1-5.5 0 0-10.8 2.2-17.9 3.1l-4.4.5c16.7-33.7 57.5-47.5 91.2-30.8 3.2 1.6 6.3 3.4 9.3 5.5h-.8c-6.6.8-10.6 7.2-9.9 13.4.7 6.2 4.5 9.9 8.6 15s6.8 9.6 7.9 17.9c.7 5.8-.7 12.8-2.4 22.5l-4 23.3-33.4-69.7zm49.9-6.9c21.5 30 15.2 71.6-14.1 93.9l13.2-62.2c2.7-10.1 3-18 2.1-24.8-.3-2.3-.7-4.6-1.2-6.9"
			/>
		</svg>
	);
}
