import React, {useRef, useState, useEffect} from 'react';
import {useAnimation} from 'framer-motion';
import {
    Container,
    Header,
    CTAHeader,
    HeaderImg,
    Ceias,
    Promo,
    IndividualIngredients,
    IngredientWrapper,
    CTA,
    AnyDoubt,
    WppLogoIcon,
    TestimonialsImages,
    TestimonialsWrapper,
} from './styles';
import { H1, P } from '../../components/styledComponents';
import ImgGift from '../../img/ceia/gift.png';
import Ceia from './Ceia';
import Ingredient from './Ingredient';
import Modal from '../../components/Modal';
import Form from './Form';
import CountDown from './CountDown';

const ceias = [
    // {
    //     img: "chester-ceia.jpg",
    //     title: "Ceia Boas Festas",
    //     ingredients: ["Chester decorado com Fio de Ovos e Pêssego", "Arroz à Grega ou Branco", "Fafora Natalina", "Salpicão", "Pudim ou Chocotone e Panetone", "Maionese de Batata ou de Aipim ou Salada Verde"],
    //     plans: [
    //         { amountOfPeople: 2, price: 244 },
    //         { amountOfPeople: 4, price: 436 },
    //         { amountOfPeople: 6, price: 594 },
    //     ],
    //     color: "#F45563",
    // },
    {
        img: "pernil-ceia.jpg",
        title: "Ceia da Prosperidade",
        ingredients: ["Pernil Assado ao Molho Agridoce", "Lentilha de Ano Novo", "Arroz à Grega ou Branco", "Fafora Réveillon", "Salpicão Réveillon", "Pudim ou Chocotone e Panetone", "Maionese de Batata ou de Aipim ou Salada Verde"],
        plans: [
            { amountOfPeople: 2, price: 244 },
            { amountOfPeople: 4, price: 436 },
            { amountOfPeople: 6, price: 594 },
        ],
        color: "#e3b505",
    },
]
//
const individualIngredients = [
    {
        name: "Pernil",
        img: "pernil.jpg"
    },{
        name: "Chester",
        img: "chester.jpg"
    },{
        name: "Arroz Branco",
        img: "arroz-branco.jpg"
    },{
        name: "Arroz à Grega",
        img: "arroz-grega.jpg"
    },{
        name: "Chocotone",
        img: "chocotone.jpg"
    },{
        name: "Panetone",
        img: "panetone.jpg"
    },{
        name: "Salpicão Réveillon",
        img: "salpicao.jpg"
    },{
        name: "Farofa",
        img: "farofa.jpg"
    },{
        name: "Lentilha",
        img: "lentilha.png"
    },{
        name: "Maionese de Aipim",
        img: "maionese-aipim.jpg"
    },{
        name: "Maionese de Batata",
        img: "maionese-batata.jpg"
    },{
        name: "Pudim",
        img: "pudim.jpg"
    },{
        name: "Salada Verde",
        img: "salada-verde.jpg"
    }
]

// animation
const appearVariants = {
    initial: { scale: 0 },
    animate: { scale: 1 },
}

// testimonials images
const ceiaTestimonials = [0,22,1,5,6,28,10,11,20,21,27]

