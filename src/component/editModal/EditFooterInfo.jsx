import React, { useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react';
import { Spinner } from 'flowbite-react';
import AlertMesages from '../AlertMesages';
import { notifyError, notifySuccess } from '../../redux/Constants';
import { Field, Form, Formik } from 'formik';
import { footerInfoSchema } from '../../utils/Validation';

import { useDispatch } from 'react-redux';
import { update_FooterInfo } from '../../redux/service/generalInfoService';
import { setFooterInfo } from '../../redux/slice/LoadingSlice';

function EditFooterInfo(props) {

    const { isOpen, closeModal, data } = props

    const [isLoading, setIsLoading] = useState(false)
    const dispatch = useDispatch()

    const onSubmitHandle = (values) => {
        setIsLoading(true)
        update_FooterInfo(values).then((res) => {
            if (res?.status == 200) {
                dispatch(setFooterInfo(res?.data?.payload))
                notifySuccess("Updated Successfully.");
                setIsLoading(false)
                closeModal()
            }
            else{
                notifyError("Something Wrong.")
            }
            closeModal()
            setIsLoading(false)
        })
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
                                                email: data?.email,
                                                phoneNumber: data?.phoneNumber,
                                                whatAppNumber: data?.whatAppNumber,
                                                lineNumber: data?.lineNumber,
                                                fbUrl: data?.fbUrl,
                                                instaUrl: data?.instaUrl,
                                                teleUrl: data?.teleUrl,
                                                waUrl: data?.waUrl,
                                            }}
                                            validationSchema={footerInfoSchema}
                                            onSubmit={onSubmitHandle}
                                        >
                                            {({ errors, touched }) => (
                                                <Form
                                                // onChange={onChangePassword}
                                                >
                                                    <div className="grid grid-cols-6 gap-4">
                                                        <div className='col-span-3'>
                                                            <div className="mb-4">
                                                                <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                                                <Field
                                                                    type="email"
                                                                    placeholder="Type here"
                                                                    name="email"
                                                                    id="email"
                                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                                />
                                                                {errors.email && touched.email ? (
                                                                    <div className="text-red-500 text-sm">
                                                                        {errors.email}
                                                                    </div>
                                                                ) : null}
                                                            </div>
                                                            <div className="mb-4">
                                                                <label for="phoneNumber" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
                                                                <Field
                                                                    type="text"
                                                                    placeholder="Type here"
                                                                    name="phoneNumber"
                                                                    id="phoneNumber"
                                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                                />
                                                                {errors.phoneNumber && touched.phoneNumber ? (
                                                                    <div className="text-red-500 text-sm">
                                                                        {errors.phoneNumber}
                                                                    </div>
                                                                ) : null}
                                                            </div>
                                                            <div className="mb-4">
                                                                <label for="whatAppNumber" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">WhatApp Number</label>
                                                                <Field
                                                                    type="text"
                                                                    placeholder="url here"
                                                                    name="whatAppNumber"
                                                                    id="whatAppNumber"
                                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                                />
                                                                {errors.whatAppNumber && touched.whatAppNumber ? (
                                                                    <div className="text-red-500 text-sm">
                                                                        {errors.whatAppNumber}
                                                                    </div>
                                                                ) : null}
                                                            </div>
                                                            <div className="mb-4">
                                                                <label for="lineNumber" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Line Number</label>
                                                                <Field
                                                                    type="text"
                                                                    placeholder="Facebook URL"
                                                                    name="lineNumber"
                                                                    id="lineNumber"
                                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                                />
                                                                {errors.lineNumber && touched.lineNumber ? (
                                                                    <div className="text-red-500 text-sm">
                                                                        {errors.lineNumber}
                                                                    </div>
                                                                ) : null}
                                                            </div>
                                                        </div>
                                                        <div className='col-span-3'>
                                                            <div className="mb-4">
                                                                <label for="fbUrl" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Facebook URL</label>
                                                                <Field
                                                                    type="text"
                                                                    placeholder="url here"
                                                                    name="fbUrl"
                                                                    id="fbUrl"
                                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                                />
                                                                {errors.fbUrl && touched.fbUrl ? (
                                                                    <div className="text-red-500 text-sm">
                                                                        {errors.fbUrl}
                                                                    </div>
                                                                ) : null}
                                                            </div>
                                                            <div className="mb-4">
                                                                <label for="instaUrl" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Instagram URL</label>
                                                                <Field
                                                                    type="text"
                                                                    placeholder="url here"
                                                                    name="instaUrl"
                                                                    id="instaUrl"
                                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                                />
                                                                {errors.instaUrl && touched.instaUrl ? (
                                                                    <div className="text-red-500 text-sm">
                                                                        {errors.instaUrl}
                                                                    </div>
                                                                ) : null}
                                                            </div>
                                                            <div className="mb-4">
                                                                <label for="teleUrl" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Telegram URL</label>
                                                                <Field
                                                                    type="text"
                                                                    placeholder="url here"
                                                                    name="teleUrl"
                                                                    id="teleUrl"
                                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                                />
                                                                {errors.teleUrl && touched.teleUrl ? (
                                                                    <div className="text-red-500 text-sm">
                                                                        {errors.teleUrl}
                                                                    </div>
                                                                ) : null}
                                                            </div>
                                                            <div className="mb-4">
                                                                <label for="waUrl" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">WhatApp URL</label>
                                                                <Field
                                                                    type="text"
                                                                    placeholder="Facebook URL"
                                                                    name="waUrl"
                                                                    id="waUrl"
                                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                                />
                                                                {errors.waUrl && touched.waUrl ? (
                                                                    <div className="text-red-500 text-sm">
                                                                        {errors.waUrl}
                                                                    </div>
                                                                ) : null}
                                                            </div>
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

export default EditFooterInfo