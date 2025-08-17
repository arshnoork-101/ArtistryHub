// File: pages/search.js
// Advanced search page for artwork
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { useAtom } from 'jotai';
import { searchHistoryAtom } from '../store';

export default function AdvancedSearch() {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [searchHistory, setSearchHistory] = useAtom(searchHistoryAtom);

  const submitForm = (data) => {
    const query = {
      searchBy: data.searchBy,
      geoLocation: data.geoLocation || '',
      medium: data.medium || '',
      isOnView: data.isOnView,
      isHighlight: data.isHighlight,
      q: data.q
    };

    const queryString = new URLSearchParams(query).toString();

    // Save to search history atom
    setSearchHistory((current) => [...current, queryString]);

    // Redirect to artwork page
    router.push(`/artwork?${queryString}`);
  };

  return (
    <Form onSubmit={handleSubmit(submitForm)}>
      <Row>
        <Col md={6}>
          <Form.Group>
            <Form.Label>Search</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter term"
              {...register("q", { required: true })}
              className={errors.q ? "is-invalid" : ""}
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group>
            <Form.Label>Search By</Form.Label>
            <Form.Select {...register("searchBy")}>
              <option value="title">Title</option>
              <option value="tags">Tags</option>
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>

      <Row className="mt-3">
        <Col md={6}>
          <Form.Group>
            <Form.Label>Geo Location</Form.Label>
            <Form.Control
              type="text"
              placeholder="Example: Paris, Switzerland, New York..."
              {...register("geoLocation")}
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group>
            <Form.Label>Medium</Form.Label>
            <Form.Control
              type="text"
              placeholder="Example: Painting, Gold, Sculpture..."
              {...register("medium")}
            />
          </Form.Group>
        </Col>
      </Row>

      <Row className="mt-3">
        <Col md={6}>
          <Form.Group>
            <Form.Label>Is On View</Form.Label>
            <Form.Select {...register("isOnView")}>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group>
            <Form.Label>Is Highlight</Form.Label>
            <Form.Select {...register("isHighlight")}>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>

      <Button className="mt-4" type="submit">Search</Button>
    </Form>
  );
}
