import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class Dishdetail extends Component {
  constructor(props) {
    super(props);
  }

  renderComments = (comments) => {
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

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            <Card>
              <CardImg
                top
                src={this.props.dish.image}
                alt={this.props.dish.name}
              />
              <CardBody>
                <CardTitle>{this.props.dish.name}</CardTitle>
                <CardText>{this.props.dish.description}</CardText>
              </CardBody>
            </Card>
          </div>
          <div className="col-12 col-md-5 m-1">
            {this.renderComments(this.props.dish.comments)}
          </div>
        </div>
      </div>
    );
  }
}

export default Dishdetail;
