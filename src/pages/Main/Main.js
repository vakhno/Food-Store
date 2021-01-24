import React, {useEffect} from 'react'
import './Main.sass'

import {useSelector, useDispatch} from 'react-redux'
import {fetchMainMenuDishes, fetchMainDeliveryDishes} from '../../redux/actions/dishesRequest'
import {addDisheToCart} from '../../redux/actions/cart'



import {Quote, Creator, PopularMenu, Reservation, FirstSlider, Delivery} from '../../components'


function Main() {
	const dispatch = useDispatch()
	const menuDishes = useSelector( ({menu}) => menu.items  )
	const deliveryDishes = useSelector( ({delivery}) => delivery.items  )
	const handleAddDishToCart = (dishInfo) => {
		dispatch(addDisheToCart(dishInfo))
	}
	
	useEffect(() => {
		dispatch(fetchMainMenuDishes())
		dispatch(fetchMainDeliveryDishes())
	}, [])


	return (
		<>	

			<FirstSlider/>

			<Quote title='перед тим, як відкрити для себе кулінарію, мене ніколи нічого не цікавило' subtitle='наш шеф-кухар Дейл Ернхардт' />
		
			<Creator paragraphs={['«В основі цінностей нашого ресторану лежить відданість традиціям, експериментальність і відкритість','Наше завдання - подарувати українським гурманам, надзвичайні гастрономічні відчуття традиційної італійської кухні, з доданням експериметнальних інгридієнтів.','Я радий, що можу поділитись своїм досвідом роботи у найкращих ресторанах Европи та Північної Америки, працюючи в команді надзвичайних кухарів, працюючи в команді професіоналів».']} name='Магнус Веттерхольм' position='Магнус Веттерхольм, засновник ресторану'/>

			<Reservation/>

			<PopularMenu menuDishes={menuDishes} title='меню' subtitle='найцікавіші страви нашого ресторану'/>

			<Delivery deliveryDishes={deliveryDishes} handleAddDishToCart={handleAddDishToCart}/>

		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ratione iste quae tenetur, autem ullam dignissimos officia. Facere non molestias eaque, nostrum rerum, fugiat error earum laudantium quidem quaerat provident.
		Minima asperiores optio saepe fuga eveniet numquam autem nam, nemo eligendi ea omnis, voluptatem ratione ducimus corrupti id reprehenderit dolorum, quod culpa. Aperiam, voluptates. In iure nemo nobis. Sunt, est.
		Hic optio eaque nihil veniam? Velit dolores atque quibusdam officia porro accusamus magnam. Alias ut deleniti, eius repellat error tenetur necessitatibus eligendi repellendus harum illum qui natus explicabo laudantium ratione?
		Beatae minima quidem similique dolorum laudantium excepturi pariatur, nobis voluptatem impedit hic vitae iure eos quae tempora accusamus libero laboriosam placeat est distinctio ipsum doloribus nesciunt explicabo. Deserunt, aspernatur nesciunt?
		Sapiente, libero culpa placeat quae quam ducimus aperiam odit cum ab facere aliquid nesciunt quis voluptatem suscipit doloribus minus autem accusantium architecto quisquam corporis optio ullam! Pariatur impedit ea dignissimos.
		Modi laboriosam ipsam molestiae doloremque possimus cumque ut consequatur. Dolor fugit eligendi provident, at perspiciatis dolores nulla aliquid commodi quos dolore ratione aperiam, itaque, obcaecati iure numquam non corrupti a?
		Quas, pariatur. Eveniet sint tempore neque perspiciatis alias architecto quos, quas, natus debitis ratione, blanditiis possimus dignissimos temporibus reiciendis. Dicta soluta debitis accusantium deleniti explicabo magnam quidem voluptatem, veritatis consectetur.
		Incidunt sequi alias ea laboriosam voluptatibus est unde deserunt veniam nostrum, tempore facere dignissimos error. Quibusdam sequi neque totam suscipit quo tenetur, fuga, consequatur aspernatur provident odit animi beatae? Consequuntur.
		Voluptatem maiores rerum dolorem laborum error ipsam cupiditate quis, mollitia sed nam alias iusto assumenda distinctio dolorum expedita est dolores totam, commodi eos at repellat similique! Quibusdam tempore exercitationem et.
		Sint ex autem asperiores tempora temporibus modi commodi inventore cupiditate at omnis eveniet illum culpa nisi officiis, deserunt dolore? Facere quod repellat itaque fuga odio tenetur eligendi debitis exercitationem officia.</p>

		</>
	)
}

export default Main
