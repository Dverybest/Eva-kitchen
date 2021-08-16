import * as yup from 'yup'
export const schema = yup.object().shape({
    fullName: yup.string().required('Name is required'),
    phoneNumber: yup.string().required('Phone number is required')
    .test('test number', 'Invalid phone number', (value) => {
        return /^\+234[0-9]{10}$|^0[0-9]{10}$/.test(value);
        }),
    // email: yup.string().email(),
    address: yup.string().required('Delivery Address is required'),
  });