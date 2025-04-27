import profilepic from './Assets/3.jpg'

function Card () {
    return (
        <div className="card">
            <img className="profilepic" src={profilepic} alt="This is user's profile pic" width={200}/>
            <h2 className="h2tag">Ashutosh Ranjan</h2>
            <p>I like learning new things and right now i am learning react :)</p>
        </div>
    )
}

export default Card 