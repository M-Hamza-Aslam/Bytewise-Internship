const { body } = require("express-validator");

module.exports = {
  // Validation middleware for login
  validateLogin: [
    body("email", "Invalid email")
      .isEmail()
      .normalizeEmail({ gmail_remove_dots: false }),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
    body("userRole", "User role must be provided").notEmpty(),
  ],

  // Validation middleware for sign up
  validateSignUp: [
    body("firstName").notEmpty().withMessage("First name is required"),
    body("lastName").notEmpty().withMessage("Last name is required"),
    body("email")
      .isEmail()
      .normalizeEmail({ gmail_remove_dots: false })
      .withMessage("Invalid email"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
    body("phoneNumber")
      .notEmpty()
      .withMessage("Phone number is required")
      // .isNumeric()
      // .withMessage("Phone number should only contain digits")
      .isLength({ min: 12, max: 12 })
      .withMessage("Phone number should be 12 digits long"),
  ],

  // Validation middleware for Forgot Password
  validateForgotPassword: [
    body("email")
      .isEmail()
      .normalizeEmail({ gmail_remove_dots: false })
      .withMessage("Invalid email"),
  ],

  // Validation middleware for Reset Password
  validateResetPassword: [
    body("newPassword")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
  ],

  // Validation middleware for Personal Information
  validatePersonalInfo: [
    body("firstName").custom((value, { req }) => {
      if (value.trim().length < 1) {
        return Promise.reject("First Name cannot be empty");
      }
      return true;
    }),

    body("lastName").custom((value, { req }) => {
      if (value.trim().length < 1) {
        return Promise.reject("Last Name cannot be empty");
      }
      return true;
    }),

    body("phoneNumber").custom((value, { req }) => {
      if (!value) {
        return Promise.reject("Phone Number is required");
      }
      const regex = /^92\d{10}$/;
      if (!regex.test(value)) {
        return Promise.reject(
          "Phone Number should be in the format 92xxxxxxxxxx"
        );
      }
      return true;
    }),

    body("personalInfo.email").custom((value, { req }) => {
      if (!value) {
        return Promise.reject("Email is required");
      }
      const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z]+.com$/;
      if (!regex.test(value)) {
        return Promise.reject("Email is invalid");
      }
      return true;
    }),

    body("personalInfo.cnic").custom((value, { req }) => {
      if (!value) {
        return Promise.reject("CNIC is required");
      }
      if (value.trim().length !== 13) {
        return Promise.reject("CNIC should be 13 digits");
      }
      return true;
    }),

    body("personalInfo.batch").custom((value, { req }) => {
      if (!value) {
        return Promise.reject("Batch is required");
      }
      const regex = /^\d{4}$/;
      if (!regex.test(value)) {
        return Promise.reject("Batch should be in the format XXXX");
      }
      return true;
    }),

    body("personalInfo.department").custom((value, { req }) => {
      if (!value) {
        return Promise.reject("Department No is required");
      }
      return true;
    }),

    body("personalInfo.occupation").custom((value, { req }) => {
      if (value.trim().length < 1) {
        return Promise.reject("Occupation cannot be empty");
      }
      return true;
    }),
    body("personalInfo.designation").custom((value, { req }) => {
      if (value.trim().length < 1) {
        return Promise.reject("Designation cannot be empty");
      }
      return true;
    }),
    body("personalInfo.company").custom((value, { req }) => {
      if (value.trim().length < 1) {
        return Promise.reject("Company cannot be empty");
      }
      return true;
    }),
    body("personalInfo.salary").custom((value, { req }) => {
      if (value.trim().length < 1) {
        return Promise.reject("Salary cannot be empty");
      }
      return true;
    }),
    body("personalInfo.alternativePhoneNumber").custom((value, { req }) => {
      if (!value) {
        return Promise.reject("Alternative Phone Number is required");
      }
      const regex = /^92\d{10}$/;
      if (!regex.test(value)) {
        return Promise.reject(
          "Alternative Phone Number should be in the format 92xxxxxxxxxx"
        );
      }
      return true;
    }),
    body("personalInfo.residentialAddress").custom((value, { req }) => {
      if (value.trim().length < 1) {
        return Promise.reject("Please provide a valid Residential Address.");
      }
      return true;
    }),
    body("personalInfo.residentialDistrict").custom((value, { req }) => {
      if (value.trim().length < 1) {
        return Promise.reject("Please provide a valid Residential District.");
      }
      return true;
    }),
    body("personalInfo.residentialCity").custom((value, { req }) => {
      if (value.trim().length < 1) {
        return Promise.reject("Please provide a valid Residential City.");
      }
      return true;
    }),
    body("personalInfo.residentialProvince").custom((value, { req }) => {
      if (value.trim().length < 1) {
        return Promise.reject("Please provide a valid Residential Province.");
      }
      return true;
    }),
    body("personalInfo.permanentAddress").custom((value, { req }) => {
      if (value.trim().length < 1) {
        return Promise.reject("Please provide a valid Permanent Address.");
      }
      return true;
    }),
    body("personalInfo.permanentDistrict").custom((value, { req }) => {
      if (value.trim().length < 1) {
        return Promise.reject("Please provide a valid Permanent District.");
      }
      return true;
    }),
    body("personalInfo.permanentCity").custom((value, { req }) => {
      if (value.trim().length < 1) {
        return Promise.reject("Please provide a valid Permanent City.");
      }
      return true;
    }),
    body("personalInfo.permanentProvince").custom((value, { req }) => {
      if (value.trim().length < 1) {
        return Promise.reject("Please provide a valid Permanent Province.");
      }
      return true;
    }),
  ],
};
