import PageLayout from 'components/PageLayout';
import { getBlogBySlug, getAllBlogs } from 'lib/api';
import ErrorPage from 'next/error';
import { useRouter } from 'next/router';
import BlogHeader from 'components/BlogHeader';
import { Row, Col } from 'react-bootstrap'
import BlogContent from 'components/BlogContent';
import { urlFor } from 'lib/api';
import moment from 'moment';

const BlogDetail = ({blog}) => {
  const router = useRouter();

  if (!router.isFallback && !blog?.slug) {
    return <ErrorPage statusCode="404"/>
  }

  if (router.isFallback) {
    console.log('Loading fallback page')
    return (
      <PageLayout className="blog-detail-page">
        Loading...
      </PageLayout>
    )
  }
  return (
    <PageLayout className="blog-detail-page">
    <Row>
      <Col md={{ span: 10, offset: 1 }}>
        <BlogHeader
          title={blog.title}
          subtitle={blog.subtitle}
          coverImage={urlFor(blog.coverImage).height(600).url()}
          author={blog.author}
          date={moment(blog.date).format('LLL')}
        />
        <hr/>
        { blog.content &&
            <BlogContent content={blog.content} />
          }
      </Col>
    </Row>
    </PageLayout>
  )
}

export async function getStaticProps({params}) {
    const blog = await getBlogBySlug(params.slug);
    return {
      props: {blog}
    }
  } 
  
  export async function getStaticPaths() {
    const blogs = await getAllBlogs();
    const paths = blogs?.map(b => ({params: {slug: b.slug}}));
    return {
      paths,
      fallback: true
    }
  }

export default BlogDetail;