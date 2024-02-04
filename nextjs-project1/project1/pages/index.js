import { getFeaturedEvents } from "../dummy-data";
import EventList from "../componets/events/event-list";
function HomePage() {
  const FeaturedEvents = getFeaturedEvents();
  return (
    <div>
      <ul>
        <EventList items={FeaturedEvents} />
      </ul>
    </div>
  );
}

export default HomePage;
