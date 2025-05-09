
import { cn } from "@/lib/utils";

interface LeaderProps {
  id: number;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

const leaders: LeaderProps[] = [
  {
    id: 1,
    name: "Pastor John Davis",
    role: "Senior Pastor",
    bio: "Pastor John has been leading God's Vessels International Ministry for over 15 years. With a passion for biblical teaching and community outreach, he has helped grow the ministry into a beacon of hope for the community.",
    imageUrl: "https://source.unsplash.com/random/?pastor,man",
  },
  {
    id: 2,
    name: "Pastor Mary Johnson",
    role: "Associate Pastor",
    bio: "Pastor Mary oversees the women's ministry and counseling services. Her compassionate approach and deep biblical knowledge have helped countless individuals find healing and spiritual growth.",
    imageUrl: "https://source.unsplash.com/random/?pastor,woman",
  },
  {
    id: 3,
    name: "Deacon Michael Smith",
    role: "Worship Leader",
    bio: "Michael has been leading worship at God's Vessels for 10 years. His gift for music and heart for worship has transformed our services into powerful encounters with God.",
    imageUrl: "https://source.unsplash.com/random/?worship,leader",
  },
  {
    id: 4,
    name: "Sarah Thompson",
    role: "Youth Pastor",
    bio: "Sarah has a passion for helping young people discover their purpose in Christ. Her innovative programs and relatable teaching style have made our youth ministry thrive.",
    imageUrl: "https://source.unsplash.com/random/?youth,pastor",
  },
];

const LeaderCard = ({ leader }: { leader: LeaderProps }) => {
  return (
    <div className="bg-white dark:bg-ministry-dark/50 rounded-xl shadow-md overflow-hidden card-hover">
      <div className="aspect-square overflow-hidden">
        <img
          src={leader.imageUrl}
          alt={leader.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-1">{leader.name}</h3>
        <p className="text-ministry-purple dark:text-ministry-gold font-medium mb-4">
          {leader.role}
        </p>
        <p className="text-muted-foreground">{leader.bio}</p>
      </div>
    </div>
  );
};

const LeadershipSection = () => {
  return (
    <section className="section-padding">
      <div className="container-lg">
        <h2 className="section-title">Our Leadership Team</h2>
        <p className="text-center max-w-3xl mx-auto mb-12 text-lg">
          Meet the dedicated individuals who guide our ministry with wisdom,
          compassion, and a deep commitment to God's word.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((leader) => (
            <LeaderCard key={leader.id} leader={leader} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
