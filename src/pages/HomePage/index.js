import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import styled from 'styled-components';
import { IoLogoWhatsapp } from 'react-icons/io'
import { Div, H1, Article } from '../../components/styledComponents';

// images
import logo from '../../img/logoSlogan.png';
import chooseMealImg from '../../img/choose-meal.png';
import chefWomanImg from '../../img/chef-woman.png';
import hungryAndHourglassImg from '../../img/hungry-and-hourglass.png';
import tiaDriveImg from '../../img/tia-drive02.png';
import womanRelaxImg from '../../img/woman-relax.jpg';
import mealsTypeHomeImg from '../../img/meals-type-home.jpg';

// store
import { store } from '../../store';

/**
 * GOOGLE ANALYTICS TESTING
 */
// import ReactGa from 'react-ga';
// import useGAEventsTracker from '../hooks/useGAEventsTracker'

// animation
const planPriceVariants = {
  initial: { scale: 1, fontWeight: "normal" },
  animate: { scale: 1.1, fontWeight: "bolder" },
}

const anyDoubtVariants = {
  initial: { scale: 0 },
  animate: { scale: 1 },
}

// styled components

// header
const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  max-width: 100%;  
  padding: 25px 10px 150px;

  text-align: center;

  img { width: 100px; }
  h2 { margin: 30px 0; text-align: center; color: #166668; font-size: 1.9rem; text-shadow: 0px 0px 2px rgba(0,0,0,.3); }
  p { padding: 0 20px; font-size: 1.2rem; text-align: center; color: #555; text-shadow: 0px 0px 1px rgba(0,0,0,.3); }
  div { width: 5px; height: 50px; position: absolute; bottom: 0; background: #38c4ac; transform: rotate(-50deg); left: calc(50% - 18px); border-radius: 50px; margin-bottom: 40px; }
  div:last-child { transform: rotate(50deg); left: calc(50% + 18px); }

  @media (min-width: 1024px) {
    padding: 25px 15% 150px;
  }

`;

// meal style
const MealStyle = styled.article`
  width: 100%;
  height: 400px;

  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
  text-align: center;
`;
const MealStyleText = styled.div`
  height: 100%;

  position: absolute;
  top: 0;
  z-index: 2;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  padding: 30px;

  color: #38c4ac;
  text-shadow: 0 0 20px #000;


  h2 { font-size: 1.5rem; font-weight: normal; }
  span { width: 100%; display: block; font-weight: bolder; }
  span:first-child { margin-top: 20px; }
  p { font-size: 1.1rem; }

`;
const MealStyleBg = styled.div`
    width: 100%;
    height: 100%;

    background: url(${mealsTypeHomeImg}) no-repeat;
    background-size: cover;
    background-attachment: fixed;

    filter: blur(5px);
    -webkit-filter: blur(5px);
`;

// how it works
const HowItWorks = styled(Article)`
  margin: 60px 0;
`;
const HowItWorksItem = styled(Div)`
  padding: 20px;
  margin: 30px 0;

  ul { list-style: none;}
  h3 { font-size: 1.5rem; text-transform: uppercase; margin-bottom: 10px; }
  p { font-size: 1.3rem; }
  img { width: 150px; margin-bottom: 10px; border-radius: 50%; box-shadow: 0px 0px 20px rgba(0,0,0,.3); }

`;

//
const GoToMealChoice = styled(Link)`
  padding: 30px;
  
  border: none;
  border-radius: 4px;
  background: #38c4ac;
  color: #fff;
  font-weight: bold;
  font-size: 1.2rem;
  text-decoration: none;
  text-align: center;
  box-shadow: 3px 3px 10px #555a;
`;

// footer
const HomeFooter = styled.footer`
  width: 100%;
  padding: 30px;
  padding-top: 0px;
`;
const CopyRightHome = styled.p`
  margin: 80px 0;
  color: #ccc;
  font-size: 1rem;
`;

// do you have any doubt?
const AnyDoubt = styled(motion.a)`
  position: fixed;
  bottom: 10px;
  right: 10px;
  padding: 10px;
  display: flex;
  align-items: center;
  z-index: 99;

  background-color: #fff;
  border: 4px solid #00e676;
  border-radius: 20px;
  text-decoration: none;
  color: #555;

  p { margin-right: 10px; font-size: 1.2rem; }

`;
const WppLogoIcon = styled(IoLogoWhatsapp)`
  font-size: 3rem;
  color: #00e676;
`;

// ######### HOME ######### 


/**
 * GOOGLE ANALYTICS TESTING
 */
// ReactGa.initialize(process.env.REACT_APP_GA_TRACKING_CODE);

function Home() {

  /**
   * GOOGLE ANALYTICS TESTING
   */
  // const eventTracker = useGAEventsTracker("Choice of Plan");
  // useEffect( () => {
  //   ReactGa.pageview( window.location.pathname + window.location.search );
  // });

  // GLOBAL STATE
  const { plan } = useContext(store);

  // animation
  const planPriceVariantsControl = useAnimation();
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

  useEffect(() => {
    const animatePlanPrice = async () => {
      await planPriceVariantsControl.start("animate");
      await planPriceVariantsControl.start("initial");
    }
    animatePlanPrice();
  }, [plan, planPriceVariantsControl]);

  return (
    <motion.div // this motion.div apply animation on render this component
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}            
    >

    <div className="Home">
      <Header>
        <img src={logo} alt="logo" />
        <h2>Você assina Netflix, mas nunca pensou em assinar refeições??</h2>
        <p>Essa é a melhor forma de garantir e ESTOCAR as refeições da sua família durante a <em>QUARENTENA</em>, sem tirar de quem precisa!</p>
        <div></div>
        <div></div>
      </Header>

      <main>
        <MealStyle>
          <MealStyleText>
            <h2>COMIDA CASEIRA DE VERDADE ULTRA RÁPIDA E PRÁTICA<span>TRADICIONAL</span> &amp; <span>FIT</span></h2>
            <p>em breve teremos refeições Low Carb e Funcionais.</p>
          </MealStyleText>
          <MealStyleBg />
        </MealStyle>

        <HowItWorks width="100%" xs_flexContainer xs_ff="row wrap" xs_jc="center" textAlignCenter >
          <H1 width="100%" fontSize="2" >Como funciona?</H1>

          <HowItWorksItem width="100%" l_width="50%" xl_width="30%">
            <img src={chooseMealImg} alt="escolha suas refeições favoritas" />
            <h3>Escolha Suas Refeições Favoritas!</h3>
            <p>diversas refeições congeladas e muitas ainda por vir. Tanto Linha Tradicional quanto pratos Fit</p>
          </HowItWorksItem>

          <HowItWorksItem width="100%" l_width="50%" xl_width="30%">
            <img src={chefWomanImg} alt="cozinheira" />
            <h3>A Gente Cozinha e Entrega</h3>
            <p>Cozinhamos com todo o carinho e capricho que tu já conhece e te entregamos toda semana.</p>
          </HowItWorksItem>

          <HowItWorksItem width="100%" l_width="50%" xl_width="30%">
            <img src={tiaDriveImg} alt="cozinheira" />
            <h3>Tia Drive</h3>
            <p>O drive-thru da Tia Leila. É só passar e retirar suas refeições <br/><b>SEM DESCER DO CARRO!</b><br/>se preferir entregamos na porta da sua casa.</p>
          </HowItWorksItem>

          <HowItWorksItem width="100%" l_width="50%" xl_width="30%">
            <img src={hungryAndHourglassImg} alt="cozinheira" />
            <h3>Apitou, ta pronto!</h3>
            <p>Pronto pra comer de 3 a 7min</p>
          </HowItWorksItem>

          <HowItWorksItem width="100%" l_width="50%" xl_width="30%">
            <img src={womanRelaxImg} alt="cozinheira" />
            <h3>Relax!</h3>
            <ul>
              <li><p><b>#</b> Sem ir as compras, sem cozinhar, sem precisar limpar</p></li>
              <li><p><b>#</b> pule uma semana</p></li>
              <li><p><b>#</b> mude a quantidade de refeições</p></li>
              <li><p><b>#</b> cancele a qualquer momento</p></li>
              <li><p><b>#</b> escolha outras refeições. Você é quem manda!</p></li>
            </ul>
          </HowItWorksItem>
        </HowItWorks>

        <Div xs_width="100%" xs_cssStyle="text-align: center;">
          <GoToMealChoice
            to="/order"
          >
            VER OS PRATOS DISPONÍVEIS
          </GoToMealChoice>
        </Div>
      </main>

      <AnyDoubt
        href="https://wa.me/555198150292?text=Oii%20%F0%9F%99%82%20tenho%20a%20seguinte%20d%C3%BAvida%3A"
        target="_blank"

        variants={anyDoubtVariants}
        initial="initial"
        animate={anyDoubtControl}
      >
        <p>Alguma dúvida?</p>
        <WppLogoIcon />
      </AnyDoubt>
      
      <HomeFooter>
        <CopyRightHome>&copy; TiaLeila.com todos os direitos reservados</CopyRightHome>
      </HomeFooter>
    </div>

    </motion.div>
  );
}

export default Home;
