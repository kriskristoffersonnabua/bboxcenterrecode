import React, { useState } from 'react'

const Table = props => {
	const [selectedIndex, setSelectedIndex] = useState(-1)
	const { headers, data, indexSelectCallback } = props

	const selectIndex = evt => {
		const {
			currentTarget: {
				dataset: { index: indexSelected }
			}
		} = evt
		setSelectedIndex(indexSelected)
		!!indexSelectCallback && indexSelectCallback(indexSelected)
	}

	return (
		<div className="container" style={{ paddingBottom: 32 }}>
			<table className="table is-stripped is-hoverable is-fullwidth">
				<thead>
					<tr>
						{headers.map(header => (
							<th className="has-text-centered">{header}</th>
						))}
					</tr>
				</thead>
				<tbody>
					{data.map((da, idx) => {
						return (
							<tr
								data-index={idx}
								onClick={selectIndex}
								className={`${selectedIndex == idx &&
									'has-background-success has-text-light'}`}>
								{da.map(d => (
									<td className="has-text-centered">{d}</td>
								))}
							</tr>
						)
					})}
				</tbody>
			</table>
		</div>
	)
}

export default Table
