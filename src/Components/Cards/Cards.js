import React from 'react';
import Card from '../Card/CardItem';
import './cards.css';

const Cards = (props) => {
  

  const { items } = props;

  const filterAppointment = items.filter(
    (item) => item.status === 'Appointment_Set'
  );
  const filterViewed = items.filter(
    (item) => item.status === 'Property_Viewed'
  );
  const filterInterested = items.filter((item) => item.status === 'Interested');
  const filterAccepted = items.filter(
    (item) => item.status === 'Offer_Accepted'
  );

  return (
    <div className='cardContainer'>
      <h3>Appointment Set ({filterAppointment.length})</h3>
      <ul className='ulCard'>
        {items.map((item) => {
          if (item.status === 'Appointment_Set')
            return (
              <li className='listCard' key={item.id}>
                <Card
                  customerinitial={item.name}
                  customername={item.name}
                  customerphone={item.phone}
                  customeremail={item.email}
                  customerstatus={item.status}
                  customerbid={item.bid}
                ></Card>
              </li>
            );
          return null;
        })}
      </ul>
      <h3>Property Viewed ({filterViewed.length})</h3>
      <ul className='ulCard'>
        {items.map((item) => {
          if (item.status === 'Property_Viewed')
            return (
              <li className='listCard' key={item.id}>
                <Card
                  customerinitial={item.name}
                  customername={item.name}
                  customerphone={item.phone}
                  customeremail={item.email}
                  customerstatus={item.status}
                  customerbid={item.bid}
                ></Card>
              </li>
            );
          return null;
        })}
      </ul>
      <h3>Interested ({filterInterested.length})</h3>
      <ul className='ulCard'>
        {items.map((item) => {
          if (item.status === 'Interested')
            return (
              <li className='listCard' key={item.id}>
                <Card
                  customerinitial={item.name}
                  customername={item.name}
                  customerphone={item.phone}
                  customeremail={item.email}
                  customerstatus={item.status}
                  customerbid={item.bid}
                ></Card>
              </li>
            );
          return null;
        })}
      </ul>

      <h3>Offer Accepted ({filterAccepted.length})</h3>
      <ul className='ulCard'>
        {items.map((item) => {
          if (item.status === 'Offer_Accepted')
            return (
              <li className='listCard' key={item.id}>
                <Card
                  customerinitial={item.name}
                  customername={item.name}
                  customerphone={item.phone}
                  customeremail={item.email}
                  customerstatus={item.status}
                  customerbid={item.bid}
                ></Card>
              </li>
            );
          return null;
        })}
      </ul>
    </div>
  );
};
export default Cards;
