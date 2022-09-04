const kotak = document.querySelector('.kotak');

kotak.addEventListener('click', function(e) {

	const bulet = document.querySelector('.bulet');
	const bulan = document.querySelector('.bulan');
	const hiasBulan = document.querySelector('.bulan .hias');
	const matahari = document.querySelector('.matahari');

	bulet.classList.toggle('gelap');

	if (bulet.classList.contains('gelap')) {
		document.body.classList.add('warna-bg');
		kotak.classList.add('warna-kotak');
		bulet.classList.add('warna-bulet');

		bulan.style.opacity = '1';
		hiasBulan.classList.add('warna-hias');
		matahari.style.opacity = '0';
	} else {
		document.body.classList.remove('warna-bg');
		kotak.classList.remove('warna-kotak');
		bulet.classList.remove('warna-bulet');

		bulan.style.opacity = '0';
		hiasBulan.classList.remove('warna-hias');
		matahari.style.opacity = '1';
	}
});