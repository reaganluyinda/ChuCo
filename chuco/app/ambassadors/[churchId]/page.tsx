import { useParams } from 'next/navigation';
import React from 'react'

type Ambassador = {
  id: number;
  name: string;
  role: string;
  experience: string;
  specialties: string[];
  bio: string;
  rating: number;
  responseTime: string;
  isOnline: boolean;
};
const Ambassadors = () => {
  const { churchId } = useParams();
  const id = Number(churchId);

  // mock church data
  const churches = [
    { id: 1, name: "Phaneroo Ministries", location: "Ntinda" },
    { id: 2, name: "New Life Fellowship", location: "Bukasa" },
    { id: 3, name: "Namirembe Cathedral", location: "Namirembe" },
    { id: 4, name: "Rubaga Cathedral", location: "Kampala" },
    { id: 5, name: "Canan Land", location: "Makerere" },
  ];

  //   Mock data for ambassadors
  const ambassadors: Record<number, Ambassador[]> = {
    1: [
      {
        id: 1,
        name: "Sarah Johnson",
        role: "Welcome Team Leader",
        experience: "5 years",
        specialties: ["New Members", "Families", "Community Events"],
        bio: "I love helping new families feel welcomed and find their place in our church community.",
        rating: 4.9,
        responseTime: "Usually responds within 2 hours",
        isOnline: true,
      },
      {
        id: 2,
        name: "Michael Ochen",
        role: "Youth Pastor",
        experience: "3 years",
        specialties: ["Young Adults", "Students", "Bible Study"],
        bio: "Passionate about connecting with young people and helping them grow in their faith journey.",
        rating: 4.8,
        responseTime: "Usually responds within 1 hour",
        isOnline: true,
      },
      {
        id: 3,
        name: "Emma Rodriguez",
        role: "Community Outreach",
        experience: "7 years",
        specialties: ["Community Service", "Seniors", "Support Groups"],
        bio: "Dedicated to serving our community and helping people find support and connection.",
        rating: 5.0,
        responseTime: "Usually responds within 4 hours",
        isOnline: false,
      },
      {
        id: 4,
        name: "David Thompson",
        role: "Pastoral Care",
        experience: "10 years",
        specialties: ["Counseling", "Prayer", "Life Transitions"],
        bio: "Here to provide spiritual guidance and support during life's important moments.",
        rating: 4.9,
        responseTime: "Usually responds within 3 hours",
        isOnline: true,
      },
    ],
    2: [
      {
        id: 5,
        name: "Jennifer Wilson",
        role: "Hospitality Coordinator",
        experience: "6 years",
        specialties: ["Newcomers", "Events", "Small Groups"],
        bio: "Love making everyone feel at home and connected to our church family.",
        rating: 4.7,
        responseTime: "Usually responds within 2 hours",
        isOnline: true,
      },
    ],
    3: [
      {
        id: 6,
        name: "Brian Kasumba",
        role: "Discipleship Leader",
        experience: "4 years",
        specialties: ["Bible Study", "New Believers", "Mentorship"],
        bio: "Passionate about helping new believers grow and stay rooted in the Word.",
        rating: 4.8,
        responseTime: "Usually responds within 1 hour",
        isOnline: true,
      },
      {
        id: 7,
        name: "Grace Namutebi",
        role: "Women's Ministry Coordinator",
        experience: "8 years",
        specialties: ["Women's Affairs", "Prayer Groups", "Community Outreach"],
        bio: "I love empowering women to connect with God and one another in sisterhood.",
        rating: 5.0,
        responseTime: "Usually responds within 3 hours",
        isOnline: false,
      },
      {
        id: 8,
        name: "Samuel Mbabazi",
        role: "Media & Tech Support",
        experience: "5 years",
        specialties: ["Media", "Live Streaming", "Technical Assistance"],
        bio: "I make sure the tech runs smoothly so the message can reach far and wide.",
        rating: 4.6,
        responseTime: "Usually responds within 30 minutes",
        isOnline: true,
      },
    ],
    4: [
      {
        id: 9,
        name: "Doreen Akello",
        role: "Children's Ministry Coordinator",
        experience: "6 years",
        specialties: ["Kids Ministry", "Sunday School", "Parent Engagement"],
        bio: "My heart is for the little ones — helping them know God's love in fun, simple ways.",
        rating: 4.9,
        responseTime: "Usually responds within 2 hours",
        isOnline: true,
      },
      {
        id: 10,
        name: "Jacob Tumusiime",
        role: "Men's Fellowship Leader",
        experience: "7 years",
        specialties: ["Men's Ministry", "Accountability Groups", "Counseling"],
        bio: "Helping men grow spiritually and lead in their homes and communities is my mission.",
        rating: 4.8,
        responseTime: "Usually responds within 1 hour",
        isOnline: false,
      },
      {
        id: 11,
        name: "Anita Kaggwa",
        role: "Music & Worship Leader",
        experience: "5 years",
        specialties: [
          "Praise & Worship",
          "Choir Coordination",
          "Creative Arts",
        ],
        bio: "Worship is a lifestyle, and I'm here to help you find your expression in Christ.",
        rating: 5.0,
        responseTime: "Usually responds within 45 minutes",
        isOnline: true,
      },
    ],
  };
  
  return (
    <div className='text-blue-500 text-3xl text-center'>Ambassadors</div>
  )
}

export default Ambassadors