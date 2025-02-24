import joi from "joi";
export const generalFields = {
  firstName: joi.string().min(2).max(50),
  lastName: joi.string().min(2).max(50),
  email: joi.string().email({ minDomainSegments: 2, maxDomainSegments: 3 }),
  password: joi
    .string()
    .pattern(new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[a-zA-Z]).{8,}$/)),
  confrimationPassword: joi.string().valid(joi.ref("password")),
  gender: joi.string().valid("Female", "Male"),
  mobileNumber: joi
    .string()
    .pattern(
      new RegExp(/^\+?(1|20|44|49|91|971|966|33|34|39|86|81|55|27)\d{9}$/)
    ),
  birthYear: joi.string(),
  code:joi.string().pattern(new RegExp(/^\d{4}$/))
};

export const validation = (Schema) => {
  return (req, res, next) => {
    const inputData = { ...req.body, ...req.params, ...req.query };
    const validationResualt = Schema.validate(inputData, { abortEarly: false });
    
    if (validationResualt.error) {
      return res
        .status(400)
        .json({
          message: "validation errors",
          details: validationResualt.error.details,
        });
    }
    return next();
  };
};
