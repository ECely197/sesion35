 import "dotenv/config"

 import connectDB from "../config/db.js";
 import User from "../models/user.js";
 
 async function userSeeder() {
    connectDB();
    await User.create({
        firstName: "Leia",
        lastName: "Organa",
        email: "hola.com",
        password: process.env.SEEDER_USER_PASSWORD,
        age: 23
    })
    await User.create({
        firstName: "otra leia organa",
        lastName: "otra leia",
        email: "hola.leiacom",
        password: process.env.SEEDER_USER_PASSWORD,
        age: 23
    })
    await User.create({
        firstName: "leia tercera",
        lastName: "Orgaasasdna",
        email: "hola.asasdcom",
        password: process.env.SEEDER_USER_PASSWORD,
        age: 23
    })
    console.log("[seeder] se han creado usuarios de prueba");
    process.exit(1);
 }

 userSeeder();

