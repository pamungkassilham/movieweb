import {Card, Container, Row, Col, Image } from "react-bootstrap"
import batmanImage from "../assets/images/superhero/batman.png"
import hulkImage from "../assets/images/superhero/hulk.png"
import aouImage from "../assets/images/trending/aou.png"
import capt_marvelImage from "../assets/images/trending/capt_marvel.png"
import shazamImage from "../assets/images/bg/shazam.png"
import justice_leagueImage from "../assets/images/bg/justice_league.png"


const Superhero = () => {
    return (
        <div>
            <Container>
                <br />
                <h1 className="text-white">SUPERHERO</h1>
                <br />
                <Row>
                    <Col md={4} className="movieWrapper" id="superhero">
                        <Card className="movieImage">
                            <Image src={batmanImage} alt="Hawkeye" className="images" />
                                <div className="bg-dark text-white">
                                    <div className="p-2 m-1">
                            <Card.Title className="text-center">THE BATMAN</Card.Title>
                            <Card.Text className="text-left">
                            Ketika Riddler, seorang pembunuh berantai yang sadis mulai membunuh tokoh-tokoh politik penting di Gotham, Batman dituntut untuk menyelidiki korupsi tersembunyi di kota itu dan mempertanyakan keterlibatan keluarganya.                            </Card.Text>
                            <Card.Text className="text-left">24 November 2021</Card.Text>
                                    </div>
                                </div>
                        </Card>
                    </Col>
                    <Col md={4}className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={hulkImage} alt="Hawkeye" className="images" />
                                <div className="bg-dark text-white">
                                    <div className="p-2 m-1">
                            <Card.Title className="text-center">THE INCREDIBLE HULK</Card.Title>
                            <Card.Text className="text-left">
                            The Incredible Hulk merupakan sebuah film Amerika Serikat yang dirilis pada tahun 2008. Film ini adalah film kedua di Marvel Cinematic Universe. Film yang disutradarai oleh Louis Leterrier ini pemainnya antara lain ialah Edward Norton, Liv Tyler, Tim Roth, dan William Hurt. Tanggal rilisnya pada 13 Juni 2008                            </Card.Text>
                            <Card.Text className="text-left">24 November 2021</Card.Text>
                                    </div>
                                </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={aouImage} alt="Hawkeye" className="images" />
                                <div className="bg-dark text-white">
                                    <div className="p-2 m-1">
                            <Card.Title className="text-center">AVENGERS - AGE OF ULTRON</Card.Title>
                            <Card.Text className="text-left">
                            Avengers: Age of Ultron adalah sebuah film pahlawan super berdasarkan komik Avengers, produksi Marvel Studios dan didistribusikan oleh Walt Disney Studios Motion Pictures. Film ini merupakan sekuel dari The Avengers dan merupakan film kesebelas dari seri Marvel Cinematic Universe.                            </Card.Text>
                            <Card.Text className="text-left">24 November 2021</Card.Text>
                                    </div>
                                </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={capt_marvelImage} alt="Hawkeye" className="images" />
                                <div className="bg-dark text-white">
                                    <div className="p-2 m-1">
                            <Card.Title className="text-center">CAPTAIN MARVEL</Card.Title>
                            <Card.Text className="text-left">
                            Captain Marvel adalah superhero wanita dari Marvel yang mempunyai banyak kekuatan setara seperti Superman. Superhero yang bernama Carol Danvers ini awalnya merupakan seorang pilot luar angkasa, konon ia mendapatakan kekuatan supernya dari bangsa alien.                            </Card.Text>
                            <Card.Text className="text-left">24 November 2021</Card.Text>
                                    </div>
                                </div>
                        </Card>
                    </Col>
                    <Col md={4}className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={shazamImage} alt="Hawkeye" className="images" />
                                <div className="bg-dark text-white">
                                    <div className="p-2 m-1">
                            <Card.Title className="text-center">SHAZAM!</Card.Title>
                            <Card.Text className="text-left">
                            Billy Batson, seorang anak yatim berusia 14 tahun yang bermasalah yang tinggal di Philadelphia, diatur untuk pindah ke rumah asuh baru - yang ketujuh berturut-turut - dengan keluarga Vazquez dan lima anak asuh lainnya. Suatu hari, Billy naik mobil subway dan menemukan dirinya diangkut ke dunia yang berbeda di mana penyihir kuno memberinya kekuatan.                            </Card.Text>
                            <Card.Text className="text-left">24 November 2021</Card.Text>
                                    </div>
                                </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={justice_leagueImage} alt="Hawkeye" className="images" />
                                <div className="bg-dark text-white">
                                    <div className="p-2 m-1">
                            <Card.Title className="text-center">JUSTICE LEAGUE</Card.Title>
                            <Card.Text className="text-left">
                            Dipicu oleh kepercayaannya terhadap kemanusiaan dan terinspirasi oleh tindakan tanpa pamrih Superman (Henry Cavill), Bruce Wayne (Ben Affleck) mengumpulkan sekutu baru Diana Prince untuk menghadapi ancaman yang lebih besar lagi. Bersama-sama,                             </Card.Text>
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

export default Superhero