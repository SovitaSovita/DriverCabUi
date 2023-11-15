import React, { useEffect, useState } from 'react'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import AddLocationAltOutlinedIcon from '@mui/icons-material/AddLocationAltOutlined';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import { TextInput } from 'flowbite-react';
import emailjs from 'emailjs-com';
import { useSelector } from 'react-redux';

function ContactPage() {

    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [destination, setDestination] = useState('');
    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');
    const [message, setMessage] = useState('');

    const footerInfo = useSelector((state) => state.loading.footerInfo)
    const generalInfo = useSelector((state) => state.loading.generalInfo)

    const [data, setData] = useState({})

    useEffect(() => {
        setData(footerInfo, generalInfo)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_4ou41xj', 'template_fbs8ldl', e.target, 'Jrk_670vTE7jVvdrE')
            .then((result) => {
                if (result) {
                    alert("Successfully.")

                    setEmail('');
                    setPhone('');
                    setDestination('');
                    setFromDate('');
                    setToDate('');
                    setMessage('');
                }
            }, (error) => {
                alert(error.text);
            });
    }
    return (
        <>
            <div className="container mt-10">
                <div className="head-content">
                    <div className="text-4xl text-center pb-3 fw-bold font-merienda">Contact</div>
                    <div className="line"></div>
                    <p className="text-center text-muted mt-3">
                        For more information, please feel free to contact us !
                    </p>
                </div>
            </div>

            <section className="phone:px-5 md:px-30 lg:px-40 mt-16 bg-root_high h-[380px]">
                <div className="grid lg:grid-cols-2 phone:grid-cols-1 gap-6">

                    <div className="left-side py-5 text-white mt-2">
                        <div className="flex items-center">
                            <LocalPhoneOutlinedIcon />
                            <h4 className="uppercase ml-2 text-xl font-bold">Call us</h4>
                        </div>
                        <p className="text-gray-200 mt-3">
                            <ul>
                                <li>Tel: {footerInfo?.phoneNumber}</li>
                                <li>WhatsApp: {footerInfo?.whatAppNumber}</li>
                                <li>Line: {footerInfo?.lineNumber}</li>
                            </ul>
                        </p>

                        <div className="flex items-center mt-8">
                            <LocationOnOutlinedIcon />
                            <h4 className="uppercase ml-2 text-xl font-bold">Location</h4>
                        </div>
                        <p className="text-gray-200 mt-3">
                            Phnom Penh Road #282, House No_#17,BKK, Chamka Moun, Phnom Penh City, Cambodia</p>

                        <div className="flex items-center mt-8">
                            <AccessTimeOutlinedIcon />
                            <h4 className="uppercase ml-2 text-xl font-bold">business hours</h4>
                        </div>
                        <p className="text-gray-200 mt-3">{generalInfo?.timeWork}</p>
                    </div>

                    <div className="right-side phone:mt-3 flex flex-col justify-center bg-white rounded-lg px-3 py-14 h-Rside lg:mt-[-35px] shadow-2xl">
                        <form onSubmit={sendEmail} className="grid gap-3 w-full h-full mt-0 px-3 py-5">
                            <div className="max-w-md">
                                <TextInput
                                    icon={EmailOutlinedIcon}
                                    name='email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Your email"
                                    required
                                    type="email"
                                />
                            </div>

                            <div className="max-w-md">
                                <TextInput
                                    icon={LocalPhoneOutlinedIcon}
                                    placeholder="Phone number"
                                    name='phone'
                                    required
                                    type="text"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </div>

                            <div className="max-w-md">
                                <TextInput
                                    icon={AddLocationAltOutlinedIcon}
                                    placeholder="Add : Destination"
                                    name='destination'
                                    required
                                    type="text"
                                    value={destination}
                                    onChange={(e) => setDestination(e.target.value)}
                                />
                            </div>

                            <div className="max-w-md">
                                <TextInput
                                    addon="From"
                                    icon={DateRangeOutlinedIcon}
                                    name='fromDate'
                                    required
                                    type="date"
                                    value={fromDate}
                                    onChange={(e) => setFromDate(e.target.value)}
                                />
                            </div>
                            <div className="max-w-md">
                                <TextInput
                                    addon="To"
                                    icon={DateRangeOutlinedIcon}
                                    name='toDate'
                                    required
                                    type="date"
                                    value={toDate}
                                    onChange={(e) => setToDate(e.target.value)}
                                />
                            </div>

                            <div className="textArea">
                                <textarea
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    name='message'
                                    className="bg-gray-50 w-full border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 block p-4"
                                    placeholder="Your message here..."></textarea>
                            </div>
                            <button type="submit"
                                className="text-white mr-3 w-1/4 self-end bg-blue-600 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-500 font-medium rounded-lg text-sm px-5 py-2 text-center">
                                Sent
                            </button>
                        </form>
                    </div>

                </div>
            </section>
            <div className="phone:h-[580px] lg:h-44"></div>
        </>
    )
}

export default ContactPage