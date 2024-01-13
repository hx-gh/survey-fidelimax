import styles from './header.module.css';
import Image from 'next/image';
import BurguerSVG from '../../../public/icons/burguer.svg';
import ChevronDownSVG from '../../../public/icons/chevron_down.svg';
import LogoPNG from '../../../public/images/logo.png';
export default function Header() {
	return (
		<header className={`${styles.header_container} h-80 px-8 py-4`}>
			<div
				className={`${styles.header_sub_container} flex flex-row justify-between items-center h-20`}
			>
				<div className='header_item_container flex flex-column justify-center items-center gap-4'>
					<div className='header_burguer_container'>
						<Image
							src={BurguerSVG}
							className='h-8 w-auto'
							alt=''
						/>
					</div>
					<div className='header_logo_container'>
						<Image
							src={LogoPNG}
							alt=''
							className='h-6 w-auto'
						></Image>
					</div>
				</div>
				<div className='header_user_container hidden md:flex flex-column items-center justify-center gap-4 '>
					<div>
						<span
							className={`${styles.header_user_icon_container} flex flex-row items-center justify-center`}
						>
							F
						</span>
					</div>
					<div
						className={`${styles.header_user_placeholder_container}`}
					>
						<span>Fábio C Pinto</span>
					</div>
					<div>
						<Image src={ChevronDownSVG} alt='' />
					</div>
				</div>
			</div>
			<div className={`${styles.header_breadcrumb_container} px-10`}>
				<span>Pesquisa de Satisfação</span>
			</div>
		</header>
	);
}
