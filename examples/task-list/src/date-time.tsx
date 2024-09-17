export const DateTime = ({ date, title }: { date: Date; title: string }) => {
  return (
    <div className="flex gap-2 text-xs sm:flex-row">
      <h3 className="font-semibold sm:after:content-[':'] after:text-gray-900 text-primary-800">
        {title}
      </h3>
      <p>
        {date.toLocaleString(undefined, {
          dateStyle: 'short',
          timeStyle: 'short',
        })}
      </p>
    </div>
  );
};
