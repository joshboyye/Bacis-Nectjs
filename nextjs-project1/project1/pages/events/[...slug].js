import { getFilteredEvents } from "@/dummy-data";
import { useRouter } from "next/router";
import EventList from "@/componets/events/event-list";
import { Fragment } from "react";

import ResultsTitle from "@/componets/events/results-title";
import Button from "@/componets/ui/button";
import ErrorAlert from "@/componets/ui/error-alert";

function FiltererdEventsPage() {
  const router = useRouter();

  const filterData = router.query.slug;

  console.log(filterData);

  if (!filterData) {
    return <p className="center">Loadding...</p>;
  }

  const filtererdYear = filterData[0];
  const filtererdMonth = filterData[1];

  const numYear = +filtererdYear;
  const numMonth = +filtererdMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>Invaild filter. Please adjust your values!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }
  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>Invaild filter. Please adjust your values!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  const date = new Date(numYear, numMonth - 1);

  return (
    <Fragment>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </Fragment>
  );
}
export default FiltererdEventsPage;
