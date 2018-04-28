export const VALIDATIONS_MAP = {
  LENGTH: maximumLengthValidation,
  INVALID_CHARACTERS: invalidCharactersValidation,
  IS_NUMERIC: isNumeric,
  IS_INTEGER: is_integer,
  MAX_MIN: validateWithMaxMinValue,
  REQUIRED: is_required
};
export const LENGTH = "LENGTH";
export const INVALID_CHARACTERS = "INVALID_CHARACTERS";
export const IS_NUMERIC = "IS_NUMERIC";
export const IS_INTEGER = "IS_INTEGER";
export const MAX_MIN='MAX_MIN';
export const REQUIRED='REQUIRED';

function is_integer(inputValue){
  inputValue=Number(inputValue);
  if((inputValue-Math.floor(inputValue))!==0){
    return 'value should only be an Integer';
  }
}
function is_required(inputValue){
  if(inputValue){
    if(isNaN(inputValue) && !inputValue.trim()){
      return `Can't be blank`;
    }
  }else{
    return `Can't be blank`;
  }
}
function maximumLengthValidation(inputValue, maxLength) {
  if (inputValue.length > maxLength) {
    return `length should not exceed ${maxLength}`;
  }
  return false;
}
function validateWithMaxMinValue(inputValue, maxLength, maxValue, minValue) {
  if (maxValue && inputValue > maxValue) {
    return `value should not exceed ${maxValue}`;
  }
  if (minValue && inputValue < minValue) {
    return `value should not be less than ${minValue}`;
  }
  return false;
}
function invalidCharactersValidation(inputValue) {
// var regExp=^[a-zA-Z0-9]$;
    var regex =/^[A-Za-z0-9-_\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$/g;
    if(!regex.test(inputValue)){
      return 'invalid input';
    }
    return false;
}

function isNumeric(inputValue) {
  return !isNaN(parseFloat(inputValue)) && isFinite(inputValue);
}
function integerValidation(inputValue) {
  return inputValue % 1 == 0;
}

export function general_validation(validationsRequired, input, maxLength,maxValue,minValue) {
  let errors = [];
  for (let i = 0; i < validationsRequired.length; i++) {
    let error = VALIDATIONS_MAP[validationsRequired[i]](input, maxValue,maxValue,minValue);
    if (error) {
      errors.push(error);
    }
  }
  return errors;
}
