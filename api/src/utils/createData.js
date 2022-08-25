const { User, Movie, Category } = require("../db.js");
async function createData() {
  User.create({
    username: "daniela",
    lastname: "perez",
    email: "daniela@perez.com",
    password: "123456",
  });
  User.create({
    username: "juan",
    lastname: "perez",
    email: "juan@perez.com",
    password: "123456",
  });
  User.create({
    username: "pedro",
    lastname: "perez",
    email: "pedro@perez.com",
    password: "123456",
  });
  let ficcion = await Category.create({
    name: "Ciencia Ficcion",
    image:
      "https://educacion30.b-cdn.net/wp-content/uploads/2021/04/sagas-de-ciencia-ficcion-978x652.jpg",
    description:
      "La ciencia ficción es un género cuyos contenidos se encuentran basados en supuestos logros científicos o técnicos que podrían lograrse en el futuro. Este sustento científico hace que la ciencia ficción se diferencie del género fantástico, donde las situaciones y los personajes son fruto de la imaginación.",
    views: 1234,
    moviesNumber: 13456,
    lastMovie: "La vida es bella",
  });
  let accion = await Category.create({
    name: "Accion",
    image:
      "https://as01.epimg.net/epik/imagenes/2019/06/03/portada/1559573314_873311_1559575720_noticia_normal_recorte1.jpg",
    description:
      "Como acción designamos, en líneas generales, la realización de un acto o hecho, o el efecto que produce determinado hecho en cuestión de un tiempo determinado.",
  });
  let aventura = await Category.create({
    name: "Aventura",
    image:
      "https://www.latercera.com/resizer/rv5IPV50avkS7To21sP2iTc0Kms=/arc-anglerfish-arc2-prod-copesa/public/B3YVEJZOF5DC5DJGGYASBFYH5U.jpg",
    description:
      "La etimología de aventura nos traslada a la lengua latina: su vocablo adventūra puede traducirse como aquello que vendrá o acontecerá. La noción suele emplearse en alusión al acontecimiento, el hecho o el evento que, por algún motivo, resulta fuera de lo común.",
    views: 13454,
    moviesNumber: 1346,
    lastMovie: "otra pelicula",
  });
  let drama = await Category.create({
    name: "Drama",
    image:
      "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2016/09/192716-crash.jpg?itok=62p-uX6s",
    description:
      "El drama es un género literario caracterizado por la representación de acciones y situaciones humanas conflictivas, que ha sido concebido para su escenificación",
    views: 890,
    moviesNumber: 90,
    lastMovie: "son como niños",
  });
  let comedia = await Category.create({
    name: "Comedia",
    image:
      "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2019/04/scary-movie.jpg?itok=0JlZCdqy",
    description:
      "La comedia es un género literario, teatral, televisivo y cinematográfico cuya trama busca hacer reír al público, ya sea mediante ironías, parodias, confusiones, equivocaciones o sarcasmos.",
    views: 34873,
    moviesNumber: 879023,
    lastMovie: "la pelicula de la comedia",
  });

  let m1 = await Movie.create({
    title: "La vida es bella",
    video: "https://www.youtube.com/watch?v=5vqVVzZM_8U",
    image:
      "https://www.latercera.com/resizer/rv5IPV50avkS7To21sP2iTc0Kms=/arc-anglerfish-arc2-prod-copesa/public/B3YVEJZOF5DC5DJGGYASBFYH5U.jpg",
    description:
      "La vida es bella es una película de animación estadounidense dirigida por la misma misma directora, que estrenó en el cine el mismo año. La película está basada en la novela homónima escrita por J.R.R. Tolkien.",
    year: "2019",
  });

  m1.setCategory(ficcion);
  let m2 = await Movie.create({
    title: "La vida no es bella",
    video: "https://www.youtube.com/watch?v=5vqVVzZM_8U",
    image:
      "https://www.latercera.com/resizer/rv5IPV50avkS7To21sP2iTc0Kms=/arc-anglerfish-arc2-prod-copesa/public/B3YVEJZOF5DC5DJGGYASBFYH5U.jpg",
    description:
      "La vida es bella es una película de animación estadounidense dirigida por la misma misma directora, que estrenó en el cine el mismo año. La película está basada en la novela homónima escrita por J.R.R. Tolkien.",
    year: "2019",
  });

  m2.setCategory(ficcion);
  let m3 = await Movie.create({
    title: "La vida es bella ll",
    video: "https://www.youtube.com/watch?v=5vqVVzZM_8U",
    image:
      "https://www.latercera.com/resizer/rv5IPV50avkS7To21sP2iTc0Kms=/arc-anglerfish-arc2-prod-copesa/public/B3YVEJZOF5DC5DJGGYASBFYH5U.jpg",
    description:
      "La vida es bella es una película de animación estadounidense dirigida por la misma misma directora, que estrenó en el cine el mismo año. La película está basada en la novela homónima escrita por J.R.R. Tolkien.",
    year: "2019",
  });

  m3.setCategory(ficcion);

  let m4 = await Movie.create({
    title: "La vida no es bella lll",
    video: "https://www.youtube.com/watch?v=5vqVVzZM_8U",
    image:
      "https://www.latercera.com/resizer/rv5IPV50avkS7To21sP2iTc0Kms=/arc-anglerfish-arc2-prod-copesa/public/B3YVEJZOF5DC5DJGGYASBFYH5U.jpg",
    description:
      "La vida es bella es una película de animación estadounidense dirigida por la misma misma directora, que estrenó en el cine el mismo año. La película está basada en la novela homónima escrita por J.R.R. Tolkien.",
    year: "2019",
  });

  m4.setCategory(ficcion);
  let m5 = await Movie.create({
    title: "La vida no es bella llll",
    video: "https://www.youtube.com/watch?v=5vqVVzZM_8U",
    image:
      "https://www.latercera.com/resizer/rv5IPV50avkS7To21sP2iTc0Kms=/arc-anglerfish-arc2-prod-copesa/public/B3YVEJZOF5DC5DJGGYASBFYH5U.jpg",
    description:
      "La vida es bella es una película de animación estadounidense dirigida por la misma misma directora, que estrenó en el cine el mismo año. La película está basada en la novela homónima escrita por J.R.R. Tolkien.",
    year: "2019",
  });

  m5.setCategory(ficcion);
  let m6 = await Movie.create({
    title: "La vida no es bella lllll",
    video: "https://www.youtube.com/watch?v=5vqVVzZM_8U",
    image:
      "https://www.latercera.com/resizer/rv5IPV50avkS7To21sP2iTc0Kms=/arc-anglerfish-arc2-prod-copesa/public/B3YVEJZOF5DC5DJGGYASBFYH5U.jpg",
    description:
      "La vida es bella es una película de animación estadounidense dirigida por la misma misma directora, que estrenó en el cine el mismo año. La película está basada en la novela homónima escrita por J.R.R. Tolkien.",
    year: "2019",
  });
}

module.exports = { createData };
