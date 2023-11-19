const HoverDropDown = () => {
  return (
    <div className="max-w-md mx-auto my-8 text-center">
      <h2 className="text-2xl font-bold mb-4">Hover DropDown</h2>
      <div className="relative block">
        <div
          className="cursor-pointer border border-gray-300 py-2 px-4 rounded bg-gray-200 hover:bg-gray-300 peer"
        >
          Click here
        </div>
        <div className="mt-2 hidden border border-gray-300 rounded bg-white shadow p-4 absolute right-0 z-10 peer-hover:block">
          <p>This is the dropdown created using React useState</p>
        </div>
      </div>
    </div>
  );
};

export default HoverDropDown;
