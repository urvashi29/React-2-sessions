import React, {memo} from "react";

const EventsCard = memo(({ events }) => {
  console.log("events card!");
  const eventList = events.map((event) => <p>{event.title}</p>);
  return <div>{eventList}</div>;
});

export default EventsCard;
