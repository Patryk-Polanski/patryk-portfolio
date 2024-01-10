export const portfolioData = [
  {
    id: 'restaurante-miramar',
    title: 'Restaurante Miramar',
    index: 0,
    imgDesktop: '/projects/miramar/miramar-desktop.webp',
    imgMobile: '/projects/miramar/miramar-mobile.webp',
    imgThumbnail: '/projects/miramar/carousel-thumbnail.webp',
  },
  {
    id: 'pizzame',
    title: 'PizzaMe',
    index: 1,
    imgDesktop: '/projects/pizza-me/pizza-me-desktop.webp',
    imgMobile: '/projects/pizza-me/pizza-me-mobile.webp',
    imgThumbnail: '/projects/pizza-me/carousel-thumbnail.webp',
  },
  {
    id: 'la-tana',
    title: 'La Tana',
    index: 2,
    imgDesktop: '/projects/la-tana/la-tana-desktop.webp',
    imgMobile: '/projects/la-tana/la-tana-mobile.webp',
    imgThumbnail: '/projects/la-tana/carousel-thumbnail.webp',
  },
  {
    id: 'vape-superstore',
    title: 'Vape Superstore',
    index: 3,
    imgDesktop: '/projects/vape-superstore/carousel-desktop.webp',
    imgMobile: '/projects/vape-superstore/carousel-mobile.webp',
    imgThumbnail: '/projects/vape-superstore/carousel-thumbnail.webp',
    mockupIphone: '/projects/vape-superstore/mockup-iphone.webp',
    mockupIpad: '/projects/vape-superstore/mockup-ipad.webp',
    mockupImac: '/projects/vape-superstore/mockup-imac.webp',
    overview:
      'E-commerce site built from grounds up to help the client scale and optimize their vaping business.',
    linkWebsite: 'https://www.vapesuperstore.co.uk/',
    categories: ['Frontend', 'CMS'],
    techStack: ['css', 'scss', 'javascript', 'shopify'],
    challenge: [
      "The Vape Superstore project was the most complex e-commerce site I've had a chance to work on. It presented unique challenges and a demanding list of requirements. Apart from an extensive catalogue of products, each with multiple variants, the website required additional custom functionality added on top of Shopify. Such extra features were product bundles, custom search, members points and a modified checkout. The first stages of the project revolved around analysing all the requirements and studying provided UI/UX designs to form an overall vision for the website.",

      'At the beginning I was responsible for setting up the structure/system of the project. This included creating a folder structure for JS and SCSS, establishing base styles, implementing typography/fonts and adding the colour scheme. After settings up a Git repository, I was then assigned to developing the front-end of the site and creating schema in the Shopify editor to enable the client to edit all content. I have developed all the sections on the homepage and created the majority of pages. The most difficult tasks proved to be the header with the mega menu, the account page with custom features as well as the product page, which has grown to be quite complex with all the different product variants, popups and custom bundles.',
    ],
    evaluation: [
      'Overall I am satisfied with the final outcome and my learning experience. Although the project was difficult at times due to the complexity and the amount of custom features, it was a valuable lesson. I was able to learn the ins and outs of Shopify as well as its limits. It is a platform that has been built in a very specific way that imposes a system and can be quite awkward when it needs to be modified in a certain way. In general, I feel my front-end skills have progressed as well. Having been so heavily focused on the website aesthetics and behaviour, I have learned a number of new libraries and understood how to make the UI more attractive, interesting and professional.',
    ],
    gallery: [
      { src: '/projects/vape-superstore/gallery-collage.webp' },
      { src: '/projects/vape-superstore/gallery-phones.webp' },
      { src: '/projects/vape-superstore/gallery-tablets.webp' },
      { src: '/projects/vape-superstore/gallery-laptops.webp' },
    ],
  },
  {
    id: 'cascades',
    title: 'Cascades',
    index: 4,
    imgDesktop: '/projects/cascades/carousel-desktop.webp',
    imgMobile: '/projects/cascades/carousel-mobile.webp',
    imgThumbnail: '/projects/cascades/carousel-thumbnail.webp',
    mockupIphone: '/projects/cascades/mockup-iphone.webp',
    mockupIpad: '/projects/cascades/mockup-ipad.webp',
    mockupImac: '/projects/cascades/mockup-imac.webp',
    overview:
      'Custom WordPress blog to help the client manage and promote their consortium of charitable organisations.',
    linkWebsite: 'https://www.cascades.eu/',
    categories: ['Frontend', 'CMS'],
    techStack: ['css', 'scss', 'javascript', 'wordpress'],
    challenge: [
      'Prior to working on Cascades, I was always working in a small team and have been focusing on building out individual front-end sections on WordPress sites. This time, I was mainly working by myself and have been assigned a much larger pool of responsibilities. Apart from building out front-end sections, I was also in charge of organising the content on WordPress and querying all the data with PHP. After having received the designs and gone through the project with a senior developer, I began setting up the site.',

      "At first I was focusing on the back-end and the structure of content in WordPress. As the WordPress editor would be later used by the client, I needed to ensure that the data entry for all content is logical and well organised. To make data entry more powerful and flexible, I've used a popular plugin called Advanced Custom Fields. With all the initial content added, I then outputted and looped through the data with PHP. Styling and making the site responsive was the last task, which I achieved with the usual SCSS workflow. During the whole process I was gathering feedback from my supervisor and in the later stages of the project, the client also got involved with the feedback process.",
    ],
    evaluation: [
      'To conclude, I am content with the results. Although the blog is quite straightforward, having done the majority of the site by myself gave me a deep understanding of the WordPress CMS. It was also my first deep dive with PHP and I explored the capabilities and functionalities of WordPress in greater depth. Having successfully completed the project as the main developer, this has made me feel more competent and independent as a developer, as well as given me more confidence for new	programming challenges.',
    ],
    gallery: [
      { src: '/projects/cascades/gallery-collage.webp' },
      { src: '/projects/cascades/gallery-phones.webp' },
      { src: '/projects/cascades/gallery-tablets.webp' },
      { src: '/projects/cascades/gallery-laptops.webp' },
    ],
  },
];
