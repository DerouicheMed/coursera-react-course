import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

const Comments = ({ comments }) => {
  return (
    <>
      <h4>Comments</h4>
      <ul class="list-unstyled">
        {comments.map((comment) => {
          return (
            <>
              <li>{comment.comment}</li>
              <li>
                -- {comment.author},{" "}
                {new Intl.DateTimeFormat("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "2-digit",
                }).format(new Date(Date.parse(comment.date)))}
              </li>
            </>
          );
        })}
      </ul>
    </>
  );
};

const DishDetail = ({ dish }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          <Card>
            <CardImg top src={dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
        </div>
        <div className="col-12 col-md-5 m-1">
          <Comments comments={dish.comments} />
        </div>
      </div>
    </div>
  );
};

export default DishDetail;
