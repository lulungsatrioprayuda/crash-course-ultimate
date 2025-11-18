import ExploreBtn from "./components/ExploreBtn";

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
            <li></li>
            <li></li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Page;
