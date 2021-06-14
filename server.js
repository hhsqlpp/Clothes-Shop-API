const express = require("express");
const cors = require("cors");
const shortid = require("shortid");
const port = 1717;
const app = express();

const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("db.json");
const db = low(adapter);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

db.defaults({
  shoes: [
    // Nike
    {
      id: shortid.generate(),
      name: "Nike Air Jordan 4 Retro",
      brand: "Nike",
      img: "https://slonsneakers.ru/userfiles/shop/medium/10/99303_nike-air-jordan-4-retro.jpg",
      price: 5000,
      color: "Белый",
    },
    {
      id: shortid.generate(),
      name: "Nike Air Force 1 Low",
      img: "https://slonsneakers.ru/userfiles/shop/medium/10/99300_nike-air-force-1-low.jpg",
      brand: "Nike",
      price: 4400,
      color: "Серый",
    },
    {
      id: shortid.generate(),
      name: "Nike Lebron Witness V",
      brand: "Nike",
      img: "https://slonsneakers.ru/userfiles/shop/medium/10/99261_nike-lebron-witness-v.jpg",
      price: 5200,
      color: "Белый",
    },
    {
      id: shortid.generate(),
      name: "Nike Air Jordan 1",
      img: "https://slonsneakers.ru/userfiles/shop/medium/10/99013_nike-air-jordan-1.jpg",
      brand: "Nike",
      price: 4800,
      color: "Белый",
    },
    {
      id: shortid.generate(),
      name: "Sacai x Nike Vapor Waffle",
      brand: "Nike",
      img: "https://slonsneakers.ru/userfiles/shop/medium/10/99078_sacai-x-nike-vapor-waffle.jpg",
      price: 5400,
      color: "Фиолетовый",
    },
    {
      id: shortid.generate(),
      name: "Nike Air Jordan 1",
      img: "https://slonsneakers.ru/userfiles/shop/medium/10/99106_nike-air-jordan-1.jpg",
      brand: "Nike",
      price: 4800,
      color: "Синий",
    },
    // Adidas
    {
      id: shortid.generate(),
      name: "Adidas Nite Jogger",
      img: "https://slonsneakers.ru/userfiles/shop/medium/10/99292_adidas-nite-jogger.jpg",
      brand: "Adidas",
      price: 4900,
      color: "Красный",
    },
    {
      id: shortid.generate(),
      name: "Adidas Yeezy 350 Boost v2",
      img: "https://slonsneakers.ru/userfiles/shop/medium/10/99154_adidas-yeezy-350-boost-v2.jpg",
      brand: "Adidas",
      price: 5000,
      color: "Коричневый",
    },
    {
      id: shortid.generate(),
      name: "Adidas Nite Jogger",
      img: "https://slonsneakers.ru/userfiles/shop/medium/10/99058_adidas-x9000l4.jpg",
      brand: "Adidas",
      price: 4800,
      color: "Черный",
    },
    {
      id: shortid.generate(),
      name: "Adidas Yeezy Basketball Quantum",
      img: "https://slonsneakers.ru/userfiles/shop/medium/10/98160_adidas-yeezy-basketball-quantum.jpg",
      brand: "Adidas",
      price: 4400,
      color: "Черный",
    },
    {
      id: shortid.generate(),
      name: "Adidas Yeezy Boost 700 v2",
      img: "https://slonsneakers.ru/userfiles/shop/medium/10/97324_adidas-yeezy-boost-700-v2.jpg",
      brand: "Adidas",
      price: 4800,
      color: "Серый",
    },
    // Puma
    {
      id: shortid.generate(),
      name: "Puma RS-Fast",
      img: "https://slonsneakers.ru/userfiles/shop/medium/10/99164_puma-rs-fast.jpg",
      brand: "Puma",
      price: 4800,
      color: "Золотой",
    },
    {
      id: shortid.generate(),
      name: "Puma Mapm Roma",
      img: "https://slonsneakers.ru/userfiles/shop/medium/10/97277_puma-mapm-roma.jpg",
      brand: "Puma",
      price: 4200,
      color: "Черный",
    },
    {
      id: shortid.generate(),
      name: "Puma Basket Stitched Shoes",
      img: "https://slonsneakers.ru/userfiles/shop/medium/4/37179_puma-basket-stitched-shoes.jpg",
      brand: "Puma",
      price: 4300,
      color: "Белый",
    },
    // VANS
    {
      id: shortid.generate(),
      name: "Old Skool Blue",
      img: "https://slonsneakers.ru/userfiles/shop/medium/3/22684_old-skool-blue.jpg",
      brand: "VANS",
      price: 3150,
      color: "Синий",
    },
    {
      id: shortid.generate(),
      name: "Кеды VANS Old Skool",
      img: "https://slonsneakers.ru/userfiles/shop/medium/10/97915_kedy-vans-old-skool.jpg",
      brand: "VANS",
      price: 3600,
      color: "Черный",
    },
    // Reebok
    {
      id: shortid.generate(),
      name: "Vetements x Reebok Spike Runner 200",
      img: "https://slonsneakers.ru/userfiles/shop/medium/10/97125_vetements-x-reebok-spike-runner-200.jpg",
      brand: "Reebok",
      price: 4800,
      color: "Белый",
    },
    {
      id: shortid.generate(),
      name: "Reebok Classics Zig Kinetica",
      img: "https://slonsneakers.ru/userfiles/shop/medium/10/98974_reebok-classics-zig-kinetica.jpg",
      brand: "Reebok",
      price: 5100,
      color: "Белый",
    },
    {
      id: shortid.generate(),
      name: "Vetements x Reebok Spike Runner 200",
      img: "https://slonsneakers.ru/userfiles/shop/medium/10/97003_vetements-x-reebok-spike-runner-200.jpg",
      brand: "Reebok",
      price: 4800,
      color: "Серый",
    },
  ],
  Tshirts: [
    // Nike
    {
      id: shortid.generate(),
      name: "Футболка Nike V1",
      price: 1800,
      img: "https://slonsneakers.ru/userfiles/shop/medium/10/96699_futbolka-nike.jpg",
      brand: "Nike",
      color: "Белый",
    },
    {
      id: shortid.generate(),
      name: "Футболка Nike V2",
      price: 1800,
      img: "https://slonsneakers.ru/userfiles/shop/medium/10/96704_futbolka-nike.jpg",
      brand: "Nike",
      color: "Белый",
    },
    {
      id: shortid.generate(),
      name: "Футболка Nike V3",
      price: 1800,
      img: "https://slonsneakers.ru/userfiles/shop/medium/10/96709_futbolka-nike.jpg",
      brand: "Nike",
      color: "Синий",
    },
    {
      id: shortid.generate(),
      name: "Джерси Nike Dallas Mavericks",
      price: 1700,
      img: "https://slonsneakers.ru/userfiles/shop/medium/10/98192_dzhersi-nike-dallas-mavericks.jpg",
      brand: "Nike",
      color: "Черный",
    },
    {
      id: shortid.generate(),
      name: "Джерси Nike Los Angeles Lakers",
      price: 1700,
      img: "https://slonsneakers.ru/userfiles/shop/medium/10/98187_dzhersi-nike-los-angeles-lakers.jpg",
      brand: "Nike",
      color: "Белый",
    },
    // Adidas
    {
      id: shortid.generate(),
      name: "Футболка Adidas V1",
      price: 1600,
      img: "https://slonsneakers.ru/userfiles/shop/medium/3/25115_futbolka-adidas.jpg",
      brand: "Adidas",
      color: "Синий",
    },
    {
      id: shortid.generate(),
      name: "Футболка Adidas V2",
      price: 1690,
      img: "https://slonsneakers.ru/userfiles/shop/medium/3/21993_futbolka-adidas.jpg",
      brand: "Adidas",
      color: "Черный",
    },
    // OFF-White
    {
      id: shortid.generate(),
      name: "Футболка OFF-WHITE V1",
      price: 1800,
      img: "https://slonsneakers.ru/userfiles/shop/medium/10/96955_futbolka-off-white.jpg",
      brand: "OFF-White",
      color: "Черный",
    },
    {
      id: shortid.generate(),
      name: "Футболка OFF-WHITE V2",
      price: 1800,
      img: "https://slonsneakers.ru/userfiles/shop/medium/10/96601_futbolka-off-white.jpg",
      brand: "OFF-White",
      color: "Серый",
    },
    {
      id: shortid.generate(),
      name: "Футболка OFF-WHITE V3",
      price: 1800,
      img: "https://slonsneakers.ru/userfiles/shop/medium/10/96560_futbolka-off-white.jpg",
      brand: "OFF-White",
      color: "Красный",
    },
    {
      id: shortid.generate(),
      name: "Футболка-обманка OFF-WHITE V2",
      price: 2450,
      img: "https://slonsneakers.ru/userfiles/shop/medium/10/98197_futbolka-obmanka-off-white.jpg",
      brand: "OFF-White",
      color: "Черный",
    },
    {
      id: shortid.generate(),
      name: "Футболка-обманка OFF-WHITE V2",
      price: 2450,
      img: "https://slonsneakers.ru/userfiles/shop/medium/10/98196_futbolka-obmanka-off-white.jpg",
      brand: "OFF-White",
      color: "Белый",
    },
  ],
  hoodies: [
    // Nike
    {
      id: shortid.generate(),
      name: "Худи Nike",
      price: 2500,
      brand: "Nike",
      img: "https://slonsneakers.ru/userfiles/shop/medium/10/98266_khudi-nike.jpg",
      color: "Белый",
    },
    {
      id: shortid.generate(),
      name: "Худи OFF-WHITE x Air Jordan",
      price: 3100,
      brand: "Nike",
      img: "https://slonsneakers.ru/userfiles/shop/medium/10/98110_khudi-off-white-x-air-jordan.jpg",
      color: "Серый",
    },
    {
      id: shortid.generate(),
      name: "Худи Nike Air Jordan",
      price: 2800,
      brand: "Nike",
      img: "https://slonsneakers.ru/userfiles/shop/medium/10/98096_khudi-nike-air-jordan.jpg",
      color: "Черный",
    },
    // Supreme
    {
      id: shortid.generate(),
      name: "Худи Supreme V1",
      price: 2400,
      brand: "Supreme",
      img: "https://slonsneakers.ru/userfiles/shop/medium/3/24825_khudi-supreme.jpg",
      color: "Желтый",
    },
    {
      id: shortid.generate(),
      name: "Худи Supreme V2",
      price: 2400,
      brand: "Supreme",
      img: "https://slonsneakers.ru/userfiles/shop/medium/3/24821_khudi-supreme.jpg",
      color: "Зеленый",
    },
    // The Norh Face
    {
      id: shortid.generate(),
      name: "Худи The North Face V1",
      price: 2900,
      brand: "The Norh Face",
      img: "https://slonsneakers.ru/userfiles/shop/medium/10/98276_khudi-the-north-face.jpg",
      color: "Белый",
    },
    {
      id: shortid.generate(),
      name: "Худи The North Face V2",
      price: 2900,
      brand: "The Norh Face",
      img: "https://slonsneakers.ru/userfiles/shop/medium/10/98275_khudi-the-north-face.jpg",
      color: "Серый",
    },
    {
      id: shortid.generate(),
      name: "Худи The North Face V3",
      price: 2900,
      brand: "The Norh Face",
      img: "https://slonsneakers.ru/userfiles/shop/medium/10/98274_khudi-the-north-face.jpg",
      color: "Черный",
    },
    // OFF-White
    {
      id: shortid.generate(),
      name: "Худи OFF-WHITE V1",
      price: 2590,
      brand: "OFF-White",
      img: "https://slonsneakers.ru/userfiles/shop/medium/3/24707_khudi-off-white.jpg",
      color: "Белый",
    },
    {
      id: shortid.generate(),
      name: "Худи OFF-WHITE V2",
      price: 2600,
      brand: "OFF-White",
      img: "https://slonsneakers.ru/userfiles/shop/medium/3/20876_khudi-off-white.jpg",
      color: "Серый",
    },
    {
      id: shortid.generate(),
      name: "Худи OFF-WHITE V3",
      price: 3190,
      brand: "OFF-White",
      img: "https://slonsneakers.ru/userfiles/shop/medium/2/18231_khudi-off-white.jpg",
      color: "Коричневый",
    },
  ],
  trousers: [
    // Nike
    {
      id: shortid.generate(),
      name: "Брюки спортивные Nike V1",
      price: 2600,
      img: "https://slonsneakers.ru/userfiles/shop/medium/2/19155_bryuki-sportivnye-nike.jpg",
      brand: "Nike",
      color: "Черный",
    },
    {
      id: shortid.generate(),
      name: "Брюки спортивные Nike V2",
      price: 2050,
      img: "https://slonsneakers.ru/userfiles/shop/medium/3/22592_bryuki-sportivnye-nike.jpg",
      brand: "Nike",
      color: "Серый",
    },
    {
      id: shortid.generate(),
      name: "Брюки спортивные Nike V3",
      price: 2390,
      img: "https://slonsneakers.ru/userfiles/shop/medium/3/22544_bryuki-sportivnye-nike.jpg",
      brand: "Nike",
      color: "Черный",
    },
    // The North Face
    {
      id: shortid.generate(),
      name: "Брюки спортивные The North Face V1",
      price: 2800,
      img: "https://slonsneakers.ru/userfiles/shop/medium/10/98106_bryuki-sportivnye-the-north-face.jpg",
      brand: "The North Face",
      color: "Серый",
    },
    {
      id: shortid.generate(),
      name: "Брюки спортивные The North Face V2",
      price: 2800,
      img: "https://slonsneakers.ru/userfiles/shop/medium/10/98105_bryuki-sportivnye-the-north-face.jpg",
      brand: "The North Face",
      color: "Черный",
    },
    // OFF-White
    {
      id: shortid.generate(),
      name: "Брюки спортивные OFF-WHITE V1",
      price: 2800,
      img: "https://slonsneakers.ru/userfiles/shop/medium/10/96448_bryuki-sportivnye-off-white.jpg",
      brand: "OFF-White",
      color: "Белый",
    },
  ],
  jackets: [
    // Nike
    {
      id: shortid.generate(),
      name: "Куртка Nike V1",
      price: 8000,
      img: "https://slonsneakers.ru/userfiles/shop/medium/10/97704_kurtka-nike.jpg",
      brand: "Nike",
      color: "Черный",
    },
    {
      id: shortid.generate(),
      name: "Куртка зимняя Nike V2",
      price: 8500,
      img: "https://slonsneakers.ru/userfiles/shop/medium/10/97699_kurtka-zimnyaya-nike.jpg",
      brand: "Nike",
      color: "Черный",
    },
    {
      id: shortid.generate(),
      name: "Куртка Nike V2",
      price: 3600,
      img: "https://slonsneakers.ru/userfiles/shop/medium/3/24041_kurtka-nike.jpg",
      brand: "Nike",
      color: "Белый",
    },
    // Adidas
    {
      id: shortid.generate(),
      name: "Куртка Adidas V1",
      price: 8000,
      img: "https://slonsneakers.ru/userfiles/shop/medium/10/97705_kurtka-adidas.jpg",
      brand: "Adidas",
      color: "Черный",
    },
    {
      id: shortid.generate(),
      name: "Куртка зимняя Adidas V2",
      price: 6500,
      img: "https://slonsneakers.ru/userfiles/shop/medium/10/97699_kurtka-zimnyaya-nike.jpg",
      brand: "Adidas",
      color: "Черный",
    },
    {
      id: shortid.generate(),
      name: "Куртка Adidas V2",
      price: 8000,
      img: "https://slonsneakers.ru/userfiles/shop/medium/10/97701_kurtka-zimnyaya-adidas.jpg",
      brand: "Adidas",
      color: "Черный",
    },
    // Tommy Hilfiger
    {
      id: shortid.generate(),
      name: "Куртка зимняя Tommy Hilfiger V1",
      price: 4500,
      img: "https://slonsneakers.ru/userfiles/shop/medium/4/30221_kurtka-zimnyaya-tommy-jeans.jpg",
      brand: "Tommy Hilfiger",
      color: "Синий",
    },
    // Tommy Balenciaga
    {
      id: shortid.generate(),
      name: "Куртка Balenciaga V1",
      price: 5200,
      img: "https://slonsneakers.ru/userfiles/shop/medium/4/36399_kurtka-balenciaga.jpg",
      brand: "Balenciaga",
      color: "Синий",
    },
    // OFF-White
    {
      id: shortid.generate(),
      name: "Куртка зимняя OFF-WHITE V1",
      price: 5500,
      img: "https://slonsneakers.ru/userfiles/shop/medium/4/30187_kurtka-zimnyaya-off-white.jpg",
      brand: "OFF-White",
      color: "Черный",
    },
    {
      id: shortid.generate(),
      name: "Куртка зимняя OFF-WHITE V2",
      price: 7500,
      img: "https://slonsneakers.ru/userfiles/shop/medium/10/97736_kurtka-zimnyaya-off-white.jpg",
      brand: "OFF-White",
      color: "Белый",
    },
    {
      id: shortid.generate(),
      name: "Куртка OFF-White V1",
      price: 7890,
      img: "https://slonsneakers.ru/userfiles/shop/medium/3/24091_kurtka-off-white.jpg",
      brand: "OFF-White",
      color: "Черный",
    },
  ],
  categories: [
    {
      name: "Мужская Обувь",
      img: "https://slonsneakers.ru/userfiles/bs/67hvc_ofhgg_5.jpg",
      href: "shoes",
    },
    {
      name: "Футболки",
      img: "https://sneakerhead.ru/upload/resize_cache/webp/iblock/f8c/f8cc73ab0e6cee45711807e9bac6aca9.webp",
      href: "Tshirts",
    },
    {
      name: "Худи",
      img: "https://merchpoint.ru/wp-content/uploads/2021/02/%D0%A5%D1%83%D0%B4%D0%B8-Improve-Dynamics-1.png",
      href: "hoodies",
    },
    {
      name: "Штаны",
      img: "https://cbu01.alicdn.com/img/ibank/2019/685/159/11353951586_287164840.jpg",
      href: "trousers",
    },
    {
      name: "Куртки",
      img: "https://i.pinimg.com/originals/e1/53/98/e15398d937d0221b8fd5fc99f57c0933.jpg",
      href: "jackets",
    },
  ],
  brands: [
    {
      name: "Nike",
      img: "https://slonsneakers.ru/userfiles/shop/small/1_nike.png",
    },
    {
      name: "Supreme",
      img: "https://slonsneakers.ru/userfiles/shop/small/6919_supreme.png",
    },
    {
      name: "Adidas",
      img: "https://slonsneakers.ru/userfiles/shop/small/2_adidas.png",
    },
    {
      name: "Thrasher",
      img: "https://slonsneakers.ru/userfiles/shop/small/6880_thrasher.png",
    },
    {
      name: "Reebok",
      img: "https://slonsneakers.ru/userfiles/shop/small/3_reebok.png",
    },
    {
      name: "Palace",
      img: "https://slonsneakers.ru/userfiles/shop/small/6881_palace.jpg",
    },
  ],
  cart: [],
}).write();

