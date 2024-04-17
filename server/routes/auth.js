const {
  login,
  register,
  getAllUsers,
  logOut,
  SearchUsers,
  getUserById,
  uploadPost,
  updateProfile,
  checkUsernameValidity,
  getUserByName,
  getSignature,
  setAvatarImage,
  addReaction,
  removeReaction,
  addComment,
  deletePost,
  deleteComment,
  getPostById,
  addConnection,
  checkConnection,
  remConnection,
  getConnectedUsers,
  notConnectedUsers,
  pending,
  sendconnect,
  checkRequest,
  getAllPostsByUserId,
  addSkill,
  getProfileData,
  addEndorsement,
  removeEndorsement,
  deleteSkill,
  addEducation,
  deleteEducation,
  addExperience,
  deleteExperience,
  updateExperience,
  getMorePost
} = require("../controllers/userController");

const{
  getnotif
}=require('../controllers/notifController');


const router = require("express").Router();

router.post("/get",getnotif);
router.post("/pending",pending);
router.post("/login", login);
router.post("/register", register);
router.post('/sendconnect',sendconnect);
router.post('/checkRequest/:id',checkRequest);
router.post("/uploadPost/:id",uploadPost);
router.post("/updateProfile/:id",updateProfile);
router.post("/getSignature",getSignature);
router.post("/setAvatarImage",setAvatarImage);
router.post("/addConnection/:id",addConnection);
router.post("/checkConnection/:id",checkConnection);
router.post("/remConnection/:id",remConnection);
router.post("/addEndorsement",addEndorsement);
router.post("/removeEndorsement",removeEndorsement);
router.post("/addSkill",addSkill);
router.post("/addEducation",addEducation);
router.post("/addExperience",addExperience);
router.get("/notConnectedUsers/:id",notConnectedUsers);
router.get("/getConnectedUsers/:id",getConnectedUsers);
router.get("/getAllUser/:id",getAllUsers);
router.post("/addReaction",addReaction);
router.post("/removeReaction",removeReaction);
router.post("/addComment",addComment);
router.get("/logout/:id", logOut);
router.get("/SearchUsers/:id", SearchUsers);
router.get("/getUserById/:id",getUserById);
router.get("/getProfileData/:id",getProfileData);
router.get("/checkUsernameValidity/:username/:checkUsername",checkUsernameValidity);
router.get("/getUserByName/:username",getUserByName);
router.get("/getPostById/:postId",getPostById);
router.get("/getAllPostsByUserId/:userId",getAllPostsByUserId);
router.get("/getMorePost/:id/:page",getMorePost);
router.delete("/deletePost/:postId/:userId",deletePost);
router.delete("/deleteComment/:postId/:commentId",deleteComment);
router.delete("/deleteSkill/:userId/:skillId",deleteSkill);
router.delete("/deleteEducation/:userId/:educationId",deleteEducation);
router.delete("/deleteExperience/:userId/:experienceId",deleteExperience);
router.put("/updateExperience/:userId/:experienceId",updateExperience);



module.exports = router;