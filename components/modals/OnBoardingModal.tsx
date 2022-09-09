/* This example requires Tailwind CSS v2.0+ */
import { Fragment, SetStateAction, useState, Dispatch } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  CheckIcon,
  ExclamationCircleIcon,
  LockClosedIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

interface IOnBoardingModal {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const TableDescription = (descText: string) => {
  return <span className="font-normal text-xs">{descText}</span>;
};

const ManageUserData = () => {
  return (
    <tr>
      <td>
        <p className="font-medium text-xs">Manage Users (0/25)</p>
      </td>
      <td>
        <div className="inline-flex items-center">
          <ExclamationCircleIcon className="text-yellow-400 h-5 w-5" />
          <span className="font-medium text-xs ml-2">No User Added</span>
        </div>
      </td>
      <td>
        <TableDescription descText={"Hello"} />
      </td>
      <td>
        <button
          type="button"
          className="inline-flex items-center rounded border border-transparent bg-indigo-600 px-2.5 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Button text
        </button>
      </td>
    </tr>
  );
};

const PowerBiPermissionComponent = () => {
  return (
    <>
      <tr className="border-b-">
        <td>
          <p className="font-medium text-xs">PowerBI permissions</p>
        </td>
        <td>
          <div className="inline-flex items-center">
            <ExclamationCircleIcon className="text-yellow-400 h-5 w-5" />
            <span className="font-medium text-xs ml-2">No User Added</span>
          </div>
        </td>
        <td>
          <span className="font-normal text-xs">
            Give powerBI permission to access your workspace, reports, and
            datasets. In addition, inforiver will be able to display a list of
            workspaces and reports to which you have access in order to create a
            subscription.
          </span>
        </td>
        <td>
          <button
            type="button"
            className="inline-flex items-center rounded border border-transparent bg-indigo-600 px-2.5 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Button text
          </button>
        </td>
      </tr>

      <tr>
        <td>
          <p className="font-medium text-xs">Manage Users (0/25)</p>
        </td>
        <td>
          <div className="inline-flex items-center">
            <ExclamationCircleIcon className="text-yellow-400 h-5 w-5" />
            <span className="font-medium text-xs ml-2">No User Added</span>
          </div>
        </td>
        <td>
          <span className="font-normal text-xs">
            The configure button opens the user management page, where you can
            add/remove users and assign roles.
          </span>
        </td>
        <td>
          <button
            type="button"
            className="inline-flex items-center rounded border border-transparent bg-indigo-600 px-2.5 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Button text
          </button>
        </td>
      </tr>
    </>
  );
};

export default function OnBoardingModal({ open, setOpen }: IOnBoardingModal) {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden  bg-white  text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-6xl ">
                <div>
                  <div className="flex w-full bg-white justify-between p-4 items-center">
                    <div className="flex flex-row">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <div className="flex flex-col ml-3">
                        <span className="text-sm font-medium">
                          Onboarding Actions
                        </span>
                        <span className="text-xs font-medium">
                          Click the below actions to complete
                        </span>
                      </div>
                    </div>
                    <div>
                      <XMarkIcon color="black" className="h-6 w-6" />
                    </div>
                  </div>
                  {/* table for onboarding actions */}
                  <div>
                    <div className="px-4 sm:px-6 lg:px-8">
                      <div className="mt-4 flex flex-col">
                        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                          <div className="inline-block min-w-full py-2 align-middle">
                            <div className="overflow-hidden shadow-sm ring-1 ring-black ring-opacity-5">
                              <table className="min-w-full divide-y divide-gray-300">
                                <thead className="bg-gray-50">
                                  <tr>
                                    <th
                                      scope="col"
                                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 lg:pl-8"
                                    >
                                      Action
                                    </th>
                                    <th
                                      scope="col"
                                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                    >
                                      Status
                                    </th>
                                    <th
                                      scope="col"
                                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                    >
                                      Description
                                    </th>

                                    <th
                                      scope="col"
                                      className="relative py-3.5 pl-3 pr-4 sm:pr-6 lg:pr-8"
                                    >
                                      <span className="sr-only">Edit</span>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                  <ManageUserData />
                                  <PowerBiPermissionComponent />
                                  {/* {people.map((person) => (
                                    <tr key={person.email}>
                                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8">
                                        {person.name}
                                      </td>
                                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                        {person.title}
                                      </td>
                                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                        {person.email}
                                      </td>

                                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6 lg:pr-8">
                                        <a
                                          href="#"
                                          className="text-indigo-600 hover:text-indigo-900"
                                        >
                                          Edit
                                          <span className="sr-only">
                                            , {person.name}
                                          </span>
                                        </a>
                                      </td>
                                    </tr>
                                  ))} */}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
