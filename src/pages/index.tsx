import Layout from "../components/Frontend/layout";
import body from "../components/Frontend/body";
import Banner from "../components/Frontend/banner";
// import Gallery from "../components/Frontend/gallery";
import { motion } from 'framer-motion'
import Body from "../components/Frontend/body";

const Home: React.FC = () => {
  return (
    <Layout>
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
      >
        <Banner />
      </motion.div>
      <Body />
    
    </Layout>
  );
};
export default Home;
