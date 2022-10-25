<script lang="ts">
	import cocktailPicture from '../lib/images/Aperol Spritz.jpg';

	let drinkName: string = '';
	let recipe: string = '';
	let imageSrc: string = '';
	let imageName: string = '';

	interface cocktailProperties {
		strDrink: string;
		strInstructions: string;
	}

	interface cocktailJSON {
		drinks: [cocktailProperties];
	}

	async function fetchRecipe() {
		const params = new URLSearchParams();
		return fetch(
			'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=aperol' + params.toString()
		).then((r) => r.json());
	}

	function handleRecipe(recipeObj: cocktailJSON) {
		const { drinks } = recipeObj;
		drinkName = drinks[0].strDrink;
		recipe = drinks[0].strInstructions;
	}

	async function showCocktail() {
		recipe = 'Loading...';
		const aperol: cocktailJSON = await fetchRecipe();
		handleRecipe(aperol);
		imageSrc = cocktailPicture;
		imageName = 'Aperol Spritz';
	}
</script>

<main>
	<section class="section">
		<h2 class="section-title">Favourite Hobby</h2>

		<h1 class="hobbies__title"><b>Number 1 - Cocktail fun!</b></h1>
		<button class="button" on:click={showCocktail}> Get a recipe for my favourite cocktail </button>

		<p class="hobbies__title">{drinkName}</p>
		<p class="hobbies__data">{recipe}</p>
		<img src={imageSrc} alt={imageName} class="hobbies__img" id="aperol_image" />
	</section>
</main>

<style>
	.hobbies__data {
		font: var(--body-font);
		margin-bottom: 10px;
	}

	.hobbies__title {
		font-size: var(--h2-font-size);
		margin-bottom: 10px;
	}

	.hobbies__img {
		width: 400px;
		justify-self: center;
		margin-bottom: var(--mb-1);
		display: block;
	}
</style>
