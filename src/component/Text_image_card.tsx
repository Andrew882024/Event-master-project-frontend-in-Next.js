const Text_image_card = () => {
  return(
    <div className="mx-auto my-10 box-border rounded-2xl w-[1100px] h-[450px] bg-white border-[1px] border-gray-300 ">
      {/* <div className="relative top-10 left-10 m-0 border-10 border-orange-600 inline-flex w-[500px] h-[400px]">it is a test</div>
      <div className="relative top-10 right-10  m-0 border-10 border-orange-600 inline-flex w-[500px] h-[400px]" style={{backgroundImage:"url('/src/assets/UCSD_2.webp')", backgroundSize: 'cover'}}>
      </div> */}
      <div className="h-full w-full flex items-start justify-center gap-6 p-6 overflow-hidden">
        <div className=" w-[500px] h-[400px] flex items-center justify-center shrink-0 text-black font-Nunito">
          it is a test
        </div>

        <div
          className="box-border w-[500px] h-[400px] bg-center bg-cover shrink-0
             rounded-2xl  shadow-lg shadow-black/20
             overflow-hidden bg-clip-padding"
          style={{ backgroundImage: `url('/UCSD_2.webp')` }}
        />
      </div>
    </div>
  );
}

export default Text_image_card;