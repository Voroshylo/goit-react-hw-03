import css from './ContactForm.module.css'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const initialValues = {
  name: '',
  number: ''
}

const FeedbackSchema = Yup.object().shape({
  name: Yup.string().min(4, 'short!').max(12, 'long!').required('required!'),
  number: Yup.string().min(4, 'short!').max(12, 'long!').required('required!'),
});

const ContactForm = () => {
  const handleSubmit = (values, actions) => {
    console.log(values)
    console.log(actions)
    actions.resetForm()
  }

  return (
    <div className={css.div}>
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
        <Form className={css.form}>
          <label className={css.label}>
            <span>Name</span>
            <Field className={css.input} name="name" />
            <ErrorMessage name='name' component='span' />
          </label>
          
          <label className={css.label}>
            <span>Number</span>
            <Field className={css.input} name='number' />
            <ErrorMessage name='number' component='span' />
          </label>
          
          <button type='submit'>Add contact</button>
        </Form>
      </Formik>
      </div>
  )
}

export default ContactForm