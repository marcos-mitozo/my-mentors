import { UserController } from "./user.controller"
import { UserService } from "./user.service"

describe('UserController', () => {
    let userController: UserController
    let userService: UserService

    beforeEach(() => {
        userService = new UserService();
        userController = new UserController(userService);
    })

    describe('create', async () => {
        it('Should successfully create the user', async () => {
            const fakePayload = {
                email: "t3stus3r@yopmail.com",
                username: "t3stus3r",
                passwordHash: "Aleat0ryP@ss"
            }
            jest.spyOn(userService, 'createUser').mockImplementation(() => Promise.resolve(fakePayload));
            expect(await userService.createUser(fakePayload)).toEqual(fakePayload)
        })
    })
})