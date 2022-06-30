// import users from "./users";

function UserCard(props) {
    return (
        <div className="card">
            <img src={props.user.picture.thumbnail} className='profile-img' alt="Thumbnail" />
            <div className="container-text">
                <p className="username">{props.user.name.title} {props.user.name.first} {props.user.name.last}</p>
                <p className="user-mail">{props.user.email}</p>
            </div>
        </div>
    )
}

export default UserCard;