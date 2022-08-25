const { Op } = require("sequelize");
const { Router } = require("express");
const { User, Category, Movie } = require("../db.js");
const { createData } = require("../utils/createData");
const router = Router();

// Configuracion de  los routers

router.post("/login", async function (req, res) {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required",
      });
    }
    const user = await User.findOne({ where: { email, password } });
    if (!user) {
      return res.status(400).send({ message: "user or  password incorrect" }); // si no existe el usuario
    }
    return res.status(200).send({ message: "user logged in", user });
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.post("/register", async function (req, res) {
  try {
    const { email, password, name, lastname } = req.body;
    if (!email || !password || !name || !lastname) {
      return res.status(400).json({
        message: "Email, password, name and lastname are required",
      });
    }

    const user = await User.findOne({ where: { email } });
    if (user) {
      return res.status(400).send({ message: "user already exists" }); // si ya existe el usuario
    }
    const newUser = await User.create({ email, password, name, lastname });
    return res.status(201).send({
      message: "user has been create",
    });
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.get("/categories", async function (req, res) {
  try {
    const categories = await Category.findAll();
    return res.status(200).send({ categories, message: "categories found" });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error, message: "error finding categories" });
  }
});

router.get("/categories/:id", async function (req, res) {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).send({ message: "id is required" });
    }
    const category = await Category.findOne({ where: { id } });
    if (!category) {
      return res.status(400).send({ message: "category not found" });
    }
    let movies = await category.getMovies();
    return res.status(200).send({ movies, message: "movies found" });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error, message: "error finding categories" });
  }
});

router.get("/search", async function (req, res) {
  try {
    const { name } = req.query;
    if (!name) {
      return res.status(400).send({ message: "name is required" });
    }
    name.toLowerCase();

    const movies = await Movie.findAll({
      where: {
        title: {
          [Op.like]: `%${req.query.name}%`,
        },
      },
    });

    return res.status(200).send({ movies, message: "movies found" });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error, message: "error finding movies" });
  }
});

router.get("/details/:id", async function (req, res) {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).send({ message: "id is required" });
    }
    const movie = await Movie.findOne({
      where: { id },
    });
    if (!movie) {
      return res.status(400).send({ message: "movie not found" });
    }
    return res.status(200).send({ movie, message: "movie found" });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error, message: "error finding movie" });
  }
});

router.get("/user/:id", async function (req, res) {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).send({ message: "id is required" });
    }
    const user = await User.findOne({
      where: { id },
    });
    if (!user) {
      return res.status(400).send({ message: "user not found" });
    }
    return res.status(200).send({ user, message: "user found" });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error, message: "error finding user" });
  }
});

router.get("/create", function (req, res) {
  createData();
  return res.status(200).send({ message: "data created" });
});

module.exports = router;
