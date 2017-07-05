import React from 'react'

function Images(props){
	const images = []
	console.log(props.imagesArray);
	// Map through images
	props.imagesArray.map((image,index)=>{
		images.push(
			<img src={image} key={index} />
		)
	})
	return(
		<div>
			{images}
		</div>
	)
}

export default Images