import express from 'express'
import isAuthenticated from '../middelwares/isAuthenticated.js'
import { getAllJobs,getAdminJob,postJob,getJobById } from '../controllers/job.controller.js';

const router = express.Router();

router.route('/post').post(isAuthenticated, postJob)
router.route('/get').get(isAuthenticated, getAllJobs)
router.route('/getadminjobs').get(isAuthenticated, getAdminJob)
router.route('/get/:id').get(isAuthenticated, getJobById)

export default router