import Eventdetail_page from "../page";
import { EventInfo, EventInfoList } from "../../../src/data/sampleData";

const Eventdetail_for_each_one = async ({ params }: { params: Promise<{ eventId: string }> }) => {
  const wating = await params;
  const eventId = (await params).eventId;
  const index: number = EventInfoList.findIndex(event => event.eventId === eventId);
  if (index === -1) {
    return <div>Event not found</div>;
  }
  return <Eventdetail_page eventInfor={EventInfoList[index]}/>;
};

export default Eventdetail_for_each_one;