<script>
	import { Briefcase, Folder, House, SquarePen } from 'lucide-svelte';
</script>

<header class="flex justify-center p-8">
	<div class="flex gap-8 rounded-2xl bg-[#B6B4BD10] px-4 py-1">
		<a
			class="tooltip tooltip-bottom transform transition duration-300 ease-in-out hover:scale-110"
			data-tip="home"
			href="/"
		>
			<div class="p-2">
				<House size={20} />
			</div>
		</a>
		<a
			class="tooltip tooltip-bottom transform transition duration-300 ease-in-out hover:scale-110"
			data-tip="home"
			href="/"
		>
			<div class="p-2">
				<Folder size={20} />
			</div>
		</a>
		<a
			class="tooltip tooltip-bottom transform transition duration-300 ease-in-out hover:scale-110"
			data-tip="home"
			href="/"
		>
			<div class="p-2">
				<Briefcase size={20} />
			</div>
		</a>
		<a
			class="tooltip tooltip-bottom transform transition duration-300 ease-in-out hover:scale-110"
			data-tip="home"
			href="/"
		>
			<div class="p-2">
				<SquarePen size={20} />
			</div>
		</a>
	</div>
</header>
