import React, { useEffect, useState } from "react";
import "./MyBookings.css";
import { Col, Container, Row, Table, Button } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";
import { useParams, Link } from "react-router-dom";
import { FaTrashAlt, FaEdit } from "react-icons/fa";

const MyBookings = () => {
  const [myBookings, setMyBookings] = useState([]);
  const { user } = useAuth();
  // const { uid } = useParams();
  const email = user.email;
  console.log(email);

  useEffect(() => {
    fetch(
      `https://fierce-sands-68356.herokuapp.com/travel-booth-bd/all-bookings/${email}`
    )
      .then((res) => res.json())
      .then((data) => setMyBookings(data));
    // console.log("from mb:",manageBookings);
  }, [email]);

  //   delete bookings
  const handleDeleteBooking = (bookingId) => {
    console.log("to delete: ", bookingId);
    const proceed = window.confirm("Are you sure to delete your bookings ?");
    if (proceed) {
      fetch(
        `https://fierce-sands-68356.herokuapp.com/travel-booth-bd/delete-booking/${bookingId}`,
        {
          method: "DELETE",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            window.alert("Deleted your booking Successfully...");
            const remainingBookings = myBookings.filter(
              (remainingId) => remainingId._id !== bookingId
            );
            setMyBookings(remainingBookings);
          }
        });
    }
  };

  return (
    <>
      <Container>
        <Row>
          <Col lg={12} md={12} sm={12}>
            <div className="my-all-bookings-container">
              <h1 className="mt-3">My total Bookings: {myBookings.length}</h1>

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
                    <th>Adult Persons</th>
                    <th>Kids</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {myBookings.length < 1 ? (
                    <h5 className="bg-danger text-center mt-5 p-2 text-white">
                      No Data Found !
                    </h5>
                  ) : (
                    myBookings.map((mb, index) => (
                      <tr>
                        <td>{index}</td>
                        <td>
                          {mb.Package_Name} - {mb.Price}/=
                        </td>
                        <td>{mb._id}</td>
                        <td>{mb.Booked_User}</td>
                        <td>{mb.confirmData.Contact_Number}</td>
                        <td>{mb.confirmData.Person_Num_Adults}</td>
                        <td>{mb.confirmData.Person_Num_Kids}</td>
                        <td>
                          <div
                            onClick={() => {
                              handleDeleteBooking(mb._id);
                            }}
                            className="delete-btn"
                          >
                            <span className="m-1">
                              <FaTrashAlt className="del-icon" />
                            </span>
                          </div>
                          <Link to={`/update-bookings/${mb._id}`}>
                            <span className="m-1">
                              <FaEdit />
                            </span>
                          </Link>
                        </td>
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

export default MyBookings;
