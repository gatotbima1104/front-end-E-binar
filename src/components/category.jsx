import React from "react";
import { Container, Card } from "react-bootstrap";
import category1 from "../asset/category1.png";
import category2 from "../asset/category2.png";
import category3 from "../asset/category3.png";
import category4 from "../asset/category4.png";

const Kategories = [
  {
    kategori: "Social",
    Image: category1,
  },
  {
    kategori: "Business",
    Image: category2,
  },
  {
    kategori: "Lifesytle",
    Image: category3,
  },
  {
    kategori: "Tech",
    Image: category4,
  },
  // {
  //   kategori: "Tech",
  //   Image: category4,
  // },
];

const Cards = () => {
  return (
    <div>
      <Container>
        <h2 className="my-5 text-category fs-3">Kategori</h2>
        <div className="d-flex align-items-center">
          <div className="row">
            {Kategories.map((category, index) => (
              <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                <Card
                  style={{ width: "16rem" }}
                  className="mb-4 m-auto card-category"
                >
                  <Card.Img variant="top" src={category.Image} />
                  <Card.Body>
                    <Card.Title className="text-category text-grey">
                      {category.kategori}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Cards;
