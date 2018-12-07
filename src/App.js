import React, { useState } from "react";
import { Formik } from "formik";

const App = () => {
  // const [data, setData] = useState({
  //   name: "",
  //   email: "",
  //   phone: "",
  //   agree: false
  // });
  // const merge = (a, b) => Object.assign(a, b);
  // const handleChange = event => {
  //   setData(merge(data, { [event.target.name]: event.target.value }));
  // };
  return (
    <div>
      <h1>Ugly Form</h1>
      <Formik
        initialValues={{
          name: "",
          email: "",
          phone: "",
          agree: false
        }}
        validate={values => {
          let errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          console.log(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting
        }) => {
          return (
            <form onSubmit={handleSubmit}>
              <div>
                <label>
                  Name
                  <input
                    name="name"
                    type="text"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </label>
              </div>
              <div>
                <label>
                  Email Address
                  <input
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                  />
                </label>
                {errors.email && touched.email && errors.email}
              </div>
              <div>
                <label>
                  Phone
                  <input
                    name="phone"
                    type="text"
                    value={values.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                  />
                </label>
              </div>
              <div>
                <label>
                  Agree to this policy
                  <input
                    name="agree"
                    type="checkbox"
                    checked={values.agree}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </label>
              </div>
              <button type="submit" disabled={isSubmitting}>
                Add to Invite List
              </button>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default App;
