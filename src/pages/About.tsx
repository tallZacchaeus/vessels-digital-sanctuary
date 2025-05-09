
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import MissionSection from "@/components/about/MissionSection";
import LeadershipSection from "@/components/about/LeadershipSection";
import HistorySection from "@/components/about/HistorySection";

const About = () => {
  return (
    <Layout>
      <PageHeader 
        title="About Our Ministry" 
        subtitle="Learn about our history, vision, and the people who make God's Vessels International Ministry a beacon of hope and faith."
        backgroundImage="https://source.unsplash.com/photo-1493397212122-2b85dda8106b"
      />
      <MissionSection />
      <LeadershipSection />
      <HistorySection />
    </Layout>
  );
};

export default About;
