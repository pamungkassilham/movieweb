import {Card, Container, Row, Col, Image } from "react-bootstrap"
import hawkeyeImage from "../assets/images/trending/hawkeye.png"
import spidermanImage from "../assets/images/bg/spiderman.png"
import endgameImage from "../assets/images/trending/endgame.png"
import infinity_warImage from "../assets/images/bg/infinity_war.png"
import shangchiImage from "../assets/images/trending/shang-chi.png"
import doctor_strangeImage from "../assets/images/trending/doctor_strange.png"


const Trending = () => {
    return (
        <div>
            <Container>
                <br />
                <h1 className="text-white">TRENDING</h1>
                <br />
                <Row>
                    <Col md={4} className="movieWrapper" id="trending">
                        <Card className="movieImage">
                            <Image src={hawkeyeImage} alt="Hawkeye" className="images" />
                                <div className="bg-dark text-white">
                                    <div className="p-2 m-1">
                            <Card.Title className="text-center">HAWKEYE</Card.Title>
                            <Card.Text className="text-left">
                            Hawkeye adalah miniseri televisi yang didasarkan pada Marvel Comics dengan menampilkan karakter Clint Barton / Hawkeye dan Kate Bishop / Hawkeye. 
                            </Card.Text>
                            <Card.Text className="text-left">24 November 2021</Card.Text>
                                    </div>
                                </div>
                        </Card>
                    </Col>
                    <Col md={4}className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={endgameImage} alt="Endgame" className="images" />
                                <div className="bg-dark text-white">
                                    <div className="p-2 m-1">
                            <Card.Title className="text-center">AVENGERS : END GAME</Card.Title>
                            <Card.Text className="text-left">
                            Melanjutkan Avengers Infinity War, akankah para Avengers berhasil mengalahkan Thanos?                            </Card.Text>
                            <Card.Text className="text-left">24 November 2021</Card.Text>
                                    </div>
                                </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={spidermanImage} alt="Hawkeye" className="images" />
                                <div className="bg-dark text-white">
                                    <div className="p-2 m-1">
                            <Card.Title className="text-center">SPIDERMAN : HOME COMING</Card.Title>
                            <Card.Text className="text-left">
                            Spider-Man: Homecoming adalah film superhero Amerika 2017 berdasarkan karakter Marvel Comics Spider-Man                            </Card.Text>
                            <Card.Text className="text-left">24 November 2021</Card.Text>
                                    </div>
                                </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={infinity_warImage} alt="Hawkeye" className="images" />
                                <div className="bg-dark text-white">
                                    <div className="p-2 m-1">
                            <Card.Title className="text-center">MARVEL - INFINITY WAR</Card.Title>
                            <Card.Text className="text-left">
                            The Avengers dan sekutu mereka harus bersedia mengorbankan segalanya dalam upaya untuk mengalahkan Thanos yang kuat sebelum ia berhasil menghancurkan alam semesta.                            </Card.Text>
                            <Card.Text className="text-left">24 November 2021</Card.Text>
                                    </div>
                                </div>
                        </Card>
                    </Col>
                    <Col md={4}className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={doctor_strangeImage} alt="Hawkeye" className="images" />
                                <div className="bg-dark text-white">
                                    <div className="p-2 m-1">
                            <Card.Title className="text-center">DOCTOR STRANGE</Card.Title>
                            <Card.Text className="text-left">
                            Perjalananke tempat yang tidak diketahui bersama Doctor Strange, dengan bantuan sekutu mistis baik lama maupun baru, melintasi realitas alternatif Multiverse yang membingungkan dan berbahaya untuk menghadapi musuh baru yang misterius.                            </Card.Text>
                            <Card.Text className="text-left">24 November 2021</Card.Text>
                                    </div>
                                </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={shangchiImage} alt="Hawkeye" className="images" />
                                <div className="bg-dark text-white">
                                    <div className="p-2 m-1">
                            <Card.Title className="text-center">SHANG-CHI</Card.Title>
                            <Card.Text className="text-left">
                            Shang-Chi (Simu Liu) harus menghadapi masa lalunya sebelum ia memilih untuk meninggalkan dan bergabung ke dalam sebuah organisasi bernama Ten Rings.                            </Card.Text>
                            <Card.Text className="text-left">24 November 2021</Card.Text>
                                    </div>
                                </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Trending