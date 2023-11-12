import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { delete_tourType } from '../redux/service/tourTypeService'
import { useDispatch } from 'react-redux'
import { setIsGet } from '../redux/slice/ListSlice';
import { notifySuccess } from '../redux/Constants';
import { Spinner } from 'flowbite-react';
import { delete_slider } from '../redux/service/sliderService';
import { delete_popular } from '../redux/service/TableListService';
import { delete_specialOffer } from '../redux/service/specialOfferService';

export default function PopUpDelete({ isOpen, closeModal, id, identify }) {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false)

    const handleDelete = () => {
        if (identify === "slider") {
            delete_slider(id).then((res) => {
                setIsLoading(true)
                if (res?.status == 200) {
                    notifySuccess("Deleted Successfully.")
                    dispatch(setIsGet(true))
                    setIsLoading(false)
                    closeModal()
                }
                setIsLoading(false)
                closeModal()
            })
        }
        if (identify === "tourType") {
            delete_tourType(id).then((res) => {
                setIsLoading(true)
                if (res?.status == 200) {
                    notifySuccess("Deleted Successfully.")
                    dispatch(setIsGet(true))
                    setIsLoading(false)
                    closeModal()
                }
                setIsLoading(false)
                closeModal()
            })
        }
        if (identify === "popular") {
            delete_popular(id).then((res) => {
                setIsLoading(true)
                if (res?.status == 200) {
                    notifySuccess("Deleted Successfully.")
                    dispatch(setIsGet(true))
                    setIsLoading(false)
                    closeModal()
                }
                setIsLoading(false)
                closeModal()
            })
        }
        if (identify === "offer") {
            delete_specialOffer(id).then((res) => {
                setIsLoading(true)
                if (res?.status == 200) {
                    notifySuccess("Deleted Successfully.")
                    dispatch(setIsGet(true))
                    setIsLoading(false)
                    closeModal()
                }
                setIsLoading(false)
                closeModal()
            })
        }
    }

    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
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
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        Delete ?
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <p className="text-sm text-gray-500">
                                            Are you sure you want to delete this?
                                        </p>
                                    </div>

                                    <div className="mt-4 flex justify-end">
                                        <button
                                            type="button"
                                            className="inline-flex mr-3 justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                                            onClick={handleDelete}
                                        >
                                            {isLoading ? <Spinner /> : "Delete"}
                                        </button>
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            onClick={closeModal}
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
