"use strict";

const DATA = [
	{
		"first name": "Олексій",
		"last name": "Петров",
		photo: "./img/trainers/trainer-m1.jpg",
		specialization: "Басейн",
		category: "майстер",
		experience: "8 років",
		description:
			"Олексій має багаторічний досвід роботи з плавцями. Він займається якісною підготовкою спортсменів на міжнародних змаганнях. Його методика базується на новітніх технологіях тренувань.",
	},
	{
		"first name": "Марина",
		"last name": "Іванова",
		photo: "./img/trainers/trainer-f1.png",
		specialization: "Тренажерний зал",
		category: "спеціаліст",
		experience: "2 роки",
		description:
			"Марина спеціалізується на роботі з ваговими тренажерами. Вона розробила унікальну програму для набору м'язової маси. Її клієнти завжди задоволені результатами.",
	},
	{
		"first name": "Ігор",
		"last name": "Сидоренко",
		photo: "./img/trainers/trainer-m2.jpg",
		specialization: "Дитячий клуб",
		category: "інструктор",
		experience: "1 рік",
		description:
			"Ігор працює з дітьми різного віку. Він створив ігрові методики для розвитку координації та спритності. Його уроки завжди цікаві та корисні для малюків.",
	},
	{
		"first name": "Тетяна",
		"last name": "Мороз",
		photo: "./img/trainers/trainer-f2.jpg",
		specialization: "Бійцівський клуб",
		category: "майстер",
		experience: "10 років",
		description:
			"Тетяна є експертом в бойових мистецтвах. Вона проводить тренування для професіоналів і новачків. Її підхід до навчання допомагає спортсменам досягати високих результатів.",
	},
	{
		"first name": "Сергій",
		"last name": "Коваленко",
		photo: "./img/trainers/trainer-m3.jpg",
		specialization: "Тренажерний зал",
		category: "інструктор",
		experience: "1 рік",
		description:
			"Сергій фокусується на роботі з фітнесом та кардіотренуваннями. Він вдосконалив свої методики протягом багатьох років. Його учні завжди в формі та енергійні.",
	},
	{
		"first name": "Олена",
		"last name": "Лисенко",
		photo: "./img/trainers/trainer-f3.jpg",
		specialization: "Басейн",
		category: "спеціаліст",
		experience: "4 роки",
		description:
			"Олена спеціалізується на синхронному плаванні. Вона тренує команди різного рівня. Її команди завжди займають призові місця на змаганнях.",
	},
	{
		"first name": "Андрій",
		"last name": "Волков",
		photo: "./img/trainers/trainer-m4.jpg",
		specialization: "Бійцівський клуб",
		category: "інструктор",
		experience: "1 рік",
		description:
			"Андрій має досвід у вивченні різних бойових мистецтв. Він викладає техніку та тактику бою. Його учні здобувають перемоги на міжнародних турнірах.",
	},
	{
		"first name": "Наталія",
		"last name": "Романенко",
		photo: "./img/trainers/trainer-f4.jpg",
		specialization: "Дитячий клуб",
		category: "спеціаліст",
		experience: "3 роки",
		description:
			"Наталія розробила унікальну програму для дітей дошкільного віку. Вона допомагає дітям розвивати фізичні та ментальні навички. Її класи завжди веселі та динамічні.",
	},
	{
		"first name": "Віталій",
		"last name": "Козлов",
		photo: "./img/trainers/trainer-m5.jpg",
		specialization: "Тренажерний зал",
		category: "майстер",
		experience: "10 років",
		description:
			"Віталій спеціалізується на функціональному тренуванні. Він розробив ряд ефективних тренувальних програм. Його клієнти швидко досягають бажаних результатів.",
	},
	{
		"first name": "Юлія",
		"last name": "Кравченко",
		photo: "./img/trainers/trainer-f5.jpg",
		specialization: "Басейн",
		category: "спеціаліст",
		experience: "4 роки",
		description:
			"Юлія є експертом у водних видах спорту. Вона проводить тренування з аквагімнастики та аеробіки. Її учні демонструють вражаючі показники на змаганнях.",
	},
	{
		"first name": "Олег",
		"last name": "Мельник",
		photo: "./img/trainers/trainer-m6.jpg",
		specialization: "Бійцівський клуб",
		category: "майстер",
		experience: "12 років",
		description:
			"Олег є визнаним майстром в бойових мистецтвах. Він тренує чемпіонів різних вагових категорій. Його методики вважаються одними з найефективніших у світі бойових мистецтв.",
	},
	{
		"first name": "Лідія",
		"last name": "Попова",
		photo: "./img/trainers/trainer-f6.jpg",
		specialization: "Дитячий клуб",
		category: "інструктор",
		experience: "1 рік",
		description:
			"Лідія має великий досвід у роботі з дітьми. Вона організовує різноманітні спортивні ігри та заняття. Її класи завжди допомагають дітям розвивати соціальні навички та командний дух.",
	},
	{
		"first name": "Роман",
		"last name": "Семенов",
		photo: "./img/trainers/trainer-m7.jpg",
		specialization: "Тренажерний зал",
		category: "спеціаліст",
		experience: "2 роки",
		description:
			"Роман є експертом у кросфіту та функціональних тренуваннях. Він розробив власні програми для різних вікових груп. Його учні часто отримують нагороди на фітнес-турнірах.",
	},
	{
		"first name": "Анастасія",
		"last name": "Гончарова",
		photo: "./img/trainers/trainer-f7.jpg",
		specialization: "Басейн",
		category: "інструктор",
		experience: "1 рік",
		description:
			"Анастасія фокусується на водних програмах для здоров'я та фітнесу. Вона проводить тренування для осіб з різним рівнем підготовки. Її учні відзначають покращення здоров'я та благополуччя після занять.",
	},
	{
		"first name": "Валентин",
		"last name": "Ткаченко",
		photo: "./img/trainers/trainer-m8.jpg",
		specialization: "Бійцівський клуб",
		category: "спеціаліст",
		experience: "2 роки",
		description:
			"Валентин є експертом в таеквондо та кікбоксингу. Він викладає техніку, тактику та стратегію бою. Його учні часто стають чемпіонами на національних та міжнародних змаганнях.",
	},
	{
		"first name": "Лариса",
		"last name": "Петренко",
		photo: "./img/trainers/trainer-f8.jpg",
		specialization: "Дитячий клуб",
		category: "майстер",
		experience: "7 років",
		description:
			"Лариса розробила комплексну програму для розвитку фізичних та інтелектуальних навичок дітей. Вона проводить заняття в ігровій формі. Її методика допомагає дітям стати активними та розумними.",
	},
	{
		"first name": "Олексій",
		"last name": "Петров",
		photo: "./img/trainers/trainer-m9.jpg",
		specialization: "Басейн",
		category: "майстер",
		experience: "11 років",
		description:
			"Олексій має багаторічний досвід роботи з плавцями. Він займається якісною підготовкою спортсменів на міжнародних змаганнях. Його методика базується на новітніх технологіях тренувань.",
	},
	{
		"first name": "Марина",
		"last name": "Іванова",
		photo: "./img/trainers/trainer-f9.jpg",
		specialization: "Тренажерний зал",
		category: "спеціаліст",
		experience: "2 роки",
		description:
			"Марина спеціалізується на роботі з ваговими тренажерами. Вона розробила унікальну програму для набору м'язової маси. Її клієнти завжди задоволені результатами.",
	},
	{
		"first name": "Ігор",
		"last name": "Сидоренко",
		photo: "./img/trainers/trainer-m10.jpg",
		specialization: "Дитячий клуб",
		category: "інструктор",
		experience: "1 рік",
		description:
			"Ігор працює з дітьми різного віку. Він створив ігрові методики для розвитку координації та спритності. Його уроки завжди цікаві та корисні для малюків.",
	},
	{
		"first name": "Наталія",
		"last name": "Бондаренко",
		photo: "./img/trainers/trainer-f10.jpg",
		specialization: "Бійцівський клуб",
		category: "майстер",
		experience: "8 років",
		description:
			"Наталія є майстром у бойових мистецтвах. Вона вивчала різні техніки та стили, із якими працює зі своїми учнями. Її підхід до навчання відповідає найвищим стандартам.",
	},
	{
		"first name": "Андрій",
		"last name": "Семенов",
		photo: "./img/trainers/trainer-m11.jpg",
		specialization: "Тренажерний зал",
		category: "інструктор",
		experience: "1 рік",
		description:
			"Андрій спеціалізується на функціональному тренуванні. Він розробив власну систему вправ для зміцнення корпусу. Його учні завжди отримують видимі результати.",
	},
	{
		"first name": "Софія",
		"last name": "Мельник",
		photo: "./img/trainers/trainer-f11.jpg",
		specialization: "Басейн",
		category: "спеціаліст",
		experience: "6 років",
		description:
			"Софія працює з аквагімнастикою. Вона вивчила різні техніки та стили плавання. Її заняття допомагають клієнтам розслабитися та покращити фізичну форму.",
	},
	{
		"first name": "Дмитро",
		"last name": "Ковальчук",
		photo: "./img/trainers/trainer-m12.png",
		specialization: "Дитячий клуб",
		category: "майстер",
		experience: "10 років",
		description:
			"Дмитро спеціалізується на розвитку дитячого спорту. Він розробив унікальну програму для малюків. Його методики забезпечують гармонійний розвиток дітей.",
	},
	{
		"first name": "Олена",
		"last name": "Ткаченко",
		photo: "./img/trainers/trainer-f12.jpg",
		specialization: "Бійцівський клуб",
		category: "спеціаліст",
		experience: "5 років",
		description:
			"Олена є відомим тренером у жіночому бойовому клубі. Вона вивчила різні техніки самооборони. Її підхід дозволяє її ученицям відчувати себе впевнено в будь-яких ситуаціях.",
	},
];

