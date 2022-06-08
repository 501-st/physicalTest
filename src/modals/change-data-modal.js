import {Button, Col, Form, Modal, Row} from "react-bootstrap";
import {useState} from "react";

let ChangeDataModal = ({showModal, setShowModal, state, setState, reserveState, setReserveState}) => {

    const [localState, setLocalState] = useState({
        id: state[showModal.index].id,
        email: state[showModal.index].email,
        first_name: state[showModal.index].first_name,
        didPay: state[showModal.index].didPay,
        last_name: state[showModal.index].last_name,
        username: state[showModal.index].username,
        profile_link: state[showModal.index].profile_link
    })

    const handleSubmit = (event) => {
        event.preventDefault();
        setState(state.map((item, index) => {
            if (index === showModal.index)
                return {
                    id: localState.id,
                    email: localState.email,
                    first_name: localState.first_name,
                    didPay: localState.didPay,
                    last_name: localState.last_name,
                    username: localState.username,
                    profile_link: localState.profile_link
                }
            else return item
        }))
        setReserveState(reserveState.map((item, index) => {
            if (index === showModal.index)
                return {
                    id: localState.id,
                    email: localState.email,
                    first_name: localState.first_name,
                    didPay: localState.didPay,
                    last_name: localState.last_name,
                    username: localState.username,
                    profile_link: localState.profile_link
                }
            else return item
        }))
        setShowModal({...showModal, visible: false})
    };

    return (
        <Modal show={showModal.visible} onHide={() => setShowModal({...showModal, visible: false})}>
            <Modal.Header closeButton>
                <Modal.Title>Change data</Modal.Title>
            </Modal.Header>
            <Form noValidate onSubmit={handleSubmit}>
                <Row style={{margin: "0 20px"}} className="mb-3">
                    <Form.Group as={Col} md="12" controlId="validationCustom01">
                        <Form.Control
                            style={{marginBottom: "10px"}}
                            type="text"
                            placeholder="Id"
                            value={localState.id}
                            onChange={(event) => setLocalState({...localState, id: event.target.value})}
                        />
                        <Form.Control
                            style={{marginBottom: "10px"}}
                            type="text"
                            placeholder="First name"
                            value={localState.first_name}
                            onChange={(event) => setLocalState({...localState, first_name: event.target.value})}
                        />
                        <Form.Control
                            style={{marginBottom: "10px"}}
                            type="text"
                            placeholder="Last name"
                            value={localState.last_name}
                            onChange={(event) => setLocalState({...localState, last_name: event.target.value})}
                        />
                        <Form.Control
                            style={{marginBottom: "10px"}}
                            type="text"
                            placeholder="Username"
                            value={localState.username}
                            onChange={(event) => setLocalState({...localState, username: event.target.value})}
                        />
                        <Form.Control
                            style={{marginBottom: "10px"}}
                            type="text"
                            placeholder="Email"
                            value={localState.email}
                            onChange={(event) => setLocalState({...localState, email: event.target.value})}
                        />
                        <Form.Control
                            style={{marginBottom: "10px"}}
                            type="text"
                            placeholder="Pay status"
                            value={localState.didPay}
                            onChange={(event) => setLocalState({...localState, didPay: event.target.value})}
                        />
                        <Form.Control
                            style={{marginBottom: "10px"}}
                            type="text"
                            placeholder="Link"
                            value={localState.profile_link}
                            onChange={(event) => setLocalState({...localState, profile_link: event.target.value})}
                        />
                    </Form.Group>
                </Row>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: 'end',
                    paddingRight: "20px",
                    marginBottom: "20px"
                }}>
                    <Button style={{marginRight: "20px"}} type="submit">Save Changes</Button>
                    <Button variant="secondary" onClick={() => setShowModal({...showModal, visible: false})}>
                        Close
                    </Button>
                </div>
            </Form>
        </Modal>
    )
}

export default ChangeDataModal;