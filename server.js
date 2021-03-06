const express = require('express');
const cors = require('cors');
const shortid = require('shortid');
const port = 1717;
const app = express();

const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('db.json');
const db = low(adapter);

const error = (res, status, text) => res.status(status).json(text).end();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

db.defaults({
  shoes: [
    // Nike
    {
      id: shortid.generate(),
      name: 'Nike Air Jordan 4 Retro',
      brand: 'Nike',
      img: 'https://slonsneakers-store.ru/userfiles/shop/medium/11/101104_nike-air-jordan-1.jpg',
      price: 5000,
      color: 'Белый',
    },
    {
      id: shortid.generate(),
      name: 'Nike Air Force 1 Low',
      img: 'https://slonsneakers-store.ru/userfiles/shop/medium/11/101096_nike-lunar-force-1-duckboot-low.jpg',
      brand: 'Nike',
      price: 4400,
      color: 'Серый',
    },
    {
      id: shortid.generate(),
      name: 'Nike Lebron Witness V',
      brand: 'Nike',
      img: 'https://slonsneakers-store.ru/userfiles/shop/medium/11/101104_nike-air-jordan-1.jpg',
      price: 5200,
      color: 'Белый',
    },
    {
      id: shortid.generate(),
      name: 'Nike Air Jordan 1',
      img: 'https://slonsneakers-store.ru/userfiles/shop/medium/11/101096_nike-lunar-force-1-duckboot-low.jpg',
      brand: 'Nike',
      price: 4800,
      color: 'Белый',
    },
    {
      id: shortid.generate(),
      name: 'Sacai x Nike Vapor Waffle',
      brand: 'Nike',
      img: 'https://slonsneakers-store.ru/userfiles/shop/medium/11/101104_nike-air-jordan-1.jpg',
      price: 5400,
      color: 'Фиолетовый',
    },
    {
      id: shortid.generate(),
      name: 'Nike Air Jordan 1',
      img: 'https://slonsneakers-store.ru/userfiles/shop/medium/11/101096_nike-lunar-force-1-duckboot-low.jpg',
      brand: 'Nike',
      price: 4800,
      color: 'Синий',
    },
    // Adidas
    {
      id: shortid.generate(),
      name: 'Adidas Nite Jogger',
      img: 'https://slonsneakers-store.ru/userfiles/shop/medium/11/101104_nike-air-jordan-1.jpg',
      brand: 'Adidas',
      price: 4900,
      color: 'Красный',
    },
    {
      id: shortid.generate(),
      name: 'Adidas Yeezy 350 Boost v2',
      img: 'https://slonsneakers-store.ru/userfiles/shop/medium/11/101096_nike-lunar-force-1-duckboot-low.jpg',
      brand: 'Adidas',
      price: 5000,
      color: 'Коричневый',
    },
    {
      id: shortid.generate(),
      name: 'Adidas Nite Jogger',
      img: 'https://slonsneakers-store.ru/userfiles/shop/medium/11/101104_nike-air-jordan-1.jpg',
      brand: 'Adidas',
      price: 4800,
      color: 'Черный',
    },
    {
      id: shortid.generate(),
      name: 'Adidas Yeezy Basketball Quantum',
      img: 'https://slonsneakers-store.ru/userfiles/shop/medium/11/101096_nike-lunar-force-1-duckboot-low.jpg',
      brand: 'Adidas',
      price: 4400,
      color: 'Черный',
    },
    {
      id: shortid.generate(),
      name: 'Adidas Yeezy Boost 700 v2',
      img: 'https://slonsneakers.ru/userfiles/shop/medium/10/97324_adidas-yeezy-boost-700-v2.jpg',
      brand: 'Adidas',
      price: 4800,
      color: 'Серый',
    },
    // Puma
    {
      id: shortid.generate(),
      name: 'Puma RS-Fast',
      img: 'https://slonsneakers.ru/userfiles/shop/medium/10/99164_puma-rs-fast.jpg',
      brand: 'Puma',
      price: 4800,
      color: 'Золотой',
    },
    {
      id: shortid.generate(),
      name: 'Puma Mapm Roma',
      img: 'https://slonsneakers.ru/userfiles/shop/medium/10/97277_puma-mapm-roma.jpg',
      brand: 'Puma',
      price: 4200,
      color: 'Черный',
    },
    {
      id: shortid.generate(),
      name: 'Puma Basket Stitched Shoes',
      img: 'https://slonsneakers.ru/userfiles/shop/medium/4/37179_puma-basket-stitched-shoes.jpg',
      brand: 'Puma',
      price: 4300,
      color: 'Белый',
    },
    // VANS
    {
      id: shortid.generate(),
      name: 'Old Skool Blue',
      img: 'https://slonsneakers.ru/userfiles/shop/medium/3/22684_old-skool-blue.jpg',
      brand: 'VANS',
      price: 3150,
      color: 'Синий',
    },
    {
      id: shortid.generate(),
      name: 'Кеды VANS Old Skool',
      img: 'https://slonsneakers.ru/userfiles/shop/medium/10/97915_kedy-vans-old-skool.jpg',
      brand: 'VANS',
      price: 3600,
      color: 'Черный',
    },
    // Reebok
    {
      id: shortid.generate(),
      name: 'Vetements x Reebok Spike Runner 200',
      img: 'https://slonsneakers.ru/userfiles/shop/medium/10/97125_vetements-x-reebok-spike-runner-200.jpg',
      brand: 'Reebok',
      price: 4800,
      color: 'Белый',
    },
    {
      id: shortid.generate(),
      name: 'Reebok Classics Zig Kinetica',
      img: 'https://slonsneakers.ru/userfiles/shop/medium/10/98974_reebok-classics-zig-kinetica.jpg',
      brand: 'Reebok',
      price: 5100,
      color: 'Белый',
    },
    {
      id: shortid.generate(),
      name: 'Vetements x Reebok Spike Runner 200',
      img: 'https://slonsneakers.ru/userfiles/shop/medium/10/97003_vetements-x-reebok-spike-runner-200.jpg',
      brand: 'Reebok',
      price: 4800,
      color: 'Серый',
    },
  ],
  Tshirts: [
    // Nike
    {
      id: shortid.generate(),
      name: 'Футболка Nike V1',
      price: 1800,
      img: 'https://slonsneakers.ru/userfiles/shop/medium/10/96699_futbolka-nike.jpg',
      brand: 'Nike',
      color: 'Белый',
    },
    {
      id: shortid.generate(),
      name: 'Футболка Nike V2',
      price: 1800,
      img: 'https://slonsneakers.ru/userfiles/shop/medium/10/96704_futbolka-nike.jpg',
      brand: 'Nike',
      color: 'Белый',
    },
    {
      id: shortid.generate(),
      name: 'Футболка Nike V3',
      price: 1800,
      img: 'https://slonsneakers.ru/userfiles/shop/medium/10/96709_futbolka-nike.jpg',
      brand: 'Nike',
      color: 'Синий',
    },
    {
      id: shortid.generate(),
      name: 'Джерси Nike Dallas Mavericks',
      price: 1700,
      img: 'https://slonsneakers.ru/userfiles/shop/medium/10/98192_dzhersi-nike-dallas-mavericks.jpg',
      brand: 'Nike',
      color: 'Черный',
    },
    {
      id: shortid.generate(),
      name: 'Джерси Nike Los Angeles Lakers',
      price: 1700,
      img: 'https://slonsneakers.ru/userfiles/shop/medium/10/98187_dzhersi-nike-los-angeles-lakers.jpg',
      brand: 'Nike',
      color: 'Белый',
    },
    // Adidas
    {
      id: shortid.generate(),
      name: 'Футболка Adidas V1',
      price: 1600,
      img: 'https://slonsneakers.ru/userfiles/shop/medium/3/25115_futbolka-adidas.jpg',
      brand: 'Adidas',
      color: 'Синий',
    },
    {
      id: shortid.generate(),
      name: 'Футболка Adidas V2',
      price: 1690,
      img: 'https://slonsneakers.ru/userfiles/shop/medium/3/21993_futbolka-adidas.jpg',
      brand: 'Adidas',
      color: 'Черный',
    },
    // OFF-White
    {
      id: shortid.generate(),
      name: 'Футболка OFF-WHITE V1',
      price: 1800,
      img: 'https://slonsneakers.ru/userfiles/shop/medium/10/96955_futbolka-off-white.jpg',
      brand: 'OFF-White',
      color: 'Черный',
    },
    {
      id: shortid.generate(),
      name: 'Футболка OFF-WHITE V2',
      price: 1800,
      img: 'https://slonsneakers.ru/userfiles/shop/medium/10/96601_futbolka-off-white.jpg',
      brand: 'OFF-White',
      color: 'Серый',
    },
    {
      id: shortid.generate(),
      name: 'Футболка OFF-WHITE V3',
      price: 1800,
      img: 'https://slonsneakers.ru/userfiles/shop/medium/10/96560_futbolka-off-white.jpg',
      brand: 'OFF-White',
      color: 'Красный',
    },
    {
      id: shortid.generate(),
      name: 'Футболка-обманка OFF-WHITE V2',
      price: 2450,
      img: 'https://slonsneakers.ru/userfiles/shop/medium/10/98197_futbolka-obmanka-off-white.jpg',
      brand: 'OFF-White',
      color: 'Черный',
    },
    {
      id: shortid.generate(),
      name: 'Футболка-обманка OFF-WHITE V2',
      price: 2450,
      img: 'https://slonsneakers.ru/userfiles/shop/medium/10/98196_futbolka-obmanka-off-white.jpg',
      brand: 'OFF-White',
      color: 'Белый',
    },
  ],
  hoodies: [
    // Nike
    {
      id: shortid.generate(),
      name: 'Худи Nike',
      price: 2500,
      brand: 'Nike',
      img: 'https://slonsneakers.ru/userfiles/shop/medium/10/98266_khudi-nike.jpg',
      color: 'Белый',
    },
    {
      id: shortid.generate(),
      name: 'Худи OFF-WHITE x Air Jordan',
      price: 3100,
      brand: 'Nike',
      img: 'https://slonsneakers.ru/userfiles/shop/medium/10/98110_khudi-off-white-x-air-jordan.jpg',
      color: 'Серый',
    },
    {
      id: shortid.generate(),
      name: 'Худи Nike Air Jordan',
      price: 2800,
      brand: 'Nike',
      img: 'https://slonsneakers.ru/userfiles/shop/medium/10/98096_khudi-nike-air-jordan.jpg',
      color: 'Черный',
    },
    // Supreme
    {
      id: shortid.generate(),
      name: 'Худи Supreme V1',
      price: 2400,
      brand: 'Supreme',
      img: 'https://slonsneakers.ru/userfiles/shop/medium/3/24825_khudi-supreme.jpg',
      color: 'Желтый',
    },
    {
      id: shortid.generate(),
      name: 'Худи Supreme V2',
      price: 2400,
      brand: 'Supreme',
      img: 'https://slonsneakers.ru/userfiles/shop/medium/3/24821_khudi-supreme.jpg',
      color: 'Зеленый',
    },
    // The Norh Face
    {
      id: shortid.generate(),
      name: 'Худи The North Face V1',
      price: 2900,
      brand: 'The Norh Face',
      img: 'https://slonsneakers.ru/userfiles/shop/medium/10/98276_khudi-the-north-face.jpg',
      color: 'Белый',
    },
    {
      id: shortid.generate(),
      name: 'Худи The North Face V2',
      price: 2900,
      brand: 'The Norh Face',
      img: 'https://slonsneakers.ru/userfiles/shop/medium/10/98275_khudi-the-north-face.jpg',
      color: 'Серый',
    },
    {
      id: shortid.generate(),
      name: 'Худи The North Face V3',
      price: 2900,
      brand: 'The Norh Face',
      img: 'https://slonsneakers.ru/userfiles/shop/medium/10/98274_khudi-the-north-face.jpg',
      color: 'Черный',
    },
    // OFF-White
    {
      id: shortid.generate(),
      name: 'Худи OFF-WHITE V1',
      price: 2590,
      brand: 'OFF-White',
      img: 'https://slonsneakers.ru/userfiles/shop/medium/3/24707_khudi-off-white.jpg',
      color: 'Белый',
    },
    {
      id: shortid.generate(),
      name: 'Худи OFF-WHITE V2',
      price: 2600,
      brand: 'OFF-White',
      img: 'https://slonsneakers.ru/userfiles/shop/medium/3/20876_khudi-off-white.jpg',
      color: 'Серый',
    },
    {
      id: shortid.generate(),
      name: 'Худи OFF-WHITE V3',
      price: 3190,
      brand: 'OFF-White',
      img: 'https://slonsneakers.ru/userfiles/shop/medium/2/18231_khudi-off-white.jpg',
      color: 'Коричневый',
    },
  ],
  trousers: [
    // Nike
    {
      id: shortid.generate(),
      name: 'Брюки спортивные Nike V1',
      price: 2600,
      img: 'https://slonsneakers.ru/userfiles/shop/medium/2/19155_bryuki-sportivnye-nike.jpg',
      brand: 'Nike',
      color: 'Черный',
    },
    {
      id: shortid.generate(),
      name: 'Брюки спортивные Nike V2',
      price: 2050,
      img: 'https://slonsneakers.ru/userfiles/shop/medium/3/22592_bryuki-sportivnye-nike.jpg',
      brand: 'Nike',
      color: 'Серый',
    },
    {
      id: shortid.generate(),
      name: 'Брюки спортивные Nike V3',
      price: 2390,
      img: 'https://slonsneakers.ru/userfiles/shop/medium/3/22544_bryuki-sportivnye-nike.jpg',
      brand: 'Nike',
      color: 'Черный',
    },
    // The North Face
    {
      id: shortid.generate(),
      name: 'Брюки спортивные The North Face V1',
      price: 2800,
      img: 'https://slonsneakers.ru/userfiles/shop/medium/10/98106_bryuki-sportivnye-the-north-face.jpg',
      brand: 'The North Face',
      color: 'Серый',
    },
    {
      id: shortid.generate(),
      name: 'Брюки спортивные The North Face V2',
      price: 2800,
      img: 'https://slonsneakers.ru/userfiles/shop/medium/10/98105_bryuki-sportivnye-the-north-face.jpg',
      brand: 'The North Face',
      color: 'Черный',
    },
    // OFF-White
    {
      id: shortid.generate(),
      name: 'Брюки спортивные OFF-WHITE V1',
      price: 2800,
      img: 'https://slonsneakers.ru/userfiles/shop/medium/10/96448_bryuki-sportivnye-off-white.jpg',
      brand: 'OFF-White',
      color: 'Белый',
    },
  ],
  jackets: [
    // Nike
    {
      id: shortid.generate(),
      name: 'Куртка Nike V1',
      price: 8000,
      img: 'https://slonsneakers.ru/userfiles/shop/medium/10/97704_kurtka-nike.jpg',
      brand: 'Nike',
      color: 'Черный',
    },
    {
      id: shortid.generate(),
      name: 'Куртка зимняя Nike V2',
      price: 8500,
      img: 'https://slonsneakers.ru/userfiles/shop/medium/10/97699_kurtka-zimnyaya-nike.jpg',
      brand: 'Nike',
      color: 'Черный',
    },
    {
      id: shortid.generate(),
      name: 'Куртка Nike V2',
      price: 3600,
      img: 'https://slonsneakers.ru/userfiles/shop/medium/3/24041_kurtka-nike.jpg',
      brand: 'Nike',
      color: 'Белый',
    },
    // Adidas
    {
      id: shortid.generate(),
      name: 'Куртка Adidas V1',
      price: 8000,
      img: 'https://slonsneakers.ru/userfiles/shop/medium/10/97705_kurtka-adidas.jpg',
      brand: 'Adidas',
      color: 'Черный',
    },
    {
      id: shortid.generate(),
      name: 'Куртка зимняя Adidas V2',
      price: 6500,
      img: 'https://slonsneakers.ru/userfiles/shop/medium/10/97699_kurtka-zimnyaya-nike.jpg',
      brand: 'Adidas',
      color: 'Черный',
    },
    {
      id: shortid.generate(),
      name: 'Куртка Adidas V2',
      price: 8000,
      img: 'https://slonsneakers.ru/userfiles/shop/medium/10/97701_kurtka-zimnyaya-adidas.jpg',
      brand: 'Adidas',
      color: 'Черный',
    },
    // Tommy Hilfiger
    {
      id: shortid.generate(),
      name: 'Куртка зимняя Tommy Hilfiger V1',
      price: 4500,
      img: 'https://slonsneakers.ru/userfiles/shop/medium/4/30221_kurtka-zimnyaya-tommy-jeans.jpg',
      brand: 'Tommy Hilfiger',
      color: 'Синий',
    },
    // Tommy Balenciaga
    {
      id: shortid.generate(),
      name: 'Куртка Balenciaga V1',
      price: 5200,
      img: 'https://slonsneakers.ru/userfiles/shop/medium/4/36399_kurtka-balenciaga.jpg',
      brand: 'Balenciaga',
      color: 'Синий',
    },
    // OFF-White
    {
      id: shortid.generate(),
      name: 'Куртка зимняя OFF-WHITE V1',
      price: 5500,
      img: 'https://slonsneakers.ru/userfiles/shop/medium/4/30187_kurtka-zimnyaya-off-white.jpg',
      brand: 'OFF-White',
      color: 'Черный',
    },
    {
      id: shortid.generate(),
      name: 'Куртка зимняя OFF-WHITE V2',
      price: 7500,
      img: 'https://slonsneakers.ru/userfiles/shop/medium/10/97736_kurtka-zimnyaya-off-white.jpg',
      brand: 'OFF-White',
      color: 'Белый',
    },
    {
      id: shortid.generate(),
      name: 'Куртка OFF-White V1',
      price: 7890,
      img: 'https://slonsneakers.ru/userfiles/shop/medium/3/24091_kurtka-off-white.jpg',
      brand: 'OFF-White',
      color: 'Черный',
    },
  ],
  categories: [
    {
      name: 'Мужская Обувь',
      img: 'data:image/jpeg;base64,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',
      href: 'shoes',
    },
    {
      name: 'Футболки',
      img: 'https://sneakerhead.ru/upload/resize_cache/webp/iblock/f8c/f8cc73ab0e6cee45711807e9bac6aca9.webp',
      href: 'Tshirts',
    },
    {
      name: 'Худи',
      img: 'https://merchpoint.ru/wp-content/uploads/2021/02/%D0%A5%D1%83%D0%B4%D0%B8-Improve-Dynamics-1.png',
      href: 'hoodies',
    },
    {
      name: 'Штаны',
      img: 'https://cbu01.alicdn.com/img/ibank/2019/685/159/11353951586_287164840.jpg',
      href: 'trousers',
    },
    {
      name: 'Куртки',
      img: 'https://i.pinimg.com/originals/e1/53/98/e15398d937d0221b8fd5fc99f57c0933.jpg',
      href: 'jackets',
    },
  ],
  brands: [
    {
      name: 'Nike',
      img: 'https://slonsneakers-store.ru/userfiles/shop/small/1_nike.png',
    },
    {
      name: 'Supreme',
      img: 'https://slonsneakers-store.ru/userfiles/shop/small/6919_supreme.png',
    },
    {
      name: 'Adidas',
      img: 'https://slonsneakers-store.ru/userfiles/shop/small/2_adidas.png',
    },
    {
      name: 'Thrasher',
      img: 'https://slonsneakers-store.ru/userfiles/shop/small/6880_thrasher.png',
    },
    {
      name: 'Reebok',
      img: 'https://slonsneakers-store.ru/userfiles/shop/small/3_reebok.png',
    },
    {
      name: 'Palace',
      img: 'https://slonsneakers-store.ru/userfiles/shop/small/6881_palace.jpg',
    },
  ],
  users: [],
  orders: [],
}).write();

