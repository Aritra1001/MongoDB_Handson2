const express = require('express');
const router = express.Router();
const controllerFunc = require('../controller/employee');

router.post('/employee', controllerFunc.insertingData);
router.get('/employee', controllerFunc.getAllData);
router.get('/employee/salary/:sal', controllerFunc.getSalaryData);
router.get('/employee/overallExp/:exp', controllerFunc.getExpData);
router.get('/employee/yearGrad/:grad/overallExp/:exp', controllerFunc.getGradExpData);
router.put('/employee', controllerFunc.updatingData);
router.delete('/employee/:lastCompany', controllerFunc.deleteEmployeeData);

module.exports = router;