(function (arrOfCoach) {
	arrOfCoach.forEach((coach, index) => {
		coach._id = index + 1;
	});

	const coachContainer = document.querySelector(".trainers-cards__container");

	function showLoader() {
		const loader = document.createElement("span");
		loader.classList.add("loader");
		loader.style.width = "48px";
		loader.style.height = "48px";
		loader.style.border = "5px solid #f8e327";
		loader.style.borderBottomColor = "#a8aba8";
		loader.style.borderRadius = "50%";
		loader.style.display = "inline-block";
		loader.style.boxSizing = "border-box";
		loader.style.animation = "rotation 1s linear infinite";
		loader.style.position = "absolute";
		loader.style.top = "50%";
		loader.style.left = "50%";
		loader.style.transform = "translate(-50%, -50%)";
		coachContainer.append(loader);
	}

	function hideLoader() {
		const loader = coachContainer.querySelector(".loader");
		if (loader) {
			loader.remove();
		}
	}

	function renderData(arrOfCoach) {
		const fragment = document.createDocumentFragment();
		arrOfCoach.forEach((coach) => {
			const coachTemplate = createCoachCardTemplate(coach);
			fragment.append(coachTemplate);
		});
		coachContainer.innerHTML = "";
		coachContainer.append(fragment);

		const sidebar = document.querySelector(".sidebar");
		sidebar.removeAttribute("hidden");
		const sorting = document.querySelector(".sorting");
		sorting.removeAttribute("hidden");
	}

	function createCoachCardTemplate(coach) {
		const coachCard = document.createElement("li");
		coachCard.classList.add("trainer");
		const coachPhoto = document.createElement("img");
		coachPhoto.classList.add("trainer__img");
		coachPhoto.setAttribute("src", coach.photo);
		const coachName = document.createElement("p");
		coachName.classList.add("trainer__name");
		coachName.innerText = `${coach["first name"]} ${coach["last name"]}`;
		const btn = document.createElement("button");
		btn.classList.add("trainer__show-more");
		btn.setAttribute("type", "button");
		btn.innerText = "ПОКАЗАТИ";
		btn.addEventListener("click", () => {
			createModal(coach);
		});

		coachCard.append(coachPhoto);
		coachCard.append(coachName);
		coachCard.append(btn);

		return coachCard;
	}

	const sortBtn = document.querySelectorAll("section.sorting button");

	sortBtn.forEach((button, index) => {
		button.setAttribute("data-action", `action${index}`);
	});

	sortBtn.forEach((button) => {
		button.addEventListener("click", (event) => {
			const clickedButton = event.target;
			const action = clickedButton.getAttribute("data-action");
			performAction(action, clickedButton);
		});
	});

	function performAction(action, clickedButton) {
		sortBtn.forEach((button) => button.classList.remove("sorting__btn--active"));
		clickedButton.classList.add("sorting__btn--active");

		switch (action) {
			case "action0":
				renderData(getFilteredCoaches());
				break;
			case "action1":
				surnameSort(getFilteredCoaches(), "last name");
				break;
			case "action2":
				experienceSort(getFilteredCoaches(), "experience");
				break;
		}

		localStorage.setItem("sortingAction", action);
	}

	function experienceSort(arr, key) {
		function extractNumber(experience) {
			const match = experience.match(/\d+/);
			return match ? parseInt(match[0], 10) : 0;
		}
		const sortedArray = arr.slice().sort((a, b) => {
			const numA = extractNumber(a.experience);
			const numB = extractNumber(b.experience);
			return numB - numA;
		});
		renderData(sortedArray);
	}

	function surnameSort(arr, key) {
		const sortedArray = arr.slice().sort((a, b) => {
			return a[key].localeCompare(b[key], "uk", { sensitivity: "base" });
		});
		renderData(sortedArray);
	}

	function createModal(coach) {
		const modalOverlay = document.createElement("div");
		modalOverlay.classList.add("modal");
		const modalWindow = document.createElement("div");
		modalWindow.classList.add("modal__body");
		const coachModalPhoto = document.createElement("img");
		coachModalPhoto.classList.add("modal__img");
		coachModalPhoto.setAttribute("src", coach.photo);
		const coachModalDescription = document.createElement("div");
		coachModalDescription.classList.add("modal__description");
		const coachModalName = document.createElement("p");
		coachModalName.classList.add("modal__name");
		coachModalName.innerText = `${coach["first name"]} ${coach["last name"]}`;
		const coachModalSpecialization = document.createElement("p");
		coachModalSpecialization.classList.add("modal__point", "modal__point--category");
		coachModalSpecialization.innerText = `Напрям тренера: ${coach["specialization"]}`;
		const coachModalCategory = document.createElement("p")
		coachModalCategory.classList.add("modal__point", "modal__point--category")
		coachModalCategory.innerText = `Категорія: ${coach["category"]}`
		const coachModalExperience = document.createElement("p")
		coachModalExperience.classList.add("modal__point", "modal__point--experience")
		coachModalExperience.innerText = `Досвід: ${coach["experience"]}`
		const coachModalText = document.createElement("p")
		coachModalText.classList.add("modal__text");
		coachModalText.innerText = `${coach["description"]}`
		const closeButton = document.createElement("button");
		closeButton.classList.add("modal__close");
		closeButton.setAttribute("type", "button");
		closeButton.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"30\" height=\"30\" viewBox=\"0 0 72 72\"><path d=\"M 19 15 C 17.977 15 16.951875 15.390875 16.171875 16.171875 C 14.609875 17.733875 14.609875 20.266125 16.171875 21.828125 L 30.34375 36 L 16.171875 50.171875 C 14.609875 51.733875 14.609875 54.266125 16.171875 55.828125 C 16.951875 56.608125 17.977 57 19 57 C 20.023 57 21.048125 56.609125 21.828125 55.828125 L 36 41.65625 L 50.171875 55.828125 C 51.731875 57.390125 54.267125 57.390125 55.828125 55.828125 C 57.391125 54.265125 57.391125 51.734875 55.828125 50.171875 L 41.65625 36 L 55.828125 21.828125 C 57.390125 20.266125 57.390125 17.733875 55.828125 16.171875 C 54.268125 14.610875 51.731875 14.609875 50.171875 16.171875 L 36 30.34375 L 21.828125 16.171875 C 21.048125 15.391875 20.023 15 19 15 z\"></path></svg>";

		coachModalDescription.append(coachModalName, coachModalCategory, coachModalSpecialization, coachModalExperience, coachModalText);
		modalWindow.append(coachModalPhoto, coachModalDescription, closeButton);
		modalOverlay.append(modalWindow);

		document.body.append(modalOverlay);
		document.body.style.overflow = "hidden";

		closeButton.addEventListener("click", () => {
			modalOverlay.remove();
			document.body.removeAttribute("style");
		});

		modalOverlay.addEventListener("click", (event) => {
			if (event.target === modalOverlay) {
				modalOverlay.remove();
			}
		});
	}

	const specializationMap = {
		"gym": "Тренажерний зал",
		"fight club": "Бійцівський клуб",
		"kids club": "Дитячий клуб",
		"swimming pool": "Басейн"
	};
	const categoryMap = {
		"master": "майстер",
		"specialist": "спеціаліст",
		"instructor": "інструктор"
	};

	const filtersForm = document.querySelector(".sidebar__filters");

	function loadFilters() {
		const direction = localStorage.getItem("selectedDirection") || "all";
		const category = localStorage.getItem("selectedCategory") || "all";

		const directionSelect = filtersForm.querySelector("select[name='direction']");
		const categorySelect = filtersForm.querySelector("select[name='category']");

		if (directionSelect) {
			directionSelect.value = direction;
		}
		if (categorySelect) {
			categorySelect.value = category;
		}
	}

	function saveFilters(direction, category) {
		localStorage.setItem("selectedDirection", direction);
		localStorage.setItem("selectedCategory", category);
	}

	filtersForm.addEventListener("submit", (event) => {
		event.preventDefault();
		const formData = new FormData(filtersForm);
		const selectedDirection = formData.get("direction");
		const selectedCategory = formData.get("category");

		saveFilters(selectedDirection, selectedCategory);

		const filteredCoaches = arrOfCoach.filter((coach) => {
			const matchesDirection =
				selectedDirection === "all" || coach.specialization === specializationMap[selectedDirection];
			const matchesCategory =
				selectedCategory === "all" || coach.category === categoryMap[selectedCategory];

			return matchesDirection && matchesCategory;
		});

		setTimeout(() => {
			showLoader();
			setTimeout(() => {
				renderData(filteredCoaches);
				hideLoader();
			}, 1000);
		}, 1000);
	});

	function loadSorting() {
		const action = localStorage.getItem("sortingAction") || "action0";
		const activeButton = document.querySelector(`section.sorting button[data-action="${action}"]`);
		if (activeButton) {
			activeButton.click();
		}
	}

	// Initial load with filters and sorting
	setTimeout(() => {
		showLoader();
		setTimeout(() => {
			loadFilters();
			loadSorting();
			renderData(getFilteredCoaches());
			hideLoader();
		}, 1000);
	}, 1000);

	function getFilteredCoaches() {
		const direction = localStorage.getItem("selectedDirection") || "all";
		const category = localStorage.getItem("selectedCategory") || "all";

		return arrOfCoach.filter((coach) => {
			const matchesDirection =
				direction === "all" || coach.specialization === specializationMap[direction];
			const matchesCategory =
				category === "all" || coach.category === categoryMap[category];

			return matchesDirection && matchesCategory;
		});
	}

})(DATA);