// Order
app.get('/orders', (req, res) => {
  const data = db.get('orders');
  res.send(data);
});

app.get('/orders/:id', (req, res) => {
  const { id } = req.params;
  const data = db.get('orders').value();
  const order = data.find((item) => item.id === id);
  res.send(order);
});

app.post('/orders/addItem', (req, res) => {
  const order = { ...req.body, id: shortid.generate() };
  db.get('orders').push(order).write();
  res.send({ ...order });
});
1;

// Login
app.get('/me', (req, res) => {
  const token = req.get('X-Auth');
  const user = db.get('users').find({ token }).value();
  res.send(user.data);
});

app.post('/login', (req, res) => {
  const { name, password } = req.body;
  const user = db.get('users').find({ auth: { name, password } }).value();
  res.send({ token: user.token, data: user.data });
});

app.post('/signin', (req, res) => {
  const { password, name, age, email, phone } = req.body;

  const user = {
    auth: { name, password },
    data: { name, email, age, phone },
    token: `token_${shortid.generate()}`,
  };

  db.get('users').push(user).write();
  res.send({ token: user.token, data: user.data });
});

// Cart
app.post('/addToCart', (req, res) => {
  const newItem = {
    id: shortid.generate(),
    name: req.body.name,
    count: req.body.count,
    price: req.body.price,
    image: req.body.image || null,
    size: req.body.size,
  };

  db.get('cart').push(newItem).write();
  res.send({ ...newItem });
});

