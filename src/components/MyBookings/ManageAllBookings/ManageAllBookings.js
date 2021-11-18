import React, { useEffect, useState } from "react";
import "./ManageAllBookings.css";
import { Col, Container, Row, Table } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";

const ManageAllBookings = () => {
  const [allBookings, setAllBookings] = useState([]);
  const { user } = useAuth();
  // const {_id, Package_Name, Booked_User, confirmData, Price  } = myAllBookings;
  const email = user.email;

  useEffect(() => {
    fetch(
      `https://fierce-sands-68356.herokuapp.com/travel-booth-bd/all-bookings`
    )
      .then((res) => res.json())
      .then((data) => setAllBookings(data));
    // console.log("from fetch:",myAllBookings);
  }, []);

  // useEffect( () => {
  //     const foundMyAllBookings = myAllBookings.find(search => user.email === myAllBookings.Booked_Email )
  //     console.log("from filter: ",foundMyAllBookings);
  // }, [myAllBookings,user.email])

  return (
    <>
      <Container>
        <Row>
          <Col lg={12} md={12} sm={12}>
            <div className="my-all-bookings-container">
              <h1 className="mt-3">Total Bookings : {allBookings.length} </h1>
              <Table
                striped
                bordered
                responsive="lg, md, sm, xs"
                className="mt-5"
              >
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Package Name</th>
                    <th>Booking ID</th>
                    <th>Client Name</th>
                    <th>Contact</th>
                    <th>Email</th>
                    <th>Adult Persons</th>
                    <th>Kids</th>
                  </tr>
                </thead>
                <tbody>
                  {allBookings.length < 1 ? (
                    <h5 className="bg-danger text-center mt-5 p-2 text-white">
                      No Data Found !
                    </h5>
                  ) : (
                    allBookings.map((mb, index) => (
                      <tr key={mb._id}>
                        <td>{index}</td>
                        <td>
                          {mb.Package_Name} - {mb.Price}/=
                        </td>
                        <td>{mb._id}</td>
                        <td>{mb.Booked_User}</td>
                        <td>{mb.confirmData.Contact_Number}</td>
                        <td>{mb.Booked_Email}</td>
                        <td>{mb.confirmData.Person_Num_Adults}</td>
                        <td>{mb.confirmData.Person_Num_Kids}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ManageAllBookings;
