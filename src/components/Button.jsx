 const Button = ({ label, onClick,id }) => {
    return (
        <button className="conButton" id={id} onClick={onClick}>
            {label}
        </button>
    )
}
export default Button;