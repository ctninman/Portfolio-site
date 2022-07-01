import React from 'react';

function TopLayer({topLayer, showLayer, currentTrait}) {
	return (
		<div>
			<img className={showLayer ? 'image-top-layer-show': 'image-top-layer-hide'} style={topLayer} src={currentTrait.image} />
		</div>
	);
}

export default TopLayer;