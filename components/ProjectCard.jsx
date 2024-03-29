import Image from "next/image";
import Tippy from "@tippyjs/react";
import { motion } from "framer-motion";
import { fadeUp } from "@/utils/framerMotionAnimation";

export default function ProjectCard({ title, description, tectStacks, imageSrc, challenge, solution, alignRight = false }) {
	return (
		<div className="grid grid-cols-12 ">
			<div
				className={`flex flex-col space-y-4 justify-between col-span-full z-[2] row-start-1 p-5 md:p-0 ${
					alignRight ? "md:col-start-7 md:col-end-[-1] md:text-right" : "md:col-end-7 md:text-left"
				}`}
			>
				<motion.div variants={fadeUp}>
					<p className="text-blue-700 dark:text-cyan-500 tracking-wide">Featured Project</p>
					<p className="font-semibold text-xl md:text-2xl hover:text-blue-700 dark:hover:text-cyan-500">{title}</p>
				</motion.div>
				<motion.div variants={fadeUp} className={`md:bg-sand-300 md:dark:bg-darkBlue-400 rounded-md`}>
					<p className={`text-sm p-0.5 md:p-4 text-current`}>{description}</p>
				</motion.div>

				<motion.div variants={fadeUp} className={`flex space-x-4 text-right md:mb-5 self-end ${alignRight ? "md:self-end" : "md:self-start"}`}>
					{tectStacks.map(({ name, icon }) => (
						<Tippy
							key={name}
							animation="scale-subtle"
							interactive={true}
							content={
								<span className="inline-block p-2 bg-sand-200 dark:bg-darkBlue-500 ring-1 ring-blue-700 dark:ring-cyan-500 rounded-md shadow-md dark:bg-dark">
									{name}
								</span>
							}
						>
							<button aria-label={name} className="w-6 h-6 hover:text-blue-700 dark:hover:text-cyan-500">
								{icon}
							</button>
						</Tippy>
					))}
				</motion.div>
			</div>

			<motion.div variants={fadeUp} className={`col-span-full row-start-1 ${alignRight ? "md:col-end-8" : "md:col-start-6 md:col-end-[-1]"}`}>
				<figure className="relative brightness-100 dark:brightness-50 dark:opacity-25 opacity-[0.15] rounded-md bg-blue-300 dark:bg-cyan-400 md:bg-blue-200 md:brightness-90 md:dark:brightness-100 md:opacity-100 md:dark:opacity-70  min-h-full md:min-h-[17em] hover:bg-white hover:brightness-100 dark:hover:bg-white dark:hover:opacity-100 duration-300">
					<Image className="rounded-md mix-blend-multiply object-cover" src={imageSrc} alt="" layout="fill" />
				</figure>
			</motion.div>

			<motion.div variants={fadeUp} className="col-span-12 md:col-span-6 flex space-x-5 py-4">
				<p className="bg-sand-300 dark:bg-darkBlue-400 text-xl p-4 rounded-2xl h-[max-content]">🧐</p>
				<blockquote>
					<p className="text-xl py-4 tracking-wide text-blue-700 dark:text-cyan-500">Challenge</p>
					<p className="opacity-80">{challenge}</p>
				</blockquote>
			</motion.div>
			<motion.div variants={fadeUp} className="col-span-12 md:col-span-6 flex space-x-5 py-4">
				<p className="bg-sand-300 dark:bg-darkBlue-400 text-xl p-4 rounded-2xl h-[max-content]">🙌</p>
				<blockquote>
					<p className="text-xl py-4 tracking-wide text-blue-700 dark:text-cyan-500">Solution</p>
					<p className="opacity-80">{solution}</p>
				</blockquote>
			</motion.div>
		</div>
	);
}
