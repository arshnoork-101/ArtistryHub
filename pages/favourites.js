// pages/favourites.js
// Favourites page to display user's favourite artworks
import { useEffect, useState } from 'react';
import { useAtom } from 'jotai';
import { favouritesAtom } from '../store';
import { Row, Col, Card } from 'react-bootstrap';
import ArtworkCard from '../components/ArtworkCard';

export default function Favourites() {
  const [favouritesList] = useAtom(favouritesAtom);

  return (
    <>
      {favouritesList.length === 0 ? (
        <Card>
          <Card.Body>
             <center>
            <h2>FAVOURITES</h2>
            <br />
          </center>
            <h4>Nothing Here</h4>
            <p>Try adding some new artwork to the list by hitting favourites</p>
          </Card.Body>
        </Card>
      ) : (
        <Row className="gy-4">
          <center>
            <h2>FAVOURITES</h2>
            <br />
          </center>
          {favouritesList.map((objectID) => (
            <Col lg={3} key={objectID}>
              <ArtworkCard objectID={objectID} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
}
