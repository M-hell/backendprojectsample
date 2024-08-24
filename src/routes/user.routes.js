import {Router} from "express";
import {registerUser,loginUser,logoutUser,refreshAccessToken,updateUsername,updatePassword,getCurrentUser,updateUserAvatar} from "../controllers/user.controller.js";
import {upload} from "../middlewares/multer.middleware.js"
import { verifyJWT } from "../middlewares/auth.middleware.js";


const router=Router()

router.route("/register").post(
    upload.fields([
        {
            name: "avatar",
            maxCount: 1
        }, 
        {
            name: "coverImage",
            maxCount: 1
        }
    ]),
    registerUser
    )

router.route("/login").post(loginUser)

//secured routes
router.route("/logout").post(verifyJWT,  logoutUser)
router.route("/refresh-token").post(refreshAccessToken)
router.route("/update-username").post(verifyJWT,updateUsername)
router.route("/update-password").post(verifyJWT,updatePassword)

router.route("/current-user").get(verifyJWT, getCurrentUser)

//two middlewares one for checking logged in or not , 2nd one for file uploading
router.route("/avatar").patch(verifyJWT, upload.single("avatar"), updateUserAvatar) 

export default router;