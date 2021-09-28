import { motion } from "framer-motion";
import { FaTelegramPlane } from "react-icons/fa";
import { TiSocialFacebook, TiSocialTwitter } from "react-icons/ti";

import { sidebarVariant } from "@/utils/framerMotionAnimation";

export default function LeftSidebar() {
	return (
		<motion.div variants={sidebarVariant} initial="initial" animate="animate" className="fixed left-10 bottom-0 md:block hidden">
			<ul className="flex h-full overflow-hidden flex-col gap-6 pt-2 items-center">
				<li>
					<TiSocialFacebook size="1.8rem" className="hoverable-social-media" />
				</li>
				<li>
					<TiSocialTwitter size="1.5rem" className="hoverable-social-media" />
				</li>
				<li>
					<FaTelegramPlane size="1.2rem" className="hoverable-social-media" />
				</li>
				<li>
					<div className="h-24 w-0.5 bg-gray-900 dark:bg-white"></div>
				</li>
			</ul>
		</motion.div>
	);
}
