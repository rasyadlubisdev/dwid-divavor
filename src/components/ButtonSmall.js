const ButtonSmall = ({text, type, color}) => {

  return (
    <button
      style={{
        padding: "6px 14px",
        fontSize: 12,
        color: type ? "#EAF9E7" : "#4CA771",
        borderRadius: 6,
        outline: "none",
        border: type ? "none" : "1px solid #4CA771",
        background: type ? "#4CA771" : "none",
      }}
    >
      {text}
    </button>
  )

}

ButtonSmall.defaultProps = {
  text: "Detail",
  type: true,
  color: "#4CA771",
}

export default ButtonSmall;
