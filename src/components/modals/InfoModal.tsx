import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Cell } from "../grid/Cell";
import { XIcon } from "@heroicons/react/outline";

type Props = {
  isOpen: boolean;
  dictionarySize: number;
  handleClose: () => void;
};

export const InfoModal = ({ isOpen, dictionarySize, handleClose }: Props) => {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        onClose={handleClose}
      >
        <div className="flex items-center justify-center min-h-screen p-4 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-700 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
              <button className="focus:outline-dashed outline-1 outline-blue-500 absolute right-2 top-2 cursor-pointer"
                onClick={handleClose}>
                <XIcon className="h-6 w-6 text-blue-600 dark:text-blue-500" />
              </button>
              <div>
                <div className="text-center">
                  <Dialog.Title
                    as="h3"
                    className="text-xl leading-6 font-medium"
                  >
                    Is règulas
                  </Dialog.Title>
                  <div className="mt-4 text-gray-500 dark:text-gray-400">
                    <p className="text-sm dark:text-gray-100">
                      Intzerta su <b>fueddìngiu</b> in sesi tentas o prus pagu. Po dònnia tenta as a arriciri inditus de su colori de is lìteras.
                    </p>

                    <div className="flex justify-center mb-1 mt-4">
                      <Cell value="P" status="correct" />
                      <Cell value="U" />
                      <Cell value="D" />
                      <Cell value="D" />
                      <Cell value="A" />
                    </div>
                    <p className="text-sm">
                      Sa lìtera <b>P</b> est in su fueddu e in su logu giustu puru.
                    </p>

                    <div className="flex justify-center mb-1 mt-4">
                      <Cell value="G" />
                      <Cell value="E" status="present" />
                      <Cell value="N" />
                      <Cell value="N" />
                      <Cell value="A" />
                    </div>
                    <p className="text-sm">
                      Sa lìtera <b>E</b> est in su fueddu ma in su logu sballiau.
                    </p>

                    <div className="flex justify-center mb-1 mt-4">
                      <Cell value="M" />
                      <Cell value="A" status="absent" />
                      <Cell value="N" />
                      <Cell value="N" />
                      <Cell value="U" />
                    </div>
                    <p className="text-sm ">
                      Sa lìtera <b>A</b> no nc'est in su fueddu.
                    </p>

                    <p className="text-sm mt-5 dark:text-gray-100">

                      Po imoi, in s'aconciadura in sardu is fueddus, po sceberu, funt in campidanesu.
                      <br />Su ditzionàriu tenit {dictionarySize} fueddus.
                    </p>
                    <p className="text-sm">
                    • <br/>
                      Su <b>fueddìngiu</b> cuadu est su pròpiu po totu sa diri, apustis de mesu noti ddoi at unu fueddìngiu nou.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
