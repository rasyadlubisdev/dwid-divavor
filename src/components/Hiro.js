import illustration from '../assets/illustration.png';
import mesh from '../assets/mesh.jpg';

const Hiro = () => {

  return (
    <div className="hiro-section flex items-center justify-around bg-mesh" style={{
        borderRadius: 12,
        backgroundColor: "salmon",
      }}>
      <div className="text-content" style={{ marginLeft: 8, color: "#FFF", }}>
        <div className="lg medium" style={{ marginBottom: 4, }}>Total Pendanaan
        </div>
        <div className="hp semi-bold">Rp 7.300.000</div>
      </div>
      <div className="illustration">
        <img src={illustration} alt=""/>
      </div>
    </div>
  )

}

export default Hiro;
