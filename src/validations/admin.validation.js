const {body, validationResult} = require('express-validator');
const User =require('../models/user')
const {managerImage}=require('../middleware/multer')

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




exports.validManager=[  
  (req,res,next)=>{
    req.body=JSON.parse(JSON.stringify(req.body));
    next();
  },
  body('name')
  .notEmpty().withMessage('Name is required'),
  body('email')
    .isEmail().withMessage('Email is not valid')
    .normalizeEmail(),
  body('password')
    .isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
  body('status')
  .notEmpty().withMessage('Status is required'),
  body('module').notEmpty().withMessage('Module must not be empty'),
  (req, res, next) => {
    console.log(req.body)
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];