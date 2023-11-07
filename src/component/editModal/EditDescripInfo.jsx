import React, { useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react';
import { Spinner } from 'flowbite-react';
import AlertMesages from '../AlertMesages';
import { notifyError, notifySuccess } from '../../redux/Constants';
import { Field, Form, Formik } from 'formik';
import { decriptionSchema } from '../../utils/Validation';

import { useDispatch } from 'react-redux';
import { update_descriptionInfo } from '../../redux/service/generalInfoService';
import { setDescripInfo } from '../../redux/slice/LoadingSlice';

function EditDescripInfo(props) {

    const { isOpen, closeModal, data } = props

    const [isLoading, setIsLoading] = useState(false)
    const dispatch = useDispatch()

    const onSubmitHandle = (values) => {
        setIsLoading(true)
        update_descriptionInfo(values).then((res) => {
            console.log(res)
            if (res?.status == 200) {
                dispatch(setDescripInfo(res?.data?.payload))
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
                                                findTourDesc: data?.findTourDesc,
                                                popularTourDesc: data?.popularTourDesc,
                                                serviceDesc: data?.serviceDesc,
                                                mostVisitedDesc: data?.mostVisitedDesc,
                                                tourPackagesDesc: data?.tourPackagesDesc,
                                                whyUsDesc: data?.whyUsDesc,
                                                frequentlyQuestionDesc: data?.frequentlyQuestionDesc,
                                            }}
                                            validationSchema={decriptionSchema}
                                            onSubmit={onSubmitHandle}
                                        >
                                            {({ errors, touched }) => (
                                                <Form
                                                // onChange={onChangePassword}
                                                >
                                                    <div className="">
                                                        <div className=''>
                                                            <div className="mb-4">
                                                                <label for="findTourDesc" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Find Tour</label>
                                                                <Field
                                                                    type="findTourDesc"
                                                                    placeholder="Type here"
                                                                    name="findTourDesc"
                                                                    id="findTourDesc"
                                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                                />
                                                                {errors.findTourDesc && touched.findTourDesc ? (
                                                                    <div className="text-red-500 text-sm">
                                                                        {errors.findTourDesc}
                                                                    </div>
                                                                ) : null}
                                                            </div>
                                                            <div className="mb-4">
                                                                <label for="popularTourDesc" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Popular Tour</label>
                                                                <Field
                                                                    type="text"
                                                                    placeholder="Type here"
                                                                    name="popularTourDesc"
                                                                    id="popularTourDesc"
                                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                                />
                                                                {errors.popularTourDesc && touched.popularTourDesc ? (
                                                                    <div className="text-red-500 text-sm">
                                                                        {errors.popularTourDesc}
                                                                    </div>
                                                                ) : null}
                                                            </div>
                                                            <div className="mb-4">
                                                                <label for="serviceDesc" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Service</label>
                                                                <Field
                                                                    type="text"
                                                                    placeholder="url here"
                                                                    name="serviceDesc"
                                                                    id="serviceDesc"
                                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                                />
                                                                {errors.serviceDesc && touched.serviceDesc ? (
                                                                    <div className="text-red-500 text-sm">
                                                                        {errors.serviceDesc}
                                                                    </div>
                                                                ) : null}
                                                            </div>
                                                            <div className="mb-4">
                                                                <label for="mostVisitedDesc" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Most View</label>
                                                                <Field
                                                                    type="text"
                                                                    placeholder="Facebook URL"
                                                                    name="mostVisitedDesc"
                                                                    id="mostVisitedDesc"
                                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                                />
                                                                {errors.mostVisitedDesc && touched.mostVisitedDesc ? (
                                                                    <div className="text-red-500 text-sm">
                                                                        {errors.mostVisitedDesc}
                                                                    </div>
                                                                ) : null}
                                                            </div>
                                                            <div className="mb-4">
                                                                <label for="tourPackagesDesc" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tour Parkage</label>
                                                                <Field
                                                                    type="text"
                                                                    placeholder="url here"
                                                                    name="tourPackagesDesc"
                                                                    id="tourPackagesDesc"
                                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                                />
                                                                {errors.tourPackagesDesc && touched.tourPackagesDesc ? (
                                                                    <div className="text-red-500 text-sm">
                                                                        {errors.tourPackagesDesc}
                                                                    </div>
                                                                ) : null}
                                                            </div>
                                                            <div className="mb-4">
                                                                <label for="frequentlyQuestionDesc" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Frequently Question</label>
                                                                <Field
                                                                    type="text"
                                                                    placeholder="url here"
                                                                    name="frequentlyQuestionDesc"
                                                                    id="frequentlyQuestionDesc"
                                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                                />
                                                                {errors.frequentlyQuestionDesc && touched.frequentlyQuestionDesc ? (
                                                                    <div className="text-red-500 text-sm">
                                                                        {errors.frequentlyQuestionDesc}
                                                                    </div>
                                                                ) : null}
                                                            </div>
                                                            <div className="mb-4">
                                                                <label for="whyUsDesc" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Why Us</label>
                                                                <Field
                                                                    type="text"
                                                                    placeholder="url here"
                                                                    name="whyUsDesc"
                                                                    id="whyUsDesc"
                                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                                />
                                                                {errors.whyUsDesc && touched.whyUsDesc ? (
                                                                    <div className="text-red-500 text-sm">
                                                                        {errors.whyUsDesc}
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

export default EditDescripInfo