import ArrivalProduct from '../components/Arrival';
import Layout from '../components/Layouts';
import { Categories, CategoryInterface } from '../interfaces/category.interface';
import { ProductInterface, Products } from '../interfaces/product.interface';

interface HomeProps {
  products: Array<ProductInterface>;
  categories: Array<CategoryInterface>;
}

const Home = (props: HomeProps) => {
  const { products, categories } = props;
  return (
    <Layout pageTitle='HOME' category={categories}>
      <div className="arrival-product pt-45">
        <div className="row grid">
          {products.map(product => {
            return (
              <ArrivalProduct key={product.id} product={product} />
            )
          })}
        </div>
      </div>
    </Layout>
  );
}

export default Home

export async function getStaticProps() {
  const products: ProductInterface[] = Products;
  const categories: CategoryInterface[] = Categories;
  return {
    props: {
      products,
      categories
    }
  }
}