const Home = () => {
  return (
    <section className="min-h-[80vh] flex items-center justify-center flex-col gap-4 text-center p-6">
      <h1 className="text-4xl font-bold">Hi, I’m <span className="text-blue-600">Bahrom</span></h1>
      <p className="max-w-xl text-lg">I’m a Frontend Developer specializing in React, Tailwind, Ant Design and modern UI/UX practices. Let’s build amazing apps together.</p>
      <a href="/projects" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">View Projects</a>
    </section>
  );
};

export default Home;