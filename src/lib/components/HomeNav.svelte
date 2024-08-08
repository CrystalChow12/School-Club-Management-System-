<script lang="ts">
	let isDropDownOpen = false;
	let isHamBurgerOpen = false; //giving issues
</script>

<header class="text-blue-950 w-full">
	<nav class="bg-gradient-to-r from-slate-100 to-blue-100 stick top-0">
		<div class="container md:flex items-center gap-9">
			<!---LOGO -->
			<div class="flex items-center justify-between md:w-auto w-full">
				<a href="/home" class="py-5 px-2 flex-1 font-cinzel font-semibold"
					><img class="float-left w-16 h-17" src="/Logo.png" alt="logo" />
					<span class="font-cinzel font-semibold text-sm flex items-center mx-auto pt-6"
						>Phoenix Rising Academy</span
					></a
				>

				<!----mobile menu icon-->
				<div class="md:hidden flex items-center">
					<button
						on:click={() => (isHamBurgerOpen = !isHamBurgerOpen)}
						type="button"
						class="mobile-menu-button pr-3"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="lucide lucide-menu"
							><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line
								x1="4"
								x2="20"
								y1="18"
								y2="18"
							/></svg
						>
					</button>
				</div>
			</div>

			<div
				class="flex md:flex md:flex-row flex-col items-center justify-start md:space-x-1 pb-3 md:pb-0"
				id="navigation-menu"
			>

				<a href="/login" class="py-2 px-3 block">Admin Login</a>

				<!-- flex md:flex-row flex-row z-10 rounded:md border-rounded-md  -->
				<!---Drop down menu button -->
				<form class="bg-pink-400 rounded-lg flex ">
					<label for="school_type" class="hidden"></label>
					<select id="school_type" class="text-sm py-2.5 text-center items-center space">
						<option value="all">All Clubs</option>
						<option value="primary">Primary</option>
						<option value="secondary">Secondary</option>
					</select>

					<!--search bar-->

					<input
						type="search"
						id="search-dropdown"
						class="p-2.5 z-10 md:space-x-0"
						placeholder="Karate..."
					/>
					<span
						class="flex items-center rounded rounded-l-none border-0 px-3 font-bold bg-none"
					>
						<button class="bg-none"
							><svg
								xmlns="http://www.w3.org/2000/svg"
								width="18"
								height="18"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="lucide lucide-search"
								><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg
							></button
						>
					</span>

					<!-- </div> -->
				</form>

				
			</div>
		</div>
	</nav>
</header>
