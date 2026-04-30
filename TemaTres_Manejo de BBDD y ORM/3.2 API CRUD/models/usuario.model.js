import mongoose from 'mongoose'; // Paso 10: Importar mongoose

// Paso 11: Crear el objeto esquema
const usuarioSchema = new mongoose.Schema(
    {
        nombre: {
            type: String,
            required: [true, 'Favor de ingresar el nombre'],
        },
        edad: {
            type: Number,
            required: [true, 'Favor de ingresar la edad'],
        },
        correo: {
            type: String,
            required: [true, 'Favor de ingresar el correo'],
            unique: true,
        },
    },
    {
        timestamps: true,
    }
);

// Paso 12: Crear el modelo a partir del esquema
const Usuario = mongoose.model("Usuario", usuarioSchema);

// Exportar el modelo para usarlo en el index.js
export default Usuario;