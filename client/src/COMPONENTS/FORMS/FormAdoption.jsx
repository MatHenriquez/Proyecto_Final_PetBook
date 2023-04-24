import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useParams } from 'react-router-dom';

const adoptionSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  address: Yup.string().required('Address is required'),
  postalCode: Yup.string().required('Postal Code is required'),
  age: Yup.number().required('Age is required'),
  facebook: Yup.string(),
  instagram: Yup.string(),
  acceptAgreement: Yup.boolean().oneOf([true], 'You must accept the agreement'),
});

const AdoptionForm = (props) => {
  const [loading, setLoading] = useState(true);
  const { id } = useParams(); 
  const userEmail = localStorage.getItem('email');
  const nickname = localStorage.getItem('nickname');

  //console.log(pet.id)
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      address: '',
      postalCode: '',
      age: '',
      facebook: '',
      instagram: '',
      acceptAgreement: false,
    },
    validationSchema: adoptionSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        const token = localStorage.getItem('token');
        console.log(token)
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json',
          "x-token": token },
          body: JSON.stringify({
            ...values,
            petId: id,
          }),
        };
        const response = await fetch('http://localhost:3001/adoptions', requestOptions);
        const data = await response.json();
        console.log(data);
        resetForm();
      } catch (error) {
        console.error(error);
      }
      setSubmitting(false);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <p>Hello <strong>{nickname}</strong>, thank you for your interest. Please enter your data.</p>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          name="name"
          type="text"
          value={formik.values.name}
          onChange={formik.handleChange}
        />
        {formik.touched.name && formik.errors.name ? (
          <div>{formik.errors.name}</div>
        ) : null}
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          name="email"
          type="email"
          value={formik.values.email}
          onChange={formik.handleChange}

        />
        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}
      </div>

      <div>
        <label htmlFor="address">Address:</label>
        <input
          id="address"
          name="address"
          type="text"
          value={formik.values.address}
          onChange={formik.handleChange}
        />
        {formik.touched.address && formik.errors.address ? (
          <div>{formik.errors.address}</div>
        ) : null}
      </div>

      <div>
        <label htmlFor="postalCode">Postal Code:</label>
        <input
          id="postalCode"
          name="postalCode"
          type="text"
          value={formik.values.postalCode}
          onChange={formik.handleChange}
        />
        {formik.touched.postalCode && formik.errors.postalCode ? (
          <div>{formik.errors.postalCode}</div>
        ) : null}
      </div>

      <div>
        <label htmlFor="age">Age:</label>
        <input
          id="age"
          name="age"
          type="number"
          value={formik.values.age}
          onChange={formik.handleChange}
        />
      </div>

<div>
  <label htmlFor="facebook">Facebook:</label>
  <input
    id="facebook"
    name="facebook"
    type="text"
    value={formik.values.facebook}
    onChange={formik.handleChange}
  />
  {formik.touched.facebook && formik.errors.facebook ? (
    <div>{formik.errors.facebook}</div>
  ) : null}
</div>

<div>
  <label htmlFor="instagram">Instagram:</label>
  <input
    id="instagram"
    name="instagram"
    type="text"
    value={formik.values.instagram}
    onChange={formik.handleChange}
  />
  {formik.touched.instagram && formik.errors.instagram ? (
    <div>{formik.errors.instagram}</div>
  ) : null}
</div>

<div>
  <label htmlFor="acceptAgreement">
    I accept the terms and conditions:
    <input
      id="acceptAgreement"
      name="acceptAgreement"
      type="checkbox"
      checked={formik.values.acceptAgreement}
      onChange={formik.handleChange}
    />
  </label>
  {formik.touched.acceptAgreement && formik.errors.acceptAgreement ? (
    <div>{formik.errors.acceptAgreement}</div>
  ) : null}
</div>

<button type="submit" disabled={formik.isSubmitting}>
  {formik.isSubmitting ? 'Submitting...' : 'Submit'}
</button>
</form>
);
};

export default AdoptionForm;
