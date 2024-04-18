export const validateUsername = (username: string, setErrors: Function) => {
  if (!username) {
    setErrors((errors: any) => ({...errors, username: '帳號不可為空。'}));
  } else {
    setErrors((errors: any) => ({...errors, username: ''}));
  }
  return !!username;
};

export const validateEmail = (email: string, setErrors: Function) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) {
    setErrors((errors: any) => ({...errors, email: 'Email不可為空。'}));
  } else if (!emailRegex.test(email)) {
    setErrors((errors: any) => ({...errors, email: '請輸入有效的電子郵件地址。'}));
  } else {
    setErrors((errors: any) => ({...errors, email: ''}));
  }
  return email && emailRegex.test(email);
};

export const validatePassword = (password: string, setErrors: Function) => {
  const isValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);
  if (!isValid) {
    setErrors((errors: any) => ({...errors, password: '密碼至少包含8个字符，且必須包含字母和數字。'}));
  } else {
    setErrors((errors: any) => ({...errors, password: ''}));
  }
  return isValid;
};

export const validateConfirmPassword = (password: string, confirmPassword: string, setErrors: Function) => {
  if (!confirmPassword) {
    setErrors((errors: any) => ({...errors, password2: '確認密碼不可為空。'}));
  }else if (password!== confirmPassword) {
    setErrors((errors: any) => ({...errors, password2: '密碼不一致。'}));
  } else {
    setErrors((errors: any) => ({...errors, password2: ''}));
  }
  return password === confirmPassword;
};
