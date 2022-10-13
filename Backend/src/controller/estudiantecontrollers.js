import getConnection from "../database/database";

const getStudents = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM estudiante");
        res.json(result);
    } catch (error) {
        res.status(404);
        res.send(error);
    }
}

const methods = {
    getStudents
}

export default methods;