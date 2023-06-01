function ImageShow ({ image }) {
    return <div>
        <img src={image.urls.small} alt={image.atl_description} />
    </div>;
}

export default ImageShow;
