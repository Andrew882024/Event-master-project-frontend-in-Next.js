import Control_broad_new from "@/src/component/Control_broad_new";

const Support_page = () =>{
  return(
    <div className="absolute top-0 left-0 bg-gray-50 min-h-screen w-screen ">
      <Control_broad_new/>
      <title>Support Page</title>
      <div className="ml-[250px] mt-[20px]">
        <div className='text-[35px] font-bold text-gray-900'>Support Page</div>
        <div className='text-[15px] text-gray-600'>This is a demo release: v0.1. The Support Page will arrive in the next iteration.</div>
      </div>
    </div>
);
}

export default Support_page;