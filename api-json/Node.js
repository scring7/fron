const { MongoClient } = require('mongodb');

// URI de conexión
const uri = "mongodb+srv://rubensanchez:hola123@nuevanueva.07ir1.mongodb.net/?retryWrites=true&w=majority&appName=NuevaNueva";

async function main() {
    const client = new MongoClient(uri);

    try {
        // Conectar al cliente de MongoDB
        await client.connect();
        console.log("Conectado a la base de datos");

        // Seleccionar la base de datos y la colección
        const database = client.db('NuevaNueva');
        const collection = database.collection('usuarios');

        // Crear un nuevo documento
        const newUser = { nombre: "Usuario1", password: "pass123" };
        const result = await collection.insertOne(newUser);
        console.log(`Nuevo usuario creado con el id: ${result.insertedId}`);

        // Leer documentos
        const users = await collection.find({}).toArray();
        console.log("Usuarios:", users);

    } catch (error) {
        console.error("Error en la conexión a la base de datos:", error);
    } finally {
        // Cerrar la conexión
        await client.close();
    }
}

main().catch(console.error);
