import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./MyBookingForm.css";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import useAuth from "../../hooks/useAuth";

const MyBookingForm = () => {
  const [myBookings, setMyBookings] = useState([]);
  // const [confirmData, setConfirmData] = useState({});
  const { user } = useAuth();

  const { id } = useParams();
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    fetch(
      `https://fierce-sands-68356.herokuapp.com/travel-booth-bd/travel-packages/${id}`
    )
      .then((res) => res.json())
      .then((data) => setMyBookings(data));
  }, [id]);

  const onSubmit = (data) => {
    console.log(data);
    // setConfirmData(data);
    // console.log(confirmData);

    if (user.email) {
      const bookingData = {
        Booked_Email: user.email,
        Booked_User: user.displayName,
        Travel_Package_Id: myBookings._id,
        Package_Name: myBookings.Package_Name,
        Price: myBookings.Price,
        Duration: myBookings.Duration,
        confirmData: data,
      };

      axios
        .post(
          "https://fierce-sands-68356.herokuapp.com/travel-booth-bd/book-now",
          bookingData
        )
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            alert("Booking added successfully...");
          }
        });
    }
  };

  return (
    <>
      {myBookings < 0 ? (
        ""
      ) : (
        <Container className="all-bookings mx-auto">
          <Row>
            <h1 className="bg-info text-center rounded p-3 mt-5 mb-5">
              Confirm Your Bookings giving some informations
            </h1>
            <Col lg={12} md={12} sm={12}>
              <div className="mx-auto bg-light p-lg-5 rounded-2 mb-5">
                <h4 className="mt-2">
                  * Travel Package you choose :: {myBookings.Package_Name},{" "}
                  {myBookings.Duration}, {myBookings.Price}/= (per person)
                </h4>

                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="confirm-booking-form"
                >
                  <input
                    type="tel"
                    {...register("Contact_Number")}
                    placeholder="mobile number"
                    className="p-2"
                    required
                  />

                  <input
                    type="number"
                    {...register("Person_Num_Adults")}
                    placeholder="number of person (adult)"
                    className="p-2"
                    required
                  />

                  <input
                    type="number"
                    {...register("Person_Num_Kids")}
                    placeholder="number of person (kids)"
                    className="p-2"
                    required
                  />

                  <input className="mt-3" type="submit" />
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};

export default MyBookingForm;
