import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br />
        <span className="green_teal_gradient text-center">
          AI-Powered Prompts
        </span>
      </h1>
      <p className="desc text-center">
        PromptHub is an open-source tool for discovering, creating, and sharing
        AI prompts.
      </p>
      <Feed />
    </section>
  );
};

export default Home;
