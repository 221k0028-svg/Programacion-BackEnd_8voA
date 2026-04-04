import axios from "axios";

const obtenerUsuario = async () => {
    try {
        const response = await axios.get('https://reqres.in/api/users/4', {
            headers: {
                'x-api-key': 'pro_e0c528b9a8cf02a90644247494daa6f2fe90247113c277a32a901c41b866e0c9'
            }
        });

        console.log('Datos del usuario:', response.data);

    } catch (error) {
        console.error('Error:', error.response.data);
    }
};

obtenerUsuario();