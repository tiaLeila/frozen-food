/** FLEXBOX - FLEX CONTAINER
 * flexContainerProps
 *      é um array de funções que aplicam propriedades css de um Flex Container.
 *      Aplicam as propriedades: flex-direction, flex-wrap, flex-flow, justify-content, align-items, align-content
 */
export const flexContainerProps = [
    // display: flex
    ({ flexContainer }) => flexContainer ? `display: flex;` : '', 
    // flex-direction
    ({ fd }) => fd ? `flex-direction: ${fd};` : '',
    // flex-wrap ('wrap' by default) 
    ({ fw }) => fw ? `flex-wrap: ${fw};` : '',
    // flex-flow
    ({ ff }) => ff ? `flex-flow: ${ff};` : '',
    // justify-content
    ({ jc }) => jc ? `justify-content: ${jc};` : '',
    // align-items
    ({ ai }) => ai ? `align-items: ${ai};` : '',
    // align-content
    ({ ac }) => ac ? `align-content: ${ac};` : '',

    // flex container with media queries

    // display: flex
    ({ xs_flexContainer }) => xs_flexContainer ? `@media (min-width: 0px){ display: flex !important; }` : '', 
    ({ s_flexContainer }) => s_flexContainer ? `@media (min-width: 600px){ display: flex !important; }` : '', 
    ({ m_flexContainer }) => m_flexContainer ? `@media (min-width: 768px){ display: flex !important }` : '', 
    ({ l_flexContainer }) => l_flexContainer ? `@media (min-width: 1024px){ display: flex !important }` : '', 
    ({ xl_flexContainer }) => xl_flexContainer ? `@media (min-width: 1366px){ display: flex !important }` : '', 
    // flex-direction
    ({ xs_fd }) => xs_fd ? `@media (min-width: 0px){ flex-direction: ${xs_fd} !importante; }` : '',
    ({ s_fd }) => s_fd ? `@media (min-width: 600px){ flex-direction: ${s_fd} !importante; }` : '',
    ({ m_fd }) => m_fd ? `@media (min-width: 768px){ flex-direction: ${m_fd} !importante; }` : '',
    ({ l_fd }) => l_fd ? `@media (min-width: 1024px){ flex-direction: ${l_fd} !importante; }` : '',
    ({ xl_fd }) => xl_fd ? `@media (min-width: 1366px){ flex-direction: ${xl_fd} !importante; }` : '',
    // flex-wrap ('wrap' by default) 
    ({ xs_fw }) => xs_fw ? `@media (min-width: 0px){ flex-wrap: ${xs_fw} !important; }` : '',
    ({ s_fw }) => s_fw ? `@media (min-width: 600px){ flex-wrap: ${s_fw} !important; }` : '',
    ({ m_fw }) => m_fw ? `@media (min-width: 768px){ flex-wrap: ${m_fw} !important; }` : '',
    ({ l_fw }) => l_fw ? `@media (min-width: 1024px){ flex-wrap: ${l_fw} !important; }` : '',
    ({ xl_fw }) => xl_fw ? `@media (min-width: 1366px){ flex-wrap: ${xl_fw} !important; }` : '',
    // flex-flow
    ({ xs_ff }) => xs_ff ? `@media (min-width: 0px){ flex-flow: ${xs_ff} !important; }` : '',
    ({ s_ff }) => s_ff ? `@media (min-width: 600px){ flex-flow: ${s_ff} !important; }` : '',
    ({ m_ff }) => m_ff ? `@media (min-width: 768px){ flex-flow: ${m_ff} !important; }` : '',
    ({ l_ff }) => l_ff ? `@media (min-width: 1024px){ flex-flow: ${l_ff} !important; }` : '',
    ({ xl_ff }) => xl_ff ? `@media (min-width: 1366px){ flex-flow: ${xl_ff} !important; }` : '',
    // justify-content
    ({ xs_jc }) => xs_jc ? `@media (min-width: 0px){ justify-content: ${xs_jc} !important; }` : '',
    ({ s_jc }) => s_jc ? `@media (min-width: 600px){ justify-content: ${s_jc} !important; }` : '',
    ({ m_jc }) => m_jc ? `@media (min-width: 768px){ justify-content: ${m_jc} !important; }` : '',
    ({ l_jc }) => l_jc ? `@media (min-width: 1024px){ justify-content: ${l_jc} !important; }` : '',
    ({ xl_jc }) => xl_jc ? `@media (min-width: 1366px){ justify-content: ${xl_jc} !important; }` : '',
    // align-items
    ({ xs_ai }) => xs_ai ? `@media (min-width: 0px){ align-items: ${xs_ai} !important; }` : '',
    ({ s_ai }) => s_ai ? `@media (min-width: 600px){ align-items: ${s_ai} !important; }` : '',
    ({ m_ai }) => m_ai ? `@media (min-width: 768px){ align-items: ${m_ai} !important; }` : '',
    ({ l_ai }) => l_ai ? `@media (min-width: 1024px){ align-items: ${l_ai} !important; }` : '',
    ({ xl_ai }) => xl_ai ? `@media (min-width: 1366px){ align-items: ${xl_ai} !important; }` : '',
    // align-content
    ({ xs_ac }) => xs_ac ? `@media (min-width: 0px){ align-content: ${xs_ac} !important; }` : '',
    ({ s_ac }) => s_ac ? `@media (min-width: 600px){ align-content: ${s_ac} !important; }` : '',
    ({ m_ac }) => m_ac ? `@media (min-width: 768px){ align-content: ${m_ac} !important; }` : '',
    ({ l_ac }) => l_ac ? `@media (min-width: 1024px){ align-content: ${l_ac} !important; }` : '',
    ({ xl_ac }) => xl_ac ? `@media (min-width: 1366px){ align-content: ${xl_ac} !important; }` : '',
]

