import {Button, Col, Form, Row} from "react-bootstrap";

let Search = ({validated, handleSubmit, search, changeValueOfSearch}) => {
    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
                <Form.Group as={Col} md="12" controlId="validationCustom01">
                    <Form.Control
                        required
                        type="text"
                        placeholder="Search..."
                        value={search}
                        onChange={(e) => changeValueOfSearch(e)}
                    />
                    <Form.Control.Feedback type="invalid">
                        Введите какое-нибудь значение
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Button type="submit">Search</Button>
        </Form>
    )
}

export default Search;