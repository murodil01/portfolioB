const Services = () => {
  const services = [
    { title: "Web Design", desc: "Responsive and modern web design." },
    { title: "Frontend Development", desc: "React, Tailwind, Ant Design." },
    { title: "Deployment", desc: "Deploying sites to Vercel, Netlify or custom domains." },
  ];

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Services</h2>
      <div className="space-y-4">
        {services.map((srv, index) => (
          <div key={index} className="border p-4 rounded bg-gray-50 dark:bg-slate-700">
            <h3 className="text-xl font-semibold mb-1">{srv.title}</h3>
            <p>{srv.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;