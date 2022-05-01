export const isNumberBetween17and100 = (num) => {
  return num.length === 0 || (num > 17 && num < 100);
};

export const isEmailValid = (email) => {
  if(typeof email !== 'string') throw new Error('String only');
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email.toLowerCase());
}

export const minStartDate = (minDate) => {
  let minStartDate = new Date();
  return minStartDate.setDate(minStartDate.getDate() -minDate);
}

export const maxStartDate = (maxDate) => {
  let maxStartDate = new Date();
  return maxStartDate.setDate(minStartDate.getDate() +maxDate);
}