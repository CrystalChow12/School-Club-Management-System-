<script>
</script>

<div
	class="font-inter
    flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
>
	<div class="w-full rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 bg-slate-50 mx-auto">
		<div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <img class="m-auto w-16 h-17" src="/Logo.png" alt="logo" />
			<h2 class="text-xl font-bold md:text-2xl text-center">Sign in to your account</h2>
            <br>
			<form class="space-y-4 md:space-y-6" action="#">
				<div>
					<label for="email" class="block mb-2 text-sm font-medium">Your email</label>
					<input
						type="email"
						name="email"
						id="email"
						class="bg-white border
                        border-gray-300
                        text-gray-900 rounded-lg
                        focus:outline-none
                        focus:ring-2
                        focus:ring-blue-300
                        focus:border-blue-300 block
                    w-full p-2.5 text-sm"
						placeholder="admin@email.com"
						required
					/>
				</div>
				<div>
					<label for="password" class="block mb-2 text-sm font-medium text-gray-900">Password</label
					>

					<input
						type="password"
						name="password"
						id="password"
						placeholder="••••••••"
						class=" bg-white border border-gray-300 text-gray-900 rounded-lg w-full p-2.5 text-sm
                        focus:outline-none
                        focus:ring-2
                        focus:ring-blue-300
                        focus:border-blue-300 block"
						required
					/>
				</div>

                <br>
                <div class="flex justify-center">
				<button
					type="submit"
					class="font-medium
                    w-1/2 rounded-lg text-orange-400 px-5 py-2.5 text-center
                    bg-blue-900
                    hover:bg-blue-800"
					>Log in</button
				>
                </div>
            
			</form>
		</div>
	</div>
</div>
