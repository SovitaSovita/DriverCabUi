import React, { useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react';
import { FileInput, Label, Spinner } from 'flowbite-react';
import AlertMesages from '../AlertMesages';
import { notifyError, notifySuccess } from '../../redux/Constants';
import { Field, Form, Formik } from 'formik';
import { generalInfoSchema } from '../../utils/Validation';

import { useDispatch } from 'react-redux';
import { update_generalInfo } from '../../redux/service/generalInfoService';
import { setGeneralInfo } from '../../redux/slice/LoadingSlice';

function EditGeneralInfo(props) {

    const { isOpen, closeModal, data } = props

    const [isLoading, setIsLoading] = useState(false)
    const [fileImg, setFileImg] = useState({ imageFile: null })
    const dispatch = useDispatch()

    const onSubmitHandle = (values) => {
        setIsLoading(true)
        update_generalInfo(values, fileImg?.imageFile).then((res) => {
            if (res?.status === 200) {
                dispatch(setGeneralInfo(res?.data?.payload))
                notifySuccess("Updated Successfully.");
                setIsLoading(false)
                closeModal()
            }
            else {
                notifyError("Something Wrong.")
            }
            closeModal()
            setIsLoading(false)
        })
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            const updatedFileImg = { ...fileImg };
            updatedFileImg.imageFile = file;
            setFileImg(updatedFileImg);
        }
    }

    return (
        <div>
            {/* Alert mesage */}
            <AlertMesages />
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" open={!isOpen} className="relative z-10" static onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white px-6 pt-4 pb-8 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        <div className='flex justify-end'>
                                            <button
                                                onClick={closeModal}
                                                className='rounded-full w-7 h-7 bg-brand-red text-sm text-white flex items-center justify-center'>X</button>
                                        </div>
                                    </Dialog.Title>
                                    <div className="mt-2">

                                        <Formik
                                            initialValues={{
                                                timeWork: data?.timeWork,
                                                description: data?.description,
                                                image: data?.image,
                                            }}
                                            validationSchema={generalInfoSchema}
                                            onSubmit={onSubmitHandle}
                                        >
                                            {({ errors, touched }) => (
                                                <Form
                                                // onChange={onChangePassword}
                                                >

                                                    <div className=''>
                                                        <div className="mb-4">
                                                            <label for="timeWork" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">timeWork</label>
                                                            <Field
                                                                type="timeWork"
                                                                placeholder="Type here"
                                                                name="timeWork"
                                                                id="timeWork"
                                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                            />
                                                            {errors.timeWork && touched.timeWork ? (
                                                                <div className="text-red-500 text-sm">
                                                                    {errors.timeWork}
                                                                </div>
                                                            ) : null}
                                                        </div>
                                                        <div className="mb-4">
                                                            <label for="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
                                                            <Field
                                                                type="text"
                                                                placeholder="Type here"
                                                                name="description"
                                                                id="description"
                                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                            />
                                                            {errors.description && touched.description ? (
                                                                <div className="text-red-500 text-sm">
                                                                    {errors.description}
                                                                </div>
                                                            ) : null}
                                                        </div>
                                                        <div
                                                            className="max-w-md mt-4"
                                                            id="fileUpload"
                                                        >
                                                            <div className="mb-2 block">
                                                                <Label
                                                                    htmlFor="imageFile"
                                                                    value="Upload file"
                                                                />
                                                            </div>
                                                            <FileInput
                                                                id="imageFile"
                                                                name='imageFile'
                                                                onChange={handleFileChange}
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="flex justify-end w-full mt-2">
                                                        <button
                                                            type="submit"
                                                            className="inline-flex justify-center items-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
                                                            {isLoading ? <Spinner /> : "Save"}
                                                        </button>
                                                    </div>
                                                </Form>
                                            )}
                                        </Formik>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
    )
}

export default EditGeneralInfo