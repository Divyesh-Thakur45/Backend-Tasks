const {
  contactService,
  allServices,
  deleteServices,
  updateService,
  oneServices,
} = require("../services/contact.service");

const contactController = async (req, res) => {
  try {
    const  image  = req.file?.originalname;
    const { name, email, number } = req.body;
    const id = req.user.user._id;
    let result = await contactService(image, name, email, number, id);
    res.status(result.status).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message, success: false });
  }
};
const allController = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await allServices(id);
    res.status(result.status).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message, success: false });
  }
};

const deleteController = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await deleteServices(id);
    res.status(result.status).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message, success: false });
  }
};

const updateController = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    const result = await updateService(id, updateData);
    res.status(result.status).json(result);
  } catch (error) {
    console.error("Controller error:", error.message);
    res.status(500).json({ message: error.message, success: false });
  }
};

const oneController = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await oneServices(id);
    res.status(result.status).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message, success: false });
  }
};

module.exports = {
  contactController,
  allController,
  deleteController,
  updateController,
  oneController,
};
