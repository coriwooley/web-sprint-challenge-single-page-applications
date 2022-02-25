import * as yup from 'yup'

const schema = yup.object().shape({
    sizes: yup
    .string()
    .oneOf(['small', 'medium', 'large', 'xlarge'], 'Please select a size'),
    sauce: yup
    .string()
    .oneOf(['original', 'garlicRanch', 'bbq', 'spinachAlf'], 'Please select a sauce'),
    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    bacon: yup.boolean(),
    onion: yup.boolean(),
    name: yup
    .string()
    .required('Name required to complete order')
    .min(2, 'name must be at least 2 characters'),
    specialText: yup
    .string()
    .min(5, 'Must be at least 5 characters'),
})



export default schema;