/** FLEXBOX - FLEX ITEMS
 * flexItemsProps
 *      é um array de funções que aplicam propriedades css de um Flex Item.
 *      Aplicam as propriedades: flex-grow, flex-shrink, flex-basis, flex, align-self
 */
export const flexItemsProps = [
    // flex-grow
    ({ fg }) => fg ? `flex-grow: ${fg};` : '',
    // flex-shrink
    ({ fs }) => fs ? `flex-shrink: ${fs};` : '',
    // flex-basis
    ({ fb }) => fb ? `flex-basis: ${fb};` : '',
    // flex
    ({ flex }) => flex ? `flex: ${flex};` : '',
    // align-self
    ({ aSelf }) => aSelf ? `align-self: ${aSelf};` : '',
    
    // flex items with media queries

    // flex-grow
    ({ xs_fg }) => xs_fg ? `@media (min-width: 0px){ flex-grow: ${xs_fg} !importante; }` : '',
    ({ s_fg }) => s_fg ? `@media (min-width: 600px){ flex-grow: ${s_fg} !importante; }` : '',
    ({ m_fg }) => m_fg ? `@media (min-width: 768px){ flex-grow: ${m_fg} !importante; }` : '',
    ({ l_fg }) => l_fg ? `@media (min-width: 1024px){ flex-grow: ${l_fg} !importante; }` : '',
    ({ xl_fg }) => xl_fg ? `@media (min-width: 1366px){ flex-grow: ${xl_fg} !importante; }` : '',
    // flex-shrink
    ({ xs_fs }) => xs_fs ? `@media (min-width: 0px){ flex-shrink: ${xs_fs} !important; }` : '',
    ({ s_fs }) => s_fs ? `@media (min-width: 600px){ flex-shrink: ${s_fs} !important; }` : '',
    ({ m_fs }) => m_fs ? `@media (min-width: 768px){ flex-shrink: ${m_fs} !important; }` : '',
    ({ l_fs }) => l_fs ? `@media (min-width: 1024px){ flex-shrink: ${l_fs} !important; }` : '',
    ({ xl_fs }) => xl_fs ? `@media (min-width: 1366px){ flex-shrink: ${xl_fs} !important; }` : '',
    // flex-basis
    ({ xs_fb }) => xs_fb ? `@media (min-width: 0px){ flex-basis: ${xs_fb} !important; }` : '',
    ({ s_fb }) => s_fb ? `@media (min-width: 600px){ flex-basis: ${s_fb} !important; }` : '',
    ({ m_fb }) => m_fb ? `@media (min-width: 768px){ flex-basis: ${m_fb} !important; }` : '',
    ({ l_fb }) => l_fb ? `@media (min-width: 1024px){ flex-basis: ${l_fb} !important; }` : '',
    ({ xl_fb }) => xl_fb ? `@media (min-width: 1366px){ flex-basis: ${xl_fb} !important; }` : '',
    // flex
    ({ xs_flex }) => xs_flex ? `@media (min-width: 0px){ flex: ${xs_flex} !important; }` : '',
    ({ s_flex }) => s_flex ? `@media (min-width: 600px){ flex: ${s_flex} !important; }` : '',
    ({ m_flex }) => m_flex ? `@media (min-width: 768px){ flex: ${m_flex} !important; }` : '',
    ({ l_flex }) => l_flex ? `@media (min-width: 1024px){ flex: ${l_flex} !important; }` : '',
    ({ xl_flex }) => xl_flex ? `@media (min-width: 1366px){ flex: ${xl_flex} !important; }` : '',
    // align-self
    ({ xs_aSelf }) => xs_aSelf ? `@media (min-width: 0px){ align-self: ${xs_aSelf} !important; }` : '',
    ({ s_aSelf }) => s_aSelf ? `@media (min-width: 600px){ align-self: ${s_aSelf} !important; }` : '',
    ({ m_aSelf }) => m_aSelf ? `@media (min-width: 768px){ align-self: ${m_aSelf} !important; }` : '',
    ({ l_aSelf }) => l_aSelf ? `@media (min-width: 1024px){ align-self: ${l_aSelf} !important; }` : '',
    ({ xl_aSelf }) => xl_aSelf ? `@media (min-width: 1366px){ align-self: ${xl_aSelf} !important; }` : '',

];

