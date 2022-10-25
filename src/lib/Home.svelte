<script>
	import profilePicture from '../lib/images/Ravil.jpeg';
</script>

<section class="home">
	<div class="home__container section bd-grid">
		<div class="home__data bd-grid">
			<img src={profilePicture} alt="" class="home__img" />
			<h1 class="home__title">Akhmetzhanov <b>Ravil</b></h1>
			<h3 class="home__profession">ML/CV engineer</h3>
		</div>
		<div class="home__address bd-grid">
			<span class="home__information">
				<i class="bx bx-map-pin home__icon" /> Universitetskaya 1, Innopolis, Russia
			</span>

			<span class="home__information">
				<i class="bx bx-envelope home__icon" /> akhm.ravil99@gmail.com
			</span>

			<span class="home__information">
				<i class="bx bx-phone-call home__icon" /> +79833430859
			</span>
		</div>
	</div>
</section>

<style>
    /* CSS variables are taken from ../routes/styles.css */
	.home {
		position: relative;
	}

	.home__data {
		gap: 0.5rem;
		text-align: center;
	}

	.home__img {
		width: 120px;
		height: 160px;
		justify-self: center;
		margin-bottom: var(--mb-1);
	}

	.home__title {
		font-size: var(--h1-font-size);
	}

	.home__profession {
		font-size: var(--normal-font-size);
		margin-bottom: var(--mb-1);
	}

	.home__address {
		gap: 1rem;
	}

	.home__information {
		display: flex;
		align-items: center;
		font-size: var(--small-font-size);
	}

	.home__icon {
		font-size: 1.2rem;
		margin-right: 0.25rem;
	}
</style>