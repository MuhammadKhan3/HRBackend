const {body, validationResult} = require('express-validator');
const User =require('../models/user')
exports.validRole=[
    body('roleName').notEmpty().isString().isLength({ min: 3}),
    (req,res,next)=>{
        console.log(req.body)
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
]


exports.validUser=[
  body('email')
  .notEmpty()
  .isString()
  .isLength({ min: 3})
  .custom(value => {
    console.log(value)
    return User.findOne({where:{email:value}})
    .then(user => {
      if (user) {
        return Promise.reject('E-mail already exist');
      }
    });
  }),
  body('password').notEmpty().isString().isLength({ min: 3}),
  (req,res,next)=>{
      console.log(req.body)
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      next();
  }
]
