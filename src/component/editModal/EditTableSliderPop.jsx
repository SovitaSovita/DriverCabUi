import React, { useEffect, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react';
import { Button, FileInput, Label, Spinner, TextInput } from 'flowbite-react';
import AlertMesages from '../AlertMesages';
import { get_popular, update_popular } from '../../redux/service/TableListService';
import { notifyError, notifySuccess } from '../../redux/Constants';
import { Field, Form, Formik } from 'formik';
import { popularSchema, sliderSchema } from '../../utils/Validation';

import SaveAsOutlinedIcon from '@mui/icons-material/SaveAsOutlined';
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useDispatch } from 'react-redux';
import { setIsGet } from '../../redux/slice/ListSlice';
import { add_slider, update_slider } from '../../redux/service/sliderService';

function EditTableSliderPop(props) {

    const { isOpen, closeModal, oldData } = props

    const [newData, setNewData] = useState({})
    const dispatch = useDispatch()

    useEffect(() => {
        setNewData({ ...oldData })
    }, [])

    const [fileImg, setFileImg] = useState({ imageFile: null })
    const [isLoading, setIsLoading] = useState(false)

    const handleFileChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            const updatedFileImg = { ...fileImg };
            updatedFileImg.imageFile = file;
            setFileImg(updatedFileImg);
        }
    }
    const onSubmitHandle = (values) => {
        setIsLoading(true)
        if (oldData === null) {
            add_slider(values, fileImg.imageFile).then((res) => {
                if (res?.status == 200) {
                    dispatch(setIsGet(true))
                    setIsLoading(false)
                    notifySuccess("Inserted Successfully.")
                    closeModal()
                }
                else {
                    notifyError("Something wrong !!")
                    setIsLoading(false)
                    closeModal()
                }
            })
        } else {
            update_slider(values, fileImg.imageFile, oldData.id).then((res) => {
                if (res?.status == 200) {
                    dispatch(setIsGet(true))
                    setIsLoading(false)
                    notifySuccess("Updated Successfully.")
                    setNewData({})
                    setFileImg({ ...fileImg, imageFile: null })
                    closeModal()
                }
                else {
                    notifyError("Something wrong !!")
                    setIsLoading(false)
                    closeModal()
                }
            })
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
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white px-6 pt-4 pb-8 text-left align-middle shadow-xl transition-all">
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
                                                title: oldData?.title,
                                            }}
                                            validationSchema={sliderSchema}
                                            onSubmit={onSubmitHandle}
                                        >
                                            {({ errors, touched }) => (
                                                <Form
                                                    // onChange={onChangePassword}
                                                    className=""
                                                >

                                                    <div className="mb-4">
                                                        <span className="label-text text-base font-sans">
                                                            New Title
                                                        </span>
                                                        <div className="flex items-center bg-white-smoke rounded py-1 px-3">
                                                            <LockOutlinedIcon className="text-gray-500" />
                                                            <Field
                                                                type="text"
                                                                name="title"
                                                                id="title"
                                                                // value={password.title || ''}
                                                                className="bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2l focus:ring-0"
                                                            />

                                                        </div>
                                                        {errors.title && touched.title ? (
                                                            <div className="text-red-500 text-sm">
                                                                {errors?.title}
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

                                                    <div className="flex justify-end mt-10">
                                                        <Button
                                                            type="submit"
                                                            variant="contained" endicon={<SaveAsOutlinedIcon />}>
                                                            {isLoading ? <Spinner /> : "Save"}
                                                        </Button>
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

export default EditTableSliderPop