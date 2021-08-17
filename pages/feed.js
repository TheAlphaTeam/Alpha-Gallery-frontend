import FeedDetail from '../components/feedDetail'
import Header from '../components/header';
import Footer from '../components/footer';


export default function Feed(props){
    return(
      <div>  
          <Header/>
            <main>
                <FeedDetail/>
            </main>
            <Footer/>
        </div>
    );
  }