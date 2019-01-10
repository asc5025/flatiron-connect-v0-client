const validate = values => {
  const errors = {}
  if (!values.full_name) {
    errors.full_name = 'Required'
  }
  if (!values.password) {
    errors.password = 'Required'
  }
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.current_position) {
    errors.current_position = 'Required'
  }
  if (!values.current_company) {
    errors.current_company = 'Required'
  }
  if (!values.current_industry) {
    errors.current_industry = 'Required'
  }
  return errors
}

export default validate
