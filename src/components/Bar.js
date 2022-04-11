const Bar = ({percent}) => {

  return (
    <div className="bar-percentage"
      style={{
        width: "100%",
        height: 12,
        borderRadius: 20,
        backgroundColor: "#EFEDF4",
      }}>
      <div className="bg-gradient-blue"
        style={{
        width: `${percent}%`,
        height: 12,
        borderRadius: 20,
      }}>
      </div>
    </div>
  )

}

Bar.defaultProps = {
  percent: 50,
}

export default Bar;
