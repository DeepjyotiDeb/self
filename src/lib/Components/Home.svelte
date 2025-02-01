<script>
	import { ArrowUpRight, FileStack, Layers, Table, Table2 } from 'lucide-svelte';

	import Saos from './Saos.svelte';
	const animString = 'fade-in 0.8s cubic-bezier(0.390, 0.575, 0.565, 1.000) both';
</script>

<!-- Title -->
<Saos animation={animString}>
	<div class="text-center lg:text-left lg:text-9xl">
		<div class="text-6xl font-bold md:text-7xl lg:text-8xl">
			<div class="">SOFTWARE</div>
			<div class=" text-[#B6B4BD20]">ENGINEER</div>
		</div>
		<div class="text-lg text-[#a7a8ac]">
			I'm a software engineer with a passion for building things.
		</div>
	</div>
</Saos>

<!-- enumerated values -->
<Saos animation={animString}>
	<div class="flex justify-center gap-8 text-center lg:justify-start lg:text-left">
		<div class="">
			<div class="text-4xl font-semibold md:text-6xl">+3</div>
			<div>YEARS OF</div>
			<div>EXPERIENCE</div>
		</div>
		<div class="">
			<div class="text-4xl font-semibold md:text-6xl">+22</div>
			<div>PROJECTS</div>
			<div>COMPLETED</div>
		</div>
		<div class="">
			<div class="text-4xl font-semibold md:text-6xl">+3.1K</div>
			<div>GIT</div>
			<div>COMMITS</div>
		</div>
	</div>
</Saos>
<!-- skill cards -->
<Saos animation={animString}>
	<div class=" flex w-full flex-col justify-center gap-4 md:mx-0 md:flex-row">
		<div class="card mx-5 bg-primary text-primary-content md:mx-0 md:w-80">
			<div class="card-body px-7">
				<Layers />

				<p class="text-xl font-medium">FULL STACK DEVELOPMENT, CLOUD SYSTEMS</p>
				<div class="card-actions justify-end">
					<button
						class="btn btn-square btn-sm bg-primary text-white hover:border hover:border-white hover:bg-white hover:text-primary"
						>→</button
					>
				</div>
			</div>
		</div>
		<div class="card mx-5 bg-secondary text-base-100 md:mx-0 md:w-72">
			<div class="card-body">
				<Table2 />
				<p class="text-xl font-medium">REACTJS, NEXTJS, AWS, KOTLIN, ANDROID</p>
				<div class="card-actions justify-end">
					<button
						class="btn btn-square btn-sm bg-secondary text-black hover:border hover:border-black hover:bg-black hover:text-secondary"
						>→</button
					>
				</div>
			</div>
		</div>
	</div>
</Saos>

<!-- recent projects -->
<Saos animation={animString}>
	<div class="space-y-4 md:space-y-8">
		<div class="text-center text-5xl font-bold md:text-7xl lg:text-left lg:text-8xl">
			<div class="">RECENT</div>
			<div class=" text-[#B6B4BD20]">PROJECTS</div>
		</div>

		<a
			href="/"
			class="group relative flex items-center gap-6 rounded-2xl p-6 hover:bg-base-200 hover:bg-opacity-5"
		>
			<div
				class="absolute right-5 top-5 hidden transform transition-transform duration-300 group-hover:-translate-y-[10px] group-hover:translate-x-[10px] md:block"
			>
				<ArrowUpRight class="group-hover:text-primary" />
			</div>
			<div class="size-20 bg-slate-300 md:size-32"></div>
			<div class="flex flex-col">
				<div class="text-xl font-medium md:text-3xl">Project title</div>
				<div>brief summary</div>
			</div>
		</a>
		<a
			href="/"
			class="group relative flex items-center gap-6 rounded-2xl p-6 hover:bg-base-200 hover:bg-opacity-5"
		>
			<div
				class="absolute right-5 top-5 hidden transform transition-transform duration-300 group-hover:-translate-y-[10px] group-hover:translate-x-[10px] md:block"
			>
				<ArrowUpRight class="group-hover:text-primary" />
			</div>
			<div class="min-h-20 min-w-20 bg-slate-300 md:size-32"></div>
			<div class="flex flex-col">
				<div class="text-xl font-medium md:text-3xl">Project title</div>
				<div>Lorem ipsum dolor, Lorem ipsum dolor sit amet</div>
			</div>
		</a>
		<a
			href="/"
			class="group relative flex items-center gap-6 rounded-2xl p-6 hover:bg-base-200 hover:bg-opacity-5"
		>
			<div
				class="absolute right-5 top-5 hidden transform transition-transform duration-300 group-hover:-translate-y-[10px] group-hover:translate-x-[10px] md:block"
			>
				<ArrowUpRight class="group-hover:text-primary" />
			</div>
			<div class="size-20 bg-slate-300 md:size-32"></div>
			<div class="flex flex-col">
				<div class="text-xl font-medium md:text-3xl">Project title</div>
				<div>brief summary</div>
			</div>
		</a>
	</div>
</Saos>

<!-- experience -->
<Saos animation={animString}>
	<div class="space-y-4">
		<div class="text-center text-5xl font-bold md:text-left md:text-6xl lg:text-7xl">
			<div class="">+3 YEARS OF</div>
			<div class=" text-[#B6B4BD20]">EXPERIENCE</div>
		</div>
		<div class="flex flex-col gap-2">
			<a
				class="group relative flex flex-col gap-4 rounded-2xl p-6 hover:bg-base-200 hover:bg-opacity-5"
				href="/"
			>
				<div
					class="absolute right-10 top-10 hidden transform transition-transform duration-300 group-hover:-translate-y-[10px] group-hover:translate-x-[10px] md:block"
				>
					<ArrowUpRight class="group-hover:text-primary" />
				</div>
				<div class="text-2xl font-medium">Smartpaper - playpower labs</div>
				<div class="max-w-md">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus cupiditate pariatur rem
					recusandae nulla atque accusamus praesentium ab tempore esse consequuntur error omnis
					dolores, quam assumenda quasi iste odio eos?
				</div>
				<div>2022 - present</div>
			</a>
			<a
				class="group relative flex flex-col gap-4 rounded-2xl p-6 hover:bg-base-200 hover:bg-opacity-5"
				href="/"
			>
				<div
					class="absolute right-10 top-10 hidden transform transition-transform duration-300 group-hover:-translate-y-[10px] group-hover:translate-x-[10px] md:block"
				>
					<ArrowUpRight class="group-hover:text-primary" />
				</div>
				<div class="text-2xl font-medium">Tata Consultancy Services</div>
				<div class="max-w-md">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus cupiditate pariatur rem
					recusandae nulla atque accusamus praesentium ab tempore esse consequuntur error omnis
					dolores, quam assumenda quasi iste odio eos?
				</div>
				<div>2021 - 2022</div>
			</a>
		</div>
	</div>
</Saos>
<!-- blog descriptions -->
<Saos animation={animString}>
	<div class="space-y-4">
		<div class="text-6xl font-bold md:text-7xl lg:text-8xl">
			<div class="">THINGS I</div>
			<div class=" text-[#B6B4BD20]">WROTE</div>
		</div>
	</div>
</Saos>
