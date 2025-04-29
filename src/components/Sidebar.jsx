const Sidebar = () => {
    const templates = ["Modern", "Professional", "Creative", "Minimalist"];
  
    return (
      <div className="w-1/4 bg-gray-100 p-4">
        <button  className="bg-blue-500 text-white rounded p-2 mb-4 hover:bg-blue-600 font-semibold focus:outline-none">
          New Resume
        </button>
        <div className="flex flex-col gap-4">
          {templates.map((template) => (
            <div
              key={template}
              className="p-2 bg-white rounded shadow hover:bg-gray-200 cursor-pointer text-black"
            >
              {template}
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Sidebar;