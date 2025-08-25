"use client";
import { useRouter } from 'next/navigation';

const Control_broad = () => {
  const navigate = useRouter();

  function handleSearch(e: React.FormEvent) {
    //e.preventDefault();
    alert("search");
  }

  function loadPage(root: string) {
    navigate.push(root);
  }

  return(
    <div className="flex items-center justify-center">
      <div className="flex items-center justify-center w-[1500px] h-[60px] mb-[50px] box-border rounded-2xl">
        <div className="absolute w-[1200px] h-[60px]  border-[0px] m-[0px] border-gray-500">
          <div className="absolute top-[3px] text-orange-300 text-3xl font-Nunito cursor-pointer" onClick={() => loadPage("/")}>Student Event</div>
          <div className="absolute top-[26px] left-[55px] text-orange-300 text-2xl font-Nunito cursor-pointer" onClick={() => loadPage("/")}>Master</div>
          <form onSubmit={handleSearch}>
            <input type="text" placeholder="Search" className="pl-[50px] absolute top-[12px] left-[220px] w-[400px] h-[46px] border-2 border-gray-700 rounded-[10px] text-gray-600 font-Nunito focus:border-2 bg-white focus:border-gray-900 focus:ring-0 "/>
            <img src={'/search_icon2.png'} className="absolute top-[21px] left-[230px] w-[30px] h-[30px]"/>
          </form>
          <div className="absolute top-[5px] right-0 text-gray-500 text-xl font-Nunito">
            <div className="inline-block m-4 cursor-pointer" onClick={() => loadPage("/UploadEvent_page")}>Upload Event</div>
            <div className="inline-block m-4 cursor-pointer" onClick={() => loadPage("/SignIn_page")}>Sign In/Up</div>
              <div className="inline-block m-4 cursor-pointer" onClick={() => loadPage("/Cart_page")}>Cart</div>
            <div className="inline-block m-4 cursor-pointer" onClick={() => loadPage("/Notice_page")}>Notice</div>
            <div className="inline-block m-4 cursor-pointer" onClick={() => loadPage("/MyAccount_page")}>My Account</div>
          </div>
          <div className="absolute top-[70px] left-[50px] text-gray-900 text-xl font-Nunito">
            <div className="inline-flex box-border w-[100px] h-[30px] rounded-[10px] text-white items-center justify-center mx-[5px] font-Nunito cursor-pointer" onClick={() => loadPage("/")}>About Us</div>
            <div className="inline-flex box-border w-[100px] h-[30px] rounded-[10px] text-white items-center justify-center mx-[5px] font-Nunito cursor-pointer" onClick={() => loadPage("/Events_page")}>Events</div>
            <div className="inline-flex box-border w-[100px] h-[30px] rounded-[10px] text-white items-center justify-center mx-[5px] font-Nunito cursor-pointer" onClick={() => loadPage("/Support_page")}>Support</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Control_broad;