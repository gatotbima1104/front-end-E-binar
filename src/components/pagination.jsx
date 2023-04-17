import React from "react";

const Page = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = items.slice(startIndex, endIndex);

  <Pagination
    pageCount={totalPages}
    currentPage={currentPage}
    onPageChange={handlePageChange}
  />;

  return (
    <div>
      {currentItems.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}

    <div className="container d-flex justify-items-center align-items-center mt-5">
              <div className="row d-flex justify-items-center">
                {events.map((event, index) => (
                  <div className="col-md-6 mb-5 col-sm col-lg-4">
                    <Card style={{ width: "18rem" }} className="m-5 m-auto events">
                      <Card.Img variant="top" src={event.Image} />
                      <Card.Body>
                        <Card.Title>{event.judul}</Card.Title>
                        <Card.Text className="border">{event.desc}</Card.Text>
                        <time className="border">{event.date}</time>
                        <div className="text-center my-4">
                          <Button
                            variant="dark"
                            className="shining-button"
                            type="submit"
                          >
                            read more
                          </Button>
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                ))}
              </div>
        </div>
  );
};

export default Page;
