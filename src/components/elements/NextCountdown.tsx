import Countdown, { zeroPad, calcTimeDelta } from 'react-countdown';
import { RefreshIcon } from "@heroicons/react/outline";
import { useState } from 'react';

type Props = {
  todayTS: number;
  solution?: string;
  onEnd?: any;
};

export const NextCountdown = ({ todayTS, onEnd, solution }: Props) => {
  const [midnight] = useState<number>(new Date(todayTS).setHours(24, 0, 0, 0));

  const onTick = () => {
    if (onEnd) {
      const c = calcTimeDelta(midnight, { precision: 1000 });

      if (c.hours !== 0 || c.minutes !== 0) {
        return;
      }

      if ( c.seconds < 1 ) {
        setTimeout(() => {
          onEnd();
        }, 3000);
        return;
      }

      if ( c.seconds < 15 ) {
        document.body.classList.add('shake');
        return;
      }
    }
  };

  const reload= () => {
    window.location.reload();
  };

  const renderer = ({ hours, minutes, seconds, completed }:any) => {
    if (completed) {
      // Render a completed state
      return (
        <div className='flex flex-col items-center'>
          <p className="text-xs uppercase mb-2">
            Ddoi at unu fueddìngiu nou
          </p>
          <button
            onClick={reload}
            className="inline-flex justify-center items-center rounded-md border border-transparent shadow-sm px-4 py-2 text-base font-medium focus:outline-none sm:text-sm text-gray-200 border-gray-300 bg-black hover:border-blue-600 hover:text-blue-400 focus:ring-blue-500 focus:ring-2 focus:ring-offset-2"
          >
            <RefreshIcon className="h-5 w-5 mr-2" />
            Torra a carrigai
          </button>
        </div>
      );
    } else {
      // Render a countdown
      return (
        <div className='flex flex-col items-center'>
          <p className="test-xs uppercase">
            {solution &&
              <a href={"http://ditzionariu.sardegnacultura.it/faeddu/"+solution?.toLowerCase()}>
              Carca innoi po biri su ditzionàriu!
            </a>
            }
          </p>
          <p className="text-xs uppercase">
            Fueddìngiu chi benit
          </p>
          <div className='text-4xl'>
            <span>{zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}</span>
          </div>
        </div>
      );
    }
  };
  return (
    <Countdown date={midnight} renderer={renderer} onTick={onTick} />
  );
};
