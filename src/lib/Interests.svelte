<section class="section">
	<h2 class="section-title">Interests</h2>
	<div class="interests__container bd-grid">
		<div class="interests__content">
			<i class="bx bx-football interests__icon" />
			<span class="interests__name" />Football
		</div>

		<div class="interests__content">
			<i class="bx bx-cookie interests__icon" />
			<span class="interests__name" />Cooking
		</div>

		<div class="interests__content">
			<i class="bx bxs-music interests__icon" />
			<span class="interests__name" />Music
		</div>

		<div class="interests__content">
			<i class="bx bx-camera-movie interests__icon" />
			<span class="interests__name" />Movies
		</div>
	</div>
</section>

<style>
	.interests__container {
		grid-template-columns: repeat(3, 1fr);
		margin-top: var(--mb-2);
	}

	.interests__content {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.interests__icon {
		font-size: 1.5rem;
		color: var(--text-color-light);
		margin-bottom: 0.25rem;
	}
</style>
