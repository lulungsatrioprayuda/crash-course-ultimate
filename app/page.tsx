import EventCard from "./components/EventCard";
import ExploreBtn from "./components/ExploreBtn";

const events = [
  {
    image: "/images/event1.png",
    title: "Event 1",
    slug: "event1",
    location: "Location 1",
    date: "Date 1",
    time: "Time 1",
  },
  {
    image: "/images/event2.png",
    title: "Event 2",
    slug: "event2",
    location: "Location 2",
    date: "Date 2",
    time: "Time 2",
  },
];
const Page = () => {
  return (
    <div>
      <section>
        <h1 className="text-center">
          Welcome to the Dev Hub <br />
          The ultimate Hub for developers!
        </h1>
        <p className="text-center mt-5">This is a simple page component.</p>
        <ExploreBtn />

        <div className="mt-20 space-y-7">
          <h3>Featured Events</h3>

          <ul className="events">
            {events.map((event) => (
              <li key={event.title}>
                <EventCard {...event} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Page;
