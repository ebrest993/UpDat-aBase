const router = require('express').Router();
const db = require('../config/connection').mysql();

router.get('/', (req, res) => {
    const sql = 'SELECT id, first_name, last_name, role_id, manager_id FROM employee';
    db.query(sql, (err, data) => {
        if(err) {
            return res.status(500).json({ error:err.message });
        }
        res.json({
            message: '#winning',
            data: data
        });
    });
});

module.exports = router;