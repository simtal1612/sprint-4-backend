import express from 'express'

import { requireAuth, requireAdmin } from '../../middlewares/requireAuth.middleware.js'

import { getUser, getUsers, deleteUser, updateUser, updateUserImg, updateUserFullname } from './user.controller.js'

const router = express.Router()

router.get('/', getUsers)
router.get('/:id', getUser)
router.put('/:id', requireAuth, updateUser)
router.put('/:id/img', requireAuth, updateUserImg)
router.put('/:id/fullname', requireAuth, updateUserFullname)
router.delete('/:id', requireAuth, requireAdmin, deleteUser)

export const userRoutes = router