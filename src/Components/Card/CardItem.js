import React from "react";
import "./cardItem.css";
import { Badge, Card} from 'react-bootstrap';

const CardItem = (props) => {
  var r = () => (Math.random() * 256) >> 0;
  var color = `rgb(${r()}, ${r()}, ${r()})`;

  const nameToInitial = (name) => {
    let initials = name.match(/\b\w/g) || [];
    initials = (
      (initials.shift() || '') + (initials.pop() || '')
    ).toUpperCase();
    return initials;
  };

  return (

    <Card style={{ alignContent:'center' }}>

        <div  className="Container">
        <div className="Circle" style={{ backgroundColor: color }}>
          <p style={{ color: "black" }}>{nameToInitial(props.customerinitial)}</p>
        </div>
      </div>
      <div className="cardbottom">
        <h5 className="cardname">{props.customername}</h5>
        <p className="cardphone">{props.customerphone}</p>
        <p className="cardemail">{props.customeremail}</p>
        <Badge variant="secondary">{props.customerstatus}</Badge>
        <br></br>
        {(() => {
          switch (props.customerbid) {
            case "0":
              return <div></div>;
            default:
              return <Badge variant="warning">BID {props.customerbid}€</Badge>;
          }
        })()}
      </div>
      
    </Card>

  
  );
};

export default CardItem;
