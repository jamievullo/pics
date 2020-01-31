import React from 'react';

const ImageList = (props) => {
    // console.log(props.images)

    const images = props.images.map(image => {
        //assign key of 'id' to root element
        return <img key={image.id} src={image.urls.regular} alt={image.description} />
    })

    return <div>{images}</div>
};

export default ImageList;