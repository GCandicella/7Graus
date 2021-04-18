import {useState, useEffect} from 'react';
import './App.css';
import CustomPerson from "./components/custom-person/CustomPerson";


function App() {
    const GROUP_MEMBERS = 10;

    const [persons, setPerson] = useState([]);

    const [page, setPage] = useState(1);

    useEffect(function () {
        retrieveGroup(GROUP_MEMBERS);
    }, []);

    function retrieveGroup(qtd = GROUP_MEMBERS, curr_page = page, seed = '7graus') {
        fetch('https://randomuser.me/api/?page=' + curr_page + '&results=' + qtd + '&seed=' + seed)
            .then(response => response.json())
            .then(function (data){
                addGroup(data.results);
                setPage(page + 1);
            })
            .catch(error => console.log(error));
    }

    function addGroup(group) {
        setPerson([...persons, ...group]);
    }

    return (
        <div className="container">
            <h1 className="mt-5">Total Retrieved: {persons.length}</h1>
            <hr/>
            <div className="row">
                {persons.map(
                    (person, index) =>
                        <CustomPerson key={index} person={person}/>
                )}
            </div>
            <div className="text-center my-5">
                <button onClick={() => retrieveGroup(GROUP_MEMBERS, page)} className="btn btn-lg btn-primary">Load More</button>
            </div>
        </div>
    );
}

export default App;