/** WIDTH
 * widthProps
 *      é um array de funções que aplicam propriedades css para manipular a width de qualquer componente.
 *      Devices Width:
 *          xs: <  600px
 *          s:  >= 600px
 *          m:  >= 768px
 *          l:  >=  1024px
 *          xl:  >=  1366px
 */
// colocar a unidade de medidida (px, %, rem, etc.)
export const widthProps = [
    ({ width }) => width ? `width: ${width} !important;` : '',
    ({ xs_width }) => xs_width ? `@media (min-width: 0px){ width: ${xs_width} !important; }` : '',
    ({ s_width }) => s_width ? `@media (min-width: 600px){ width: ${s_width} !important; }` : '',
    ({ m_width }) => m_width ? `@media (min-width: 768px){ width: ${m_width} !important; }` : '',
    ({ l_width }) => l_width ? `@media (min-width: 1024px){ width: ${l_width} !important; }` : '',
    ({ xl_width }) => xl_width ? `@media (min-width: 1366px){ width: ${xl_width} !important; }` : '',
]

/**
 * centralizeProps (OBS: DEPENDENDO DO MARKUP O 'centralizeContentX' E 'centralizeContentY' NÃO FUNCIONA BEM. AJUSTAR ISSO)
 *      centraliza todos filhos do elemento que o recebe, baseado em flexbox;
 */
export const centralizeProps = [
    // flex box based
    ({ centralizeContentX }) => centralizeContentX ? `display: flex; justify-content: center;` : '',
    ({ centralizeContentY }) => centralizeContentY ? `display: flex; flex-direction: column; align-items: center;` : '',
]

/**
 * bgColorProps
 *      seta a prop css background-color do elemento que o recebe
 */
