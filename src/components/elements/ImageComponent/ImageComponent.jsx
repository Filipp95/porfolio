const ImageComponent = ({className, source, description}) => {
    return (
            <img className={className} src={source} alt={description} />
    )
}

export default ImageComponent;

