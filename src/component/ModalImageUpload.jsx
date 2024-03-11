
import React, { Fragment, useState } from 'react'
// import { GridCloseIcon } from "@mui/x-data-grid";
import { blue } from '@mui/material/colors';
import { useDispatch } from 'react-redux';
import { style } from '@mui/system';
import { Dialog, Transition } from '@headlessui/react';
import { Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import ReactImageUploading from 'react-images-uploading';
// import { uploadImage } from 'src/services/sms.service';
import icoDrag from '../img/ico_filedrag.gif';
import { notifyError } from '../redux/Constants';
import { setImageList } from '../redux/slice/ListSlice';

const ModalImageUpload = ({ open, handleClose }) => {

    const [images, setImages] = useState([]);
    const [isErrorAlert, setIsErrorAlert] = useState({
        open: false,
        type: "warning",
        message: "",
        duration: 1600,
    });


    const size = images.map((item) => {
        return item.file.size
    })
    const sizeSum = size.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    const maxNumber = 69;
    const onChange = (imageList, addUpdateIndex) => {
        // data for submit
        setImages(imageList);
    };

    const dispatch = useDispatch();

    const image_url = images.map((item) => {
        return item.data_url;
    })
    const file = images.map((item) => {
        return item.file;
    })

    const onSubmitHandler = () => {
        const formdata = new FormData()
        file.forEach((file, index) => {
            formdata.append(`imgList`, file);
        });

        // console.log(images)
        //100mgb
        if (images?.length != 0) {
            if (images?.length <= 5 && sizeSum < 104857600) {
                // uploadImage(formdata).then((res) => {
                dispatch(setImageList(images))
                // })
                console.log(formdata)
                handleClose()
            } else {
                notifyError("The maximum number of files uploaded is set to 5.")
            }
        }
        else {
            notifyError("There are no files to transfer.")
        }
    }

    const thead_styles = {
        backgroundColor: '#ededf1',
        color: '#555',
        borderBottom: '1px solid #ccc',
        borderRight: '1px solid #ccc'
    }

    return (
        <>
            <Transition appear show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={handleClose}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/25" />
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
                                <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        <div className='flex justify-end'>
                                            <button
                                                onClick={handleClose}
                                                className='rounded-full w-7 h-7 bg-brand-red text-sm text-white flex items-center justify-center'>X</button>
                                        </div>
                                    </Dialog.Title>
                                    <div className="">
                                        <ReactImageUploading
                                            multiple
                                            value={images}
                                            onChange={onChange}
                                            maxNumber={maxNumber}
                                            dataURLKey="data_url"
                                            acceptType={["jpg", "png", "ico", "jpeg"]}
                                            key={image_url}
                                        >
                                            {({
                                                imageList,
                                                onImageUpload,
                                                onImageRemoveAll,
                                                onImageUpdate,
                                                onImageRemove,
                                                isDragging,
                                                dragProps
                                            }) => (
                                                // write your building UI
                                                <Box>
                                                    <Button
                                                        variant="contained"
                                                        onClick={onImageUpload}
                                                    >
                                                        Attachments
                                                    </Button>
                                                    &nbsp;
                                                    <Button
                                                        variant="contained"
                                                        color='error'
                                                        onClick={onImageRemoveAll}>Delete</Button>
                                                    &nbsp; &nbsp;

                                                    <TableContainer component={Paper}
                                                        {...dragProps}
                                                        sx={{

                                                            borderRadius: 0,
                                                            overflow: 'scroll',
                                                            height: '220px',
                                                            mt: '16px',
                                                            border: '1px solid #ccc'
                                                        }}
                                                    >
                                                        <Table stickyHeader aria-label="simple table" size='small'>
                                                            <TableHead>
                                                                <TableRow sx={{ height: '30px' }}>
                                                                    <TableCell
                                                                        style={thead_styles}
                                                                        colSpan={1}
                                                                    >file name</TableCell>

                                                                    <TableCell
                                                                        style={thead_styles}
                                                                        align="center"
                                                                        colSpan={2}
                                                                    >size</TableCell>
                                                                </TableRow>
                                                            </TableHead>
                                                            <TableBody>
                                                                {
                                                                    images.length == 0 ?
                                                                        <TableRow>
                                                                            <TableCell align="center" colSpan={4}>
                                                                                <Button
                                                                                    sx={{
                                                                                        width: '100%',
                                                                                        height: '100%',
                                                                                        backgroundColor: '#fff',
                                                                                        "&:hover": {
                                                                                            backgroundColor: "#fff",
                                                                                        },
                                                                                    }}
                                                                                    {...dragProps}
                                                                                >
                                                                                    <img src={icoDrag} alt='fileDrag' />
                                                                                </Button>
                                                                            </TableCell>
                                                                        </TableRow>
                                                                        :
                                                                        images.map((row, index) => (
                                                                            <TableRow
                                                                                key={index}
                                                                            >
                                                                                <TableCell sx={{ fontSize: 12 }}>
                                                                                    {row.file.name}
                                                                                    {/* {imageList.map((image, index) => (
                                                                        <div key={index} className="image-item">
                                                                            <img src={image.data_url} alt="" width="100" />
                                                                            <div className="image-item__btn-wrapper">
                                                                        <button onClick={() => onImageUpdate(index)}>Update</button>
                                                                        <button onClick={() => onImageRemove(index)}>Remove</button>
                                                                    </div>
                                                                        </div>
                                                                    ))} */}
                                                                                </TableCell>
                                                                                <TableCell align='center' sx={{ fontSize: 12 }}>
                                                                                    {(row.file.size / 1024).toFixed(2) + 'KB'}
                                                                                </TableCell>
                                                                            </TableRow>
                                                                        ))
                                                                }
                                                            </TableBody>
                                                        </Table>
                                                    </TableContainer>
                                                    <Box sx={{
                                                        bgcolor: '#ededf1',
                                                        color: '#000',
                                                        fontSize: 12,
                                                        display: 'flex',
                                                        justifyContent: 'space-between',
                                                        px: 3,
                                                        py: 1
                                                    }}>
                                                        <Box>
                                                            {images.length <= 0 ? '0 img, 0.0KB' : (images.length + ' img,' + (sizeSum / 1024).toFixed(2) + 'KB')}
                                                        </Box>
                                                        <Box>
                                                            Up to 5, 100.00MB
                                                        </Box>
                                                    </Box>
                                                </Box>
                                            )}
                                        </ReactImageUploading>

                                        <div className='mt-6'>
                                            <Button
                                                onClick={onSubmitHandler}
                                                sx={{
                                                    bgcolor: blue[600],
                                                    color: "#fff",
                                                    m: 'auto',
                                                    border: '1px solid #ccc',
                                                    "&:hover": {
                                                        backgroundColor: blue[400],
                                                    },
                                                }}
                                                variant="default">upload</Button>
                                            <Button onClick={handleClose}
                                                sx={{
                                                    bgcolor: "#fff",
                                                    ml: '10px',
                                                    border: '1px solid #555',
                                                    "&:hover": {
                                                        backgroundColor: "#ccc",
                                                    },
                                                }}
                                                variant="default">close</Button>
                                        </div>
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

export default ModalImageUpload