const Joi = require("joi");

validateUserInfo = (userInfo) => {
  const schema = Joi.object({
    userName: Joi.string().min(3).max(20).required(),
    password: Joi.string().min(3).max(20).required(),
    email: Joi.string().min(3).max(50).required().email(),
    firstName: Joi.string().min(3).max(20),
    lastName: Joi.string().min(3).max(20),
    studentId: Joi.number().min(9).max(9),
    age: Joi.number().min(1).max(2),
    major: Joi.string().min(3).max(20),
    imageDir: Joi.string().min(3).max(20),
  });

  return schema.validate(userInfo);
};

exports.userInfoFormatHandler = validateUserInfo;
