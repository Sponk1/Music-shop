const express = require("express");
const { Pool } = require("pg");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./node_modules/swagger/package.json");

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "postgres",
    password: "1234root",
    port: 1234,
  });

const app = express();

app.use(express.json());
app.use("/node_modules", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// GET запрос для главной страницы
app.get("/", (req, res) => {
  res.send("Привет! Это главная страница вашего музыкального интернет-магазина.");
});

// CRUD операции для пользователей (users)

// Получение всех пользователей
app.get("/users", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM users");
    res.json(result.rows);
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).json({ error: "An unexpected error occurred" });
  }
});

// Получение пользователя по ID
app.get("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
    if (result.rows.length > 0) {
      res.json(result.rows[0]);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).json({ error: "An unexpected error occurred" });
  }
});

// Создание нового пользователя
app.post("/users", async (req, res) => {
  try {
    const { login, password, last_name, first_name, middle_name, bank_details, email } = req.body;
    const result = await pool.query(
      "INSERT INTO users (login, password, last_name, first_name, middle_name, bank_details, email) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
      [login, password, last_name, first_name, middle_name, bank_details, email]
    );
    res.json(result.rows[0]);
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).json({ error: "An unexpected error occurred" });
  }
});

// Обновление пользователя по ID
app.put("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { login, password, last_name, first_name, middle_name, bank_details, email } = req.body;
    const result = await pool.query(
      "UPDATE users SET login = $1, password = $2, last_name = $3, first_name = $4, middle_name = $5, bank_details = $6, email = $7 WHERE id = $8 RETURNING *",
      [login, password, last_name, first_name, middle_name, bank_details, email, id]
    );
    if (result.rowCount === 0) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(result.rows[0]);
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).json({ error: "An unexpected error occurred" });
  }
});

// Удаление пользователя по ID
app.delete("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query("DELETE FROM users WHERE id = $1", [id]);
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).json({ error: "An unexpected error occurred" });
  }
});

// CRUD операции для заказов (orders)

// Получение всех заказов
app.get("/orders", async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM "orders"');
    res.json(result.rows);
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).json({ error: "An unexpected error occurred" });
  }
});

// Создание нового заказа
app.post("/orders", async (req, res) => {
  try {
    const { user_id, order_date, price, payment_id } = req.body;
    const result = await pool.query(
      'INSERT INTO "orders" (user_id, order_date, price, payment_id) VALUES ($1, $2, $3, $4) RETURNING *',
      [user_id, order_date, price, payment_id]
    );
    res.json(result.rows[0]);
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).json({ error: "An unexpected error occurred" });
  }
});

// Удаление заказа по ID
app.delete("/orders/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query('DELETE FROM "orders" WHERE id = $1', [id]);
    res.json({ message: "Order deleted successfully" });
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).json({ error: "An unexpected error occurred" });
  }
});

// CRUD операции для деталей заказов (order_details)

// Получение всех деталей заказов
app.get("/order_details", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM order_details");
    res.json(result.rows);
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).json({ error: "An unexpected error occurred" });
  }
});

// Создание новой детали заказа
app.post("/order_details", async (req, res) => {
  try {
    const { order_id, music_instrument_id, quantity } = req.body;
    const result = await pool.query(
      "INSERT INTO order_details (order_id, music_instrument_id, quantity) VALUES ($1, $2, $3) RETURNING *",
      [order_id, music_instrument_id, quantity]
    );
    res.json(result.rows[0]);
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).json({ error: "An unexpected error occurred" });
  }
});

// Удаление детали заказа по ID
app.delete("/order_details/:order_id/:music_instrument_id", async (req, res) => {
  try {
    const { order_id, music_instrument_id } = req.params;
    await pool.query("DELETE FROM order_details WHERE order_id = $1 AND music_instrument_id = $2", [order_id, music_instrument_id]);
    res.json({ message: "Order detail deleted successfully" });
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).json({ error: "An unexpected error occurred" });
  }
});

// CRUD операции для платежей (payments)

// Получение всех платежей
app.get("/payments", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM payments");
    res.json(result.rows);
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).json({ error: "An unexpected error occurred" });
  }
});

// Создание нового платежа
app.post("/payments", async (req, res) => {
  try {
    const { payment_date, payment_status } = req.body;
    const result = await pool.query(
      "INSERT INTO payments (payment_date, payment_status) VALUES ($1, $2) RETURNING *",
      [payment_date, payment_status]
    );
    res.json(result.rows[0]);
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).json({ error: "An unexpected error occurred" });
  }
});

