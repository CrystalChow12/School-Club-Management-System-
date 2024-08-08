<!--old nav-->
<script lang="ts">
    let isDropDownOpen = false;
</script>


<header class="font-Roboto">
	<nav class="bg-gradient-to-r from-slate-100 to-blue-100 stick top-0">
		<div class="grid grid-cols-3 gap-4 ml-3 mr-3">
			<!-- <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2"> -->
			<div class="flex-none">
				<a class="font-cinzel font-bold" href="/home"
					><img class="float-left w-16 h-17" src="/Logo.png" alt="logo" />
					<span class="font-cinzel font-semibold text-sm flex items-center mx-auto pt-3"
						>Phoenix Rising Academy</span
					>
				</a>
			</div>

			<div class="flex">
				<form class="">
					<div class="">
						<button
							on:click={() => (isDropDownOpen = !isDropDownOpen)}
							id="dropdownDefaultButton"
							data-dropdown-toggle="dropdown"
							class=" rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center
							justify-center"
							type="button"
							>All Clubs <svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6" /></svg
							>
						</button>

						{#if isDropDownOpen}
							<!-- Dropdown menu -->
							<div id="dropdown" class="z-10 divide-y divide-gray-100 rounded-lg">
								<ul class="py-2 text-sm" aria-labelledby="dropdownDefaultButton">
									<li>
										<a href="#" class="block px-4 py-2">Primary</a>
									</li>
									<li>
										<a href="#" class="block px-4 py-2">Secondary</a>
									</li>
								</ul>
							</div>
						{/if}
						<div class="relative w-full">
							<input
								type="search"
								id="search-dropdown"
								class="block p-2.5 w-full z-20 text-sm"
								placeholder="Karate..."
							/>

							<button type="submit" class="absolute top-0 end-0 p-2.5 text-sm font-medium h-full">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="lucide lucide-search"
									><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg
								>

								<span class="sr-only">Search</span>
							</button>
						</div>
					</div>
				</form>
			</div>
			<div class=""><a href="/admin">Admin Login</a></div>
		</div>
	</nav>
</header>

<!-- <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="py-2 px-3 hover:bg-slate-300 flex items-center gap-2 rounded"
type="button">
	<span class="pointer-events-none">All clubs</span>
		<svg xmlns="http://www.w3.org/2000/svg" width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6" /></svg> 
							</button>

							
								<div
									id="dropdown"
									class="absolute  bg-slate-200 rounded-b-lg pb-2 w-48">
									<select class="py-2 text-sm" aria-labelledby="dropdownDefaultButton">
										<option class="block px-4 py-2 hover:bg-slate-400">Primary</option>			
										<option class="block px-4 py-2 bg-slate-400">Secondary</option>
									</select>
								</div>
							
						</div> -->