// Cart
app.post("/addToCart", (req, res) => {
  const newItem = {
    id: shortid.generate(),
    name: req.body.name,
    count: req.body.count,
    price: req.body.price,
    image: req.body.image || null,
    size: req.body.size,
  };

  db.get("cart").push(newItem).write();
  res.send({ ...newItem });
});

// Get brands
app.get("/brands", (req, res) => {
  const data = db.get("brands");
  res.send(data);
});

// Get all categories
app.get("/categories", (req, res) => {
  const data = db.get("categories");
  res.send(data);
});

// Shoes
app.get("/category/shoes", (req, res) => {
  const data = db.get("shoes").value();
  res.send(data);
});

app.get("/category/shoes/:id", (req, res) => {
  const { id } = req.params;
  const datas = db.get("shoes").value();
  const shoe = datas.find((data) => data.id === id);
  res.send(shoe);
});

app.post("/category/shoes/create", (req, res) => {
  const newShoes = { ...req.body, id: shortid.generate() };
  db.get("shoes").push(newShoes).write();
  res.send({ ...newShoes });
});

app.put("/category/shoes/update/:id", (req, res) => {
  const { id } = req.params;
  let item = db.get("shoes").find({ id }).value();
  let updateShoes = {
    ...item,
    ...req.body,
  };
  db.get("shoes").find({ id }).assign(updateShoes).write();
  res.send(updateShoes);
});

