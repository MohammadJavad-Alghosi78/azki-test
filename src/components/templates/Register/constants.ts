// translations
import { persianWords } from "../../../translation";

export const defaultValues = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  password: "",
};

export const validationRules = {
  firstName: {
    required: {
      value: true,
      message: persianWords.validation.required,
    },
    pattern: {
      value: /^[آ-ی\s]+$/,
      message: persianWords.validation.persianWordsPattern,
    },
  },
  lastName: {
    required: {
      value: true,
      message: persianWords.validation.required,
    },
    pattern: {
      value: /^[آ-ی\s]+$/,
      message: persianWords.validation.persianWordsPattern,
    },
  },
  phoneNumber: {
    required: {
      value: true,
      message: persianWords.validation.required,
    },
    pattern: {
      value: /^(?:0|98|\+98|\+980|0098|098|00980)?(9\d{9})$/,
      message: persianWords.validation.phoneNumberPattern,
    },
  },
  password: {
    required: {
      value: true,
      message: persianWords.validation.required,
    },
    pattern: {
      value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/,
      message: persianWords.validation.passwordPattern,
    },
    minLength: {
      value: 4,
      message: persianWords.validation.minLength(4),
    },
    maxLength: {
      value: 10,
      message: persianWords.validation.maxLength(10),
    },
  },
};
