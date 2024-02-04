import EventContent from "@/componets/event-detail/event-content";
import EventLogistics from "@/componets/event-detail/event-logistics";
import EventSummary from "@/componets/event-detail/event-summary";
import { getEventById } from "@/dummy-data";
import { useRouter } from "next/router";
import { Fragment } from "react";
import ErrorAlert from "@/componets/ui/error-alert";

function EventDetailPage() {
  const router = useRouter();
  const eventId = router.query.eventId;
  const event = getEventById(eventId);

  if (!event) {
    return (
      <ErrorAlert>
        <p>No event found!</p>
      </ErrorAlert>
    );
  }

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        data={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p> 
      </EventContent> 
    </Fragment> 
  );
}
export default EventDetailPage;