// (function (arrOfCoach) {
// 	arrOfCoach.forEach((coach, index) => {
// 		coach._id = index + 1;
// 	});
//
// 	const coachContainer = document.querySelector(".trainers-cards__container");
//
// 	function showLoader () {
// 		const loader = document.createElement("span");
// 		loader.classList.add("loader");
// 		loader.style.width = "48px";
// 		loader.style.height = "48px";
// 		loader.style.border = "5px solid #f8e327";
// 		loader.style.borderBottomColor = "#a8aba8";
// 		loader.style.borderRadius = "50%";
// 		loader.style.display = "inline-block";
// 		loader.style.boxSizing = "border-box";
// 		loader.style.animation = "rotation 1s linear infinite";
// 		loader.style.position = "absolute";
// 		loader.style.top = "50%";
// 		loader.style.left = "50%";
// 		loader.style.transform = "translate(-50%, -50%)";
// 		coachContainer.append(loader);
// 	}
// 	function hideLoader() {
// 		const loader = coachContainer.querySelector(".loader");
// 		if (loader) {
// 			loader.remove();
// 		}
// 	}
//
// 	setTimeout(() => {
// 		showLoader(); // Show loader before rendering
// 		setTimeout(() => {
// 			renderData(arrOfCoach);
// 			hideLoader(); // Hide loader after rendering
// 		}, 1000);
// 	}, 1000);
//
// 	function renderData(arrOfCoach) {
// 		const fragment = document.createDocumentFragment();
// 		arrOfCoach.forEach((coach) => {
// 			const coachTemplate = createCoachCardTemplate(coach);
// 			fragment.append(coachTemplate);
// 		});
// 		coachContainer.innerHTML = "";
// 		coachContainer.append(fragment);
//
// 		const sidebar = document.querySelector(".sidebar");
// 		sidebar.removeAttribute("hidden");
// 		const sorting = document.querySelector(".sorting");
// 		sorting.removeAttribute("hidden");
// 	}
//
// 	function createCoachCardTemplate(coach) {
// 		const coachCard = document.createElement("li");
// 		coachCard.classList.add("trainer");
// 		const coachPhoto = document.createElement("img");
// 		coachPhoto.classList.add("trainer__img");
// 		coachPhoto.setAttribute("src", coach.photo);
// 		const coachName = document.createElement("p");
// 		coachName.classList.add("trainer__name");
// 		coachName.innerText = `${coach["first name"]} ${coach["last name"]}`;
// 		const btn = document.createElement("button");
// 		btn.classList.add("trainer__show-more");
// 		btn.setAttribute("type", "button");
// 		btn.innerText = "ПОКАЗАТИ";
// 		btn.addEventListener("click", () => {
// 			createModal(coach); // Передаем объект coach в createModal
// 		});
//
// 		coachCard.append(coachPhoto);
// 		coachCard.append(coachName);
// 		coachCard.append(btn);
//
// 		return coachCard;
// 	}
//
//
//
//
//
// 	const sortBtn = document.querySelectorAll("section.sorting button");
//
// 	sortBtn.forEach((button, index) => {
// 		button.setAttribute("data-action", `action${index}`);
// 	});
//
// 	sortBtn.forEach((button) => {
// 		button.addEventListener("click", (event) => {
// 			const clickedButton = event.target;
// 			const action = clickedButton.getAttribute("data-action");
// 			performAction(action, clickedButton);
// 		});
// 	});
//
// 	function performAction(action, clickedButton) {
// 		sortBtn.forEach((button) => button.classList.remove("sorting__btn--active"));
// 		clickedButton.classList.add("sorting__btn--active");
//
// 		switch (action) {
// 			case "action0":
// 				renderData(arrOfCoach);
// 				break;
// 			case "action1":
// 				surnameSort(arrOfCoach, "last name");
// 				break;
// 			case "action2":
// 				experienceSort(arrOfCoach, "experience");
// 				break;
// 		}
// 	}
//
// 	function experienceSort(arr, key) {
// 		function extractNumber(experience) {
// 			const match = experience.match(/\d+/);
// 			return match ? parseInt(match[0], 10) : 0;
// 		}
// 		const sortedArray = arr.slice().sort((a, b) => {
// 			const numA = extractNumber(a.experience);
// 			const numB = extractNumber(b.experience);
// 			return numB - numA;
// 		});
// 		renderData(sortedArray);
// 	}
//
// 	function surnameSort(arr, key) {
// 		const sortedArray = arr.slice().sort((a, b) => {
// 			return a[key].localeCompare(b[key], "uk", { sensitivity: "base" });
// 		});
// 		renderData(sortedArray);
// 	}
//
//
// 	function createModal(coach) {
//
// 		const modalOverlay = document.createElement("div");
// 		modalOverlay.classList.add("modal");
// 		const modalWindow = document.createElement("div");
// 		modalWindow.classList.add("modal__body");
// 		const coachModalPhoto = document.createElement("img");
// 		coachModalPhoto.classList.add("modal__img");
// 		coachModalPhoto.setAttribute("src", coach.photo);
// 		const coachModalDescription = document.createElement("div");
// 		coachModalDescription.classList.add("modal__description");
// 		const coachModalName = document.createElement("p");
// 		coachModalName.classList.add("modal__name");
// 		coachModalName.innerText = `${coach["first name"]} ${coach["last name"]}`;
// 		const coachModalSpecialization = document.createElement("p");
// 		coachModalSpecialization.classList.add("modal__point", "modal__point--category");
// 		coachModalSpecialization.innerText = `Напрям тренера: ${coach["specialization"]}`;
// 		const coachModalCategory = document.createElement("p")
// 		coachModalCategory.classList.add("modal__point", "modal__point--category")
// 		coachModalCategory.innerText = `Категорія: ${coach["category"]}`
// 		const coachModalExperience = document.createElement("p")
// 		coachModalExperience.classList.add("modal__point", "modal__point--experience")
// 		coachModalExperience.innerText = `Досвід: ${coach["experience"]}`
// 		const coachModalText = document.createElement("p")
// 		coachModalText.classList.add("modal__text");
// 		coachModalText.innerText = `${coach["description"]}`
// 		const closeButton = document.createElement("button");
// 		closeButton.classList.add("modal__close");
// 		closeButton.setAttribute("type", "button");
// 		closeButton.innerHTML = "<svg\n" +
// 			"\t\t\t\t\t\t\txmlns=\"http://www.w3.org/2000/svg\"\n" +
// 			"\t\t\t\t\t\t\twidth=\"30\"\n" +
// 			"\t\t\t\t\t\t\theight=\"30\"\n" +
// 			"\t\t\t\t\t\t\tviewBox=\"0 0 72 72\"\n" +
// 			"\t\t\t\t\t\t>\n" +
// 			"\t\t\t\t\t\t\t<path\n" +
// 			"\t\t\t\t\t\t\t\td=\"M 19 15 C 17.977 15 16.951875 15.390875 16.171875 16.171875 C 14.609875 17.733875 14.609875 20.266125 16.171875 21.828125 L 30.34375 36 L 16.171875 50.171875 C 14.609875 51.733875 14.609875 54.266125 16.171875 55.828125 C 16.951875 56.608125 17.977 57 19 57 C 20.023 57 21.048125 56.609125 21.828125 55.828125 L 36 41.65625 L 50.171875 55.828125 C 51.731875 57.390125 54.267125 57.390125 55.828125 55.828125 C 57.391125 54.265125 57.391125 51.734875 55.828125 50.171875 L 41.65625 36 L 55.828125 21.828125 C 57.390125 20.266125 57.390125 17.733875 55.828125 16.171875 C 54.268125 14.610875 51.731875 14.609875 50.171875 16.171875 L 36 30.34375 L 21.828125 16.171875 C 21.048125 15.391875 20.023 15 19 15 z\"\n" +
// 			"\t\t\t\t\t\t\t></path>\n" +
// 			"\t\t\t\t\t\t</svg>";
//
//
// 		coachModalDescription.append(coachModalName, coachModalCategory, coachModalSpecialization, coachModalExperience, coachModalText);
// 		modalWindow.append(coachModalPhoto, coachModalDescription, closeButton);
// 		modalOverlay.append(modalWindow);
//
//
// 		document.body.append(modalOverlay);
// 		document.body.style.overflow = "hidden"
//
//
// 		closeButton.addEventListener("click", () => {
// 			modalOverlay.remove();
// 			document.body.removeAttribute("style")
// 		});
//
// 		modalOverlay.addEventListener("click", (event) => {
// 			if (event.target === modalOverlay) {
// 				modalOverlay.remove();
//
// 			}
// 		});
// 	}
// 	const specializationMap = {
// 		"gym": "Тренажерний зал",
// 		"fight club": "Бійцівський клуб",
// 		"kids club": "Дитячий клуб",
// 		"swimming pool": "Басейн"
// 	};
// 	const categoryMap = {
// 		"master": "майстер",
// 		"specialist": "спеціаліст",
// 		"instructor": "інструктор"
// 	};
// 	const  filtersForm = document.querySelector(".sidebar__filters")
// 	filtersForm.addEventListener("submit", (event) => {
// 		event.preventDefault();
// 		const formData = new FormData(filtersForm);
// 		const selectedDirection = formData.get("direction");
// 		const selectedCategory = formData.get("category");
//
//
// 		const filteredCoaches = arrOfCoach.filter((coach) => {
// 			const matchesDirection =
// 				selectedDirection === "all" || coach.specialization === specializationMap[selectedDirection];
// 			const matchesCategory =
// 				selectedCategory === "all" || coach.category === categoryMap[selectedCategory];
//
// 			return matchesDirection && matchesCategory;
// 		});
// 		setTimeout(() => {
// 			showLoader(); // Show loader before rendering
// 			setTimeout(() => {
// 				renderData(filteredCoaches);
// 				hideLoader(); // Hide loader after rendering
// 			}, 1000);
// 		}, 1000);
// 	});
// })(DATA);


