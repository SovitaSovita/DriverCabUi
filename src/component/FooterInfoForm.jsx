import { Field, Form, Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import { footerInfoSchema } from '../utils/Validation'

import SaveAsOutlinedIcon from '@mui/icons-material/SaveAsOutlined';
import { Button, Spinner, Table } from 'flowbite-react';
import { get_desciptionInfo, get_footer } from '../redux/service/generalInfoService';
import { useSelector } from 'react-redux';
import EditFooterInfo from './editModal/EditFooterInfo';
import { useDispatch } from 'react-redux';
import { setDescripInfo, setFooterInfo } from '../redux/slice/LoadingSlice';
import EditDescripInfo from './editModal/EditDescripInfo';
import TextSkeleton from './skeleton/TextSkeleton';
import { TableRow } from 'flowbite-react/lib/esm/components/Table/TableRow';

function FooterInfoForm() {

    const [isLoading, setIsLoading] = useState(false)

    const footerInfo = useSelector((state) => state.loading.footerInfo)
    const decripInfo = useSelector((state) => state.loading.decripInfo)

    const dispatch = useDispatch()

    useEffect(() => {
        setIsLoading(true)
        get_footer().then((res) => {
            dispatch(setFooterInfo(res?.data?.payload))
            setIsLoading(false)
        });
    }, [])

    useEffect(() => {
        setIsLoading(true)
        get_desciptionInfo().then((res) => {
            dispatch(setDescripInfo(res?.data?.payload))
            setIsLoading(false)
        })
    }, [])


    const [openEditModal, setOpenEditModal] = useState(false);
    const [openEditModalDesc, setOpenEditModalDesc] = useState(false);

    const handleEditOpen = () => {
        setOpenEditModal(true);
    };

    const handleEditClose = () => {
        setOpenEditModal(false);
    };
    const handleEditOpenDesc = () => {
        setOpenEditModalDesc(true);
    };

    const handleEditCloseDesc = () => {
        setOpenEditModalDesc(false);
    };


    return (
        <div>
            <div className="mt-2">

                <div className='flex justify-between items-center mt-12'>
                    <div className='font-semibold'>Edit Contact</div>
                    <Button onClick={handleEditOpen} className="bg-root_low ml-auto mb-4">Update Information</Button>
                </div>
                <Table striped>
                    <Table.Head>
                        <Table.HeadCell>Email</Table.HeadCell>
                        <Table.HeadCell>Phone Number</Table.HeadCell>
                        <Table.HeadCell>WhatApp Number</Table.HeadCell>
                        <Table.HeadCell>Line Number</Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        {
                            isLoading ? (
                                    <TextSkeleton />
                            ) : (
                                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                    <Table.Cell>{footerInfo?.email}</Table.Cell>
                                    <Table.Cell>{footerInfo?.phoneNumber}</Table.Cell>
                                    <Table.Cell>{footerInfo?.whatAppNumber}</Table.Cell>
                                    <Table.Cell>{footerInfo?.lineNumber}</Table.Cell>
                                </Table.Row>
                            )
                        }
                    </Table.Body>
                </Table>

                <Table striped className='mt-6'>
                    <Table.Head>
                        <Table.HeadCell>Facebook URL</Table.HeadCell>
                        <Table.HeadCell>Instagram URL</Table.HeadCell>
                        <Table.HeadCell>Telegram URL</Table.HeadCell>
                        <Table.HeadCell>WhatApp URL</Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        {
                            isLoading ? <TextSkeleton /> : (
                                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                    <Table.Cell>{footerInfo?.fbUrl}</Table.Cell>
                                    <Table.Cell>{footerInfo?.instaUrl}</Table.Cell>
                                    <Table.Cell>{footerInfo?.teleUrl}</Table.Cell>
                                    <Table.Cell>{footerInfo?.waUrl}</Table.Cell>
                                </Table.Row>
                            )
                        }
                    </Table.Body>
                </Table>

                <div className='flex justify-between items-center mt-12'>
                    <div className='font-semibold'>Edit Description</div>
                    <Button className="bg-root_low" onClick={handleEditOpenDesc}>Update Information</Button>
                </div>

                <Table striped className='mt-6 mb-12'>
                    <Table.Head>
                        <Table.HeadCell>Find Tour</Table.HeadCell>
                        <Table.HeadCell>Popular</Table.HeadCell>
                        <Table.HeadCell>service</Table.HeadCell>
                        <Table.HeadCell>most view</Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        {
                            isLoading ? <TextSkeleton /> : (
                                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                    <Table.Cell>{decripInfo?.findTourDesc}</Table.Cell>
                                    <Table.Cell>{decripInfo?.popularTourDesc}</Table.Cell>
                                    <Table.Cell>{decripInfo?.serviceDesc}</Table.Cell>
                                    <Table.Cell>{decripInfo?.mostVisitedDesc}</Table.Cell>
                                </Table.Row>
                            )
                        }
                    </Table.Body>
                </Table>

                <Table striped>
                    <Table.Head>
                        <Table.HeadCell>Tour parkage</Table.HeadCell>
                        <Table.HeadCell>Why Choose Us</Table.HeadCell>
                        <Table.HeadCell>frequently Question</Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        {
                            isLoading ? <TextSkeleton /> : (
                                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                    <Table.Cell>{decripInfo?.tourPackagesDesc}</Table.Cell>
                                    <Table.Cell>{decripInfo?.whyUsDesc}</Table.Cell>
                                    <Table.Cell>{decripInfo?.frequentlyQuestionDesc}</Table.Cell>
                                </Table.Row>
                            )
                        }
                    </Table.Body>
                </Table>
            </div>
            <EditFooterInfo isOpen={openEditModal} closeModal={handleEditClose} data={footerInfo} />
            <EditDescripInfo isOpen={openEditModalDesc} closeModal={handleEditCloseDesc} data={decripInfo} />
        </div>
    )
}

export default FooterInfoForm