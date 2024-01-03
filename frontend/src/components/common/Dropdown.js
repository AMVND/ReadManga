import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import {link} from "../constants/Source"

function Dropdown() {
    return (
        <Menu as="div" className="relative inline-block text-left hover:block dropdown">
            <div>
                <Menu.Button className="dropbtn inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-lg font-medium text-gray-300 hover:bg-blue-600 hover:text-white">
                    Site
                    {/* <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" /> */}
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="dropdown-content absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                    {link.map((item) => (
                        <a
                          key={item.name}
                          href={item.url}
                          className='text-gray-700 block px-4 py-2 text-sm'
                        >
                          {item.name} - {item.server}
                        </a>
                      ))}
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}

export default Dropdown