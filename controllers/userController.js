import User from "../models/user.js";


async function createUser(req, res) {
  try {
    const newUser = await User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      password: req.body.password,
      email: req.body.email,
      Age: req.body.Age,
    });

    return res.json(`Se ha creado el usuario`);
  } catch {
    console.log(error);
    return res.status(501).json("Error del servidor");
  }
}

export default {
  createUser: createUser,
};
