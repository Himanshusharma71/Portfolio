import React from 'react';

export default function Portfolio() {
  const cardItems = [
    {
      id: 1,
      logo: '/mongodb.jpg',
      name: 'MongoDB',
      description: 'Leveraged MongoDB to architect and manage the robust database for Smarbhartiya, enabling efficient storage, retrieval, and scalability of user data and content. Implemented schema designs that support dynamic data structures, ensuring seamless integration with the React frontend. Utilized MongoDB\'s aggregation',
    },
    {
      id: 2,
      logo: '/express.png',
      name: 'Express',
      description: 'Implemented Express.js to establish a scalable and efficient server infrastructure for Smarbhartiya, facilitating seamless routing and API management. Designed and structured RESTful APIs to handle client requests, manage data flow between the frontend and the MongoDB database, and ensure secure authentication processes.',
    },
    {
      id: 3,
      logo: '/reactjs.png',
      name: 'ReactJS',
      description: 'I have developed several projects using React, including my SmartBhartiya hotel management website with room bookings and user authentication, a Zerodha Clone for stock trading functionalities, and a Zoom Clone that features video conferencing capabilities. Additionally, my Portfolio Website showcases my skills and projects.  ',
    },
    {
      id: 4,
      logo: '/node.png',
      name: 'NodeJS',
      description: 'For instance, in my hotel management website SmartBhartiya, I employed Node.js to build the backend, managing user authentication, room bookings, and data retrieval from the database. The Express.js framework, built on top of Node.js, facilitated the creation of RESTful APIs, allowing seamless communication between the client and server in my hotel management website. SmartBhartiya, I employed Node.js to build the backend, managing user authentication, room bookings, and data retrieval from the database.',
    },
    {
      id: 5,
      logo: '/java.png',
      name: 'Java',
      description: ' I have extensively used Java to solve a wide array of programming challenges and data structure and algorithm (DSA) problems. My focus has been on mastering key concepts such as sorting and searching algorithms, which are fundamental for efficient data manipulation and retrieval.By applying various sorting algorithms like Quick Sort, Merge Sort, and Bubble Sort, I have gained a deep understanding of their time and space complexities. Additionally,',
    },
    {
      id: 6,
      logo: '/javascript.png',
      name: 'JavaScript',
      description: 'I have developed a variety of engaging projects using JavaScript, including a To-Do List for task management with local storage, a Simon Says Game that challenges players to repeat color sequences, and a robust Form Validation system that checks user inputs for correctness. Additionally, I created Moving Image Scroll Bars that reveal hidden content dynamically as users scroll, along with many other projects that showcase my skills in creating interactive web applications.',
    },
    {
      id: 7,
      logo: '/html.png',
      name: 'HTML',
      description: 'I have created various projects using HTML and CSS, including my hotel management website SmartBhartiya, which features a user-friendly interface for exploring hotels and managing bookings. I also developed a Zerodha Clone, replicating essential stock trading functionalities with a responsive design, and Clones that mirror key features of the video conferencing platform. My portfolio Website showcases my work and projects, highlighting my development journey. Projects that emphasize layout design responsiveness, further enhancing my front-end development skills.',
    },
    {
      id: 8,
      logo: '/python.webp',
      name: 'Python',
      description: 'I have developed several impactful projects using Python, showcasing my ability to apply various libraries and frameworks to solve complex problems. One of my key projects is a Stock Market Prediction System, which leverages libraries like Pandas, NumPy, Matplotlib, and Scikit-learn to analyze historical stock data and implement machine learning algorithms for predictive analysis. Additionally, I created a Real-Time Face Recognition System that utilizes the YOLO (You Only Look Once) algorithm for accurate and efficient face detection and recognition. ',
    },
  ];

  return (
    <div
      name="Projects"
      className="container max-w-screen-2xl mx-auto px-4 md:px-20 my-16 mt-10"
    >
      <h1 className="text-2xl font-semibold mb-2">Portfolio Projects</h1>
      <span className="underline font-semibold mb-2">Featured Projects</span>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
        {cardItems.map(({ id, logo, name, description }) => (
          <div
            key={id}
            className="border rounded-lg shadow-lg p-4 hover:scale-110 transition-transform duration-300"
          >
            <img
              src={logo}
              alt={`${name} logo`}
              className="w-full h-32 object-contain"
            />
            <div className="mt-4">
              <h2 className="text-lg font-bold">{name}</h2>
              <p className="text-gray-600 mt-2">{description}</p>
              <div className="flex mt-4 space-x-4">
                <a href="https://www.linkedin.com/in/himanshu-sharma-a73b36208/recent-activity/all/">

                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                  Video
                </button>
                </a>
                <a
                  href="https://github.com/Himanshusharma71?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors">
                    Source Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
