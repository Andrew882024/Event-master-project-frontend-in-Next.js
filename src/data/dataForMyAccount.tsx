export type UserInfoMyAccount = {
  id: number;
  user_name: string;
  email: string;
  created_at: Date;
  roles: string[];
}

export type UserBookedEventsInfoMyAccount = {
  booking_id: number;
  event_description: string;
  event_id: number;
  event_image: string;
  event_lasting_time: number;
  event_location: string;
  event_provider_id: number;
  event_start_date_and_time: Date;
  event_title: string;
  event_type: string;
  number_of_tickets_booked: number;
  ticket_code: string;
}[]

export type EventsThatProvidedByTheUserMyAccount = {
  event_description: string;
  event_id: number;
  event_image: string;
  event_lasting_time: number;
  event_location: string;
  event_provider_id: number;
  event_start_date_and_time: Date;
  event_title: string;
  event_type: string;
  event_total_ticket_number: number;
  event_remaining_ticket_number: number;
}[]