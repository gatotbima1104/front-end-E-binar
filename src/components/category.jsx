import React from 'react'
import { Container, Card } from 'react-bootstrap'
import category1 from '../asset/category1.png'
import category2 from '../asset/category2.png'
import category3 from '../asset/category3.png'
import category4 from '../asset/category4.png'


const Kategories = [
  {
    kategori: "Social",
    Image: category1
  },
  {
    kategori: "Business",
    Image: category2
  },
  {
    kategori: "Lifesytle",
    Image: category3
  },
  {
    kategori: "Tech",
    Image: category4
  },
  // {
  //   kategori: "vape",
  //   Image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.xV51K6_FOM_d2gYNThUl6gHaE8%26pid%3DApi&f=1&ipt=a8748540563312cb2304328b2b01193dcd349d05f49619219b071a3c5cf6f736&ipo=images"
  // }
]

const Cards = () => {
  return (
    <div>
      <Container>
        <h2 className="my-5">Kategori</h2>
        <div className="container d-flex justify-content-center align-items-center"> 
            <div className="row">
               {Kategories.map((category, index) => (
                <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                  <Card style={{ width: '13rem' }} className='m-auto mb-4 card-container'>
                  <Card.Img variant="top" src={category.Image} />
                  <Card.Body>
                      <Card.Title>{category.kategori}</Card.Title>
                  </Card.Body>
                  </Card>
                </div>      
               ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Cards

