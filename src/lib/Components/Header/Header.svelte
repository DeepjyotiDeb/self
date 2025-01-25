<script>
	import { Briefcase, Folder, House, SquarePen } from 'lucide-svelte';

	// You can add any necessary script here
</script>

<header class="flex justify-center p-8">
	<div class="flex gap-8 rounded-2xl bg-[#B6B4BD10] px-4 py-1">
		<a
			class="tooltip tooltip-bottom transform transition duration-300 ease-in-out hover:scale-110"
			data-tip="home"
			href="/"
		>
			<div class="p-2">
				<House />
			</div>
		</a>
		<a
			class="tooltip tooltip-bottom transform transition duration-300 ease-in-out hover:scale-110"
			data-tip="home"
			href="/"
		>
			<div class="p-2">
				<Folder />
			</div>
		</a>
		<a
			class="tooltip tooltip-bottom transform transition duration-300 ease-in-out hover:scale-110"
			data-tip="home"
			href="/"
		>
			<div class="p-2">
				<Briefcase />
			</div>
		</a>
		<a
			class="tooltip tooltip-bottom transform transition duration-300 ease-in-out hover:scale-110"
			data-tip="home"
			href="/"
		>
			<div class="p-2">
				<SquarePen />
			</div>
		</a>
	</div>
</header>
