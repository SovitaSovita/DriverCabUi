import React from 'react'

import { Disclosure } from '@headlessui/react'
// import { ChevronUpIcon } from '@heroicons/react/20/solid'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Frequention() {
    const data = useSelector((state) => state.loading.decripInfo)
    return (
        <div className=" mt-32">
            <div className="head-content">
                <div className="text-4xl text-center pb-5 fw-bold font-merienda">Frequently Question</div>
                <div className="line"></div>
                <p className="text-center text-muted my-4">
                    {data?.frequentlyQuestionDesc} <br />
                    <Link to={'/contact'} className='text-blue-600'>Click Here</Link>
                </p>
            </div>

            <div className="w-full px-4 pt-5">
                <div className="mx-auto w-full rounded-2xl bg-white p-2">
                    <Disclosure>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-100 px-4 py-2 text-left text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500/75">
                                    <span>Question #1 What is your price?</span>
                                    {/* <ChevronUpIcon
                                        className={`${open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-blue-500`}
                                    /> */}
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                    Depending on where you wish to visit. You can let us know where,
                                    and when. We can communicate the price
                                    through our communication. Price is subject to changes.
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                    <Disclosure as="div" className="mt-2">
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-100 px-4 py-2 text-left text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500/75">
                                    <span>Question #2 Why your service is comparatively better.</span>
                                    {/* <ChevronUpIcon
                                        className={`${open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-blue-500`}
                                    /> */}
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                    We care your convenience, your pleasures, and your safety. In addition to this,
                                    we understand your needs especially if you are on your budget.
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                    <Disclosure as="div" className="mt-2">
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-100 px-4 py-2 text-left text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500/75">
                                    <span>Question #3 How experienced are your drivers?</span>
                                    {/* <ChevronUpIcon
                                        className={`${open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-blue-500`}
                                    /> */}
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                    We provide highly experienced drivers, the local who understand traffic conditions, 
                                    and best places that fit your desires.
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>
            </div>
        </div>
    )
}

export default Frequention