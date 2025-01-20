
import * as yup from 'yup';
const schema = yup.object().shape({
    name: yup.string().required(),
    price: yup.number().positive().integer().required(),
    image: yup.string().required(),
  });

export default schema