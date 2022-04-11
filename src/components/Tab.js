const Tab = ({text, type}) => {

  return (
    <div className="border bg-gradient-green" style={{
        position: "relative",
        display: "grid",
        width: "max-content",
        padding: 1,
        borderRadius: 6,
        fontSize: 12,
      }}>
      <div className="tab"
        style={{
          display: "inline",
          padding: 7,
          borderRadius: 6,
          background: type ? "none" : "#FFF",
        }}>
        <div className={type ? "" : "text-gradient"} style={{
            color: type ? "#FFF" : "",
          }}>{text}</div>
      </div>
    </div>
  )

}

Tab.defaultProps = {
  text: "Cluster",
  type: true,
}

export default Tab;
