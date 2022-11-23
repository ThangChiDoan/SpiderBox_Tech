interface IAlert {
  content: string;
}
export const Alert: React.FC<IAlert> = ({ content }) => {
  return (
    <div
      className="p-2 mt-2 text-sm text-yellow-700 bg-yellow-100 rounded-lg dark:bg-yellow-200 dark:text-yellow-800"
      role="alert"
    >
      <span className="font-medium capitalize">{`Oops! `}</span>
      {content}
    </div>
  );
};
