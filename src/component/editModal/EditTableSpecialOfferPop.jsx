import React, { useEffect, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react';
import { Button, FileInput, Spinner } from 'flowbite-react';
import AlertMesages from '../AlertMesages';
import { notifyError, notifySuccess } from '../../redux/Constants';
import { Field, Form, Formik } from 'formik';
import { specialOfferSchema } from '../../utils/Validation';

import SaveAsOutlinedIcon from '@mui/icons-material/SaveAsOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { setImageList, setIsGet } from '../../redux/slice/ListSlice';
import { add_specialOffer, update_specialOffer } from '../../redux/service/specialOfferService';
import ModalImageUpload from '../ModalImageUpload';

function EditTableSpecialOfferPop(props) {

    const { isOpen, closeModal, oldData } = props

    const imageList = useSelector((state) => state.allList.imageList)
    const file = imageList.map((item) => {
        return item.file;
    })

    // console.log(imageList)

    const dispatch = useDispatch()

    const generateInitialDescriptions = () => {
        const initialDescriptions = [];
        for (let i = 0; i < imageList.length; i++) {
            initialDescriptions.push('');
        }
        return initialDescriptions;
    };

    const [descriptions, setDescriptions] = useState([]);

    useEffect(() => {
        setDescriptions(generateInitialDescriptions());
    }, [imageList]);

    const [isLoading, setIsLoading] = useState(false)

    const handleInputDescChange = (e, index) => {
        const { value } = e.target;
        setDescriptions((prevDescriptions) => {
            const updatedDescriptions = [...prevDescriptions];
            updatedDescriptions[index] = value;
            return updatedDescriptions;
        });
    };

    const onSubmitHandle = (values) => {

        if (oldData === null) {
            const areDescriptionsValid = descriptions.every((desc) => desc !== '');

            if (areDescriptionsValid) {
                setIsLoading(true)
                add_specialOffer(values, descriptions, file).then((res) => {
                    if (res?.status == 200) {
                        dispatch(setIsGet(true))
                        notifySuccess("Insertd Successfully.")
                    }
                    else {
                        notifyError("Something wrong !!")
                    }

                    setIsLoading(false)
                    setDescriptions([])
                    dispatch(setImageList([]))
                    closeModal()
                })
            }
            else {
                notifyError("Images and Descriptions is Required.")
            }
        }
        else {
            update_specialOffer(values, oldData.id).then((res) => {
                if (res?.status == 200) {
                    dispatch(setIsGet(true))
                    setIsLoading(false)
                    notifySuccess("Updated Successfully.")
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

    const [openImgUpload, setOpenImgUpload] = useState(false)
    const handleOpenImgUpload = () => {
        setOpenImgUpload(true)
    }
    const handleCloseImgUpload = () => {
        setOpenImgUpload(false)
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
                                <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white px-6 pt-4 pb-8 text-left align-middle shadow-xl transition-all">
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
                                                duration: oldData?.duration,
                                                price: oldData?.price,
                                            }}
                                            validationSchema={specialOfferSchema}
                                            onSubmit={onSubmitHandle}
                                        >
                                            {({ errors, touched }) => (
                                                <Form
                                                    // onChange={onChangePassword}
                                                    className=""
                                                >
                                                    <div className='grid grid-cols-6 gap-4'>
                                                        <div className='col-span-3'>
                                                            <div className="mb-4">
                                                                <span className="label-text text-base font-sans">
                                                                    New Title
                                                                </span>
                                                                <div className="flex items-center bg-white-smoke rounded py-1 px-3">
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
                                                                        {errors.title}
                                                                    </div>
                                                                ) : null}
                                                            </div>

                                                            <div className="mb-4">
                                                                <span className="label-text text-base font-sans">
                                                                    New Duration
                                                                </span>
                                                                <div className="flex items-center bg-white-smoke rounded py-1 px-3">
                                                                    <Field
                                                                        type="text"
                                                                        name="duration"
                                                                        id="duration"
                                                                        // value={password.duration || ''}
                                                                        className="bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2l focus:ring-0"
                                                                    />
                                                                </div>
                                                                {errors.duration && touched.duration ? (
                                                                    <div className="text-red-500 text-sm">{errors.duration}</div>
                                                                ) : null}
                                                            </div>


                                                            <div className="mb-4">
                                                                <span className="label-text text-base font-sans">
                                                                    New Price
                                                                </span>
                                                                <div className="flex items-center bg-white-smoke rounded py-1 px-3">
                                                                    <Field
                                                                        type="text"
                                                                        name="price"
                                                                        id="price"
                                                                        // value={password.price || ''}
                                                                        className="bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2l focus:ring-0"
                                                                    />
                                                                </div>
                                                                {errors.price && touched.price ? (
                                                                    <div className="text-red-500 text-sm">
                                                                        {errors.price}
                                                                    </div>
                                                                ) : null}
                                                            </div>

                                                            <div className="mb-4">
                                                                <span className="label-text text-base font-sans">
                                                                    Upload Images :
                                                                </span>
                                                                <a
                                                                    className='underline ml-3 text-blue-800'
                                                                    onClick={handleOpenImgUpload}>Upload</a>
                                                            </div>
                                                        </div>
                                                        {
                                                            !oldData &&
                                                            <div className='col-span-3'>
                                                                <div className="mb-4 mt-6">
                                                                    {descriptions.map((desc, index) => (
                                                                        <div key={index} className='mt-6 border rounded p-2'>
                                                                            <Field
                                                                                as="textarea"
                                                                                rows="2"
                                                                                id={`description ${index + 1}`}
                                                                                name={`descriptions[${index}]`}
                                                                                type="text"
                                                                                value={desc}
                                                                                className="bg-transparent mb-2 border-none w-full text-gray-700 mr-3 px-2l focus:ring-0 bg-white-smoke rounded py-2 px-3"
                                                                                onChange={(e) => handleInputDescChange(e, index)}
                                                                                placeholder={`Enter Description ${index + 1}`}
                                                                            />
                                                                            {errors.descriptions && errors.descriptions[index] && touched.descriptions && touched.descriptions[index] ? (
                                                                                <div className="text-red-500 text-sm">
                                                                                    {errors.descriptions[index]}
                                                                                </div>
                                                                            ) : null}
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        }
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

                        <ModalImageUpload open={openImgUpload}
                            handleClose={handleCloseImgUpload} />
                    </div>
                </Dialog>
            </Transition>
        </div>
    )
}

export default EditTableSpecialOfferPop