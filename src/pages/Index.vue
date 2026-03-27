<template>
	<Layout>
		<div
			class="hero container-inner mx-auto flex flex-col sm:flex-row justify-between pb-16 lg:py-24"
		>
			<div
				class="text-5xl font-bold w-full sm:w-3/5 text-center mt-16 lg:mt-24 sm:text-left"
			>
				<div class="leading-tight">Vaibhav Raj Singh</div>

				<div class="pt-2 text-2xl text-blue-400 leading-tight">
					Powered by Coffee, Cookies & Code
				</div>

				<a
					class="bg-background-secondary button py-2 px-3 rounded-lg text-copy-primary text-lg hover:text-gray-500"
					href=""
					onclick="Calendly.initPopupWidget({url: 'https://calendly.com/vaibhavrajsingh'});return false;"
					>Lets talk!</a
				>
			</div>
			<g-image
				width="20px"
				height="20px"
				src="/developer.svg"
				alt="hero"
				class="mx-auto sm:mx-0"
			/>
		</div>

		<g-image
			width="20px"
			height="20px"
			class="mx-auto"
			alt="arrow towards projects"
			src="/arrow1.svg"
		></g-image>

		<div class="projects container-inner mx-auto text-xl py-24 relative">
			<g-image
				width="20px"
				height="20px"
				src="/projects.svg"
				id="projects"
				alt="projects header"
				class="mx-auto mb-12 sm:mx-0"
			/>

			<div
				class="absolute right-0"
				style="top: 50px; transform: translate(100%) rotate(180deg)"
			>
				<svg width="170px" height="170px">
					<use xlink:href="#dots-triangle" />
				</svg>
			</div>

			<ul class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
				<ProjectCard
					projectName="Web Quark"
					imgUrl="/mern.svg"
					liveLink="https://quark.vaibhavraj.dev/"
					codeLink="https://github.com/vaibhavrajsingh2001/web-quark"
				/>
				<ProjectCard
					projectName="Zemotacqy"
					imgUrl="/zemotacqy.svg"
					liveLink="https://youtu.be/MHbl3zyy5oE"
					codeLink="https://github.com/vaibhavrajsingh2001/zemotacqy"
				/>
				<ProjectCard
					projectName="WASM Tools"
					imgUrl="/WASM-Tools.svg"
					liveLink="https://wasm.vaibhavraj.dev/"
					codeLink="https://github.com/vaibhavrajsingh2001/wasm-tools"
				/>
				<ProjectCard
					projectName="Object Detector"
					imgUrl="/tfjs.svg"
					liveLink="https://vaibhavrajsingh2001.github.io/cocoSsd-object-detection/"
					codeLink="https://github.com/vaibhavrajsingh2001/object-detection-using-cocoSsd"
				/>
				<ProjectCard
					projectName="Arcade Game"
					imgUrl="/arcade.svg"
					liveLink="https://arcade.vaibhavraj.dev/"
					codeLink="https://github.com/vaibhavrajsingh2001/vrs-arcade"
				/>
				<ProjectCard
					projectName="Random Content Generator"
					imgUrl="/puppeteer.svg"
					liveLink="https://www.npmjs.com/package/random-confession-generator"
					codeLink="https://github.com/vaibhavrajsingh2001/random-confession-generator"
				/>
			</ul>
		</div>

		<g-image
			width="20px"
			height="20px"
			class="mx-auto"
			alt="arrow towards bio"
			src="/arrow2.svg"
		></g-image>

		<div class="py-16 border-gray-200 border-b">
			<div
				class="get-to-know-me container-inner mx-auto text-xl pb-16 relative"
			>
				<g-image
					width="20px"
					height="20px"
					class="my-16"
					id="about"
					alt="Who Am I?"
					src="/whoami.svg"
				/>

				<div
					class="flex flex-col sm:flex-row justify-between items-center mb-16"
				>
					<div>
						<g-image
							width="20px"
							height="20px"
							src="/avatar.png"
							alt="avatar"
							class="w-64 h-64 mb-8 lg:mb-0"
						/>
					</div>
					<div class="flex-1 text-lg sm:text-xl ml-6">
						<p class="m-8">
							By profession, I'm a full stack developer (read as
							"gets paid to google perfectly").
							<a href="/vaibhav-raj-singh-resume.pdf">Download resume</a>
						</p>

						<p class="m-8">
							By passion, I'm enthusiastic about MCU, Ukuleles,
							JavaScript, and always hungry for trivia.
						</p>

						<p class="m-8">
							At present I'm working at
							<a href="https://konghq.com/">Kong</a> as a
							Software Engineer on the Core UI team.
						</p>
					</div>
				</div>
			</div>
		</div>

		<div class="overflow-x-hidden">
			<div class="contact-me bg-background-secondary pt-16">
				<div class="container-inner mx-auto text-xl pb-4 relative">
					<h2 class="font-bold mb-6" id="contact">Contact me:</h2>

					<div
						class="absolute right-0 top-0"
						style="transform: translate(100%) rotate(180deg)"
					>
						<svg width="170px" height="170px">
							<use xlink:href="#dots-triangle" />
						</svg>
					</div>

					<p class="my-8">
						Want to chat about anything ranging from marine life to
						custom hooks in React? Ping me anytime on
						<a href="https://twitter.com/vrs2001">Twitter</a>.
					</p>

					<p class="my-8">
						In case you prefer face-to-face discussions, do tell
						when by selecting a date & time over
						<a
							href=""
							onclick="Calendly.initPopupWidget({url: 'https://calendly.com/vaibhavrajsingh'});return false;"
							>here</a
						>.
					</p>

					<p class="my-8">
						Or, if you want to begin a formal conversation, you can
						easily fill up the form below and I'll reach out
						personally within 24 hours. Pinky promise.
					</p>

					<div class="text-lg sm:text-lg mb-16">
						<form
							action="https://formspree.io/f/xgepyjjq"
							method="POST"
							class="mb-12"
						>
							<div class="flex flex-wrap mb-6 -mx-4">
								<div class="w-full md:w-1/2 mb-6 md:mb-0 px-4">
									<label
										class="block mb-2 text-copy-primary"
										for="name"
									>
										Name
									</label>

									<input
										type="text"
										name="name"
										id="name"
										placeholder="Jon Snow"
										class="block w-full bg-background-form border border-border-color-primary shadow rounded outline-none focus:border-green-700 mb-2 p-4"
										required
									/>
								</div>

								<div class="w-full px-4 md:w-1/2">
									<label
										class="block text-copy-primary mb-2"
										for="email"
									>
										Email Address
									</label>

									<input
										type="email"
										name="email"
										id="email"
										placeholder="email@example.com"
										class="block w-full bg-background-form border border-border-color-primary shadow rounded outline-none focus:border-green-700 mb-2 p-4"
										required
									/>
								</div>
							</div>

							<div class="w-full mb-12">
								<label
									class="block text-copy-primary mb-2"
									for="message"
								>
									Message
								</label>

								<textarea
									id="message"
									rows="5"
									name="message"
									class="block w-full bg-background-form border border-border-color-primary shadow rounded outline-none appearance-none focus:border-green-700 mb-2 px-4 py-4"
									placeholder="Enter your message here."
									required
								></textarea>
							</div>

							<div class="flex justify-end w-full">
								<input
									type="submit"
									value="Submit"
									class="block bg-green-700 hover:bg-green-800 text-white text-sm font-semibold tracking-wide uppercase shadow rounded cursor-pointer px-6 py-3"
								/>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</Layout>
</template>

<script>
import ProjectCard from '../components/ProjectCard';

export default {
	metaInfo: {
		title: 'Home',
	},
	components: {
		ProjectCard,
	},
	mounted() {
		let calendlyScript = document.createElement('script');
		calendlyScript.setAttribute(
			'src',
			'https://assets.calendly.com/assets/external/widget.js'
		);
		document.body.appendChild(calendlyScript);
	},
};
</script>

<style src="../css/calendly.css" />
