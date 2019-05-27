const listProjects = [
    {
        id: 1,
        name : '1 Fight',
        description : 'Strategy, Branding, Graphic Design, Print, digital',
        cover : '1fight/caselogo.png',
        text_1: 'The challenge was to create an innovative concept of fitness, based on fight modalities, with a high positioning and not to be confused with a fighting training facility. The answer was 1Fight a project that involved everything from brand strategy and naming to the store environment, branding, digital, etc.',
        text_2: 'The answer is 1Fight, a project that involved everything from brand strategy and naming to the store environment, branding, digital, etc.',
        bg_webdoor:'1fight/caseintro.png',
        bg_4:'1fight/caselogo.png',
        bg_8:'1fight/casewebsite.png',
        bg_8_2:'1fight/casecartoes.png',
        bg_12:'1fight/casedesporto.png',
        model: 1,
    },
    {
        id: 2,
        name : 'Alegria Plaza',
        description : 'Concept, Branding, Graphic Design, Print, Video, Digital',
        cover : 'alegriaplaza/case_alegriaplaza01.png',
        text_1: 'A special city, a rare location with a unique view and a very refined architecture were the motto for a branding project that resulted in Alegria Plazza. A contemporary, simple and exquisite image for a very unique block of flats.',
        text_2: 'A special city, a rare location with a unique view and a very refined architecture were the motto for a branding project that resulted in Alegria Plazza. A contemporary, simple and exquisite image for a very unique block of flats.',
        bg_webdoor:'alegriaplaza/case_alegriaplaza05.png',
        bg_4:'alegriaplaza/case_alegriaplaza01.png',
        bg_4_2:'alegriaplaza/case_alegriaplaza04.png',
        bg_8:'alegriaplaza/case_alegriaplaza02.png',
        bg_12:'alegriaplaza/case_alegriaplaza03.png',
        model: 2,
    },
    {
        id: 3,
        name : 'Verney',
        description : 'Branding, Graphic design, Print',
        cover : 'verney/case_verney05.png',
        text_1: 'A Portuguese brand specialising in cruelty-free footwear, for which we developed an entire e-commerce strategy. The on-line store, along with the development of the design and information architecture, are the most visible aspects of this project.',
        text_2: 'Interpreting the behaviour of this target, a strongly developing niche, and creating a contemporary and intuitive design, were some of the challenges we had to overcome.',
        bg_webdoor:'verney/case_verney04.png',
        bg_4:'verney/case_verney05.png',
        bg_8:'verney/case_verney01.png',
        bg_8_2:'verney/case_verney02.png',
        bg_12:'verney/case_verney03.png',
        model: 3,
    },
    {
        id: 4,
        name : 'Ita',
        description : 'Branding, Graphic design, Print',
        cover : 'ita/case_ita03.png',
        text_1: 'ITA is a B2B telecommunications solutions provider operating in the Angolan market, with a very high positioning and that is in a moment of both (r)evolution and expansion.',
        text_2: 'This image, idealized for this great moment of the company, represents more than the new offer or even its positioning but the new attitude and posture towards the market and its competitors.',
        bg_webdoor:'ita/case_ita05.png',
        bg_4:'ita/case_ita03.png',
        bg_8:'ita/case_ita01.png',
        bg_8_2:'ita/case_ita04.png',
        bg_12:'ita/case_ita02.png',
        model: 3,
    },
    {
        id: 5,
        name : 'Candando',
        description : 'Branding, Graphic Design, Print',
        cover : 'candando/case_candando04.png',
        text_1: 'A chain of hypermarkets in Luanda, Angola, which aims to extend itself throughout Angola. They have been a Brandscape client since 2016, in a partnership whose main project is Candando Magazine, within the framework of our content marketing department.',
        text_2: 'We also work on product development projects, for the private label brands of this hypermarket, as well as seasonal digital campaigns. Two examples of this are the “Barista” coffee brand, as well as a website dedicated to Christmas.',
        bg_webdoor:'candando/case_candando05.png',
        bg_4:'candando/case_candando04.png',
        bg_8:'candando/case_candando03.png',
        bg_8_2:'candando/case_candando01.png',
        bg_12:'candando/case_candando02.png',
        model: 1,
    },
    {
        id: 6,
        name : 'Botanica',
        description : 'Branding, Graphic Design, Print',
        cover : 'botanica/case_botanica01.png',
        text_1: 'The growth of tourism, in the city of Setúbal, and consequently an increased audience, more demanding and refined justified the existence of a more exquisite restaurant concept in town.',
        text_2: 'To meet the expectations of the owner and the menu we came out with a brand identity very gastronomic, with humour and a strong personality... like the restaurant itself!',
        bg_webdoor:'botanica/case_botanica04.png',
        bg_4:'botanica/case_botanica01.png',
        bg_4_2:'botanica/case_botanica05.png',
        bg_8:'botanica/case_botanica03.png',
        bg_12:'botanica/case_botanica02.png',
        model: 2,
    },
    {
        id: 7,
        name : 'Sovena',
        description : 'Branding, Graphic design, Print',
        cover : 'sovena/case_sovena04.png',
        text_1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.',
        text_2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ',
        bg_webdoor:'sovena/case_sovena02.png',
        bg_4:'sovena/case_sovena04.png',
        bg_8:'sovena/case_sovena01.png',
        bg_8_2:'sovena/case_sovena05.png',
        bg_12:'sovena/case_sovena03.png',
        model: 3,
    },
    {
        id: 8,
        name : 'Zabazoo',
        description : 'Branding, Graphic Design, Print',
        cover : 'zabazoo/case_zabazoo02.png',
        text_1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.',
        text_2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ',
        bg_webdoor:'zabazoo/case_zabazoo01.png',
        bg_4:'zabazoo/case_zabazoo02.png',
        bg_4_2:'zabazoo/case_zabazoo05.png',
        bg_8:'zabazoo/case_zabazoo03.png',
        bg_12:'zabazoo/case_zabazoo04.png',
        model: 2,
    },

]

export default listProjects