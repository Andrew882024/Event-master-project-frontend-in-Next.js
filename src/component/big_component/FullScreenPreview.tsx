"use client";
import { createPortal } from "react-dom";
import Preview_eventdetail_page from "./Preview_detail_page";
import { EventInfo } from "@/src/data/sampleData";

export function FullScreenPreview({
  event,
  onClose,
}: { event: EventInfo; onClose: () => void }) {
  // overlay fills the screen; content is your EventDetail
  const node = (
    <div className="fixed inset-0 z-50 bg-white overflow-y-auto">
      <Preview_eventdetail_page eventInfor={event} />
      <div className="absolute top-[10px] left-[10px] ">
        <div className="bg-gray-600 text-gray-50 w-[150px] h-[40px] rounded-[10px] flex items-center justify-center">Preview</div>
        <button className="rounded-[10px] bg-blue-500 hover:bg-blue-700 w-[150px] h-[40px] cursor-pointer" onClick={onClose}>
          Back to edit
        </button>
      </div>

      
    </div>
  );

  // render on <body> so it’s above everything
  return createPortal(node, document.body);
}