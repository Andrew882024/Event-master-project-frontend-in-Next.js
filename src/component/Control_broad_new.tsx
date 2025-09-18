import { Calendar, Home, Upload, User, ShoppingCart, Bell, HelpCircle, LogIn, Icon } from "lucide-react"
import Link from 'next/link';

const Control_broad_new = () => {
 

  return(
    <div className="flex items-center justify-center bg-white w-screen h-[60px] border-b-[2px] border-gray-300 box-border">
      <div className="flex items-center justify-center w-[1500px] h-[50px] mb-[50px] box-border rounded-2xl ">
        <div className="absolute w-[1200px] h-[50px] top-[0px] border-[0px] m-[0px] border-gray-500">   
          <div className="absolute top-[12px] left-[20px] w-[170px] h-[40px] border-[0px] border-gray-500 cursor-pointer">       
          <Link href="/">
            <img src={"/Event Master icon.png"}></img>
          </Link>
          </div>
          <div className="absolute top-[14px] right-0 text-gray-900 text-[15px] font-Nunito">
            
            <Link href="/">
              <div className='hover:text-blue-500 inline-flex'>
                <Home className="inline-flex mr-[5px] h-[20px] w-[20px] mt-[5px] cursor-pointer items-center justify-center"/>
                <div className="inline-flex mr-[23px]  h-[30px] rounded-[10px]  items-center justify-center  font-Nunito cursor-pointer" >Home</div>
              </div>
            </Link>
          
            <Link href="/Events_page">
              <div className='hover:text-blue-500 inline-flex'>
                <Calendar className="inline-flex mr-[5px] h-[20px] w-[20px] mt-[5px] cursor-pointer items-center justify-center"/>
                <div className="inline-flex mr-[23px] h-[30px] rounded-[10px] items-center justify-center  font-Nunito cursor-pointer" >Events</div>
              </div>
            </Link>
            
            <Link href="/Support_page">
              <div className='hover:text-blue-500 inline-flex'>
                <HelpCircle className="inline-flex mr-[5px] h-[20px] w-[20px] mt-[5px] cursor-pointer items-center justify-center"/>
                <div className="inline-flex mr-[23px] h-[30px] rounded-[10px]  items-center justify-center  font-Nunito cursor-pointer" >Support</div>
              </div>
            </Link>
            
            
            <Link href="/UploadEvent_page">
              <div className='hover:text-blue-500 inline-flex'>
                <Upload className="inline-flex mr-[5px] h-[20px] w-[20px] mt-[5px] cursor-pointer items-center justify-center"/>
                <div className="inline-flex mr-[23px] h-[30px] rounded-[10px] cursor-pointer items-center justify-center">Upload Event</div>
              </div>
            </Link>
          
          
            <Link href="/SignIn_page">
              <div className='hover:text-blue-500 inline-flex'>
                <LogIn className="inline-flex mr-[5px] h-[20px] w-[20px] mt-[5px] cursor-pointer items-center justify-center"/>
                <div className="inline-flex mr-[23px] h-[30px] rounded-[10px] cursor-pointer items-center justify-center">Sign In/Up</div>
              </div>
            </Link>
          
            <Link href="/Cart_page">
              <div className='hover:text-blue-500 inline-flex'>
                <ShoppingCart className="inline-flex mr-[5px] h-[20px] w-[20px] mt-[5px] cursor-pointer items-center justify-center"/>
                <div className="inline-flex mr-[23px] h-[30px] rounded-[10px] cursor-pointer items-center justify-center">Cart</div>
              </div>
            </Link>
          
            <Link href="/Notice_page">
              <div className='hover:text-blue-500 inline-flex'>
                <Bell className="inline-flex mr-[5px] h-[20px] w-[20px] mt-[5px] cursor-pointer items-center justify-center"/>
                <div className="inline-flex mr-[23px] h-[30px] rounded-[10px] cursor-pointer items-center justify-center">Notice</div>
              </div>
            </Link>
          
            <Link href="/MyAccount_page">
              <div className='hover:text-blue-500 inline-flex'>
                <User className="inline-flex mr-[5px] h-[20px] w-[20px] mt-[5px] cursor-pointer items-center justify-center"/>
                <div className="inline-flex mr-[10px] h-[30px] rounded-[10px] cursor-pointer items-center justify-center">My Account</div>
              </div>
            </Link>
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default Control_broad_new;