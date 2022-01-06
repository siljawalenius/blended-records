

const Album = ({eyebrow, artist, title} ) =>{
    return (
        <section className="album" > 
            <p> {eyebrow} </p>
            <h2>{artist}</h2>
            <h3>{title}</h3>
        </section>

    )
}

export default Album;