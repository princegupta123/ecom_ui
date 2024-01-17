import { Fragment, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react';
import {BellIcon, ShoppingBagIcon, HeartIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import Cart from '../pages/Cart';



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const handleClick =()=>{
  setOpen(!open);
  }
  return (
    <Disclosure as="nav" className="bg-gray-800">
        <>
          <div className="sm:px-6 lg:px-8">
            {/* first div for large screen */}
            <div className="relative sm:relative flex h-20 px-3 items-center justify-between">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-9 w-auto sm:h-12 w-auto"
                    src="/images/shop-icon.png"
                    alt="Your Company"
                  />
                </div>
            {/* Search Bar */}
            <div className="hidden sm:flex flex-grow justify-center items-center mb-2 sm:mb-0">
              <div className="relative w-50">
                <input
                  type="text"
                  id="search"
                  className="bg-gray-700 text-white rounded-md w-full p-2"
                  placeholder="Search..."
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>
            
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="relative rounded-full bg-gray-800 text-gray-400 mr-2 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>
             {open ? <Cart openCart ={open} setOpenCart = {setOpen}/> : ""}
               <button
                  onClick={handleClick}
                  type="button"
                  className="relative rounded-full bg-gray-800 text-gray-400 mr-2 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View Cart</span>
                  <ShoppingBagIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              
                <button
                  type="button"
                  className="relative rounded-full bg-gray-800 text-gray-400 mr-2 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">WishList</span>
                  <HeartIcon className="h-6 w-6" aria-hidden="true" />
                </button>
                {/* Profile dropdown */}
                <Menu as="div" className="relative">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
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
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            My Account
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="/login"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign In
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
               {/* Search Bar in second row in small devices*/}
               <div className="pb-3 px-2 sm:hidden">
              <div className="relative w-100">
                <input
                  type="text"
                  id="search"
                  className="bg-gray-700 text-white rounded-md w-full p-2"
                  placeholder="Search..."
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </>

    </Disclosure>
  )
}
