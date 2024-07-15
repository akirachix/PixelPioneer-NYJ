import './index.css';
import video from '/'

const Video = () => {
    return (
      <div className='page'>
        <h1 className="video">Videos</h1>
          <div id="embark">
        <h1  className='text' ><span>Embark on a multimedia journey with our newest videos and get to learn how WiFi works</span></h1>
        <p className="text2">Wifi the magic that lets you magic you surf the internet  from your couch,
       without having to get up and plug in a cord. It's like having a personal genie that grants you internet accessfrom anywhere in your home.</p>
       </div>
        <div className='pagetext'>
       <iframe  src="https://www.loom.com/embed/0b2b73df9edd4fca9f1efc4c3efcc6b8?sid=ba66d772-c08f-4fc4-8992-11845aa1acc5" 
       frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
       <iframe  src="https://www.loom.com/embed/abc2eb9c10da4fa4bbd755b62df9ddf4?sid=11f174a2-694c-4eb6-93e5-1265aef38520" 
       frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
       </div>
  
       

      </div>
    
       

     
     
        
    );
}

export default  Video;