import type { IconType } from 'react-icons';

interface IconProps {
	icon: IconType;
	className?: string;
}

export default function Icon({ icon: IconComponent, className }: IconProps) {
	return (
		<span translate="no" aria-hidden="true" className={className}>
			<IconComponent className="block" />
		</span>
	);
}
