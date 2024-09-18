import type { ComponentPropsWithoutRef } from 'react';
import { twMerge as merge } from 'tailwind-merge';

const formatDate = new Intl.DateTimeFormat(navigator.language, {
  dateStyle: 'short',
  timeStyle: 'short',
});

export const DateTime = ({
  date,
  title,
  className,
}: ComponentPropsWithoutRef<'div'> & {
  date: Date | string;
  title: string;
}) => {
  if (typeof date === 'string') date = new Date(date);
  return (
    <div className={merge('space-x-2 overflow-x-hidden text-xs', className)}>
      <span className="text-primary-800 dark:text-primary-200 font-semibold after:text-slate-700 after:content-[':'] dark:after:text-slate-300">
        {title}
      </span>
      <span className="whitespace-pre">{formatDate.format(date)}</span>
    </div>
  );
};
