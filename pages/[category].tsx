import { useRouter } from 'next/dist/client/router'
import React, { useEffect } from 'react'
import ArrivalProduct from '../components/Arrival';
import Layout from '../components/Layouts';
import { Categories, CategoryInterface } from '../interfaces/category.interface';
import { ProductInterface, Products } from '../interfaces/product.interface';

interface CategoryDetailProps {
  filtered: ProductInterface[];
  categories: Array<CategoryInterface>;
}


function CategoryDetail(props: CategoryDetailProps) {
  const { filtered, categories } = props;
  return (
    <Layout pageTitle='HOME' category={categories}>
      <div className="arrival-product pt-45">
        <div className="row grid">
          {filtered.map(product => {
            return (
              <ArrivalProduct key={product.id} product={product} />
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default CategoryDetail

export async function getStaticPaths() {
  const products: ProductInterface[] = Products;

  const paths = products.map((product: ProductInterface) => ({
    params: {
      category: `${product.category}`
    }
  }))

  return { paths, fallback: false }
}

interface GetStaticProps {
  params: ProductInterface;
}

export async function getStaticProps(context: GetStaticProps) {
  const { category } = context.params;
  const products: ProductInterface[] = Products;
  const categories: CategoryInterface[] = Categories;
  const filtered: ProductInterface[] = [];

  products.forEach(element => {
    if (element.category == category) {
      filtered.push(element);
    }
  });

  return {
    props: {
      filtered,
      categories
    }
  }
}