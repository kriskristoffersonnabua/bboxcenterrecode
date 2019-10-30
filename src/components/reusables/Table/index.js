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
		<div
			className="container"
			style={{
				paddingBottom: 32
			}}>
			<table
				style={{ padding: 10 }}
				className="table is-bordered is-hoverable is-fullwidth">
				<thead>
					<tr>
						{headers.map((header, idx) => (
							<th
								key={`${idx}${header}`}
								className="has-text-centered is-size-7">
								{header}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{data.map((da, idx) => {
						return (
							<tr
								key={idx}
								data-index={idx}
								onClick={selectIndex}
								className={`${selectedIndex == idx &&
									'has-background-success has-text-light'}`}>
								{da.map((d, index) => (
									<td
										key={`${d}${index}`}
										className="has-text-centered is-size-7">
										{d}
									</td>
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
