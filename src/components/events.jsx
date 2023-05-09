import React from 'react'
import { Container, Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
// import author from '../assets/author.png'

import owner from '../asset/owner.png'

const events = [
    {
        judul: "Seminar IT Technology",
        date: "01-01-2023",
        desc: "Generate Lorem Ipsum placeholder text for use in your graphic",
        Image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.learn2groomdogs.com%2Fwp-content%2Fuploads%2F2016%2F09%2Fseminar.jpg&f=1&nofb=1&ipt=2b1d01e2ef89f0d78490bb6b12652dd354d8050cec3483b81dfa7f0158b922cc&ipo=images"
    }, 
    {
        judul: "Seminar musik",
        date: "11-04-2023",
        desc: "Generate Lorem Ipsum placeholder text for use in your graphic",
        Image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.languages.work%2Fwp-content%2Fuploads%2F2018%2F02%2Fseminars.png&f=1&nofb=1&ipt=b89df350a32e195b76d20623fe694e32c4953cb6eef1b8f3bf57eba8cedc2f9e&ipo=images"
    }, 
    {
        judul: "Seminar makanan",
        date: "10-04-2023",
        desc: "Generate Lorem Ipsum placeholder text for use in your graphic",
        Image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.languages.work%2Fwp-content%2Fuploads%2F2018%2F02%2Fseminars.png&f=1&nofb=1&ipt=b89df350a32e195b76d20623fe694e32c4953cb6eef1b8f3bf57eba8cedc2f9e&ipo=images"
    }, 
    {
        judul: "Seminar game",
        date: "06-01-2022",
        desc: "Generate Lorem Ipsum placeholder text for use in your graphic",
        Image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.languages.work%2Fwp-content%2Fuploads%2F2018%2F02%2Fseminars.png&f=1&nofb=1&ipt=b89df350a32e195b76d20623fe694e32c4953cb6eef1b8f3bf57eba8cedc2f9e&ipo=images"
    }, 
    {
        judul: "seminar berbuka",
        date: "12-02-2020",
        desc: "Generate Lorem Ipsum placeholder text for use in your graphic",
        Image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.languages.work%2Fwp-content%2Fuploads%2F2018%2F02%2Fseminars.png&f=1&nofb=1&ipt=b89df350a32e195b76d20623fe694e32c4953cb6eef1b8f3bf57eba8cedc2f9e&ipo=images"
    }, 
    {
        judul: "Seminar vape",
        date: "12-12-2022",
        desc: "Generate Lorem Ipsum placeholder text for use in your graphic",
        Image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.languages.work%2Fwp-content%2Fuploads%2F2018%2F02%2Fseminars.png&f=1&nofb=1&ipt=b89df350a32e195b76d20623fe694e32c4953cb6eef1b8f3bf57eba8cedc2f9e&ipo=images"
    }
]

const sortedEvents = events.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB - dateA; // sort in descending order (newest first)
  });

const Events = () => {
  return (
    <div>
      <Container>
        <h2 className="my-5 newst fs-3">Newest</h2>

        <div className="container d-flex justify-items-center align-items-center"> 
            <div className="row d-flex justify-items-center">
                
                {sortedEvents.map((event, index) => (
                    <div className="col-md-6 mb-5 col-sm col-lg-4">
                     <Card style={{ width: '18rem' }} className="m-5 m-auto events">
                     <Card.Img variant="top" src={event.Image} />
                     <Card.Body>
                         <Card.Title>{event.judul}</Card.Title>
                         <time className='mb-5'>{event.date}</time>   
                         <Card.Text className='mt-2'>
                         {event.desc}
                         </Card.Text>
                         {/* <div className="text-center my-4">
                            <Button variant="dark" className="shining-button" type='submit'>
                                read more   
                            </Button>
                        </div>                       */}
                        <h5 className="mb-3">Rp 20.000</h5>
                        <div className="row pt-2 line">
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col-md-4">
                                        <img src={owner} alt="author icon" />
                                    </div>
                                    <div className="col-md-8">
                                        <p>Jayapura</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                     </Card.Body>
                 </Card>
                </div>
                ))}
                <div className="text-center my-4">
                    <Link to='/events'>
                        <Button variant="dark" className="shining-button" type='submit'>
                            selengkapnya
                        </Button>
                    </Link>
                </div>
            </div>
        </div>    
      </Container>
    </div>
  )
}

export default Events
