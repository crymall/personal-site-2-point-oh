<div class="body-container">
	<!-- <div class="body-description">
    <h2>hello, my name is Reed</h2>
    <p>who am I?</p>
  </div>
  <img 
    src="https://live.staticflickr.com/65535/54283549508_4130e3f0fa_b.jpg" 
    alt="self-portrait in abandoned cabin"
  /> -->
</div>

<style>
	@import '../styles/variables.css';

	.body-container {
		display: flex;
		justify-content: space-between;
		padding-top: 10px;

		@media (max-width: 600px) {
			flex-direction: column-reverse;
		}
	}

	.body-description {
		padding-left: 5px;

		p {
			font-size: 20px;
			line-height: 26px;
			margin: 15px 0px;

			transition: font-size 0.2s;

			@media (max-width: 600px) {
				font-size: 16px;
				line-height: 20px;
			}
		}
	}

	img {
		max-width: 800px;
	}
</style>
