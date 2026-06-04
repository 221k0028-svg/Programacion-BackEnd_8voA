import { jest } from '@jest/globals'; 
import request from 'supertest';
import app from '../index.js'; 
import Usuario from '../models/usuario.model.js'; 

// CONFIGURACIÓN DE MOCKS (SIMULACIONES DE MONGOOSE)
// Se crea una función espía independiente para cada método de Mongoose
const mockFind = jest.fn();
const mockCreate = jest.fn();
const mockFindById = jest.fn();
const mockFindByIdAndUpdate = jest.fn();
const mockFindByIdAndDelete = jest.fn();

// Inyectamos cada espía en su respectivo método del modelo original
Usuario.find = mockFind;
Usuario.create = mockCreate;
Usuario.findById = mockFindById; // <- CORREGIDO: Cada uno tiene su propio espía
Usuario.findByIdAndUpdate = mockFindByIdAndUpdate;
Usuario.findByIdAndDelete = mockFindByIdAndDelete;

describe('GET /', () => {

    // Limpiamos los datos de las simulaciones antes de cada prueba
    beforeEach(() => {
        jest.clearAllMocks();
    });

    // SECCIÓN 2.- Pruebas de la API CRUD (Endpoints del Usuario)
    // INCISO A: Mostrar todos los usuarios (GET /usuarios)
    describe('GET /usuarios', () => {
        test('Debe obtener los usuarios simulados de forma exitosa', async () => {
            const usuariosFalsos = [
                { nombre: 'Luis', edad: 22, correo: 'luis213@gmail.com' },
                { nombre: 'Maria Angelica', edad: 17, correo: 'maria@gmail.com' }
            ];

            mockFind.mockResolvedValue(usuariosFalsos);

            const res = await request(app).get('/usuarios');

            expect(res.statusCode).toBe(200);
            expect(res.body).toHaveLength(2); 
            expect(res.body[0].nombre).toBe('Luis');
        });
    });

    // INCISO B: Agregar usuarios (POST /usuarios)
    describe('POST /usuarios', () => {
        test('Debe simular la creación de un nuevo usuario', async () => {
            const nuevoUsuario = { nombre: 'Carlos Alberto', edad: 21, correo: 'carlos@gmail.com' };
            
            mockCreate.mockResolvedValue({ _id: 'idFalso123', ...nuevoUsuario });

            const res = await request(app)
                .post('/usuarios')
                .send(nuevoUsuario);

            expect(res.statusCode).toBe(201); 
            expect(res.body).toHaveProperty('_id');
            expect(res.body.nombre).toBe('Carlos Alberto');
        });
    });

    // INCISO C: Obtener un usuario por ID (GET /usuario/:id)
    describe('GET /usuario/:id', () => {
        test('Debe obtener los datos de un solo usuario mediante su ID', async () => {
            const usuarioFalso = { _id: '69f384471cf133932f59fbe2', nombre: 'Maria', edad: 17, correo: 'maria@gmail.com' };

            mockFindById.mockResolvedValue(usuarioFalso);

            const res = await request(app).get('/usuario/69f384471cf133932f59fbe2');

            expect(res.statusCode).toBe(200);
            expect(res.body.nombre).toBe('Maria');
        });
    });

    // INCISO D: Actualizar un usuario (PUT /usuario/:id)
    describe('PUT /usuario/:id', () => {
        test('Debe simular la actualización de los datos de un usuario', async () => {
            const datosActualizados = { nombre: 'María Angelica Editado' };
            const usuarioModificado = { _id: '69f34471cf133932f59fbe2', nombre: 'María Angelica Editado', edad: 17, correo: 'maria@gmail.com' };

            mockFindByIdAndUpdate.mockResolvedValue(usuarioModificado);
            mockFindById.mockResolvedValue(usuarioModificado); 

            const res = await request(app)
                .put('/usuario/69f34471cf133932f59fbe2')
                .send(datosActualizados);

            expect(res.statusCode).toBe(200);
            expect(res.body.nombre).toBe('María Angelica Editado');
        });
    });

    // INCISO E: Eliminar un usuario (DELETE /usuario/:id)
    describe('DELETE /usuario/:id', () => {
        test('Debe simular la eliminación de un usuario por su ID', async () => {
            const usuarioEliminado = { _id: '69f380f71cf133932f59fbe1', nombre: 'Luis', edad: 22, correo: 'luis213@gmail.com' };

            mockFindByIdAndDelete.mockResolvedValue(usuarioEliminado);

            const res = await request(app).delete('/usuario/69f380f71cf133932f59fbe1');

            expect(res.statusCode).toBe(200);
            expect(res.body.mensaje).toBe('Usuario eliminado correctamente');
            expect(res.body.usuario.nombre).toBe('Luis');
        });
    });
});