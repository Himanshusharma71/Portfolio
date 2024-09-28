import React from 'react';

export default function Portfolio() {
  const cardItem = [
    {
      id: 1,
      logo: '/mongodb.jpg',
      name: "MongoDB"
    },
    {
      id: 2,
      logo: '/express.png',
      name: "Express"
    },
    {
      id: 3,
      logo: '/reactjs.png',
      name: "ReactJS"
    },
    {
      id: 4,
      logo: '/node.png',
      name: "NodeJS"
    },
    {
      id: 5,
      logo: '/javascript.png',
      name: "JavaScript"
    },
    {
      id: 6,
      logo: '/html.png',
      name: "HTML"
    },
    {
      id: 7,
      logo: '/python.webp',
      name: "Python"
    },
    {
      id: 8,
      logo: '/Bootstrap_logo.svg.png',
      name: "Bootstrap"
    },
    {
      id: 9,
      logo: '/tailwind.png',
      name: "Tailwind"
    },
    {
      id: 10,
      logo: '/c.png',
      name: "C"
    },
    {
      id: 11,
      logo: '/cpp_logo.png',
      name: "C++"
    },
  ];

  return (
    <div name="Skills" className=" container max-w-screen-2xl mx-auto px-4 md:px-20 my-16 mt-10">
      <h1 className="text-3xl font-semibold">Skills</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 mt-5 ">
        {cardItem.map(({ id, logo, name }) => (
          <div key={id} className="border rounded-full shadow-lg p-4 hover:scale-110 duration-300">
            <img src={logo} alt={name} className="w-full h-32 object-contain rounded-full" />
            <div className="mt-4 text-center">
              <div className="text-lg font-bold">{name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