export const bgColorProps = [
    // custom bg color
    ({ bgColor }) => bgColor ? `background-color: ${bgColor};` : '',
    // Default bg colors
    ({ bgPurple }) => bgPurple ? `background-color: #D870EB;` : '',
    ({ bgBlue })   => bgBlue ? `background-color: #0098FF;` : '',
    ({ bgGreen })  => bgGreen ? `background-color: #00B494;` : '',
    ({ bgYellow }) => bgYellow ? `background-color: #FFE74C;` : '',
    ({ bgOrange }) => bgOrange ? `background-color: #FAAD50;` : '',
    ({ bgRed })    => bgRed ? `background-color: #F45563;` : '',
    ({ bgGray })   => bgGray ? `background-color: #999;` : '',
    // Additional bg colors
    ({ bgBabyBlue })   => bgBabyBlue ? `background-color: #57B8FF;` : '',
    ({ bgTomato })   => bgTomato ? `background-color: #FE6847;` : '',
    ({ bgCoralRed })   => bgCoralRed ? `background-color: #FF4242;` : '',
    ({ bgPastelGreen })   => bgPastelGreen ? `background-color: #6FD08C;` : '',
]

/**
 * textAlignProps
 *      seta a prop css text-align do elemento que o recebe
 */
export const textAlignProps = [
    ({ textAlignLeft })    => textAlignLeft ? `text-align: left;` : '',
    ({ textAlignRight })   => textAlignRight ? `text-align: right;` : '',
    ({ textAlignJustify }) => textAlignJustify ? `text-align: justify;` : '',
    ({ textAlignCenter })  => textAlignCenter ? `text-align: center;` : '',
]

/**
 * marginProps
 *      seta a prop css margin do elemento que o recebe
 */
export const marginProps = [
    ({ margin })           => margin       ? `margin: ${margin};` : '',
    ({ marginTop })        => marginTop    ? `margin-top: ${marginTop};` : '',
    ({ marginBottom })     => marginBottom ? `margin-bottom: ${marginBottom};` : '',
    ({ marginLeft })       => marginLeft   ? `margin-left: ${marginLeft};` : '',
    ({ marginRight })      => marginRight  ? `margin-right: ${marginRight};` : '',
    ({ marginTopBottom })  => marginTopBottom  ? `margin-top: ${marginTopBottom}; margin-bottom: ${marginTopBottom}` : '',
    ({ marginLeftRight })  => marginLeftRight  ? `margin-left: ${marginLeftRight}; margin-right: ${marginLeftRight}` : '',
]

/**
 * paddingProps
 *      seta a prop css padding do elemento que o recebe
 */
const paddingProps = [
    ({ padding })          => padding      ? `padding: ${padding};` : '',
    ({ paddingTop })        => paddingTop    ? `padding-top: ${paddingTop};` : '',
    ({ paddingBottom })     => paddingBottom ? `padding-bottom: ${paddingBottom};` : '',
    ({ paddingLeft })       => paddingLeft   ? `padding-left: ${paddingLeft};` : '',
    ({ paddingRight })      => paddingRight  ? `padding-right: ${paddingRight};` : '',
    ({ paddingTopBottom })  => paddingTopBottom  ? `padding-top: ${paddingTopBottom}; padding-top: ${paddingTopBottom}` : '',
    ({ paddingLeftRight })  => paddingLeftRight  ? `padding-left: ${paddingLeftRight}; padding-right: ${paddingLeftRight};` : '',
]

/**
 * fontSizeProps
 *      seta a prop css font-size do elemento que o recebe, na unidade REM * 
 */
export const fontSizeProps = [
    ({ fontSize }) => fontSize ? `font-size: ${fontSize};` : '',
]

/**
 * fontColorProps
 *      seta a prop css color do elemento que o recebe * 
 */
