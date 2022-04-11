import csIcon from '../icons/cs.svg';
import handIcon from '../icons/hand.svg';

const CsButton = ({text, type}) => {

  return (
    <div className="border bg-gradient-green medium" style={{
        position: "relative",
        display: "grid",
        padding: 1,
        borderRadius: 12,
        fontSize: 16,
      }}>
      <div className="csButton flex"
        style={{
          padding: 13,
          borderRadius: 12,
          background: type ? "none" : "#FFF",
        }}>
        <img src={csIcon} alt="" style={{ marginLeft: 11, marginRight: 16, }}/>
        <div className={type ? "" : "text-gradient"} style={{
            color: type ? "#FFF" : "",
          }}>{text}</div>
      </div>
    </div>
  )

}

CsButton.defaultProps = {
  text: "Cluster",
  type: false,
}

export default CsButton;
