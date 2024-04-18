export default function Card({ user, time, content }: any) {
  return (
    <div className="block max-w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 text-base">
      <div className="mb-2 font-bold tracking-tight text-gray-900 dark:text-white flex justify-between items-center">
        <h5>@{user}</h5>
        <h6 className="font-normal">{time}</h6>
      </div>
      <p
        className="font-normal text-gray-700 dark:text-gray-400"
        style={{ overflowWrap: "break-word" }}
      >
        {content}
      </p>
    </div>
  );
}
