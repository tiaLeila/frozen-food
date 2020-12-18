import React, { useState, useContext, useEffect } from 'react';
import {Link} from 'react-router-dom';
import { motion } from 'framer-motion';
import { Span, } from '../../components/styledComponents';
import Form from './Form';
import Modal from '../../components/Modal';
import { store } from '../../store';
import {
    Container,
    Header,
    Main,
    FadeBox,
    Fade,
    BtnReadMore,
    Footer,
    P,
    H1,
    TestimonialsImages,
    CTA,
    IconSupport,
    IconPhoneCall,
    IconWpp,
    Contact,
} from './styles';

// ############ TEST TRACKING ############ 
const timeline = [
    // {
    //     time: "", // in miliseconds
    //     duration: "" // in miliseconds
    //     actionId: "",
    // }
];
// ############ END TEST TRACKING ############ 

const SalesPage = () => {

    // ############ TEST TRACKING ############ 
    const [trackEl, setTrackEl] = useState();
    
    /**
     * given an 'TrackableElement' and the 'viewportPosition', returns 'true' if the 'TrackableElement' is visible, and 'false' otherwise. 
     * @param {*} el
     * @param {*} viewportPosition
     */
    const elementIsVisible = (el, viewportPosition) => {
        const isVisible = (
            el.elPosition.top <= viewportPosition.bottom
            && el.elPosition.bottom >= viewportPosition.top
        )

        return isVisible;
    }

    /**
     * 
     */
    const updateTimeline = () => {
        if (trackEl) {
            
            const viewportPosition = {
                top: window.scrollY,
                bottom: window.scrollY + window.innerHeight
            }

            const visibleElements = [];
            const notVisibleElements = [];

            // counting visible and not visible elements
            trackEl.forEach( el => {

                if (elementIsVisible(el, viewportPosition)){
                    visibleElements.push(el);
                }
                else {
                    notVisibleElements.push(el);
                }
            });
            
            //
            visibleElements.forEach( el => {
                const interaction = timeline.find( interaction => (interaction.actionId === el.id) && (interaction.duration === null));

                if (interaction === undefined) timeline.push({ // adding new interaction
                    time: Date.now(),
                    duration: null,
                    actionId: el.id
                })
            });
            
            //
            notVisibleElements.forEach( el => {
                const interactionIndex = timeline.findIndex( interaction => (interaction.actionId === el.id) && (interaction.duration === null));

                if (interactionIndex !== -1)
                    timeline[interactionIndex].duration = Date.now() - timeline[interactionIndex].time // updating the interaction that is no more visible

            })

            // DEBUG
            console.log('___________');
            timeline.forEach(interaction => {
                if (interaction.duration === null) console.log(interaction);
            });
            // DEBUG



            
        }
    }

    useEffect(() => {
        window.onload = () => {
            const setTrackableElements = () => {
                let trackableElements = Array.from(document.querySelectorAll('[id^="track-el-"]'));
            
                trackableElements = trackableElements.map( (el, index) => {
                    
                    const positionBottom = (
                        index + 1 < trackableElements.length
                            ? trackableElements[index + 1].getBoundingClientRect().top
                            : el.getBoundingClientRect().bottom
                    )
    
                    trackableElements[index].elPosition = {
                        top: el.getBoundingClientRect().top,
                        bottom: positionBottom,
                    }
    
                    return trackableElements[index];
                })
                console.log('FOI!')
                setTrackEl(trackableElements);
            }

            if (window.scrollY !== 0) {
                const currentScrollY = window.scrollY;
                const currentScrollX = window.scrollX;

                window.scroll(0,0);
                setTrackableElements();
                window.scroll(currentScrollX, currentScrollY);
            } else {
                setTrackableElements();
            }
        }
    }, []);

    useEffect(() => {
        document.addEventListener('scroll', updateTimeline);
            
        return () => document.removeEventListener('scroll', updateTimeline);
    }, [trackEl])

    // ############ END TEST TRACKING ############ 


    // global style
    const { salesPage: { data: { phone } } } = useContext(store);
    
    // local style
    const [formModalIsOpen, setFormModalIsOpen] = useState(false);

    useEffect( () => {
        if (phone) setFormModalIsOpen(false);
    }, [phone] );

    return (
        <Container>

            <Header>
                <div>
                    <span>MULHERES<br/>CHOCADAS!</span>
                </div>

                <h1><span>Mulher de Saco Cheio da ROTINA CORRIDA e ESTRESSANTE Resolveu Dar Um BASTA</span></h1>

                <p>Descubra abaixo como essa mulher deu um BASTA na rotina estressante e cansativa de <Span bold>trabalhar bastante</Span>, e ainda ter de <Span bold>cuidar de filho, do marido e da casa</Span>...</p>

            </Header>


<Main>
    <P cssStyle="border-top: 5px solid #f00" id="track-el-start">Cara leitora,</P>
    <P>tenho uma <Span bold>PERGUNTA ÍNTIMA</Span> para lhe fazer. Se me permitir, é claro.</P>
    <P>Sei que é uma pergunta TÃO ÍNTIMA que pode te deixar profundamente <Span bold>ARRASADA</Span> com a sua PRÓPRIA resposta</P>
    <P>... Mas, ainda assim, preciso lhe perguntar isso.</P>
    <P>É necessário ter CORAGEM pra refletir, verdadeiramente, sobre isso.</P>
    <P bold fontColor="#d81414">Inclusive, se você NÃO TEM toda essa coragem, é melhor PARAR DE LER agora mesmo.</P>

    <FadeBox>
        <P>...</P>
        <P>Bom, se você ainda está lendo, é porque tem culhão. Então vamos à essa <Span bold>pregunta íntima</Span>...</P>
        
        {
            !phone ? <Fade /> : null
        }
    </FadeBox>
    
    {/* MODAL FORM */}
    <Modal
        isOpen={formModalIsOpen}
        onRequestClose={setFormModalIsOpen.bind(null, false)}
    >
        <Form />
    </Modal>

    {/* BTN READ MORE */}
    {
        !phone
            ? <BtnReadMore onClick={setFormModalIsOpen.bind(null, true)}>CONTINUAR LENDO</BtnReadMore>
            : null
    }

    {/* REMAINDER OF THE COPY */}
    {
        !phone
            ? <motion.div
                initial={{ opacity: 0, y: 500 }}
                animate={{ opacity: 1, y: 0 }}
              > 
                <P cssStyle="border-top: 5px solid #f00" id="track-el-presentation">Mas primeiro, deixa eu me apresentar. Meu nome é Leiliane.</P>
                <P>Eu, e acredito que você também, tenho que me <Span bold>desdobrar em 5 para cuidar da casa, da família, do filho(a), do meu trabalho e ainda dar atenção ao marido</Span>.</P>
                <P>Uma rotina dessas é bem corrida e quiçá bem estressante, por vezes. Não é mesmo?</P>

                <P>Quero te apresentar uma pessoa que vem passando pelos <Span bold>mesmos problemas</Span> que <Span bold>você</Span> está enfrentando.</P>

                <P>Em seguida, se me permitir, vou lhe fazer aquela <Span bold>PERGUNTA DESCONFORTÁVEL</Span>.</P>

                <P>Vou te apresentar a Beatriz.</P>
                <P>A Bia, assim como eu, e imagino que como você, também tem um dia a dia corrido e precisa <Span bold>se desdobrar em várias para cuidar do trabalho, da família e da casa</Span>.</P>
                <P>Ela demonstrou que estava BEM DIFÍCIL se manter firme. E tinha momentos em que a vontade de desistir e jogar tudo pro alto de tanto caos e ESTRESSE NA ROTINA, já havia passado pela mente dela.</P>

                <P><Span bold>Eii! Fica aqui!</Span> Se você quer saber o SEGREDO que ajudou a Bia a <Span bold>sair desse buraco</Span>, <Span bold>continue lendo!</Span></P>

                <P>A Bia precisava dedicar horas para fazer supermercado, higienizar, descascar e cozinhar para ela e para família. Além de ter que cuidar da casa, dar atenção ao filho(a) e trabalhar bastante.</P>
                <P>O filho dela estava comendo muito mal. A <Span bold fontColor="#d81414">relação com o marido já estava esfriando</Span>. E a rotina... Cada vez mais INSUPORTÁVEL.</P>
                <P>Só de escutar o assunto alimentação, ela já ficava com dor de cabeça.</P>
                <P>Lembrar que precisa levantar mais cedo para fazer supermercado, passar todo o horário de almoço cozinhando... e depois voltar correndo para o trabalho.</P>
                <P>Isso quando ela não pedia entrega de comida e se obrigava a esperar quase 1 hora ou mais para o almoço chegar e ter que <Span bold>almoçar às pressas</Span>.</P>
                <P>E acabava se obrigando a dar muita comida NÃO saudável para seu filho(a).</P>
                <P>Ela cogitou contratar uma cozinheira. Mas quando percebeu que iria <Span bold fontColor="#d81414">perder toda sua privacidade</Span> e gastar muito tempo procurando alguém de confiança, ela desistiu.</P>
                <P cssStyle="border-top: 5px solid #f00" id="track-el-mas-surpreendentemente" bold>mas, SURPREENDENTEMENTE, a Bia encontrou uma solução.</P>
                <P>Quer saber que solução é essa?</P>
                <P>Vou te contar.</P>
                <P>Mas antes...</P>
                
                {/*  */}
                <H1 cssStyle="border-top: 5px solid #f00" id="track-el-pergunta-intima">Uma pergunta íntima...</H1>

                <P>Agora, se você me permite, te convido a fazer uma reflexão ÍNTIMA sobre VOCÊ MESMA...</P>
                <P>Essa reflexão pode ser REALMENTE DOLOROSA...</P>
                <P>Mas... ainda assim, é preciso.</P>
                <P>Lá vai:</P>
                <P>No final de um dia corrido, quando você deita a cabeça no travesseiro... e você sente que trabalha muito, se dedica bastante à sua família, à sua casa...</P>
                <P>E mesmo assim parece que toda essa rotina corrida, dolorosa e estressante NUNCA ACABA.</P>
                <P>E pior, ela te estressa tanto que por vezes você quase <Span bold>EXPLODE</Span> com seu marido, com seu filho(a)</P>

                <P cssStyle="font-style: italic">(olha, sei que é difícil, mas você precisa refletir sobre isso e ser verdadeiramente SINCERA com você mesma)</P>
                <P>Em algum momento, passou pela sua cabeça o seguinte questionamento:</P>
                
                <P cssStyle="border-top: 5px solid #f00" id="track-el-questionamento" bold fontColor="#d81414" fontSize="2rem" marginBottom="0px" cssStyle="font-style: italic">"</P>
                <P bold fontColor="#d81414">Será que isso tudo vale a pena?</P>
                <P bold fontColor="#d81414">Será que trabalhar e me dedicar tanto assim, é o melhor caminho?</P>
                <P bold fontColor="#d81414">Afinal de contas, estou realmente feliz com a vida de mãe, de esposa, de trabalhadora e dona de casa que venho tendo?</P>
                <P bold fontColor="#d81414">Será mesmo que estou feliz com essa vida?</P>
                <P bold fontColor="#d81414">Ainda mais vendo minhas amigas e conhecidas tendo uma vida linda nas redes sociais</P>
                <P bold fontColor="#d81414">enquanto eu estou aqui nessa rotina frenética e corrida.</P>
                <P bold fontColor="#d81414" marginBottom="0px">Será que é isso mesmo que quero pra minha vida?</P>
                <P bold fontColor="#d81414" fontSize="2rem" cssStyle="font-style: italic">"</P>
                
                <P>...</P>
                <P>Bom, óbvio que é preciso se dedicar à sua família e ao seu trabalho.</P>
                <P bold>MAS...</P>
                <P>Parece que você trabalha e trabalha, se dedica e se dedica e ainda não consegue dar a condição digna que você sempre sonhou pra você, pro seu filho(a), seu marido...</P>
                <P>E por mais que você tenha atingido a condição que sempre quis, dá aquela sensação de que se você parar, por um dia sequer, tudo desmorona.</P>

                {/*  */}
                <H1 cssStyle="border-top: 5px solid #f00" id="track-el-lembra-da-bia">Lembra da Bia?</H1>

                <P>Há alguns dias recebi uma mensagem dela.</P>
                <P>Bia me contou o quão MARAVILHADA ficou, quando experimentou uma forma NÃO CONVENCIONAL de ganhar mais tempo no seu dia a dia.</P>
                <P>Ela disse que parecia LITERALMENTE que o dia dela tinha 30 HORAS.</P>
                <P>Ela ainda tinha uma vida corrida. Mas agora...</P>
                <P>Não precisava mais se preocupar com alimentação e também tinha <Span bold>mais tempo</Span> para ela, pra <Span bold>descansar</Span>, pra <Span bold>curtir a preguiça</Span>.</P>
                <P>E a rotina dela, ainda que corrida, estava muito MAIS LEVE e DIVERTIDA. Ela conseguia aproveitar mais o tempo com o maridão e com filho(a).</P>

                {/*  */}
                <P fontSize="1.8rem">O que VOCÊ faria se tivesse 6 horas a mais no seu dia?</P>
                <P fontSize="1.8rem">Se você tiver, a partir de agora, um dia de 30 horas, o que faria com essas 6 horas extras?</P>

                <P>Descançaria? Dormiria um pouco mais? Daria aquela esticada na preguiça depois de um dia corrido? Dedicaria mais tempo para ficar o maridão e filho(a)?</P>
                <P>Bom, eu faria exatamente isso. Afinal você e eu também somos humanas. Né?</P>

                {/*  */}
                <H1 cssStyle="border-top: 5px solid #f00" id="track-el-abrir-o-segredo">Fiquei tão feliz pela Bia que resolvi <Span bold>ABRIR esse SEGREDO</Span></H1>

                <P>essa forma não convencional de GANHAR MAIS TEMPO e ter refeições muito gostosas e saudáveis para a família disponível EM CASA o tempo todo.</P>
                <P>E o melhor de tudo…</P>
                <P bold>Sem estresse!</P>
                <P bold>Sem cozinhar!</P>
                <P bold>SEM PERDER TEMPO!</P>

                <P>Uma rotina LEVE e DIVERTIDA é, no final das contas, o que a gente realmente quer. Não é mesmo?</P>

                <P>Bom, comentei com você que eu trabalho bastante. Meu trabalho é preparar comida caseira, aquela com o sabor caseiro autêntico, sabe? com o sabor da comida da vovó.</P>
                <P fontSize="1.8rem">Você <Span bold>NÃO VAI ACREDITAR</Span> no que vou REVELAR a baixo!</P>
                <P>Já fui cozinheira em vários restaurantes em Porto Alegre, já cozinhei para hotel renomado da cidade.</P>
                <P>E hoje tenho uma cozinha na qual preparo comida caseira de verdade e cozinho sob demanda</P>
                <P>para pessoas que <Span bold>não tem tempo</Span> para ir à feira, fazer boas compras e cozinhar refeições completas, mega saborosas e saudáveis para seu marido e filho(s).</P>
                
                <P fontSize="1.8rem" cssStyle="text-decoration: underline">(descubra o <Span bold>SEGREDO DA BIA</Span>, em seguida.)</P>

                <P id="track-el-depoimentos1" cssStyle="border-top: 5px solid #f00">Da uma olhada no que ESSAS MULHERES dizem quando experimentam minha comida:</P>

                {/* [[ testimonials: depoimentos que comprovam que a comida é realmente boa ]] */}
                <TestimonialsImages>
                    {
                        (() => {
                            const testimonialsImages = [];

                            for (let i = 0; i <= 16; i++) {
                                testimonialsImages.push(<img key={i} alt="depoimento" src={require(`../../img/testimonials/${i}.jpg`)} />)
                            }
                            return testimonialsImages;
                        })()
                    }


                    {/* <img key="0" alt="depoimento" src={require('../../img/testimonials/0.jpg')} />
                    <img key="1" alt="depoimento" src={require('../../img/testimonials/1.jpg')} />
                    <img key="2" alt="depoimento" src={require('../../img/testimonials/2.jpg')} />
                    <img key="3" alt="depoimento" src={require('../../img/testimonials/3.jpg')} />
                    <img key="4" alt="depoimento" src={require('../../img/testimonials/4.jpg')} />
                    <img key="5" alt="depoimento" src={require('../../img/testimonials/5.jpg')} />
                    <img key="6" alt="depoimento" src={require('../../img/testimonials/6.jpg')} />
                    <img key="7" alt="depoimento" src={require('../../img/testimonials/7.jpg')} />
                    <img key="8" alt="depoimento" src={require('../../img/testimonials/8.jpg')} />
                    <img key="9" alt="depoimento" src={require('../../img/testimonials/9.jpg')} />
                    <img key="10" alt="depoimento" src={require('../../img/testimonials/10.jpg')} />
                    <img key="11" alt="depoimento" src={require('../../img/testimonials/11.jpg')} />
                    <img key="12" alt="depoimento" src={require('../../img/testimonials/12.jpg')} />
                    <img key="13" alt="depoimento" src={require('../../img/testimonials/13.jpg')} />
                    <img key="14" alt="depoimento" src={require('../../img/testimonials/14.jpg')} />
                    <img key="15" alt="depoimento" src={require('../../img/testimonials/15.jpg')} />
                    <img key="16" alt="depoimento" src={require('../../img/testimonials/16.jpg')} /> */}
                </TestimonialsImages>

                {/*  */}
                <H1 cssStyle="border-top: 5px solid #f00" id="track-el-a-forma-nao-convencional">A forma não convencional</H1>

                <P>que TRANSFORMOU a rotina da Bia em uma rotina LEVE, DESCONTRAÍDA e DIVERTIDA foi um Club de <Span bold>Refeições Caseiras de Verdade</Span> (sabor caseiro autêntico) e congelada.</P>
                <P>De verdade mesmo, SEM NADA de conservantes, corantes, e nenhum desses "antes" que usam por aí. Até por que o gelo é o melhor conservante natural.</P>
                <P>Uso técnicas de congelamento e instruções de descongelamento para que o sabor fique idêntico ao <Span bold>feito na hora</Span>.</P>
                
                <P bold>Sem perder sabor</P>
                <P bold>Sem perder qualidade e</P>
                <P bold>SEM PERDER TEMPO!</P>

                <P>Isso mesmo que você leu.</P>
                <P>Foi um Club de Refeições Caseiras que TRANSFORMOU a rotina da Bia.</P>
                <P>Esse club se chama <Span bold>Tia Leila Club</Span>.</P>
                <P>E TRANSFORMOU a ROTINA dessas e muitas outras mulheres.</P>

                <P>Da uma olhada nisso:</P>
                {/* [[ testimonials: depoimentos de pessoas com sua rotina transformada pelo Tia Leila Club ]] */}
                <TestimonialsImages  cssStyle="border-top: 5px solid #f00" id="track-el-depoimentos2">
                    {
                        (() => {
                            const testimonialsImages = [];

                            for (let i = 17; i <= 21; i++) {
                                testimonialsImages.push(<img key={i} alt="depoimento" src={require(`../../img/testimonials/${i}.jpg`)} />)
                            }
                            return testimonialsImages;
                        })()
                    }
                </TestimonialsImages>

                {/*  */}
                <H1 cssStyle="border-top: 5px solid #f00" id="track-el-o-club-funciona-assim">O Club funciona assim:</H1>
                
                <P><Span bold fontBlue>#1</Span> Você escolhe diretamente pelo celular os pratos caseiros que vai querer comer durante a semana, ou alguns dias da semana, (<Span bold>isso mesmo, você é quem escolhe seu próprio cardápio da semana</Span>)</P>
                <P><Span bold fontBlue>#2</Span> Eu e minha equipe cozinhamos com todo o amor do mundo pra você e pra sua família (<Span bold>são pratos de dar água na boca</Span>)</P>
                <P><Span bold fontBlue>#3</Span> A gente te entrega semanalmente, no dia e horário que VOCÊ escolher (assim você não enche seu freezer)</P>

                <P bold>você pode:</P>
                <P marginBottom="0px"><Span bold>&gt;</Span> pular uma semana</P>
                <P marginBottom="0px"><Span bold>&gt;</Span> mudar a quantidade de refeições sempre que você quiser</P>
                <P marginBottom="0px"><Span bold>&gt;</Span> cancelar a qualquer momento</P>
                <P marginBottom="0px"><Span bold>&gt;</Span> escolher outras refeições</P>
                <P><Span bold>&gt;</Span> e muito mais!</P>

                <P>Você é quem manda!</P>
                <P bold>Sem ir as compras</P>
                <P bold>Sem cozinhar</P>
                <P bold>Sem precisar limpar...</P>
                <P>Imagina seu dia a dia assim!</P>

                <P fontSize="1.8rem" fontColor="#d81414">A exata mesma comida que faço para MINHA FAMÍLIA, que dou para meus filhos, vou preparar pra você e <Span bold>sua família</Span> também.</P>

                <P cssStyle="border-top: 5px solid #f00" id="track-el-objeções">Talvez você esteja se perguntando:</P>

                <P>"será que a Leiliane realmente sabe do que está falando? Posso acreditar nela?"</P>
                <P>Em primeiro lugar, pode me chamar de Leila. As pessoas mais próximas me chamam assim.</P>
                <P>Tenho 4 filhos.</P>
                <P>Trabalhei a vida inteira, desde dos 13 anos. Desde novinha.</P>
                <P>Então... Sei muito bem o que é ter uma rotina corrida (principalmente com filho)</P>
                <P>e o quanto essa rotina pode se tornar estressante, quando você não tem alguns momentos do dia pra ficar tranquila e sequer fazer uma refeição em paz!</P>
                
                <P fontColor="#d81414">Com o passar dos anos uma rotina dessas...</P>
                <P fontColor="#d81414" bold>Desgasta casamentos.</P>
                <P fontColor="#d81414" bold>Separa famílias.</P>

                <P fontSize="1.8rem">você acha que não tem tempo?</P>

                <P>É justamente por você ter pouco tempo que perder essa oportunidade significa <Span bold>desperdiçar seu valioso tempo de vida</Span> e aceitar uma rotina cada vez mais pesada e FRUSTRANTE.</P>
                <P>Receber Refeições Caseiras <Span bold>prontinhas</Span> e que com pouco mais de 7min no microondas ou banho maria está quentinha e pronta pra comer...</P>
                <P>Pode acreditar, isso vai TIRAR um peso enorme da suas costas.</P>

                <P bold>Você tem interesse em:</P>
                <P><Span bold>&gt;</Span> Uma rotina mais PRODUTIVA?</P>
                <P><Span bold>&gt;</Span> Uma rotina FELIZ, LEVE e DIVERTIDA com seu filho(a) e seu marido?...</P>
                <P><Span bold>&gt;</Span> Comer uma Refeição Caseira muito gostosa e nutritiva, vai elevar seus níveis de energia durante o dia, te dando muito MAIS PRODUTIVIDADE.</P>
                <P>Isso te interessa?</P>
                <P>Pois é justamente isso que você vai ter ao fazer parte do <Span bold>Tia Leila Club</Span>.</P>

                <P fontSize="1.8rem">Acha que isso não é ou não funciona pra você?</P>

                <P>Você é mulher?</P>
                <P>Tem filho(s)?</P>
                <P>Tem marido?</P>
                <P>Trabalha bastaste?</P>
                <P>Tem uma rotina corrida?</P>
                <P>Tem que se preocupar com a casa?</P>
                <P>Se você respondeu "SIM" para pelo menos 1 destas perguntas, o Tia Leila Club, vai <Span bold>SALVAR SUA ROTINA</Span>!</P>
                <P>Assim como salvou a rotina dessas mulheres:</P>

                {/* [[ testimonials: depoimentos de pessoas com sua rotina transformada pelo Tia Leila Club ]] */}
                <TestimonialsImages>
                    {
                        (() => {
                            const testimonialsImages = [];

                            for (let i = 22; i <= 25; i++) {
                                testimonialsImages.push(<img key={i} alt="depoimento" src={require(`../../img/testimonials/${i}.jpg`)} />)
                            }
                            return testimonialsImages;
                        })()
                    }
                </TestimonialsImages>

                <P fontSize="1.8rem" fontColor="#d81414">A cada dia que passa sem uma solução dessas na sua vida,</P>
                <P fontSize="1.8rem" fontColor="#d81414">significa <Span bold>aceitar uma rotina cada vez mais pesada e FRUSTRANTE</Span>.</P>

                {/*  */}
                <H1>Ok. Mas quanto vai custar isso tudo?</H1>

                <P>SIMPLES:</P>
                <P>QUANTO VALE <Span bold>pra você</Span></P>
                <P><Span bold>&gt;</Span> Ter um momento do dia para aproveitar seu filho(a)?</P>
                <P><Span bold>&gt;</Span> Não precisar enfrentar trânsito e filas para ir até os supermercados?</P>
                <P><Span bold>&gt;</Span> Ter uma rotina LEVE e DIVERTIDA com seu marido e seu filho(a)?</P>
                <P><Span bold>&gt;</Span> Deitar tranquila à noite, sabendo que seu filho(s) vai comer uma comida nutritiva e saudável.</P>

                <P fontSize="1.5rem" bold>Quanto você acha que vai custar cada refeição?</P>

                <P>tendo em vista que:</P>
                <P><Span bold>&gt;</Span> São refeições CASEIRAS de verdade com o <Span bold>legítimo</Span> sabor caseiro.</P>
                <P><Span bold>&gt;</Span> refeições completas</P>
                <P><Span bold>&gt;</Span> saudáveis e nutritivas</P>
                <P><Span bold>&gt;</Span> <Span bold>bem servidas, que alimentam mesmo</Span>. Que matam a fome.</P>
                <P><Span bold>&gt;</Span> são extremamente práticas. Em pouco mais de <Span bold fontColor="#d81414">5min</Span> no microondas está pronta pra comer.</P>
                <P><Span bold>&gt;</Span> VOCÊ ESCOLHE SEU PRÓPRIO CARDÁPIO DA SEMANA!</P>

                <P>Achou que era só isso?</P>
                <P fontColor="#d81414">TEM MAIS:</P>
                <P>você vai poder ME PEDIR, direto pelo Whatsapp, pra preparar refeições para necessidades específicas</P>
                <P>como refeições FIT, papinhas para crianças, refeições para hipertensos, diabéticos, para intolerantes à lactose, ao glúten, e <Span bold>qualquer outra necessidade específica que você tenha</Span>.</P>
                <P>E MAIS!</P>
                <P>Qualquer dúvida, necessidade ou pedido pessoal que você queira me fazer, vou deixar meu <Span bold>Whatsapp</Span> disponível 7 dias por semana para você.</P>
                <P>Isso mesmo. Esse é o nível de atendimento e comprometimento que tenho com quem faz parte do Club.</P>
                <P>É como se você tivesse uma cozinheira pessoal que nem sequer precisa usar o seu fogão.</P>
                <P>Tem empresas por aí que cobram R$ 40,00, R$ 45,00 por apenas uma refeição congelada com aquele gosto chocho, sabe?</P>
                <P>E ainda com uma miséria de comida!</P>
                <P>E não entregam nem metade do nível de qualidade que te apresentei e PROVEI aqui, com os depoimentos das <Span bold>vidas que o Tia Leila Club transformou</Span>.</P>
                <P>AGORA FINALMENTE....</P>
                <P bold>Chuta um valor que você acha que isso tudo pode custar...</P>
                <P>Chutou?</P>
                <P><Span bold>Tenho certeza</Span> que esse valor é maior que o preço real.</P>

                {/*  */}
                <P cssStyle="border-top: 5px solid #f00" id="track-el-planos" fontSize="1.8rem">Aqui estão os planos. Você que escolhe:</P>
                <P>(Esses preços estão tão ridiculamente baixos, que minha equipe já está me pressionando para aumentá-los em seguida. Então se agiliza porque vai aumentar logo logo.)</P>

                <P bold>5 refeições: 30,90 por refeição</P>
                <P bold>9 refeições: 19,90 por refeição</P>
                <P bold>12 refeições: 15,90 por refeição</P>

                {/* quero ficar sabendo se a pessoa clicou no CTA ou não. para isso, antes de redirecionar para o wpp link, vou bater na api e informar que o phone number (xx) xxxxx-xxxxx clicou no linnk  */}
                <Link to="/checando-vagas">
                    <CTA onClick={ () => console.log('salesLetterPage tracked') }>Garantir meu lugar no Tia Leila Club</CTA>
                </Link>

                <P marginTop="40px">Quanto você gasta cada vez que pede comida por aplicativo? Com certeza é muito mais do que 12,90. Fora a tele entrega.</P>
                <P>Só aqueles salgadinhos ou bolachinhas (que <Span bold>DESTROEM</Span> a <Span bold>saúde</Span> do <Span bold>seu filho</Span>) do supermercado já custam mais que 12,90.</P>

                {/*  */}
                <P fontSize="2rem">Isso é muito mais questão de <Span bold>PRIORIDADES</Span> do que falta de dinheiro.</P>
                <P fontSize="1.5rem">Concorda?</P>
                <P>A <Span bold>saúde do seu filho</Span>(s) é uma prioridade para você?</P>
                <P>A <Span bold>sua produtividade</Span> é uma prioridade pra você?</P>
                <P>E seu <Span bold>relacionamento com seu marido</Span>?</P>

                <P>Imagina quanto você vai economizar só de tele entrega.</P>
                <P>Você vai poder pagar no dinheiro, no cartão de crédito ou débito, com transferência bancária, com boleto. Ou dividir em mais de uma destas formas de pagamento, se quiser.</P>
                <P>100% flexível. 100% prático.</P>

                {/*  */}
                <H1 cssStyle="border-top: 5px solid #f00" id="track-el-risco-zero">Nesse momento, o seu risco financeiro é ZERO!</H1>

                <P>Você vai receber todas as refeições que você escolheu, em casa.</P>
                <P>Você vai prová-las.</P>
                <P>E se <Span cssStyle="text-decoration: underline">por alguma razão</Span>, <Span bold>qualquer que seja</Span>, você não gostar,</P>

                <P bold>VOU TE DEVOLVER 100% DO DINHEIRO QUE VOCÊ PAGOU NESSA REFEIÇÃO.</P>
                <P bold>É isso mesmo.</P>
                <P bold>Você leu certo.</P>
                <P bold>É só me enviar uma mensagem no WhatsApp e eu te devolvo INTEGRALMENTE TODO O SEU INVESTIMENTO NESSA REFEIÇÃO!</P>
                <P bold>SEM MIMIMI.</P>
                <P bold>SEM LETRAS MIÚDAS.</P>
                <P bold>SEM ASTERISCOS.</P>
                <P bold>Basta UMA MENSAGEM e você vai ter 100% do dinheiro que você investiu nessa refeição O MAIS RÁPIDO POSSÍVEL.</P>
                <P bold>PODE ACREDITAR.</P>
                
                <P>Dou esse nível de garantia por que confio DEMAIS no poder que o Tia Leila Club tem de transformar a TUA rotina.</P>
                <P>Assim como estas mulheres já comprovaram:</P>
                {/* [[ testimonials: depoimentos de pessoas com sua rotina transformada pelo Tia Leila Club ]] */}
                <TestimonialsImages>
                    {
                        (() => {
                            const testimonialsImages = [];

                            for (let i = 26; i <= 28; i++) {
                                testimonialsImages.push(<img key={i} alt="depoimento" src={require(`../../img/testimonials/${i}.jpg`)} />)
                            }
                            return testimonialsImages;
                        })()
                    }
                </TestimonialsImages>

                <P fontSize="1.8rem">A partir desse momento você não tem NADA a perder</P>
                <P fontSize="1.8rem">Em CLICAR NO BOTÃO ABAIXO E <Span bold>GARANTIR SEU LUGAR</Span> no Tia Leila Club.</P>
                <P>Qualquer outra decisão que não seja clicar nesse botão, simplesmente, não é uma decisão inteligente.</P>
                <P>Você percebeu?</P>
                <P>Nesse momento <Span bold>você já está pronta</Span> para fazer parte desse Club, que vai dar outra perspectiva para sua rotina.</P>

                {/*  */}
                <H1 cssStyle="border-top: 5px solid #f00" id="track-el-urgencia-e-escassez" fontColor="#d81414">Mas isso NÃO garante teu acesso</H1>

                <P bold>A gente já tem participantes no Club e muitas pessoas neste momento estão lendo (ou já leram) o que você está lendo agora.</P>
                <P bold>Mas é humanamente impossível pra mim e minha equipe manter um atendimento personalizado e no nível de cuidado que a gente entrega, se muita gente entrar de uma só vez pro Club.</P>
                <P bold>Infelizmente isso me obriga a estipular um <Span fontColor="#d81414">LIMITE DE VAGAS</Span> para entrar no Club essa semana.</P>
                <P bold>Limite esse que pode ser preenchido ainda HOJE.</P>
                <P bold>Por isso, já te peço desculpas de antemão.</P>
                <P bold fontColor="#d81414">SÃO APENAS 30 VAGAS.</P>
                <P bold>Vou dar a todos chances iguais de participar.</P>
                <P bold>Por isso, o preenchimento será meramente por ordem de chegada.</P>
                <P bold>Infelizmente, eu não tenho como garantir o atendimento de todos os pedidos.</P>
                <P bold>NEM DE ABRIR novas vagas nos próximos meses - se os nossos objetivos forem atingidos essa semana.</P>
                
                <P>Isso é tudo.</P>
                <P>Vou ficar muito feliz em te ver do outro lado. Vai ser um prazer imenso poder te ajudar a tornar seu dia a dia mais feliz.</P>
                {/* quero ficar sabendo se a pessoa clicou no CTA ou não. para isso, antes de redirecionar para o wpp link, vou bater na api e informar que o phone number (xx) xxxxx-xxxxx clicou no linnk  */}
                <Link to="/checando-vagas">
                    <CTA onClick={ () => console.log('salesLetterPage tracked') }>Garantir meu lugar no Tia Leila Club</CTA>
                </Link>

                <P>Ainda que você não consiga uma vaga. Espero, sinceramente, que sua rotina se torne mais agradável.</P>
                <P>foi um prazer conversar com você.</P>
                {/* quero ficar sabendo se a pessoa clicou no CTA ou não. para isso, antes de redirecionar para o wpp link, vou bater na api e informar que o phone number (xx) xxxxx-xxxxx clicou no linnk  */}
                <Link to="/checando-vagas">
                    <CTA onClick={ () => console.log('salesLetterPage tracked') }>Garantir meu lugar no Tia Leila Club</CTA>
                </Link>
                {/* [colocar um timer próximo do CTA para gerar mais urgência ainda] */}

                <P>Um beijo.</P>
            </motion.div>
            : null    
    }


</Main>

        {
            phone
                ? <Footer>
                    <IconSupport />
                    <Contact>
                        <h2>Alguma Dúvida?</h2>
                        <h5>Estamos aqui para ajudar</h5>
                        <p
                            onClick={ () => window.open("https://api.whatsapp.com/send?phone=5551998152092&text=Ol%C3%A1!%20Estou%20com%20a%20seguinte%20d%C3%BAvida%3A%20")}
                        ><IconWpp /> (51) 99815-0292</p>
                        <p
                            onClick={ () => window.open("tel:5551998150292")}
                        ><IconPhoneCall /> (51) 99815-0292</p>
                    </Contact>
                </Footer> 
                : null
        }            
        </Container>
    )
}

export default SalesPage;
