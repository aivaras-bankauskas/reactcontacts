import Contact from '@/data/models/contactModel';
import { Link } from 'react-router-dom';

function ContactItem({ slug, firstName, lastName }: Contact): JSX.Element {
	return (
		<li className="flex justify-between gap-x-6 py-2.5">
			<Link to={`/${slug}`}>
				<div className="flex min-w-0 gap-x-4">
					<div className="flex min-w-0 gap-x-2">
						<div className="font-semibold text-color-light dark:text-color-dark">{firstName}</div>
						<div className=" text-color-light dark:text-color-dark">{lastName}</div>
					</div>
				</div>
			</Link>
		</li>
	);
}

export default ContactItem;