export const fontColorProps = [
    // custom font color
    ({ fontColor })  => fontColor ? `color: ${fontColor};` : '',
    // font colors
    ({ fontWhite })  => fontWhite ? `color: #FFF;` : '',
    ({ fontBlack })  => fontBlack ? `color: #000;` : '',
    ({ fontGray })   => fontGray ? `color: #999;` : '',
    ({ fontPurple }) => fontPurple ? `color: #D870EB;` : '',
    ({ fontBlue })   => fontBlue ? `color: #0098FF;` : '',
    ({ fontGreen })  => fontGreen ? `color: #00B494;` : '',
    ({ fontYellow }) => fontYellow ? `color: #FFE74C;` : '',
    ({ fontOrange }) => fontOrange ? `color: #FAAD50;` : '',
    ({ fontRed })    => fontRed ? `color: #F45563;` : '',
]

/**
 * fontWeightProps
 *  seta a prop font-weight do elemento que o recebe. 
 */
export const fontWeightProps = [
    ({ fontWeight }) => fontWeight ? `font-weight: ${fontWeight}` : null,
    ({ bold }) => bold ? `font-weight: bold` : null,
    ({ bolder }) => bolder ? `font-weight: bolder` : null,
]

/**
 * visibilityPropps
 *      define regras css para visibilidade de componentes     
 */
export const visibilityProps = [
    // modificadores visibilidade com acessibilidade
    ({ hideText }) => hideText ? `text-indent: -10000%;` : '',
    ({ hide }) => hide ? `position: absolute; left: -10000%;` : '',
    ({ remove }) => remove ? `display: none;` : '',
    // PHONE
    ({ onPhone }) => onPhone  ? `
        @media (min-width: 0px){ display: initial; };
        @media (min-width: 768px){ display: none; };
        @media (min-width: 1025px){ display: none; };
    ` : '',
    // TABLET
    ({ onTablet }) => onTablet  ? `
        @media (min-width: 0px){ display: none; };
        @media (min-width: 768px){ display: initial; };
        @media (min-width: 1025px){ display: none; };
    ` : '',
    // MOBILE
    ({ onMobile }) => onMobile  ? `
        @media (min-width: 0px){ display: initial; };
        @media (min-width: 768px){ display: initial; };
        @media (min-width: 1025px){ display: none; };
    ` : '',
    // DESKTOP
    ({ onDesktop }) => onDesktop  ? `
        @media (min-width: 0px){ display: none; };
        @media (min-width: 768px){ display: none; };
        @media (min-width: 1025px){ display: initial; };
    ` : '',
]

/**
 * radiusProps
 *      seta a prop css border-raius do elemento que o recebe * 
 */
const radiusProps = [
    ({ radius }) => radius ? `border-radius: ${radius};` : '',
    ({ round }) => round ? `border-radius: 50%;` : '',
]

/**
 * cssStyleProps
 *      seta qualquer propriedade css passada hardcoded, no elemento que o recebe
 */

const cssStyle = [
    ({ cssStyle }) => cssStyle ? `${cssStyle};` : '',
    ({ xs_cssStyle }) => xs_cssStyle ? `@media (min-width: 0px){ ${xs_cssStyle} }` : '',
    ({ s_cssStyle }) => s_cssStyle ? `@media (min-width: 600px){ ${s_cssStyle} }` : '',
    ({ m_cssStyle }) => m_cssStyle ? `@media (min-width: 768px){ ${m_cssStyle} }` : '',
    ({ l_cssStyle }) => l_cssStyle ? `@media (min-width: 1024px){ ${l_cssStyle} }` : '',
    ({ xl_cssStyle }) => xl_cssStyle ? `@media (min-width: 1366px){ ${xl_cssStyle} }` : '',
]

// all props above combined
export default [
    ...centralizeProps,
    ...widthProps,
    ...flexItemsProps,
    ...flexContainerProps,
    ...bgColorProps,
    ...textAlignProps,
    ...marginProps,
    ...paddingProps,
    ...fontSizeProps,
    ...fontColorProps,
    ...visibilityProps,
    ...radiusProps,
    ...cssStyle,
    ...fontWeightProps,
];