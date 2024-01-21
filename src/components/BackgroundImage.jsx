import '../styles/component-styles/BackgroundImage.css'

export function BackgroundImage(props){

    const containerStyle = {
        backgroundImage: `url(${props.element[0]})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        opacity: props.isHovered ? '0.1' : '1'
    }

    return (

        <div style={containerStyle} className="grid-element background-image" onMouseEnter={props.handleMouseEnter} onMouseLeave={props.handleMouseLeave}></div>
    )
}