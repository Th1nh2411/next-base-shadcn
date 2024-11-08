import Layout from '@/base/components/layout/Layout';
import SEOHead from '@/base/components/seo';
import Feature from '@/base/components/template/Feature';
import Hero from '@/base/components/template/Hero';
import Pricing from '@/base/components/template/Pricing';

export default function Home() {
  return (
    <>
      <SEOHead title="My page example" />
      <Layout>
        <Hero />
        <Feature />
        <Pricing />
      </Layout>
    </>
  );
}
