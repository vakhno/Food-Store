import React, {useEffect} from 'react'
import './Main.sass'
import 'swiper/swiper-bundle.css'
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/effect-fade/effect-fade.min.css'
import {Link} from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, {Navigation, Pagination, EffectFade, Autoplay} from 'swiper'
import MainImage from '../../images/main_first_image.jpg'
import MainImage2 from '../../images/main_second_image.png'
import MainImage3 from '../../images/main_third_image.jpg'
import MainImage4 from '../../images/main_fourth_image.jpg'
import MainImage5 from '../../images/main_fifth_image.jpg'
import Logo from '../../images/logo2.svg'
import Signature from '../../images/signature.svg'
import About1  from '../../images/about1.jpg'
import About2  from '../../images/about2.jpg'
import Chef from '../../images/chef.png'

import {useSelector, useDispatch} from 'react-redux'
import {fetchMainMenuDishes} from '../../redux/actions/dishesRequest'


SwiperCore.use([Navigation, Pagination, EffectFade, Autoplay])

function Main() {
	const dispatch = useDispatch()
	const menuDishes = useSelector( ({menu}) => menu.items  )
	console.log(menuDishes)

	const mainSlides = [
		{
			image: {MainImage},
			title: 'Чиказька піца з томатами',
		},
		{
			image: {MainImage2},
			title: 'Чорна піца з золотоми пелюстками',
		},
		{
			image: {MainImage3},
			title: 'Піца з хамоном',
		},
		{
			image: {MainImage4},
			title: 'Класична лазанья',
		},
		{
			image: {MainImage5},
			title: 'Равіолі з чорнилами каракатиці',
		},
	]

	useEffect(() => {
		dispatch(fetchMainMenuDishes())
	}, [])


	return (
<>

<div className="main">
	<div className="main__losung">
		<div className="main__logo">
			<h3>Ресторан</h3>
			<img className='' src={Logo} alt="" width='160'/>
			<p>італійської кухні</p>
		</div>
	</div>
		<Swiper
		effect="fade"
		loop={true}
		pagination={{ clickable: true }}
		draggable={false}
		autoplay={{ delay: 2000 }}
		>
			{
				mainSlides.map( (dish, index) => {
					console.log(dish.image)
					return <SwiperSlide style={{backgroundImage:`url(${Object.values(dish.image)[0]})`}}>
								<Link to='/dishes'>
									<div className='main__slide-title'>{dish.title}</div>
								</Link>
							</SwiperSlide>
				})
			}
		</Swiper>
		</div>

		<div className="quote">
			<div className="quote__text">ПЕРЕД ТИМ, ЯК ВІДКРИТИ ДЛЯ СЕБЕ КУЛІНАРІЮ, МЕНЕ НІКОЛИ НІЧОГО НЕ ЦІКАВИЛО</div>
			<div className="quote__author">НАШ ШЕФ-КУХАР Дейл Ернхардт</div>
			<img src={Signature} alt=""/>
		</div>


		<div className="about">
			<div className="about__wrapper">
				<div className="about__content">
				<div className="about__image">
					<img src={Chef} alt=""/>
				</div>
				<div className="about__description">
					<div className="about__title">«В основі цінностей нашого ресторану лежить відданість традиціям, експериментальність і відкритість</div>
					<div className="about__subtitle">Наше завдання - подарувати українським гурманам, надзвичайні гастрономічні відчуття традиційної італійської кухні, з доданням експериметнальних інгридієнтів.</div> 
					<div className="about__subtitle">Я радий, що можу поділитись своїм досвідом роботи у найкращих ресторанах Европи та Північної Америки, працюючи в команді надзвичайних кухарів, працюючи в команді професіоналів».</div>
					<div className="about__subtitle--accent">Магнус Веттерхольм</div>
					<div className="about__subtitle">Магнус Веттерхольм, засновник ресторану</div>
					<Link>
						<div className="about__button">перейти до меню</div>
					</Link>
				</div>
				</div>
			</div>
		</div>

		
		<div className="menu">
			<div className="menu__wrapper">
				<div className="menu__title">МЕНЮ</div>
				<div className="menu__categories">
					{
						menuDishes.slice(0, 4).map( (elem, index) => {
							const newElem = Object.values(elem);
						
						return	<div className="menu__category">
								<div className="menu__category-title">{newElem[0]}</div>
								<div className="menu__category-items">

									{newElem[1].slice(0, 4).map( elem => {
										
										return <div className="menu__category-item">
											<div className="menu__category-item-info">
												<div className="menu__category-item-name">{elem.name}</div>
												<div className="menu__category-item-price">{elem.price} грн.</div>
											</div>
											<div className="menu__category-item-description">{elem.description}</div>
										</div>
									})}
									
								</div>
							</div>
						
						})
					}
					
				</div>
			</div>
		</div>


<div style={{paddingTop:'160px'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga, cupiditate at vitae molestiae doloribus quidem. Commodi est impedit ipsa ratione non magni, ab, at illo fugiat neque aut repudiandae mollitia?
Fuga aliquam repellendus, molestias minima obcaecati iusto tempore eaque ullam sequi quo, eum molestiae atque labore a. Exercitationem, atque ipsam, itaque quod hic id aliquid, perferendis dolorem maxime at dolor.
Vero, neque! Cupiditate, molestias! Optio ducimus facere consequuntur quidem aut, repudiandae doloremque ut hic similique sunt soluta nihil expedita! Numquam magnam natus tempora necessitatibus! Autem dolorem ipsam esse quia facere!
Minima expedita nam harum tempore qui incidunt culpa! Praesentium fugit ipsam corrupti laborum quod odit saepe impedit dolores cumque! Aliquid distinctio ea illo atque perferendis animi, laborum vel esse excepturi?
Assumenda suscipit reiciendis optio, quisquam quia, dolor blanditiis unde ratione accusamus vel est obcaecati placeat repudiandae, soluta aliquid amet dolore fugiat ducimus perferendis qui excepturi! Assumenda pariatur voluptatibus eius optio!
Dolorem atque beatae, quasi accusamus ipsam expedita exercitationem ad assumenda vitae natus, repudiandae at nemo voluptatum qui. Ex reprehenderit maiores, a eaque necessitatibus exercitationem amet, quidem consequuntur quos neque maxime!
Ea vitae earum in quisquam saepe corrupti, maxime repellat doloribus enim tenetur delectus nesciunt harum perferendis, dolorem natus nam odit! Ipsum repellendus expedita voluptatibus cumque consequatur obcaecati ad quibusdam sapiente?
Odit omnis vero nemo accusamus ipsam, fugit autem qui, ducimus incidunt consequatur fugiat. Quos temporibus ab quisquam error cum hic dolores esse cumque soluta perspiciatis. Perspiciatis quae cumque maxime eligendi.
Et ipsam nostrum nisi cumque non, maiores, id temporibus labore consectetur voluptates eligendi ea vitae quod sapiente, error dolorum saepe explicabo excepturi ratione nobis! Beatae ducimus ex aut suscipit ipsam?
Quibusdam ipsam sint a obcaecati alias eligendi nesciunt facere dicta nostrum maxime modi esse, corrupti temporibus qui, provident delectus fugit nihil autem fuga libero? Accusantium commodi delectus mollitia perspiciatis eaque.
Quas cumque magni vero. Iste eum fugiat aspernatur similique error neque accusantium quidem provident adipisci architecto debitis nulla ab accusamus eveniet porro officiis optio labore sequi minima odit, tempora obcaecati?
Tempore ratione excepturi rerum magnam sint illum dolore laborum minus, quibusdam reprehenderit voluptatem delectus natus ad aliquam unde dicta facere exercitationem explicabo neque ea quam enim quia modi. Sequi, magni!
Dolor quaerat, facilis impedit fugiat temporibus expedita quasi ad corrupti quo possimus magni maxime officiis excepturi culpa beatae maiores commodi ullam deserunt blanditiis dicta nisi hic repudiandae eligendi nihil. Quo!
Id amet fugiat fuga cupiditate ullam error ex unde, consectetur est quam neque asperiores vero officiis quo dolorum libero necessitatibus molestias, corporis animi soluta! Ut voluptatem ex vel libero quam.
Magnam accusantium voluptatum necessitatibus iste ex? Magnam illo, dolorem quo, ducimus quasi necessitatibus laudantium animi accusantium hic facilis dignissimos unde aut voluptatibus ex ullam! Doloremque voluptate possimus facilis rerum itaque!
Odit, ratione sint repellendus consequuntur est necessitatibus tempore iste impedit praesentium accusantium quae in velit soluta aspernatur nostrum, ipsa sit, ad debitis. Tenetur, esse numquam ratione at dicta natus est!
Velit laboriosam accusantium quia optio omnis, porro, repellat ullam veniam molestias nostrum quibusdam ad incidunt consectetur voluptatibus asperiores placeat, corrupti rem odit nesciunt. Eligendi voluptate rem, repellat vero ad dicta!
Magnam voluptatem quia ratione! Tempora itaque nobis sequi accusamus nisi distinctio reiciendis ab rerum sint ducimus neque possimus ullam eum, reprehenderit cum dolores voluptatem voluptas? Voluptates doloremque rem cupiditate consequuntur!
Quod odit commodi inventore quo est fugit iusto magnam consequuntur. Aspernatur maxime laudantium necessitatibus saepe commodi id, ducimus possimus consequatur nisi ea, maiores, porro neque! Dolor quisquam expedita repellendus recusandae!
Eaque, deleniti incidunt? Ratione obcaecati recusandae fugit ipsa excepturi, reiciendis incidunt magnam molestiae culpa dolorum id voluptate laudantium doloremque aspernatur possimus architecto nulla. Quas minus architecto ipsam officia dignissimos corrupti?
Quae natus dolorem nesciunt beatae illum! Error nobis amet consectetur, incidunt quis quod natus necessitatibus voluptatibus cumque sint, repellat exercitationem sunt optio commodi eos facilis, voluptatum fugiat similique nam laudantium?
Molestiae asperiores itaque sint rem eveniet veritatis fuga officiis id, at tempore aliquam placeat delectus ipsam debitis. Omnis mollitia eos nam, nostrum laborum fuga. Odit quas quaerat unde similique alias.
Illo praesentium, esse nesciunt quam officia a architecto sed neque deserunt recusandae adipisci at quis culpa vero rerum distinctio placeat? Quod tempora minus tempore, nisi molestiae rem libero provident non.
Nihil quos iure fugit accusantium facilis eius voluptatem exercitationem, optio doloribus, eveniet impedit. Ab beatae facilis officiis aliquid, dicta odio dolorem debitis perferendis nobis minus ipsam, a obcaecati accusantium molestiae!
Cupiditate nulla voluptas iusto. At sequi quod impedit aliquid? Porro aliquam accusamus incidunt dolor facilis magnam, nobis neque distinctio vitae in odio delectus? Reprehenderit impedit id eum quos saepe aut!
Magnam aperiam esse tempore doloribus. Ut nam facilis porro voluptatibus harum magnam assumenda est? Nemo corporis ipsa harum cupiditate asperiores veritatis reprehenderit minima dolores ratione! Voluptatum, voluptas accusantium? Accusantium, numquam?
Aspernatur ullam, mollitia recusandae magnam voluptatibus obcaecati in qui labore dolores laboriosam repudiandae, tempora quam consectetur pariatur officia accusantium, sunt assumenda saepe! Nemo, illum minima earum eligendi non reiciendis dolor.
Aliquid delectus, non laborum corporis odit sit deserunt dolores mollitia soluta optio provident eaque. Id quaerat commodi dignissimos itaque autem amet animi accusantium asperiores assumenda. Dolores accusantium odit itaque tempora.
Harum nam repellat unde, adipisci officia animi nobis aliquid vitae optio aliquam magnam illum dignissimos. Repudiandae est nesciunt iusto laudantium repellendus assumenda quasi obcaecati hic tempora vel! Recusandae, facere quos!
Voluptatibus doloremque illo dolores deserunt numquam dicta quibusdam qui inventore in mollitia, voluptas molestias odio veritatis quod laborum vel quisquam ea aliquam nihil minima deleniti et ducimus tempora! Cumque, doloremque.</div>
		</>
	)
}

export default Main
