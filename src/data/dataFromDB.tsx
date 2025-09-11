
export type EventInfoFromDB ={
    "event_provider_id": number,
    "id": number,
    "event_title": string,
    "showed_event_provider_name": string,
    "event_duration_in_minutes": number,
    "event_imageUrl": string,
    "event_total_ticket_number": number,
    "created_at": Date,
    "event_type": string,
    "event_provider_name": string,
    "event_start_date_and_time": Date,
    "event_location": string,
    "event_description": string,
    "event_remaining_ticket_number": number,
    "updated_at": Date,
  }

  export const EventInfoFromDBDefault = {
    "event_provider_id": 99999999,
    "id": 99999999,
    "event_title": "sample event title",
    "showed_event_provider_name": "sample showed provider name",
    "event_duration_in_minutes": 120,
    "event_imageUrl": "event-master-project-image/2025/09/106cec61bac568433faf5d19793e6652c1image/png",
    "event_total_ticket_number": 300,
    "created_at": new Date("2025-09-10T20:55:59"),
    "event_type": "Type",
    "event_provider_name": "sample provider name",
    "event_start_date_and_time": new Date("2025-09-10T20:55:59"),
    "event_location": "sample location",
    "event_description": "sample description",
    "event_remaining_ticket_number": 250,
    "updated_at": new Date("2025-09-10T20:55:59")
  }

  export async function fetchEventInfoFromDB(): Promise<EventInfoFromDB[]> {
    const res = await fetch('http://localhost:8000/a_page_of_events');
    const data = await res.json();

    return data.map((item: any) => ({
    ...item,
    created_at: new Date(item.created_at),
    updated_at: new Date(item.updated_at),
    event_start_date_and_time: new Date(item.event_start_date_and_time),
  }));
}