const CeiaNatal = () => {
    // local state
    const [formIsOpen, setFormIsOpen] = useState(false);
    const [btnClicked, setBtnClicked] = useState(false);

    const ceiasRef = useRef();

    // animation
    const anyDoubtControl = useAnimation();

    useEffect( () => {
        const scrollHandle = () => {
            const totalScroll = (document.documentElement.scrollHeight - document.documentElement.clientHeight);
            const currentScroll = document.documentElement.scrollTop;
            const scrollPercentage = (currentScroll * 100) / totalScroll;
    
            if ( scrollPercentage >= 42 ) {
                anyDoubtControl.start("animate");
                window.removeEventListener('scroll', scrollHandle);
            }
        }

        window.addEventListener('scroll', scrollHandle);
    }, [anyDoubtControl] );
    
    // order handle
    const orderHandle = btnClicked => {
        setBtnClicked(btnClicked);
        setFormIsOpen(true);
    }

    const ctaHeaderHandle = () => {
        const remainingScroll = ceiasRef.current.getBoundingClientRect().top;
        window.scroll({
            top: window.scrollY + remainingScroll,
            behavior: "smooth"
        });
    }

    return (
        <Container>
            <Header>
                <article>
                    <H1 fontSize="1.5rem" >Ceia</H1>
                    <H1 fontSize="4rem" className="reveillon" >RÉVEILLON</H1>
                    <P fontSize="1.5rem" className="textWithBgDark">Para entrar o ano SEM ESTRESSE, SEM PREOCUPAÇÃO e SEM CORRERIA de última hora!</P>

                    <CTAHeader
                        onClick={ctaHeaderHandle}
                    >ESPIAR A CEIA</CTAHeader>
                </article>
                {/* <HeaderImg src={ImgGift} alt="gift" /> */}
            </Header>

            <Ceias
                ref={ceiasRef}
            >
                <header>
                    <h1>Ceia</h1>
                </header>
                {
                    ceias.map( (ceia, index) => (
                        <>
                            <Ceia 
                                key={index}
                                img={require(`../../img/ceia/${ceia.img}`)}
                                title={ceia.title}
                                ingredients={ceia.ingredients}
                                plans={ceia.plans}
                                color={ceia.color}
                            />
                            <CTA
                                ctaColor={ceia.color}
                                onClick={orderHandle.bind(null, `Ceia: ${ceia.title}`)}
                            >ENCOMENDAR</CTA>
                        </>
                    ))
                }
            </Ceias>

            <Promo>
                <div>
                    <h2>Leve uma <span>Ceia de Réveillon</span> e</h2>
                    <h1><span>GANHE 10% de DESCONTO</span></h1>
                    <h2>na segunda</h2>
                </div>
                <CTA
                    ctaColor="#000"
                    onClick={orderHandle.bind(null, "Promo")}
                >QUERO DESCONTO</CTA>
            </Promo>

            <IndividualIngredients>
                <header>
                    <h1>Monte a Ceia do<br/>SEU JEITO</h1>
                    <p>selecione, abaixo, quais ingredientes você prefere</p>
                </header>
                <IngredientWrapper>
                    {
                        individualIngredients.map( (ingredient, index) => (
                            <Ingredient
                                img={require(`../../img/ceia/${ingredient.img}`)}
                                name={ingredient.name}
                            />
                        ))
                    }
                </IngredientWrapper>
                <CTA
                    ctaColor="#00B494"
                    onClick={orderHandle.bind(null, "Individual Ingredients")}
                >ENCOMENDAR</CTA>
            </IndividualIngredients>

            {/* TESTIMONIALS */}
            <TestimonialsWrapper>
                <h1>O que estão dizendo da nossa ceia:</h1>
                <TestimonialsImages>
                    {
                        (() => {
                            const testimonialsImages = [];
                            ceiaTestimonials.forEach( (imgName, i) => {
                                testimonialsImages.push(<img key={i} alt="depoimento" src={require(`../../img/testimonials/${imgName}.jpg`)} />)
                            })
                            return testimonialsImages;
                        })()
                    }
                </TestimonialsImages>
            </TestimonialsWrapper>

            {/* CountDown */}
            <CountDown />

            {/* Doubt */}
            <AnyDoubt
                href="https://wa.me/555198150292?text=Oii%20%F0%9F%99%82%20tenho%20a%20seguinte%20d%C3%BAvida%3A"
                target="_blank"

                variants={appearVariants}
                initial="initial"
                animate={anyDoubtControl}
            >
                <p>Alguma dúvida?</p>
                <WppLogoIcon />
            </AnyDoubt>

            {/* MODAL FORM */}
            <Modal
                isOpen={formIsOpen}
                onRequestClose={setFormIsOpen.bind(null, false)}
            >
                <Form btnClicked={btnClicked} />
            </Modal>
        </Container>
    )
}

export default CeiaNatal;
