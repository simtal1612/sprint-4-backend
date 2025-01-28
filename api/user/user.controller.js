import {userService} from './user.service.js'
import {logger} from '../../services/logger.service.js'
import {socketService} from '../../services/socket.service.js'

export async function getUser(req, res) {
    try {
        const user = await userService.getById(req.params.id)
        res.send(user)
    } catch (err) {
        logger.error('Failed to get user', err)
        res.status(400).send({ err: 'Failed to get user' })
    }
}

export async function getUsers(req, res) {
    try {
        const filterBy = {
            txt: req.query?.txt || '',
        }
        const users = await userService.query(filterBy)
        res.send(users)
    } catch (err) {
        logger.error('Failed to get users', err)
        res.status(400).send({ err: 'Failed to get users' })
    }
}

export async function deleteUser(req, res) {
    try {
        await userService.remove(req.params.id)
        res.send({ msg: 'Deleted successfully' })
    } catch (err) {
        logger.error('Failed to delete user', err)
        res.status(400).send({ err: 'Failed to delete user' })
    }
}

export async function updateUser(req, res) {
    try {
        const user = req.body
        const savedUser = await userService.update(user)
        res.send(savedUser)
    } catch (err) {
        logger.error('Failed to update user', err)
        res.status(400).send({ err: 'Failed to update user' })
    }
}


export async function updateUserImg(req, res) {
    try {
        const { id } = req.params
        const { imgUrl } = req.body
        
        if (!imgUrl) {
            return res.status(400).send({ err: 'Image URL is required' })
        }

        const savedUser = await userService.updateImg(id, imgUrl)
        res.send(savedUser)
    } catch (err) {
        logger.error('Failed to update user image', err)
        res.status(400).send({ err: 'Failed to update user image' })
    }
}

export async function updateUserFullname(req, res) {
    try {
        const { id } = req.params
        const { fullname } = req.body
        
        if (!fullname) {
            return res.status(400).send({ err: 'Fullname is required' })
        }

        const savedUser = await userService.updateFullname(id, fullname)
        res.send(savedUser)
    } catch (err) {
        logger.error('Failed to update user fullname', err)
        res.status(400).send({ err: 'Failed to update user fullname' })
    }
}
