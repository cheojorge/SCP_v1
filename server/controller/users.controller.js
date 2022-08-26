
const { pool } = require('../connector/connectorPostgres')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

// controller user

const getUserById = async (req, res) => {
    response = await pool.query('select * from users where id_user=$1;', [req.params.id])
    res.json(response.rows)
}

const getUsers = async (req, res) => {
    response = await pool.query(
        `SELECT 
        usuario.nombre_usuario, 
        usuario.id_usuario, 
        usuario.id_rol, 
        usuario.id_cargo, 
        usuario.mail_usuario, 
        cargo.descripcion_cargo, 
        rol.descripcion_rol  
        FROM usuario 
        INNER JOIN rol
        ON usuario.id_rol = rol.id_rol
        INNER JOIN cargo
        ON usuario.id_cargo = cargo.id_cargo`)
    res.json(response.rows)
}

const createUser = (req, res) => {
    const { name_user, lastname_user, role_user, email_user, area_user, password_user } = req.body
    bcrypt.hash(password_user, 10, function (err, hash) {
        pool.query('insert into users (name_user, lastname_user, role_user, email_user, area_user, password_user) values($1,$2,$3,$4,$5,$6)', [name_user, lastname_user, role_user, email_user, area_user, hash])

    });
    res.send('usuario creado')
}

const updateUser = async(req, res) => {
    const { id_rol, id_cargo, nombre_usuario, mail_usuario, id_usuario } = req.body
    response = await pool.query(`
    update usuario
	set
        id_rol = $1,
		id_cargo= $2,
		nombre_usuario= $3,
		mail_usuario = $4
	    where id_usuario = $5;`, [id_rol, id_cargo, nombre_usuario, mail_usuario, id_usuario])
    res.json(response.rows)
}

const updateUserPass = async(req, res) => {
    const { id_rol, id_cargo, nombre_usuario, mail_usuario, id_usuario, password_usuario } = req.body
    bcrypt.hash(password_usuario, 10, function (err, hash) {
        pool.query(`
        update usuario
        set 
            id_rol = $1,
            id_cargo= $2,
            nombre_usuario= $3,
            mail_usuario = $4,
            password_usuario= $5
            where id_usuario = $6;`, [id_rol, id_cargo, nombre_usuario, mail_usuario, hash, id_usuario])

    });
    res.send('Contraseña actualizada')
}


// login

const loginUser = async (req, res) => {
    const { mail_usuario, password_usuario } = req.body
    try{
        userData = await pool.query('select * from usuario where mail_usuario=$1', [mail_usuario])
        const id_usuario = userData.rows[0].id_usuario

        asignedData = await pool.query(`
            select usuario_unidad.id_unidad, unidad.descripcion_unidad
            from usuario_unidad
            inner join usuario
            on usuario_unidad.id_usuario = usuario.id_usuario
            inner join unidad
            on usuario_unidad.id_unidad = unidad.id_unidad
            where usuario.id_usuario = $1 and usuario_unidad.estado_usuario_unidad = true
            order by id_unidad asc`, [id_usuario])
        bcrypt.compare(password_usuario, userData.rows[0].password_usuario)
            .then(isSamePassword => {
                const secretKey = "keepThisSecret";
                const payload = {
                    name: userData.rows[0].nombre_usuario,
                    role: userData.rows[0].id_rol,
                    email: userData.rows[0].mail_usuario,
                    id: userData.rows[0].id_usuario,
                    id_cargo: userData.rows[0].id_cargo,
                    asigned: asignedData.rows
                }
                const token = jwt.sign(payload, secretKey, { expiresIn: '1800s' })
                if (isSamePassword) {
                    res.json(token)
                } else {
                    res.status(402)
                    res.json('contraseña incorrecta')
                }
    
            }).catch(e =>{ 
                console.log(e)
                mail_usuario
            })
    }catch(error){
        console.log(mail_usuario)
        console.log(error)
    }

}


module.exports = {
    getUsers,
    createUser,
    getUserById,
    loginUser,
    updateUser,
    updateUserPass
}