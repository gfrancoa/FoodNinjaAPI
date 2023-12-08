import express from 'express';
import { getAllTags } from '../../persistence/tags-repository.js'
const router = express.Router();

router.get("/", async (req, res, next) => {
    try {
        const tags = await getAllTags();
        return res.status(200).json({"tags": tags})

    } catch (err) {
        next(err)
    }
});

export default router; 
