export function Disconnected() {
	return (
		<div style={{
			display: 'flex',
			gap: '16px',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
			width: '100vw',
			height: '100vh'
		}}>
			<h1 style={{
				fontFamily: 'Poppins',
				fontSize: '64px',
			}}>Disconnected from remote server</h1>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="128"
				height="128"
				viewBox="0 0 24 24"
				// stroke-width="1.5"
				stroke="#ffffff"
				fill="none"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<path stroke="none" d="M0 0h24v24H0z" fill="none" />
				<path d="M20 16l-4 4" />
				<path d="M7 12l5 5l-1.5 1.5a3.536 3.536 0 1 1 -5 -5l1.5 -1.5z" />
				<path d="M17 12l-5 -5l1.5 -1.5a3.536 3.536 0 1 1 5 5l-1.5 1.5z" />
				<path d="M3 21l2.5 -2.5" />
				<path d="M18.5 5.5l2.5 -2.5" />
				<path d="M10 11l-2 2" />
				<path d="M13 14l-2 2" />
				<path d="M16 16l4 4" />
			</svg>
		</div>
	)
}
