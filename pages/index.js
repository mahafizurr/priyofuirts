// pages/index.js

import CommitMent from "@/components/CommitMent";
import ProductList from "@/components/ProductList";

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <ProductList />
      <CommitMent />
    </div>
  );
};

export default Home;
