import Control_broad_new from "@/src/component/Control_broad_new";

const Cart_page = () =>{
  return(
  // <div>Cart page</div>
  <div className="absolute top-0 left-0 bg-gray-50 min-h-screen w-screen ">
      <Control_broad_new/>
      <title>Cart Page</title>
      <div className="ml-[250px] mt-[20px]">
        <div className='text-[35px] font-bold text-gray-900'>Cart</div>
        <div className='text-[15px] text-gray-600'>This is a demo release. Checkout and payments are disabled in v0.1. The Cart will arrive in the next iteration.</div>
      </div>
    </div>
);
}

export default Cart_page;