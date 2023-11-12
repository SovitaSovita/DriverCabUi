import { React, useState, useEffect } from 'react'
import '../../style/style.css'

import Paper from '@mui/material/Paper';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Table } from '@mui/material';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import PopUpDelete from '../PopUpDelete';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';

import { add_popular, delete_popular, get_popular, update_popular } from '../../redux/service/TableListService';
import { BASE_URL, notifyError, notifySuccess } from '../../redux/Constants';
import AlertMesages from '../AlertMesages';
import { Button, Spinner } from 'flowbite-react';
import { useDispatch } from 'react-redux';
import { setIsGet, setListOffer } from '../../redux/slice/ListSlice';
import { useSelector } from 'react-redux';
import TableSkeleton from '../skeleton/TableSkeleton';
import { get_specialOffer } from '../../redux/service/specialOfferService';
import EditTableSpecialOfferPop from '../editModal/EditTableSpecialOfferPop';
import ModalDetail from '../editModal/ModalDetail';


const TableSpecialOffer = () => {

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };


    const dispatch = useDispatch();
    const data = useSelector((state) => state.allList.listOffer)
    const subList = data?.map((item) => {
        return item?.imgList
    })

    const isGet = useSelector((state) => state.allList.isGet)
    const newData = data?.map((item, index) => ({ ...item, no: index + 1 }));
    const [isLoading, setIsLoading] = useState(false)

    const columns = [
        { id: 'no', label: 'No', minWidth: 70 },
        { id: 'title', label: 'Title', minWidth: 100 },
        { id: 'duration', label: 'Duration', minWidth: 60 },
        { id: 'price', label: 'Price', minWidth: 60 },
    ];

    for (let i = 1;i <= subList?.length - 1;i++) {
        columns.push({
            id: `fileName${i}`,
            label: `Picture${i}`,
            minWidth: 60,
        });
    }
    columns.push({ id: '', label: 'Action', minWidth: 70 });

    useEffect(() => {
        table()
    }, [isGet])


    const table = () => {
        setIsLoading(true)

        get_specialOffer().then((res) => {
            setIsLoading(false)
            dispatch(setListOffer(res?.data?.payload))
            dispatch(setIsGet(false))

        }).catch((e) => {
            setIsLoading(false)
            console.log(e)
        })
    }

    const [openEditModal, setOpenEditModal] = useState(false);
    const [getOldData, setGetOldData] = useState({})

    const handleEditOpen = (oldData) => {
        setGetOldData(oldData)
        setOpenEditModal(true);
    };

    const handleEditClose = () => {
        setOpenEditModal(false);
    };

    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const [id, setId] = useState({})
    const [openDetailModal, setOpenDetailModal] = useState(false);
    const [detailData, setDetailData] = useState(false);

    const handleDeleteOpen = (id) => {
        setId(id)
        setOpenDeleteModal(true);
    };

    const handleDeleteClose = () => {
        setOpenDeleteModal(false);
    };

    const handleDetailOpen = (data) => {
        setDetailData(data)
        setOpenDetailModal(true);
    };

    const handleDetailClose = () => {
        setOpenDetailModal(false);
    };

    return (
        <>
            <AlertMesages />
            {/* table list */}
            {
                isLoading ? (
                    <TableSkeleton />
                ) : (

                    <div>
                        <Button onClick={() => handleEditOpen(null)} className='bg-root_low mb-4 ml-auto'>
                            <AddCircleOutlineOutlinedIcon />
                        </Button>
                        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                            <TableContainer sx={{ maxHeight: 440 }}>
                                <Table aria-label="sticky table">
                                    <TableHead>
                                        <TableRow>
                                            {columns?.map((column, index) => (
                                                <TableCell
                                                    key={column.id}
                                                    align={column.align}
                                                    style={{ minWidth: column.minWidth }}
                                                >
                                                    {column.label}
                                                </TableCell>
                                            ))}
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {newData
                                            ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                            .map((row) => {
                                                return (
                                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                                                        <TableCell>
                                                            {row?.no}
                                                        </TableCell>
                                                        <TableCell>
                                                            {row?.title}
                                                        </TableCell>
                                                        <TableCell>
                                                            {row?.duration}
                                                        </TableCell>
                                                        <TableCell>
                                                            {row?.price}
                                                        </TableCell>
                                                        {
                                                            row.imgList
                                                                ?.map((item) => {
                                                                    return (
                                                                        <TableCell>
                                                                            <img src={`${BASE_URL}/images?fileName=${item?.fileName}`} alt="Image" className='w-28 h-16 rounded object-cover' />
                                                                        </TableCell>
                                                                    )
                                                                })
                                                        }
                                                        <TableCell>
                                                            <ExpandCircleDownOutlinedIcon onClick={() => handleDetailOpen(row)} sx={{ fontSize: '28px' }} className='text-green-500 mr-2 border rounded-full bg-green-100 p-1 cursor-pointer' />
                                                            <ModeEditOutlineOutlinedIcon className='text-blue-500 mr-2 border rounded-full bg-blue-100 p-1 cursor-pointer'
                                                                onClick={() => handleEditOpen(row)} sx={{ fontSize: '28px' }} />
                                                            <DeleteOutlinedIcon onClick={() => handleDeleteOpen(row.id)} sx={{ fontSize: '28px' }} className='text-red-500 mr-2 border rounded-full bg-red-100 p-1 cursor-pointer' />
                                                        </TableCell>
                                                    </TableRow>
                                                );
                                            })}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <TablePagination
                                rowsPerPageOptions={[10, 25, 100]}
                                component="div"
                                count={newData?.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                onPageChange={handleChangePage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                            />
                        </Paper>
                    </div>
                )
            }
            <EditTableSpecialOfferPop isOpen={openEditModal} closeModal={handleEditClose} oldData={getOldData} />
            <PopUpDelete isOpen={openDeleteModal} closeModal={handleDeleteClose} id={id} identify={"offer"} />

            <ModalDetail isOpen={openDetailModal} closeModal={handleDetailClose} data={detailData}>
                {
                    detailData?.imgList?.map((item) => {
                            return (
                                <div className='grid-cols-6 mt-6'>
                                    <div className='col-span-6'>
                                        <div>{item?.description}</div>
                                    </div>
                                    <div className='col-span-6 mt-4'>
                                        <img src={`${BASE_URL}/images?fileName=${item?.fileName}`} alt="Image" className='w-full h-full rounded object-cover mb-2' />
                                    </div>
                                </div>
                            )
                        })
                }
            </ModalDetail>
        </>
    )
}

export default TableSpecialOffer
