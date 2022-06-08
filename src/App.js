import styled from "styled-components";
import {Button, Table} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from "react";
import {
    SortByEmail,
    SortById,
    SortByLastName,
    SortByLink,
    SortByName,
    SortByPayStatus,
    SortByUsername
} from "./helpers/sort";
import {backendData} from "./helpers/data";
import Search from "./components/search";
import ChangeDataModal from "./modals/change-data-modal";
import CreateNewUserModal from "./modals/create-new-user-modal";

const Wrapper = styled.div`
  min-height: 100vh;
  padding: 0 15px;
  display: flex;
  flex-direction: column;
`;

const ModifiedTh = styled.th`
  cursor: pointer;
`;

function App() {
    let data = backendData
    for (let i = 0; i < data.length; i++) {
        data[i].id = String(data[i].id)
        data[i].didPay = data[i].pay_status ? "Оплатил" : "Не оплатил"
    }

    const [state, setState] = useState(data)
    const [reserveState, setReserveState] = useState(state)

    const [count, setCount] = useState({
        sortById: 0,
        sortByName: 0,
        sortByLastName: 0,
        sortByUsername: 0,
        sortByEmail: 0,
        sortByPayStatus: 0,
        sortByLink: 0
    });

    const [showChangeDataModal, setShowChangeDataModal] = useState({
        visible: false,
        index: 0
    })

    const [showCreateUserModal, setShowCreateUserModal] = useState(false)

    const RemoveItem = (id) => {
        setState(state.filter(item => item.id !== id))
        setReserveState(reserveState.filter(item => item.id !== id))
    }

    const [validated, setValidated] = useState(false);
    const [search, setSearch] = useState("")

    const changeValueOfSearch = (e) => {
        console.log("state", state)
        console.log("reserve", reserveState)
        setSearch(e.target.value)
        setState(reserveState)
    }

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        if (form.checkValidity() === false) {
            event.stopPropagation();
        } else setState(state.filter((item) => {
            for (let key in item) {
                if (item.hasOwnProperty(key) && String(item[key]).toLowerCase().indexOf(search.toLowerCase()) !== -1)
                    return 1
            }
        }))
        setValidated(true);
    };


    return (
        <Wrapper>
            <div style={{margin: "200px auto", textAlign: "center"}}>
                <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
                    <div style={{fontSize: "44px", fontWeight: 600, marginRight: "20px"}}>
                        Users
                    </div>
                    <Button onClick={() => setShowCreateUserModal(true)}>Добавить</Button>
                </div>
                <div style={{marginTop: "20px"}}>
                    {state.length !== 0
                        ? <Table striped bordered hover>
                            <thead>
                            <tr>
                                <ModifiedTh onClick={() => SortById(state, setState, count, setCount)}>
                                    Id
                                </ModifiedTh>
                                <ModifiedTh onClick={() => SortByName(state, setState, count, setCount)}>
                                    First Name
                                </ModifiedTh>
                                <ModifiedTh onClick={() => SortByLastName(state, setState, count, setCount)}>
                                    Last Name
                                </ModifiedTh>
                                <ModifiedTh onClick={() => SortByUsername(state, setState, count, setCount)}>
                                    Username
                                </ModifiedTh>
                                <ModifiedTh onClick={() => SortByEmail(state, setState, count, setCount)}>
                                    Email
                                </ModifiedTh>
                                <ModifiedTh onClick={() => SortByPayStatus(state, setState, count, setCount)}>
                                    Pay status
                                </ModifiedTh>
                                <ModifiedTh onClick={() => SortByLink(state, setState, count, setCount)}>
                                    Link
                                </ModifiedTh>
                            </tr>
                            </thead>
                            <tbody>
                            {state.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.id ? item.id : "-"}</td>
                                    <td>{item.first_name ? item.first_name : "-"}</td>
                                    <td>{item.last_name ? item.last_name : "-"}</td>
                                    <td>{item.username ? item.username : "-"}</td>
                                    <td>{item.email ? item.email : "-"}</td>
                                    <td>{item.didPay}</td>
                                    <td>
                                        <a href={item.profile_link}>
                                            {item.profile_link && "Тык"}
                                        </a>
                                    </td>
                                    <ModifiedTh onClick={() => RemoveItem(item.id)}>
                                        <div>
                                            Удалить
                                        </div>
                                    </ModifiedTh>
                                    <ModifiedTh onClick={() => setShowChangeDataModal({index: index, visible: true})}>
                                        <div>
                                            Изменить
                                        </div>
                                    </ModifiedTh>
                                </tr>
                            ))}
                            </tbody>
                        </Table>
                        : "Данных нет, увы("}
                    <Search search={search} changeValueOfSearch={changeValueOfSearch} handleSubmit={handleSubmit}
                            validated={validated}/>
                    {showChangeDataModal.visible &&
                    <ChangeDataModal reserveState={reserveState} setReserveState={setReserveState}
                                     showModal={showChangeDataModal} setShowModal={setShowChangeDataModal} state={state}
                                     setState={setState}/>}
                    {showCreateUserModal &&
                    <CreateNewUserModal reserveState={reserveState} setReserveState={setReserveState}
                                        showModal={showCreateUserModal} setShowModal={setShowCreateUserModal}
                                        state={state}
                                        setState={setState}/>}
                </div>
            </div>
        </Wrapper>
    );
}

export default App;
