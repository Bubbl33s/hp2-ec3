import React from 'react';

const TypesBar = ({ types, onFilter }) => {
	const capitalizar = (word) => word.charAt(0).toUpperCase() + word.slice(1);

	return (
		<div className="filter-pokemon">
			{types.map((type, index) => (
				<button className={`type-button ${type}`} key={index} onClick={() => onFilter(type)}>
					{capitalizar(type)}
				</button>
			))}
		</div>
	);
};

export default TypesBar;
