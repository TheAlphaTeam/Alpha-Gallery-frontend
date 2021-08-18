import FeedDetail from '../components/feedDetail'
import Header from '../components/header';
import Footer from '../components/footer';
import Head from 'next/head';

export default function Feed(props){
    return(
      <div>  
        <Head>
        <title>Alpha Gallery - Feed</title>
        <link rel="icon" href="/icon.ico" />
      </Head>
          <Header/>
            <main>
                <FeedDetail/>
            </main>
            <Footer/>
        </div>
    );
  }