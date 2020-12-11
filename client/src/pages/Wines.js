import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

function Wines() {
  // Setting our component's initial state
  const [wines, setWines] = useState([])
  const [formObject, setFormObject] = useState({})

  // Load all books and store them with setBooks
  useEffect(() => {
    loadWines()
  }, [])

  // Loads all books and sets them to books
  function loadWines() {
    API.getWines()
      .then(res => 
        setWines(res.data)
      )
      .catch(err => console.log(err));
  };

  // Deletes a book from the database with a given id, then reloads books from the db
  function deleteWine(id) {
    API.deleteWine(id)
      .then(res => loadWines())
      .catch(err => console.log(err));
  }

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.wine_name && formObject.full_name) {
      API.saveWine({
        title: formObject.wine_name,
        author: formObject.full_name,
        synopsis: formObject.synopsis
      })
        .then(res => loadWines())
        .catch(err => console.log(err));
    }
  };

    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>What Wines Should I Drink?</h1>
            </Jumbotron>
            <form>
              <Input
                onChange={handleInputChange}
                name="wine_name"
                placeholder="Wine name (required)"
              />
              <Input
                onChange={handleInputChange}
                name="variety"
                placeholder="Variety (required)"
              />
              <TextArea
                onChange={handleInputChange}
                name="synopsis"
                placeholder="Synopsis (Optional)"
              />
              <FormBtn
                disabled={!(formObject.wine_name && formObject.variety)}
                onClick={handleFormSubmit}
              >
                Submit Wine
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Wines On My List</h1>
            </Jumbotron>
            {wines.length ? (
              <List>
                {wines.map(wine => (
                  <ListItem key={wines._id}>
                    <Link to={"/wines/" + wines._id}>
                      <strong>
                        {wines.wine_name} by {wines.full_name}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => deleteWine(wine._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }


export default Wines;
