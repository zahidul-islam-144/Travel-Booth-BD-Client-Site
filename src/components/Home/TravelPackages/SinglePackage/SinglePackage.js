import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SinglePackage = (props) => {
    const { _id, Package_Name, Image_Url, Duration, Price } = props.singlePackage;

    return (
        <>
              <Card style={{ width: '18rem' }} className="m-3">
                    <Card.Img variant="top" src={Image_Url} className="package-image"/>
                    <Card.Body>
                        <Card.Title><h5>{Package_Name}</h5></Card.Title>
                        <Card.Text>
                            <h6>Duration: {Duration} , Price: {Price}  Taka</h6>
                        </Card.Text>

                        <Link to = {`/details/${_id}`}><Button variant="primary" className="m-1">See Details</Button></Link>

                        <Link 
                            to = {`/my-bookings/${_id}`}>
                            <Button 
                                // onClick={()=> props.handleBookNow(props.singlePackage)}
                                variant="success">
                                Book Now
                            </Button>
                        </Link>
                     
                        
                    </Card.Body>
                </Card>
        </>
    );
};

export default SinglePackage;