
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const NotFound = () => {
  return (
    <Layout>
      <div className="section-padding flex flex-col items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <h1 className="text-6xl md:text-8xl font-bold text-ministry-purple dark:text-ministry-gold mb-4">
            404
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Page Not Found
          </h2>
          <p className="text-muted-foreground mb-8 max-w-md">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Link
            to="/"
            className="btn-primary inline-flex"
          >
            Return to Homepage
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
