"use client";
import { useState } from "react";
import Event_box_big_home from "../Event_box_big_home";
import Event_box_small_home from "../Event_box_small_home";
import { useQuery } from "@tanstack/react-query";
import { EventInfoFromDB, fetchEventInfoFromDB } from "@/src/data/dataFromDB";

const Event_box_cluster_home = () => {

  const {data, error,isLoading, isError} = useQuery<EventInfoFromDB[]>({
    queryKey: ['EventInfoFromDB'],
    queryFn: fetchEventInfoFromDB,
    staleTime: 60 * 60 * 1000, // 1 hour
    refetchInterval: 60 * 60 * 1000, // 1 hour
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {(error as Error).message}</div>;
  }

  console.log(data);

  const upcomingEvents = data?.filter(event => new Date(event.event_start_date_and_time) >= new Date()).reverse();
  const historyEvents = data?.filter(event => new Date(event.event_start_date_and_time) < new Date());

  return(
    <div className="mx-auto box-border w-[1233px] h-[550px]">
      <div className="absolute">
        <div className=" h-full w-full flex items-start justify-center overflow-hidden">
          <Event_box_big_home InPageEventInfor={upcomingEvents?.[0]}/>
          <div className="absolute left-[830px] top-[0px]">
            <Event_box_small_home InPageEventInfor={upcomingEvents?.[1]}/>
          </div>
          <div className="absolute left-[830px] top-[270px]">
            <Event_box_small_home InPageEventInfor={upcomingEvents?.[2]}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Event_box_cluster_home;