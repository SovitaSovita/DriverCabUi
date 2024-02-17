import React, { useState } from "react";

import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import AlertMesages from "./AlertMesages";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import SaveAsOutlinedIcon from '@mui/icons-material/SaveAsOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { change_password } from "../redux/service/AuthService";
import { notifyError, notifySuccess } from "../redux/Constants";
import { Spinner } from "flowbite-react";
import { Button } from "@mui/material";

export default function ChangePassword() {
  const [password, setPassword] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const [passwordEye, setPasswordEye] = useState(false);
  const [passwordEye1, setPasswordEye1] = useState(false);
  const [passwordEye2, setPasswordEye2] = useState(false);

  const onChangePassword = (e) => {
    const { name, value } = e.target;
    setPassword({ ...password, [name]: value });
  };

  const onSubmitPassword = () => {
    setIsLoading(true)

    if (password.newPassword == password.confirmPassword) {

      change_password({ ...password }).then((e) => {
        if (e.data?.status == 200) {

          notifySuccess(e?.data?.message)

        } else {

          notifyError(e?.response?.data?.error)

        }
        handleClear()
        setIsLoading(false)
      });
    } else {
      notifyError("Password not match.")
      setIsLoading(false)
      handleClear()
    }
  };

  const handleClear = () => {
    setPassword({})
  }

  // formik for change password
  const SignUpSchema = Yup.object().shape({
    oldPassword: Yup.string().required("Password can't empty"),
    newPassword: Yup.string().required("Password can't empty"),
    confirmPassword: Yup.string().required("Password can't empty"),
  });

  return (
    <div className="lg:px-32 md: px-4">
      <div className="h-fit bg-white rounded-xl mt-20 py-6 lg:px-20 md:px-14 px-4 shadow-shadow_custom">
        <div className="w-full h-16 bg-green_custom rounded-xl flex items-center">
          <p className="capitalize text-xl font-bold text-black">
            change password
          </p>
        </div>

        {/* formik for change password */}
        <Formik
          initialValues={{
            currentPassword: "",
            newPassword: "",
            confirmPassword: "",
          }}
          validationSchema={SignUpSchema}
          onSubmit={(values) => { }}
        >
          {({ errors, touched }) => (
            <Form
              onChange={onChangePassword}
              className=""
            >

              <div className="mb-4">
                <span className="label-text text-base font-sans">
                  Your Current Password
                </span>
                <div className="flex items-center bg-white-smoke rounded py-1 px-3">
                  <LockOutlinedIcon className="text-gray-500" />
                  <Field
                    type={passwordEye ? "text" : "password"}
                    placeholder="*********"
                    name="currentPassword"
                    id="currentPassword"
                    value={password.currentPassword || ''}
                    className="bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2l focus:ring-0"
                  />
                  <span
                    className="label-text mb-1 text-base cursor-pointer"
                    onClick={() => {
                      setPasswordEye(!passwordEye);
                    }}
                  >
                    {
                      !passwordEye ? <VisibilityOffOutlinedIcon className="text-gray-500" /> : <VisibilityOutlinedIcon className="text-gray-500" />
                    }
                  </span>
                </div>
                {errors.currentPassword && touched.currentPassword ? (
                  <div className="text-red-500 text-sm">
                    {errors.currentPassword}
                  </div>
                ) : null}
              </div>

              <div className="mb-4">
                <span className="label-text text-base font-sans">
                  New Password
                </span>
                <div className="flex items-center bg-white-smoke rounded py-1 px-3">
                  <LockOutlinedIcon className="text-gray-500" />
                  <Field
                    type={passwordEye2 ? "text" : "password"}
                    placeholder="*********"
                    name="newPassword"
                    id="newPassword"
                    value={password.newPassword || ''}
                    className="bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2l focus:ring-0"
                  />
                  <span
                    className="label-text mb-1 text-base cursor-pointer"
                    onClick={() => {
                      setPasswordEye2(!passwordEye2);
                    }}
                  >
                    {
                      !passwordEye2 ? <VisibilityOffOutlinedIcon className="text-gray-500" /> : <VisibilityOutlinedIcon className="text-gray-500" />
                    }
                  </span>
                </div>
                {errors.newPassword && touched.newPassword ? (
                  <div className="text-red-500 text-sm">{errors.newPassword}</div>
                ) : null}
              </div>


              <div className="mb-4">
                <span className="label-text text-base font-sans">
                  Confirm New Password
                </span>
                <div className="flex items-center bg-white-smoke rounded py-1 px-3">
                  <LockOutlinedIcon className="text-gray-500" />
                  <Field
                    type={passwordEye1 ? "text" : "password"}
                    placeholder="*********"
                    name="confirmPassword"
                    id="confirmPassword"
                    value={password.confirmPassword || ''}
                    className="bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2l focus:ring-0"
                  />
                  <span
                    className="label-text mb-1 text-base cursor-pointer"
                    onClick={() => {
                      setPasswordEye1(!passwordEye1);
                    }}
                  >
                    {
                      !passwordEye1 ? <VisibilityOffOutlinedIcon className="text-gray-500" /> : <VisibilityOutlinedIcon className="text-gray-500" />
                    }
                  </span>
                </div>
                {errors.confirmPassword && touched.confirmPassword ? (
                  <div className="text-red-500 text-sm">
                    {errors.confirmPassword}
                  </div>
                ) : null}
              </div>

              <div className="flex justify-end mt-10">
                {/* <button
                type="button"
                onClick={onSubmitPassword}
                className="btn"
              >
                {Loading ? <Spinner /> : "Save"}
              </button> */}
                <Button
                  type="button"
                  onClick={onSubmitPassword} variant="contained" endIcon={<SaveAsOutlinedIcon />}>
                  {isLoading ? <Spinner /> : "Save"}
                </Button>
              </div>
            </Form>
          )}
        </Formik>
        <AlertMesages />
      </div>
    </div>
  );
}
