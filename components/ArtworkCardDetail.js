import useSWR from "swr";
import React, { useState, useEffect } from "react";
import { Card, Spinner, Button } from "react-bootstrap";
import Error from "next/error";
import { useAtom } from "jotai";
import { favouritesAtom } from "../store";

export default function ArtworkCardDetail({ objectID }) {
  const { data, error } = useSWR(
    objectID
      ? `https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`
      : null
  );

  const [favouritesList, setFavouritesList] = useAtom(favouritesAtom);
  const [showAdded, setShowAdded] = useState(false);

  useEffect(() => {
    const isFav = favouritesList.includes(objectID);
    setShowAdded(isFav);
    console.log("Effect ran: ");
    console.log("Favourites List:", favouritesList);
    console.log("ObjectID:", objectID);
    console.log("Is Favourite:", isFav);
  }, [favouritesList, objectID]);

  function favouritesClicked() {
    if (favouritesList.includes(objectID)) {
      const newList = favouritesList.filter((fav) => fav !== objectID);
      setFavouritesList(newList);
      setShowAdded(false);
      console.log(`Removed ${objectID} from favourites`);
    } else {
      const newList = [...favouritesList, objectID];
      setFavouritesList(newList);
      setShowAdded(true);
      console.log(`Added ${objectID} to favourites`);
    }

    // Debugging for error tracking
    console.log("Updated Favourites List:", favouritesList);
  }

  if (error) return <Error statusCode={404} />;

  if (!data)
    return (
      <div className="text-center my-5">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );

  return (
    <Card>
      {data.primaryImage && <Card.Img variant="top" src={data.primaryImage} />}
      <Card.Body>
        <Card.Title>{data.title || "N/A"}</Card.Title>
        <Card.Text>
          <strong>Date:</strong> {data.objectDate || "N/A"}
          <br />
          <strong>Classification:</strong> {data.classification || "N/A"}
          <br />
          <strong>Medium:</strong> {data.medium || "N/A"}
          <br />
          <br />
          <strong>Artist:</strong> {data.artistDisplayName || "N/A"}{" "}
          {data.artistWikidata_URL && (
            <a href={data.artistWikidata_URL} target="_blank" rel="noreferrer">
              wiki
            </a>
          )}
          <br />
          <strong>Credit Line:</strong> {data.creditLine || "N/A"}
          <br />
          <strong>Dimensions:</strong> {data.dimensions || "N/A"}
          <br />
          <Button
            variant={showAdded ? "primary" : "outline-primary"}
            onClick={favouritesClicked}
          >
            {showAdded ? "+ Favourite (added)" : "+ Favourite"}
          </Button>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
