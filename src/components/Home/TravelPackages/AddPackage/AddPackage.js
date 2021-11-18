import React from "react";
import "./AddPackage.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const AddPackage = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    axios
      .post(
        "https://fierce-sands-68356.herokuapp.com/travel-booth-bd/travel-packages",
        data
      )
      .then((response) => {
        console.log(response);
      });
  };
  return (
    <>
      <div className="add-package-container">
        <h1 className="text-center mt-5 mb-5">Add Travel Package</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="form">
          <input
            {...register("Package_Name")}
            placeholder="write package name"
            className="p-2"
            required
          />
          <input
            {...register("Image_Url")}
            placeholder="image link"
            className="p-2"
            required
          />
          <input
            {...register("Duration")}
            placeholder="tour duration"
            className="p-2"
            required
          />
          <input
            {...register("Day1_Title")}
            placeholder="day1 title:"
            className="p-2"
            required
          />
          <textarea
            {...register("Day_1")}
            placeholder="day1 description..."
            className="p-2"
          />
          <input
            {...register("Day2_Title")}
            placeholder="day2 title:"
            className="p-2"
            required
          />
          <textarea
            {...register("Day_2")}
            placeholder="day2 description..."
            className="p-2"
          />
          <input
            {...register("Day3_Title")}
            placeholder="day3 title:"
            className="p-2"
            required
          />
          <textarea
            {...register("Day_3")}
            placeholder="day3 description..."
            className="p-2"
          />
          <input
            type="number"
            {...register("Price")}
            placeholder="add costing in BDT"
            className="p-2"
            required
          />
          <input type="submit" />
        </form>
        <Link to="/travel-packages" className="back-button-link">
          <Button className="back-button mt-2 mb-3">See All Packages</Button>
        </Link>
      </div>
    </>
  );
};

export default AddPackage;
