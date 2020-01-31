import React from 'react';

class ImageCard extends React.Component {
    constructor(props) {
        super(props)

        this.state = {spans: 0}
        this.imageRef = React.createRef();
    }

    componentDidMount() {
        //had to set event listener 'load' because we were trying to get heights of images before they
        //loaded. Event listener has callback function setSpans which is bound to this, so
        //setSpans needs to take on arrow syntax
        this.imageRef.current.addEventListener('load', this.setSpans)
        // console.log(this.imageRef)
        // console.log(this.imageRef.current.height)
    }

    setSpans = () => {
        // console.log(this.imageRef.current.height)
        const height = this.imageRef.current.height
        //makes span height from css divided by actual image height
        const spans = Math.ceil(height / 10)
        this.setState({spans: spans})
    }

    render() {
        //destructuring
        const {description, urls} = this.props.image
        return (
            <div style={{gridRowEnd: `span ${this.state.spans}`}}>
                <img
                    ref={this.imageRef} 
                    alt={description} 
                    src={urls.regular} 
                />
            </div>
        )
    }
}

export default ImageCard;