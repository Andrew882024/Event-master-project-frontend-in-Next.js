"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchEventInfoFromDB, type EventInfoFromDB } from "@/src/data/dataFromDB";
import Eventdetail_page from "../page"; // wherever your detail UI lives
import { use } from "react";

export default function Eventdetail_for_each_one({ params }: { params: Promise<{ eventId: string }> }) {
  const { data = [], isLoading, isError, error } = useQuery<EventInfoFromDB[]>({
    queryKey: ["events"],
    queryFn: fetchEventInfoFromDB,
    staleTime: 60 * 60 * 1000,       // 1h fresh
    // refetchInterval: 60 * 60 * 1000, // optional polling
  });

  if (isLoading && data.length === 0) return <div>Loading…</div>;
  if (isError) return <div>Error: {(error as Error).message}</div>;

  const { eventId } = use(params);

  // id might be number in DB, compare as string to be safe
  const event = data.find(e => String(e.id) === eventId);
  if (!event) return <div>Event not found</div>;

  return <Eventdetail_page eventInfor={event} />;
}

//export default Eventdetail_for_each_one;