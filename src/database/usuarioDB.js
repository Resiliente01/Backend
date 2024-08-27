const { Pool } = require('pg');

const pool = new Pool({   
    connectionString: 'postgres://postgres:t5tOS5ZS2r8866g@resilientedb.flycast:5432'
});

pool.connect()
    .then(() => console.log('Conexión exitosa con usuario'))
    .catch(err => console.error('Error al conectar con PostgreSQL', err));


// GETALL
const getAllUsuarios = async () => {    
    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM usuarios';
        pool.query(sql, (error, results) => {
            if (error) {
                console.log('Error chistoso nomas de prueba'); 
                return reject(error);
            }
            resolve(results.rows);
            console.log('Mensaje de prueba de que sí pasó'); 
        });
    });
};

// GETONE
const getOneUsuario = async (id) => {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM usuarios WHERE id = $1';
        pool.query(sql, [id], (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve(results.rows);
        });
    });
};

// POST
const createUsuario = async (correo, passw, username) => {
    return new Promise((resolve, reject) => {
        const sql = "INSERT INTO usuarios (correo, passw, username) VALUES ($1, $2, $3)";
        pool.query(sql, [correo, passw, username], (error) => {
            if (error) {
                return reject(error);
            }
            resolve("Usuario agregado");
        });
    });
};

// PATCH
const updateUsuario = async (correo, passw, username, id) => {
    return new Promise((resolve, reject) => {
        const sql = "UPDATE usuarios SET correo = $1, passw = $2, username = $3 WHERE id = $4";
        pool.query(sql, [correo, passw, username, id], (error) => {
            if (error) {
                return reject(error);
            }
            resolve("Usuario actualizado");
        });
    });
}

// DELETE
const deleteUsuario = async (id) => {
    return new Promise((resolve, reject) => {
        const sql = "DELETE FROM usuarios WHERE id = $1";
        pool.query(sql, [id], (error) => {
            if (error) {
                return reject(error);
            }
            resolve("Usuario eliminado");
        });
    });
};

//login process 
const loginProcess = async (correo, passw) => {
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM usuarios WHERE correo = $1 AND passw = $2";
        pool.query(sql, [correo, passw], (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve(results.rows);
        });
    });
};

const checkEmail = async (correo) => {
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM usuarios WHERE correo = $1";
        pool.query(sql, [correo], (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve(results.rows);
        });
    });
};

module.exports = {
    pool, 
    getAllUsuarios,
    getOneUsuario,
    createUsuario,
    updateUsuario,
    deleteUsuario,
    loginProcess,
    checkEmail
};