// Get brands
app.get('/brands', (req, res) => {
  const data = db.get('brands');
  res.send(data);
});

// Get all categories
app.get('/categories', (req, res) => {
  const data = db.get('categories');
  res.send(data);
});

// Shoes
app.get('/category/shoes', (req, res) => {
  const data = db.get('shoes').value();
  res.send(data);
});

app.get('/category/shoes/:id', (req, res) => {
  const { id } = req.params;
  const datas = db.get('shoes').value();
  const shoe = datas.find((data) => data.id === id);
  res.send(shoe);
});

app.post('/category/shoes/create', (req, res) => {
  const newShoes = { ...req.body, id: shortid.generate() };
  db.get('shoes').push(newShoes).write();
  res.send({ ...newShoes });
});

app.put('/category/shoes/update/:id', (req, res) => {
  const { id } = req.params;
  let item = db.get('shoes').find({ id }).value();
  let updateShoes = {
    ...item,
    ...req.body,
  };
  db.get('shoes').find({ id }).assign(updateShoes).write();
  res.send(updateShoes);
});

app.delete('/category/shoes/delete/:id', (req, res) => {
  const { id } = req.params;
  db.get('shoes').remove({ id }).write();
  res.send('Success deleted');
});

// Trousers
app.get('/category/trousers', (req, res) => {
  const data = db.get('trousers').value();
  res.send(data);
});