// Удаление платежа по ID
app.delete("/payments/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query("DELETE FROM payments WHERE id = $1", [id]);
    res.json({ message: "Payment deleted successfully" });
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).json({ error: "An unexpected error occurred" });
  }
});

// CRUD операции для музыкальных инструментов (music_instruments)

// Получение всех музыкальных инструментов
app.get("/music_instruments", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM music_instruments");
    res.json(result.rows);
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).json({ error: "An unexpected error occurred" });
  }
});

// Создание нового музыкального инструмента
app.post("/music_instruments", async (req, res) => {
  try {
    const { music_instrument_type_id, price, description_id } = req.body;
    const result = await pool.query(
      "INSERT INTO music_instruments (music_instrument_type_id, price, description_id) VALUES ($1, $2, $3) RETURNING *",
      [music_instrument_type_id, price, description_id]
    );
    res.json(result.rows[0]);
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).json({ error: "An unexpected error occurred" });
  }
});

// Удаление музыкального инструмента по ID
app.delete("/music_instruments/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query("DELETE FROM music_instruments WHERE id = $1", [id]);
    res.json({ message: "Music instrument deleted successfully" });
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).json({ error: "An unexpected error occurred" });
  }
});

// CRUD операции для описаний (descriptions)

// Получение всех описаний
app.get("/descriptions", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM descriptions");
    res.json(result.rows);
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).json({ error: "An unexpected error occurred" });
  }
});

// Создание нового описания
app.post("/descriptions", async (req, res) => {
  try {
    const { music_instrument_id, description } = req.body;
    const result = await pool.query(
      "INSERT INTO descriptions (music_instrument_id, description) VALUES ($1, $2) RETURNING *",
      [music_instrument_id, description]
    );
    res.json(result.rows[0]);
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).json({ error: "An unexpected error occurred" });
  }
});

// Удаление описания по ID
app.delete("/descriptions/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query("DELETE FROM descriptions WHERE id = $1", [id]);
    res.json({ message: "Description deleted successfully" });
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).json({ error: "An unexpected error occurred" });
  }
});

// CRUD операции для типов музыкальных инструментов (music_instrument_types)

// Получение всех типов музыкальных инструментов
app.get("/music_instrument_types", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM music_instrument_types");
    res.json(result.rows);
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).json({ error: "An unexpected error occurred" });
  }
});

// Создание нового типа музыкального инструмента
app.post("/music_instrument_types", async (req, res) => {
  try {
    const { type_name } = req.body;
    const result = await pool.query(
      "INSERT INTO music_instrument_types (type_name) VALUES ($1) RETURNING *",
      [type_name]
    );
    res.json(result.rows[0]);
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).json({ error: "An unexpected error occurred" });
  }
});

// Удаление типа музыкального инструмента по ID
app.delete("/music_instrument_types/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query("DELETE FROM music_instrument_types WHERE id = $1", [id]);
    res.json({ message: "Music instrument type deleted successfully" });
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).json({ error: "An unexpected error occurred" });
  }
});

// CRUD операции для фотографий (photos)

// Получение всех фотографий
app.get("/photos", async (req, res) => {
    try {
      const photos = await pool.query("SELECT * FROM photos");
      res.json(photos.rows);
    } catch (error) {
      console.error("Error executing query", error);
      res.status(500).json({ error: "An unexpected error occurred" });
    }
  });
  
  // Создание новой фотографии
  app.post("/photos", async (req, res) => {
    try {
      const { file_path, description, music_instrument_id } = req.body;
      const newPhoto = await pool.query(
        "INSERT INTO photos (file_path, description, music_instrument_id) VALUES ($1, $2, $3) RETURNING *",
        [file_path, description, music_instrument_id]
      );
      res.json(newPhoto.rows[0]);
    } catch (error) {
      console.error("Error executing query", error);
      res.status(500).json({ error: "An unexpected error occurred" });
    }
  });
  
  // Удаление фотографии по ID
  app.delete("/photos/:id", async (req, res) => {
    try {
      const { id } = req.params;
      await pool.query("DELETE FROM photos WHERE id = $1", [id]);
      res.json({ message: "Photo deleted successfully" });
    } catch (error) {
      console.error("Error executing query", error);
      res.status(500).json({ error: "An unexpected error occurred" });
    }
  });

const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on port ${PORT}`);
});