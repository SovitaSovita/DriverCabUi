import { React, useState, useEffect } from 'react'
import '../../style/style.css'

import { add_tourType, delete_tourType, get_tourType, update_tourType } from '../../redux/service/tourTypeService';
import { BASE_URL, notifyError, notifySuccess } from '../../redux/Constants';
import AlertMesages from '../AlertMesages';
import { useDispatch } from 'react-redux';
import { setIsGet, setListTourType } from '../../redux/slice/ListSlice';
import { useSelector } from 'react-redux';
import EditTableTypePop from '../editModal/EditTableTypePop';

import Paper from '@mui/material/Paper';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Button, Table } from '@mui/material';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import PopUpDelete from '../PopUpDelete';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import TableSkeleton from '../skeleton/TableSkeleton';
import ModalDetail from '../editModal/ModalDetail';

const TableTourType = () => {

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
    const data = useSelector((state) => state.allList.listTourType)
    const isGet = useSelector((state) => state.allList.isGet)
    const newData = data?.map((item, index) => ({ ...item, no: index + 1 }));

    const [isLoading, setIsLoading] = useState(false)

    const columns = [
        { id: 'no', label: 'No', minWidth: 70 },
        { id: 'title', label: 'Title', minWidth: 100 },
        { id: 'description', label: 'Description', minWidth: 170 },
        {
            id: 'image',
            label: 'Image',
            minWidth: 170,
        },
        { id: '', label: 'Action', minWidth: 70 },
    ];

    useEffect(() => {
        table()
    }, [isGet])


    const table = () => {
        setIsLoading(true)

        get_tourType().then((res) => {
            setIsLoading(false)
            dispatch(setListTourType(res?.data?.payload))
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

    const handleDeleteOpen = (id) => {
        setId(id)
        setOpenDeleteModal(true);
    };

    const handleDeleteClose = () => {
        setOpenDeleteModal(false);
    };

    //modal detail
    const [openDetailModal, setOpenDetailModal] = useState(false);
    const [detailData, setDetailData] = useState(false);

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
                        <Button onClick={() => handleEditOpen(null)} variant='contained' sx={{ mb: 2 }}>
                            <AddCircleOutlineOutlinedIcon />
                        </Button>
                        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                            <TableContainer sx={{ maxHeight: 440 }}>
                                <Table aria-label="sticky table">
                                    <TableHead>
                                        <TableRow>
                                            {columns.map((column) => (
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
                                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
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
                                                            <div className='hover:text-blue-600 cursor-pointer' onClick={() => handleDetailOpen(row)}>{row?.description}</div>
                                                        </TableCell>
                                                        <TableCell>
                                                            <img src={`${BASE_URL}/images?fileName=${row?.image}`} alt="Image" className='w-28 h-16 rounded object-cover' />
                                                        </TableCell>
                                                        <TableCell>
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
                                count={newData.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                onPageChange={handleChangePage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                            />
                        </Paper>
                    </div>
                )
            }
            <EditTableTypePop isOpen={openEditModal} closeModal={handleEditClose} oldData={getOldData} />
            <PopUpDelete isOpen={openDeleteModal} closeModal={handleDeleteClose} id={id} identify={"tourType"} />

            <ModalDetail isOpen={openDetailModal} closeModal={handleDetailClose} data={detailData}>
                <div>
                    {detailData?.description}
                </div>
            </ModalDetail>
        </>
    )
}

export default TableTourType