app.get('/category/trousers/:id', (req, res) => {
  const { id } = req.params;
  const datas = db.get('trousers').value();
  const shoe = datas.find((data) => data.id === id);
  res.send(shoe);
});

app.post('/category/trousers/create', (req, res) => {
  const newTrousers = { ...req.body, id: shortid.generate() };
  db.get('shoes').push(newTrousers).write();
  res.send({ ...newTrousers });
});

app.put('/category/trousers/update/:id', (req, res) => {
  const { id } = req.params;
  let item = db.get('trousers').find({ id }).value();
  let updateTrousers = {
    ...item,
    ...req.body,
  };
  db.get('trousers').find({ id }).assign(updateTrousers).write();
  res.send(updateTrousers);
});

app.delete('/category/trousers/delete/:id', (req, res) => {
  const { id } = req.params;
  db.get('trousers').remove({ id }).write();
  res.send('Success deleted');
});

// Jackets
app.get('/category/jackets', (req, res) => {
  const data = db.get('jackets').value();
  res.send(data);
});

app.get('/category/jackets/:id', (req, res) => {
  const { id } = req.params;
  const datas = db.get('jackets').value();
  const shoe = datas.find((data) => data.id === id);
  res.send(shoe);
});

app.post('/category/jackets/create', (req, res) => {
  const newJackets = { ...req.body, id: shortid.generate() };
  db.get('jackets').push(newJackets).write();
  res.send({ ...newJackets });
});

