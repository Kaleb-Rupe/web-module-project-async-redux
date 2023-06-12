import React from "react";
import { connect } from "react-redux";
import { getCoinPrice } from "../actions";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap";
import "./bitcoinStyle.css";

const BitcoinPrice = (props) => {
  if (props.error) {
    return <h2>We got an error: {error}</h2>;
  }

  if (props.isFetching) {
    return <h2>Fetching coin for ya!</h2>;
  }

  return (
    <>
      <Card
        color="light"
        style={{
          width: "18rem",
        }}
        className="wrapper-container"
      >
        <CardBody>
          <CardTitle tag="h5">
            Price of Bitcoin in {props.bpi.USD.code}.
          </CardTitle>
          <CardText>Current Price: {props.bpi.USD.rate_float}</CardText>
          <Button onClick={() => props.getCoinPrice()}>
            Get current price
          </Button>
        </CardBody>
      </Card>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    bpi: state.bpi,
    isFetching: state.isFetching,
    error: state.error,
  };
};

export default connect(mapStateToProps, { getCoinPrice })(BitcoinPrice);
