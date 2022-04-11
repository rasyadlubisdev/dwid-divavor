import image from '../IMG/img-5.jpg';
import Bar from './Bar';
import { useState } from 'react';

const CardRecomendation = ({percentage}) => {

  const [percent, setPercent] = useState(0);

  return (
    <div className="card"
      style={{
        width: 179,
        borderRadius: 12,
        backgroundColor: "#FFF",
        boxShadow: "0 4px 16px rgba(46, 130, 80, 0.12)",
      }}>
      <div className="imgPadding" style={{
          padding: 6,
          paddingBottom: 0,
        }}>
        <div className="imgWraper" style={{
            width: "100%",
            height: 102,
            borderRadius: 12,
            overflow: "hidden",
          }}>
          <img src={image} alt=""style={{
              width: "100%",
              height: "100%",
            }}/>
          </div>
      </div>
      <div className="contentWraper"
        style={{
          padding: "14px 12px",
        }}>
        <div className="md medium" style={{color: "#013237"}}>Rumah di Perumahan Anggrek Purimas
        </div>
        <div className="flex justify-between" style={{marginTop: 4, marginBottom: 8,}}>
          <div className="sm regular secondary-gray" style={{color: "#A19CB9"}}>Terkumpul
          </div>
          <div className="sm regular text-gradient">82%
          </div>
        </div>
        <Bar />
      </div>
    </div>
  )

}

export default CardRecomendation;
