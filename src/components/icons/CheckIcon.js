import * as React from "react"

function CheckIcon(props) {
	return (
		<svg
			width={14}
			height={13}
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M13.658.342a1.166 1.166 0 00-1.65 0L6.418 5.933 4.325 3.842a1.166 1.166 0 10-1.65 1.65l2.917 2.916c.227.228.526.342.825.342.298 0 .597-.114.825-.342l6.416-6.416a1.166 1.166 0 000-1.65z"
				fill="#050448"
			/>
			<path
				d="M12.25 5.833a.583.583 0 00-.583.584V10.5c0 .643-.524 1.167-1.167 1.167H2.333A1.168 1.168 0 011.167 10.5V2.333c0-.643.523-1.166 1.166-1.166H8.75A.583.583 0 108.75 0H2.333A2.34 2.34 0 000 2.333V10.5a2.34 2.34 0 002.333 2.334H10.5a2.34 2.34 0 002.334-2.334V6.417a.583.583 0 00-.584-.584z"
				fill="#050448"
			/>
		</svg>
	)
}

export default CheckIcon
