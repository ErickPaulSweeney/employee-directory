function Home(props) {
    return (
        <>
            <h2>Welcome</h2>
            <p>This is {props.username}'s homepage from {props.location}</p>
        </>
    )
}

export default Home;