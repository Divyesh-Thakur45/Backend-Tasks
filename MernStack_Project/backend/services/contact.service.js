const contactModel = require("../models/contact.model");

const contactService = async (image, name, email, number, id) => {
  try {
    const data = await contactModel.create({
      image,
      name,
      email,
      number,
      userId: id,
    });
    return {
      status: 201,
      message: "User created successfully 🎉",
      data,
      success: true,
    };
  } catch (error) {
    console.error(error);
  }
};

const allServices = async (id) => {
  try {
    const data = await contactModel.find({ userId: id });
    if (data.length <= 0) {
      return {
        status: 409,
        message: "You don't have data ⚠️",
        success: false,
      };
    }
    return {
      status: 201,
      message: "Data get successfully 🎉",
      data,
      success: true,
    };
  } catch (error) {
    console.error(error.message);
  }
};

const deleteServices = async (id) => {
  try {
    const data = await contactModel.findOne({ _id: id });
    if (!data) {
      return {
        status: 409,
        message: "data is not exist ⚠️",
        success: false,
      };
    }
    let deletedData = await contactModel.findByIdAndDelete({ _id: id });

    return {
      status: 201,
      message: "Data Deleted successfully 🎉",
      deletedData,
      success: true,
    };
  } catch (error) {
    console.error(error.message);
  }
};

const updateService = async (id, updateData) => {
  try {
    const data = await contactModel.findOne({ _id: id });
    if (!data) {
      return {
        status: 404,
        message: "Data does not exist ⚠️",
        success: false,
      };
    }
    const updatedData = await contactModel.findByIdAndUpdate(
      data._id,
      updateData,
      {
        new: true,
        runValidators: true,
      }
    );

    return {
      status: 200,
      message: "Data updated successfully 🎉",
      updatedData,
      success: true,
    };
  } catch (error) {
    console.error("Update error:", error.message);
    return {
      status: 500,
      message: "Update failed",
      success: false,
    };
  }
};

const oneServices = async (id) => {
  try {
    const data = await contactModel.findOne({ _id: id });
    if (!data) {
      return {
        status: 409,
        message: "You don't have data ⚠️",
        success: false,
      };
    }
    return {
      status: 201,
      message: "Data get successfully 🎉",
      data,
      success: true,
    };
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = {
  contactService,
  allServices,
  deleteServices,
  updateService,
  oneServices,
};