app.delete("/category/shoes/delete/:id", (req, res) => {
  const { id } = req.params;
  db.get("shoes").remove({ id }).write();
  res.send("Success deleted");
});

// Trousers
app.get("/category/trousers", (req, res) => {
  const data = db.get("trousers").value();
  res.send(data);
});

app.get("/category/trousers/:id", (req, res) => {
  const { id } = req.params;
  const datas = db.get("trousers").value();
  const shoe = datas.find((data) => data.id === id);
  res.send(shoe);
});

app.post("/category/trousers/create", (req, res) => {
  const newTrousers = { ...req.body, id: shortid.generate() };
  db.get("shoes").push(newTrousers).write();
  res.send({ ...newTrousers });
});

app.put("/category/trousers/update/:id", (req, res) => {
  const { id } = req.params;
  let item = db.get("trousers").find({ id }).value();
  let updateTrousers = {
    ...item,
    ...req.body,
  };
  db.get("trousers").find({ id }).assign(updateTrousers).write();
  res.send(updateTrousers);
});

app.delete("/category/trousers/delete/:id", (req, res) => {
  const { id } = req.params;
  db.get("trousers").remove({ id }).write();
  res.send("Success deleted");
});

// Jackets
app.get("/category/jackets", (req, res) => {
  const data = db.get("jackets").value();
  res.send(data);
});

