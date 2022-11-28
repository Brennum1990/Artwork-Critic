export default function() {

	const showContainers = document.querySelectorAll('.comment__replies');

	showContainers.forEach(btn => 
		btn.addEventListener('click', (e) => {
			let parentContainer = e.target.closest('.comment__container');
			let _id = parentContainer.id;
			if (_id) {
				let childrenContainer = parentContainer.querySelectorAll(
					`[dataset=${_id}]`
					);
				childrenContainer.forEach(child => child.classlist.toggle('opened'));
			}
	  })
	);
}