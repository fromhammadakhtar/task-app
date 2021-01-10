import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './applicantstatus.css';
import arrowicon from './backarrow.svg';
import { Container, Row, Col } from 'react-bootstrap';

const ApplicantStatus = (props) => {
  const { totalItems } = props;

  const appointmentSet = totalItems.filter(
    (item) => item.status === 'Appointment_Set'
  );
  const propertyViewed = totalItems.filter(
    (item) => item.status === 'Property_Viewed'
  );
  const interested = totalItems.filter((item) => item.status === 'Interested');
  const offerAccepted = totalItems.filter(
    (item) => item.status === 'Offer_Accepted'
  );

  return (
    <Container fluid>
      <Row>
        <Col s={3}>
          <img src={arrowicon} alt='backarrowimage' />
          <h3 style={{ display: 'inline', marginLeft: '1rem', verticalAlign: 'middle' }}>
            Applicants
          </h3>
        </Col>
        <Col>
          <div className='applicantStats'>
            <div>
              <h5>Total</h5>
              <p>{totalItems.length}</p>
            </div>
            <div>
              <h5>Appointment Set</h5>
              <p>{appointmentSet.length}</p>
            </div>
            <div>
              <h5>Property Viewed</h5>
              <p>{propertyViewed.length}</p>
            </div>
            <div>
              <h5>Interested</h5>
              <p>{interested.length}</p>
            </div>
            <div>
              <h5>Offer Accepted</h5>
              <p>{offerAccepted.length}</p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ApplicantStatus;