app.put('/category/jackets/update/:id', (req, res) => {
  const { id } = req.params;
  let item = db.get('jackets').find({ id }).value();
  let updateTrousers = {
    ...item,
    ...req.body,
  };
  db.get('trousers').find({ id }).assign(updateTrousers).write();
  res.send(updateTrousers);
});

app.delete('/category/jackets/delete/:id', (req, res) => {
  const { id } = req.params;
  db.get('jackets').remove({ id }).write();
  res.send('Success deleted');
});

// Tshirts
app.get('/category/Tshirts', (req, res) => {
  const data = db.get('Tshirts').value();
  res.send(data);
});

app.get('/category/Tshirts/:id', (req, res) => {
  const { id } = req.params;
  const datas = db.get('Tshirts').value();
  const shoe = datas.find((data) => data.id === id);
  res.send(shoe);
});

app.post('/category/Tshirts/create', (req, res) => {
  const newTshirts = { ...req.body, id: shortid.generate() };
  db.get('Tshirts').push(newTshirts).write();
  res.send({ ...newTshirts });
});

app.put('/category/Tshirts/update/:id', (req, res) => {
  const { id } = req.params;
  let item = db.get('Tshirts').find({ id }).value();
  let updateTshirts = {
    ...item,
    ...req.body,
  };
  db.get('Tshirts').find({ id }).assign(updateTshirts).write();
  res.send(updateTshirts);
});

