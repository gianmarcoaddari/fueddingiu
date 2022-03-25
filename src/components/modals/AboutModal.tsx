import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";

type Props = {
  isOpen: boolean;
  isDev: boolean;
  handleClose: () => void;
};

export const AboutModal = ({ isOpen, isDev, handleClose }: Props) => {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        onClose={handleClose}
      >
        <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center">
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
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded-lg p-4 overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-xl sm:w-full">
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
                    Informazioni
                  </Dialog.Title>

                  {isDev && <div className="bg-fuchsia-800 p-2 rounded text-white my-8">
                      Attenzione: questo è un indirizzo di test.
                      L'indirizzo giusto è<br/>
                      <a href="https://gianmarcoaddari.github.io/fueddingiu/" className="font-bold">gianmarcoaddari.github.io/fueddingiu</a>
                    </div>}

                  <div className="mt-4 text-left text-sm">
                    <p>
                      <b>Fueddingiu</b> è un progetto open source basato su <b>Parolette</b>, il codice sorgente è disponibile{" "}
                      <a
                        href="https://github.com/gianmarcoaddari/fueddingiu"
                        className="underline focus:outline-dotted font-bold"
                        target="_blank"
                        rel="noreferrer"
                      >
                        su github
                      </a>.{" "}
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
