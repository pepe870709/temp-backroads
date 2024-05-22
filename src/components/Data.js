import Tour1 from '../images/tour-1.jpeg'
import Tour2 from '../images/tour-2.jpeg'
import Tour3 from '../images/tour-3.jpeg'
import Tour4 from '../images/tour-4.jpeg'

const text1 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.'
const text2 = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.'

export const LinkData = [{id:1, href:'#home', text:'Home'},
                          {id:2, href:'#about', text:'About'},
                          {id:3, href:'#services', text:'Services'},
                          {id:4, href:'#tours', text:'Tours'},
                        ];

export const SocialLink = [{id:1, href:'https://www.twitter.com', icon:'fab fa-facebook'},
                            {id:2, href:'https://www.twitter.com', icon:'fab fa-twitter'},
                            {id:3, href:'https://www.twitter.com', icon:'fab fa-squarespace'}];

export const ServicesData = [{id:1 ,icon:'fas fa-wallet fa-fw' ,title:'saving money' ,text: text1},
                          {id:2 ,icon:'fas fa-tree fa-fw' ,title:'endless hiking' ,text: text1},
                          {id:3 ,icon:'fas fa-socks fa-fw' ,title:'amazing comfort' ,text: text1}]

export const ToursData = [{id:1 ,title:'Tibet Adventure', date:'august 26th, 2020' ,img:Tour1 ,text:text2 ,days:'6' ,   cost:'2100', country:'China', text: text2},
                          {id:2 ,title:'best of java', date:'october 1th, 2020' ,img:Tour2 ,text:text2 ,days:'11' ,cost:'1400', country:'Indonesia', text: text2},
                          {id:3 ,title:'explore hong kong', date:'september 15th, 2020' ,img:Tour3 ,text:text2 ,days:'8' ,cost:'5000', country:'hong Kong', text: text2},
                          {id:4 ,title:'kenya highlights', date:'december 5th, 2019' ,img:Tour4 ,text:text2 ,days:'20' ,cost:'3300', country:'Kenya', text: text2}]