app.get("/category/jackets/:id", (req, res) => {
  const { id } = req.params;
  const datas = db.get("jackets").value();
  const shoe = datas.find((data) => data.id === id);
  res.send(shoe);
});

app.post("/category/jackets/create", (req, res) => {
  const newJackets = { ...req.body, id: shortid.generate() };
  db.get("jackets").push(newJackets).write();
  res.send({ ...newJackets });
});

app.put("/category/jackets/update/:id", (req, res) => {
  const { id } = req.params;
  let item = db.get("jackets").find({ id }).value();
  let updateTrousers = {
    ...item,
    ...req.body,
  };
  db.get("trousers").find({ id }).assign(updateTrousers).write();
  res.send(updateTrousers);
});

app.delete("/category/jackets/delete/:id", (req, res) => {
  const { id } = req.params;
  db.get("jackets").remove({ id }).write();
  res.send("Success deleted");
});

// Tshirts
app.get("/category/Tshirts", (req, res) => {
  const data = db.get("Tshirts").value();
  res.send(data);
});

app.get("/category/Tshirts/:id", (req, res) => {
  const { id } = req.params;
  const datas = db.get("Tshirts").value();
  const shoe = datas.find((data) => data.id === id);
  res.send(shoe);
});

app.post("/category/Tshirts/create", (req, res) => {
  const newTshirts = { ...req.body, id: shortid.generate() };
  db.get("Tshirts").push(newTshirts).write();
  res.send({ ...newTshirts });
});

