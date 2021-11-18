import React, { useEffect, useState } from "react";
import "./UpDateBookings.css";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const UpDateBookings = () => {
  // const { handleSubmit } = useForm();
  const [updateData, setUpdateData] = useState({
    Contact_Number: "",
    Person_Num_Adults: "",
    Person_Num_Kids: "",
  });
  const { bookingId } = useParams();
  // console.log(bookingId);
  useEffect(() => {
    fetch(
      `https://fierce-sands-68356.herokuapp.com/travel-booth-bd/select-bookings/${bookingId}`
    )
      .then((res) => res.json())
      .then((data) => setUpdateData(data.confirmData));
  }, [bookingId]);

  // posting updated data to the server
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("client site: ", updateData);

    fetch(
      `https://fierce-sands-68356.herokuapp.com/travel-booth-bd/update-bookings/${bookingId}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updateData),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("Updated your bookings Succesfully !");
          setUpdateData({
            Contact_Number: "",
            Person_Num_Adults: "",
            Person_Num_Kids: "",
          });
          // setUpdateData(e.target.reset);
        }
      });
  };
  // taking changing data from input field
  const handleChangeData = (e) => {
    setUpdateData({ ...updateData, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="update-bookings">
        <h1 className="mt-5 text-center">Update Your Information</h1>
        <form onSubmit={handleSubmit} className="confirm-booking-form">
          <input
            type="tel"
            value={updateData?.Contact_Number || ""}
            onChange={handleChangeData}
            name="Contact_Number"
            placeholder="mobile number"
            className="ps-5"
            required
          />

          <input
            type="number"
            value={updateData?.Person_Num_Adults || ""}
            onChange={handleChangeData}
            name="Person_Num_Adults"
            placeholder="number of person (adult)"
            className="ps-5"
            required
          />

          <input
            type="number"
            value={updateData?.Person_Num_Kids || ""}
            onChange={handleChangeData}
            name="Person_Num_Kids"
            placeholder="number of person (kids)"
            className="ps-5"
            required
          />

          <input className="mt-3" type="submit" />
        </form>
        <Link to="/my-bookings">
          <Button className="d-block mx-auto m-2">Go to My Bookings</Button>
        </Link>
      </div>
    </>
  );
};

export default UpDateBookings;
