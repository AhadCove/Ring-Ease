const validate = values => {
  const errors = {}
  if (!values.ring_color) {
    errors.ring_color = 'Required'
  }
  if (!values.ring_metal) {
    errors.ring_metal = 'Required'
  }
  if (!values.ring_size) {
    errors.ring_size = 'Required'
  }
  if (!values.ring_type) {
    errors.ring_type = 'Required'
  }
  if (!values.ring_stone) {
    errors.ring_stone = 'Required'
  }
  if (!values.ring_stone_color) {
    errors.ring_stone_color = 'Required'
  }
  if (!values.ring_stone_shape) {
    errors.ring_stone_shape = 'Required'
  }
  if (!values.ring_stone_style) {
    errors.ring_stone_style = 'Required'
  }
  if (!values.ring_stone_setting) {
    errors.ring_stone_setting = 'Required'
  }
  if (!values.firstName) {
    errors.firstName = 'Required'
  }
  if (!values.lastName) {
    errors.lastName = 'Required'
  }
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.phone) {
    errors.phone = 'Required'
  }
  if (!values.budget) {
    errors.budget = 'Required'
  }
  return errors
}

export default validate