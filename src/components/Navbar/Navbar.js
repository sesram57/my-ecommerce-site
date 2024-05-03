function Navbar(props) {
  const PageList = props.pageList;
  const lastIndex = PageList.length;
  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-600 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">
          My Ecommerce Site
        </span>
      </div>
      <div className="inline-block flex-grow items-center ">
        <div className="items-center text-sm flex-grow">
          {PageList.map((item) => (
            <a
              key={item.id}
              href={item.adress}
              className={`mt-2 inline-block lg:mt-0 text-teal-100 hover:text-white ${lastIndex === item.id ? "" : "mr-4"}`}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar