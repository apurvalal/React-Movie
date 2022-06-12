import React from 'react';

function PageHeading(props) {
	return (
		<div className="col">
			<h1 className="heading">{props.heading}</h1>
		</div>
	);
}

export default PageHeading;
