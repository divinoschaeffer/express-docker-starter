# 🚀 Express Docker Starter

A minimal and flexible **Express.js API starter** with **Docker** and **MySQL**, designed for rapid development. Just build the Docker containers, and you're ready to go!

## 🌟 Features

✅ **Plug & Play Development** – Start coding instantly after building the Docker container.  
✅ **TypeScript Ready** – TypeScript is set up and runs automatically.  
✅ **MySQL Integration** – MySQL database is pre-configured inside Docker.  
✅ **Knex for Queries & Migrations** – Default query builder, but easily replaceable.  
✅ **Built-in Scripts** – Quick commands for container management, dependency installation, and updates.  
✅ **Swagger Documentation** – Auto-generated API documentation.  
✅ **Minimalist & Flexible** – Adaptable to any project needs.

---

## 🏗️ Setup

### 🔥 **1. Clone the Repository**
```
git clone https://github.com/yourusername/express-docker-starter.git  
cd express-docker-starter
```

### 🐳 **2. Build & Run with Docker**
```
./.docker/start.sh  # Build and start the containers
```

> The API will be available at **http://localhost:8001**

### ⚡ **3. Install Dependencies (if needed)**
```
./.docker/npm.sh install <name>
```

### 🔄 **4. Update Dependencies**
```
./.docker/npm.sh update <name>
```

### 🧪 **5. Run Tests**
```
./.docker/npm.sh test
```

### 📖 **6. Access Swagger Documentation**
Once the server is running, visit:  
📌 **http://localhost:8001/api-docs**

---

## 🔧 Customization

- **Change Database**: Replace MySQL with PostgreSQL, MongoDB, or another DB.
- **Modify Query Builder**: Switch from **Knex** to Prisma, Sequelize, etc.
- **Add Authentication**: Integrate JWT, OAuth, or session-based authentication.
- **Extend API**: Add new routes, controllers, and middleware.

---

## 🎯 Contributing

Feel free to fork, contribute, or suggest improvements! This project is designed to be as **minimal** and **adaptable** as possible.

---

## 📜 License

This project is **open-source** and available under the [MIT License](LICENSE).

---

🔥 **Ready to start building? Clone the repo and get coding!** 🚀