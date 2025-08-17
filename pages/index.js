import { Image } from "react-bootstrap";

export default function Home() {
  return (
    <>
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/3/30/Metropolitan_Museum_of_Art_%28The_Met%29_-_Central_Park%2C_NYC.jpg"
        fluid
        rounded
        alt="Metropolitan_Museum_of_Art"
        className="mb-3"
        style={{ maxWidth: "100%", height: "auto", objectFit: "contain" }}
      />
      <br />
      <br />
      <h1>Metropolitan Museum of Art</h1>
      <p>
        A view of the grand facade of The Metropolitan Museum of Art,
        overlooking Central Park. This image highlights the museum’s iconic
        Beaux-Arts architecture and its connection to New York City’s cultural
        and natural landscape.
      </p>
      <p>
        For more information, you may visit the{" "} 
        <a
          href="https://en.wikipedia.org/wiki/Metropolitan_Museum_of_Art"
          target="_blank"
          rel="noreferrer"
        >
          Wikipedia 
        </a>
        .
      </p>
    </>
  );
}
