import "./customPerson.css";
function CustomPerson({person}) {
    const fullName = person.name.title + " " + person.name.first + " " + person.name.last;
    const fullAddress = person.location.city + ", " + person.location.country;
    return (
        <div className="col-12 col-md-4 col-lg-3 my-4">
            <div className="card h-100">
                <div className="card-body">
                    <img className="mb-4" src={person.picture.large} alt={fullName}/>
                    <h5 className="card-title">{fullName}</h5>
                    <h6 className="card-subtitle mb-2 text-muted"><i className="fas fa-map-marker-alt"/> {fullAddress}</h6>
                </div>
            </div>
        </div>
    );
}

export default CustomPerson;
