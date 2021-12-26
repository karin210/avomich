import { unmount, mount, bind, render, listeners } from 'https://cdn.skypack.dev/somedom';

const tag = bind(render, listeners());

function modal(msg) {
	let ref;

	function onclick(e) {
		if (e.target === ref) {
			unmount(ref);
		}
	}

	function input(el) {
		input.current = el;
	}
	function save() {
		console.log('HEY!', input.current.value);
	}

	const html = ['div', { class: 'modal', onclick }, [
		['div', { class: 'padded' }, [
			['input', { type: 'text', oncreate: input }],
			['button', { onclick: save }, 'Click me'],
		]],
	]];

	ref = mount(document.body, html, tag);
}

window.login = function login() {
	modal('HOLA!!');
}