app.delete('/category/Tshirts/delete/:id', (req, res) => {
  const { id } = req.params;
  db.get('Tshirts').remove({ id }).write();
  res.send('Success deleted');
});

// Tshirts
app.get('/category/hoodies', (req, res) => {
  const data = db.get('hoodies').value();
  res.send(data);
});

app.get('/category/hoodies/:id', (req, res) => {
  const { id } = req.params;
  const datas = db.get('hoodies').value();
  const shoe = datas.find((data) => data.id === id);
  res.send(shoe);
});

app.post('/category/hoodies/create', (req, res) => {
  const newHoodies = { ...req.body, id: shortid.generate() };
  db.get('hoodies').push(newHoodies).write();
  res.send({ ...newHoodies });
});

app.put('/category/hoodies/update/:id', (req, res) => {
  const { id } = req.params;
  let item = db.get('hoodies').find({ id }).value();
  let updateHoodies = {
    ...item,
    ...req.body,
  };
  db.get('hoodies').find({ id }).assign(updateHoodies).write();
  res.send(updateHoodies);
});

app.delete('/category/hoodies/delete/:id', (req, res) => {
  const { id } = req.params;
  db.get('hoodies').remove({ id }).write();
  res.send('Success deleted');
});

// Listen
app.listen(port, () => console.log(`App listening at http://localhost:${port}`));
