import React from 'react'

const FindChurch = () => {
    const churches = [
    {
      id: 1,
      name: "Phaneroo Ministries",
      denomination: "Born Again",
      location: "Ntinda",
      address: "Plot 6 Kyambogo Drive Ntinda",
      memberCount: "1000+",
      description:
        "A dynamic, life transforming and generational impacting ministry with a vision too transform nations with the word of God",
      ambassadorCount: 10,
      image: "/church1.jpg",
    },
    {
      id: 2,
      name: "New Life Fellowship",
      denomination: "Pentecostal",
      location: "Bukasa",
      address: "Bukasa Road",
      memberCount: "100-200",
      description:
        "Dynamic worship and a heart for spiritual growth and community",
      ambassadorCount: 3,
      image: "/church1.jpg",
    },
    {
      id: 3,
      name: "Namirembe Cathedral",
      denomination: "Anglican",
      location: "Namirembe",
      address: "Cathedral Hill Road",
      memberCount: "500-1000",
      description:
        "A welcoming community focused on grace, love and service to others",
      ambassadorCount: 6,
      image: "/church1.jpg",
    },
    {
      id: 4,
      name: "Rubaga Cathedral",
      denomination: "Catholic",
      location: "Kampala",
      address: "Rubaga Road",
      memberCount: "1000+",
      description:
        "Historic Catholic parish serving the community for over 100 years",
      ambassadorCount: 8,
      image: "/church1.jpg",
    },
    {
      id: 5,
      name: "Canan Land",
      denomination: "Born Again",
      location: "Makerere",
      address: "Makerere, Kikoni",
      memberCount: "200-500",
      description:
        "Engage in deliverance and spiritual warfare against demonic agents",
      ambassadorCount: 4,
      image: "/church1.jpg",
    },
  ];

  return (
    <div>
        <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-cyan-950 mb-4">
          Find Your Church
        </h1>
        <p className="text-gray-600 text-lg mb-8">
          Discover Welcoming Church Communities in your area
        </p>
      </div>
    </div>
  )
}

export default FindChurch