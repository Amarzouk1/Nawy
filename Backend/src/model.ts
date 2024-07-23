const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const apartmentSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      minlength: [3, "Name must be at least 3 characters long"],
      maxlength: [100, "Name must be less than 100 characters long"]
    },
    size: {
      type: Number,
      required: [true, "Size is required"],
      min: [1, "Size must be at least 1 square meter"],
      max: [10000, "Size must be less than 10000 square meters"]
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
      min: [0, "Price must be a positive number"]
    },
    location: {
      type: String,
      required: [true, "Location is required"],
      trim: true,
      minlength: [3, "Location must be at least 3 characters long"],
      maxlength: [100, "Location must be less than 100 characters long"]
    },
    bedrooms: {
      type: Number,
      required: [true, "Number of bedrooms is required"],
      min: [0, "Number of bedrooms must be at least 0"],
      max: [100, "Number of bedrooms must be less than 100"]
    },
    bathrooms: {
      type: Number,
      required: [true, "Number of bathrooms is required"],
      min: [0, "Number of bathrooms must be at least 0"],
      max: [100, "Number of bathrooms must be less than 100"]
    },
    images: [{
      type: String,
      validate: {
        validator: function(v) {
          return /^(http|https):\/\/[^ "]+$/.test(v);
        },
        message: props => `${props.value} is not a valid URL`
      }
    }]
  },
  { timestamps: { createdAt: "created_at" } }
);

const Apartment = mongoose.model("Apartment", apartmentSchema);
module.exports = Apartment;