app.put("/category/Tshirts/update/:id", (req, res) => {
  const { id } = req.params;
  let item = db.get("Tshirts").find({ id }).value();
  let updateTshirts = {
    ...item,
    ...req.body,
  };
  db.get("Tshirts").find({ id }).assign(updateTshirts).write();
  res.send(updateTshirts);
});

app.delete("/category/Tshirts/delete/:id", (req, res) => {
  const { id } = req.params;
  db.get("Tshirts").remove({ id }).write();
  res.send("Success deleted");
});

// Tshirts
app.get("/category/hoodies", (req, res) => {
  const data = db.get("hoodies").value();
  res.send(data);
});

app.get("/category/hoodies/:id", (req, res) => {
  const { id } = req.params;
  const datas = db.get("hoodies").value();
  const shoe = datas.find((data) => data.id === id);
  res.send(shoe);
});

app.post("/category/hoodies/create", (req, res) => {
  const newHoodies = { ...req.body, id: shortid.generate() };
  db.get("hoodies").push(newHoodies).write();
  res.send({ ...newHoodies });
});

app.put("/category/hoodies/update/:id", (req, res) => {
  const { id } = req.params;
  let item = db.get("hoodies").find({ id }).value();
  let updateHoodies = {
    ...item,
    ...req.body,
  };
  db.get("hoodies").find({ id }).assign(updateHoodies).write();
  res.send(updateHoodies);
});

app.delete("/category/hoodies/delete/:id", (req, res) => {
  const { id } = req.params;
  db.get("hoodies").remove({ id }).write();
  res.send("Success deleted");
});

// Listen
app.listen(port, () =>
  console.log(`App listening at http://localhost:${port}`)
);
