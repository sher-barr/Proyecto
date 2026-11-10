'use strict';
        const ROUTES = [
        {
        id: 'peten-maya',
                title: 'Arqueología y cultura maya',
                destination: 'Petén, Guatemala',
                origin: 'Estación Central (demo)',
                departure: '08:00',
                arrival: '09:15',
                price: 35,
                duration: '1 h 15 min',
                image: 'imagen/d1.jpg',
                map: 'imagen/Etikal.jpg',
                description: 'Un recorrido demostrativo hacia Petén, región reconocida por su patrimonio arqueológico, sus paisajes selváticos y la historia de la civilización maya.',
                places: [
                {
                name: 'Parque Nacional Tikal',
                        description: 'Complejo arqueológico rodeado de selva, conocido por sus templos y plazas ceremoniales.',
                        image: 'imagen/T1.jpg'
                },
                {
                name: 'Lago Petén Itzá',
                        description: 'Paisaje lacustre ideal para disfrutar de vistas, paseos y comunidades ribereñas.',
                        image: 'imagen/T2.jpg'
                }
                ]
        },
        {
        id: 'solola-volcanes',
                title: 'Rodeado de volcanes',
                destination: 'Sololá, Guatemala',
                origin: 'Estación Central (demo)',
                departure: '09:30',
                arrival: '12:00',
                price: 55,
                duration: '2 h 30 min',
                image: 'imagen/d2.jpg',
                map: 'imagen/Elago.jpg',
                description: 'Una ruta ilustrativa hacia el altiplano occidental, con panorámicas de volcanes, montañas y el entorno del lago de Atitlán.',
                places: [
                {
                name: 'Lago de Atitlán',
                        description: 'Un lago de origen volcánico rodeado de pueblos y paisajes montañosos.',
                        image: 'imagen/l1.jpg'
                },
                {
                name: 'Mirador de San Jorge',
                        description: 'Punto panorámico ilustrativo para apreciar el paisaje del altiplano.',
                        image: 'imagen/l2.jpg'
                }
                ]
        },
        {
        id: 'verapaz-paraiso',
                title: 'Paraíso natural y pozas',
                destination: 'Alta Verapaz, Guatemala',
                origin: 'Estación Central (demo)',
                departure: '07:00',
                arrival: '11:00',
                price: 85,
                duration: '4 h',
                image: 'imagen/d3.jpg',
                map: 'imagen/Esempuc.jpg',
                description: 'Un recorrido demostrativo por una región de bosques húmedos, ríos y atractivos naturales característicos de las Verapaces.',
                places: [
                {
                name: 'Semuc Champey',
                        description: 'Monumento natural conocido por sus pozas de agua turquesa y el entorno boscoso.',
                        image: 'imagen/S1.jpg'
                },
                {
                name: 'Grutas de Lanquín',
                        description: 'Sistema de cuevas de interés natural y turístico en el municipio de Lanquín.',
                        image: 'imagen/S2.jpg'
                }
                ]
        },
        {
        id: 'antigua-guatemala',
                title: 'Ciudad colonial e historia',
                destination: 'Sacatepéquez, Guatemala',
                origin: 'Estación Central (demo)',
                departure: '06:30',
                arrival: '07:15',
                price: 25,
                duration: '45 min',
                image: 'imagen/d4.jpg',
                map: 'imagen/Eantigua.jpg',
                description: 'Una ruta ilustrativa hacia Antigua Guatemala, ciudad reconocida por su arquitectura colonial, calles empedradas y patrimonio histórico.',
                places: [
                {
                name: 'Arco de Santa Catalina',
                        description: 'Uno de los elementos arquitectónicos más representativos de la ciudad colonial.',
                        image: 'imagen/A1.jpg'
                },
                {
                name: 'Cerro de la Cruz',
                        description: 'Mirador desde el que se observa el trazado urbano y el paisaje volcánico.',
                        image: 'imagen/A2.jpg'
                }
                ]
        },
        {
        id: 'esquipulas-fe',
                title: 'Ruta de la fe y tradición',
                destination: 'Chiquimula, Guatemala',
                origin: 'Estación Central (demo)',
                departure: '07:30',
                arrival: '10:30',
                price: 65,
                duration: '3 h',
                image: 'imagen/d5.jpg',
                map: 'imagen/Eesquipulas.jpg',
                description: 'Un recorrido demostrativo hacia Esquipulas, destino de peregrinación y tradición cultural en el oriente de Guatemala.',
                places: [
                {
                name: 'Basílica de Esquipulas',
                        description: 'Templo reconocido por su arquitectura y por recibir peregrinos durante todo el año.',
                        image: 'imagen/E1.jpg'
                },
                {
                name: 'Centro histórico',
                        description: 'Espacios del centro urbano para conocer la vida local y su tradición.',
                        image: 'imagen/E2.jpg'
                }
                ]
        },
        {
        id: 'xela-altos',
                title: 'Cultura, clima frío y arquitectura',
                destination: 'Quetzaltenango, Guatemala',
                origin: 'Estación Central (demo)',
                departure: '08:15',
                arrival: '11:45',
                price: 75,
                duration: '3 h 30 min',
                image: 'imagen/d6.jpg',
                map: 'imagen/Elosaltos.jpg',
                description: 'Una ruta ilustrativa hacia Quetzaltenango, con atractivos culturales, arquitectura histórica y paisajes del altiplano.',
                places: [
                {
                name: 'Parque Centroamérica',
                        description: 'Plaza central rodeada de edificios históricos y espacios culturales.',
                        image: 'imagen/x1.jpg'
                },
                {
                name: 'Volcán Santa María',
                        description: 'Volcán emblemático del departamento, visible desde distintos puntos de la región.',
                        image: 'imagen/x2.jpg'
                }
                ]
        }
        ];
        
        /* CONFIGURACIÓN DEL ALMACENAMIENTO */
        const STORE = Object.freeze({
        reservations: 'sde_reservations',
                surveys: 'sde_surveys'
                });
                
        /* CREDENCIALES DEMOSTRATIVAS */
        const ADMIN_CREDENTIALS = Object.freeze({
        username: 'admin',
                password: '2026'
                });
                
        /* FUNCIONES GENERALES */
        const $ = (selector, root = document) => root.querySelector(selector);
        const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
        const money = value => `Q ${Number(value || 0).toFixed(2)}`;
        
        /* PROTECCIÓN DE CONTENIDO HTML */
                function escapeHtml(value) {
                return String(value ?? '').replace(/[&<>"']/g, character => ({
                '&': '&amp;',
                        '<': '&lt;',
                        '>': '&gt;',
                        '"': '&quot;',
                        "'": '&#39;'
                })[character]);
                        }

        /* ALMACENAMIENTO LOCAL */
        function readLocal(key) {
        try {
        const value = JSON.parse(localStorage.getItem(key) || '[]');
                return Array.isArray(value) ? value : [];
        } catch (error) {
        console.warn(
                `No se pudieron leer los datos locales (${key}).`,
                error
                );
                return [];
        }
        }
        function saveLocal(key, data) {
        try {
        localStorage.setItem(key, JSON.stringify(data));
        } catch (error) {
        console.error(
                `No se pudo guardar la información local (${key}).`,
                error
                );
                throw new Error(
                        'El navegador no permitió guardar los datos. Comprueba el espacio disponible y vuelve a intentarlo.'
                        );
        }
        }

        /* GENERA CÓDIGO DE RESERVA */
        function makeCode() {
        const suffix = Math.floor(1000 + Math.random() * 9000);
                return `LYN-${Date.now().toString().slice( - 8)}-${suffix}`;
                }

        /* OBTENER FECHA ACTUAL */
        function todayLocalISO() {
        const now = new Date();
                const localDate = new Date(
                        now.getTime() - now.getTimezoneOffset() * 60000
                        );
                return localDate.toISOString().slice(0, 10);
                }

        /* IMAGEN ALTERNATIVA */
        function fallbackImageDataUrl() {
        const svg = `
        <svg xmlns="http://www.w3.org/2000/svg"
             width="960" height="560"
             viewBox="0 0 960 560">
            <defs>
                <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
                    <stop stop-color="#176b60"/>
                    <stop offset="1" stop-color="#b8e7d9"/>
                </linearGradient>
            </defs>
            <rect width="960" height="560" fill="url(#g)"/>
            <path d="M0 420 210 250 370 400 560 190 960 430V560H0Z"
                  fill="#10534b"
                  opacity=".45"/>
            <circle cx="760" cy="130" r="55"
                    fill="#fff"
                    opacity=".55"/>
            <text x="480" y="500"
                  text-anchor="middle"
                  font-family="Arial,sans-serif"
                  font-size="30"
                  fill="#fff">
                Spring Day Express
            </text>
        </svg>`;
                return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
                }
        const FALLBACK_IMAGE = fallbackImageDataUrl();
                function activateImageFallbacks(root = document) {
                $$('img[data-fallback]', root).forEach(image => {
                if (image.dataset.fallbackReady === 'true') return;
                        image.dataset.fallbackReady = 'true';
                        image.addEventListener('error', () => {
                        image.src = FALLBACK_IMAGE;
                                image.removeAttribute('data-fallback');
                        }, { once: true });
                });
                        }

        /* NAVEGACIÓN ENTRE SECCIONES */
        function showView(id) {
        const target = $(`#${CSS.escape(id)}`);
                if (!target || !target.classList.contains('view')) return;
                $$('.view').forEach(view => {
        view.classList.toggle('active', view.id === id);
        });
                const activeNavId = id === 'detalle' ? 'rutas' : id;
                $$('.nav-link').forEach(button => {
        const isActive = button.dataset.view === activeNavId;
                button.classList.toggle('active', isActive);
                if (isActive) {
        button.setAttribute('aria-current', 'page');
        } else {
        button.removeAttribute('aria-current');
        }
        });
                $('#mainNav').classList.remove('open');
                $('#menuToggle').setAttribute('aria-expanded', 'false');
                $('#menuToggle').setAttribute('aria-label', 'Abrir menú');
                window.scrollTo({
                top: 0,
                        behavior: 'smooth'
                });
                }

        /* TARJETAS DE RUTAS Y DESTINOS */
        function routeCard(route) {
        return `
        <article class="route-card">
            <img
                src="${escapeHtml(route.image)}"
                data-fallback
                alt="Destino ${escapeHtml(route.destination)}"
                loading="lazy"
            >
            <div class="route-card-content">
                <h3>${escapeHtml(route.title)}</h3>
                <p class="location">
                    ${escapeHtml(route.destination)}
                </p>
                <div class="route-meta">
                    <span>
                        Salida ${escapeHtml(route.departure)}
                    </span>
                    <span>
                        ${escapeHtml(route.duration)}
                    </span>
                </div>
                <p class="route-price">
                    ${money(route.price)}
                    <small>por persona</small>
                </p>
                <button
                    class="btn btn-primary"
                    type="button"
                    data-detail="${escapeHtml(route.id)}"
                >
                    Más información
                </button>
            </div>
        </article>
    `;
                }

        /* MOSTRAR RUTAS */
        function renderRoutes() {
        $('#featuredRoutes').innerHTML =
                ROUTES.slice(0, 3).map(routeCard).join('');
                $('#allRoutes').innerHTML =
                ROUTES.map(routeCard).join('');
                $('#bookingRoutes').innerHTML = ROUTES.map(route => `
        <label class="booking-route-option">
            <input
                type="checkbox"
                name="destinos"
                value="${escapeHtml(route.id)}"
            >
            <span>
                <b>
                    ${escapeHtml(route.destination)}
                </b>
                <br>
                <small>
                    ${escapeHtml(route.title)}
                    · ${escapeHtml(route.departure)}
                    · ${escapeHtml(route.duration)}
                </small>
            </span>
            <strong>
                ${money(route.price)}
            </strong>
        </label>
    `).join('');
                activateImageFallbacks($('#featuredRoutes'));
                activateImageFallbacks($('#allRoutes'));
                }

        /* DETALLES DE CADA RUTA */
        function showDetail(routeId) {
        const route = ROUTES.find(item => item.id === routeId);
                if (!route) {
        showView('rutas');
                return;
        }
        const places = route.places.map(place => `
        <article class="place-card">
            <img
                src="${escapeHtml(place.image)}"
                data-fallback
                alt="${escapeHtml(place.name)}"
                loading="lazy"
            >
            <div>
                <h3>
                    ${escapeHtml(place.name)}
                </h3>
                <p>
                    ${escapeHtml(place.description)}
                </p>
            </div>
        </article>
    `).join('');
                $('#routeDetail').innerHTML = `
        <div class="detail-hero">
            <div class="detail-copy">
                <p class="eyebrow">
                    CONOCE EL RECORRIDO
                </p>
                <h1>
                    ${escapeHtml(route.title)}
                </h1>
                <p>
                    ${escapeHtml(route.description)}
                </p>
                <div class="detail-stats">
                    <span>
                        Salida:
                        <b>${escapeHtml(route.departure)}</b>
                    </span>
                    <span>
                        Llegada:
                        <b>${escapeHtml(route.arrival)}</b>
                    </span>
                    <span>
                        Duración:
                        <b>${escapeHtml(route.duration)}</b>
                    </span>
                    <span>
                        Tarifa:
                        <b>${money(route.price)}</b>
                    </span>
                </div>
                <button
                    class="btn btn-primary"
                    type="button"
                    data-book-route="${escapeHtml(route.id)}"
                >
                    Reservar este destino
                </button>
            </div>
            <img
                src="${escapeHtml(route.image)}"
                data-fallback
                alt="Destino ${escapeHtml(route.destination)}"
                loading="lazy"
            >
        </div>
        <div class="map-panel">
            <h2>
                Mapa del recorrido
            </h2>
            <img
                src="${escapeHtml(route.map)}"
                data-fallback
                alt="Mapa esquemático de la ruta hacia ${escapeHtml(route.destination)}"
                loading="lazy"
            >
        </div>
        <section class="places-section">
            <h2>
                Lugares para visitar
            </h2>
            <div class="places-grid">
                ${places}
            </div>
        </section>
    `;
                activateImageFallbacks($('#routeDetail'));
                showView('detalle');
                }

        /* SELECCIÓN DE RUTAS */
        function selectedRoutes() {
        const selectedIds = $$(
                'input[name="destinos"]:checked'
                ).map(input => input.value);
                return ROUTES.filter(route =>
                        selectedIds.includes(route.id)
                        );
                }

        /* CANTIDADES DE PASAJEROS */
        function getPassengerCounts(formData) {
        return {
        adults: Number(formData.get('adultos')) || 0,
                children: Number(formData.get('ninos')) || 0,
                seniors: Number(formData.get('adultosMayores')) || 0
        };
                }

        /* CALCULAR TARIFAS */
        function calculateBooking(routes, counts) {
        const routeSubtotal = routes.reduce(
                (sum, route) => sum + route.price,
                0
                );
                const totalPeople =
                counts.adults +
                counts.children +
                counts.seniors;
                const total =
                (counts.adults * routeSubtotal) +
                (counts.children * routeSubtotal * 0.5) +
                (counts.seniors * routeSubtotal * 0.7);
                return {
                routeSubtotal,
                        totalPeople,
                        total
                };
                }

        /* RESUMEN DE COMPRA */
        function updateSummary() {
        const routes = selectedRoutes();
                const counts = {
                adults: Number($('#adultsCount').value) || 0,
                        children: Number($('#childrenCount').value) || 0,
                        seniors: Number($('#seniorsCount').value) || 0
                };
                const {
                totalPeople,
                        total
                } = calculateBooking(routes, counts);
                $('#summaryPeople').innerHTML = `
        Adultos: ${counts.adults}<br>
        Niños: ${counts.children}<br>
        Adultos mayores: ${counts.seniors}<br>
        <strong>
            Total: ${totalPeople} pasajero(s)
        </strong>
    `;
                $('#bookingTotal').textContent = money(total);
                $('#selectedSummary').innerHTML = routes.length
                ? routes.map(route => `
            <div class="summary-line">
                <span>
                    ${escapeHtml(route.destination)}
                </span>
                <strong>
                    ${money(route.price)} / persona
                </strong>
            </div>
        `).join('')
                : '<p class="muted">Selecciona al menos un destino.</p>';
                }

        /* MENSAJES DE LOS FORMULARIOS */
        function setBookingMessage(message, isError = false) {
        const element = $('#bookingMessage');
                element.textContent = message;
                element.classList.toggle('error', isError);
                }
        function setSurveyMessage(message, isError = false) {
        const element = $('#surveyMessage');
                element.textContent = message;
                element.classList.toggle('error', isError);
                }

        /* GENERAR BOLETO DIGITAL */
        function renderTicket(reservation) {
        const selectedRouteList = ROUTES.filter(route =>
                reservation.routeIds.includes(route.id)
                );
                const destinations = reservation.destinations.join(' → ');
                const maps = selectedRouteList.map(route => `
        <img
            class="ticket-map"
            src="${escapeHtml(route.map)}"
            data-fallback
            alt="Mapa o imagen de ${escapeHtml(route.destination)}"
            loading="lazy"
        >
    `).join('');
                $('#ticketArea').innerHTML = `
        <article class="ticket">
            <div class="ticket-head">
                <div>
                    <b>
                        SPRING DAY EXPRESS
                    </b>
                    <small>
                        BOLETO DIGITAL
                    </small>
                </div>
                <b>
                    ${escapeHtml(reservation.code)}
                </b>
            </div>
            <div class="ticket-body">
                <div class="ticket-route">
                    <div>
                        <small>ORIGEN</small>
                        <strong>
                            ${escapeHtml(reservation.origin)}
                        </strong>
                        <small>
                            Salida ${escapeHtml(selectedRouteList[0]?.departure || '—')}
                        </small>
                    </div>
                    <b aria-hidden="true">→</b>
                    <div>
                        <small>DESTINO(S)</small>
                        <strong>
                            ${escapeHtml(destinations)}
                        </strong>
                        <small>
                            Recorrido seleccionado
                        </small>
                    </div>
                </div>
                <div class="ticket-fields">
                    <div class="ticket-field">
                        <small>PASAJERO</small>
                        <strong>
                            ${escapeHtml(reservation.name)}
                        </strong>
                    </div>
                    <div class="ticket-field">
                        <small>DOCUMENTO</small>
                        <strong>
                            ${escapeHtml(reservation.document)}
                        </strong>
                    </div>
                    <div class="ticket-field">
                        <small>HORARIO DE SALIDA</small>
                        <strong>
                            ${escapeHtml(selectedRouteList[0]?.departure || '—')}
                        </strong>
                    </div>
                    <div class="ticket-field">
                        <small>FECHA</small>
                        <strong>
                            ${escapeHtml(reservation.date)}
                        </strong>
                    </div>
                    <div class="ticket-field">
                        <small>PASAJEROS</small>
                        <strong>
                            Adultos: ${reservation.adults}<br>
                            Niños: ${reservation.children}<br>
                            Adultos mayores: ${reservation.seniors}<br>
                            <small>
                                Total: ${reservation.totalPeople} pasajero(s)
                            </small>
                        </strong>
                    </div>
                    <div class="ticket-field">
                        <small>ASIENTO</small>
                        <strong>
                            ${escapeHtml(reservation.seat)}
                        </strong>
                    </div>
                    <div class="ticket-field">
                        <small>TARIFA TOTAL</small>
                        <strong>
                            ${money(reservation.total)}
                        </strong>
                    </div>
                    <div class="ticket-field">
                        <small>ESTADO</small>
                        <strong>
                            ${escapeHtml(reservation.status)}
                        </strong>
                    </div>
                </div>
                <div class="ticket-maps-container">
                    <small>
                        <b>
                            IMÁGENES / MAPAS DE LAS RUTAS SELECCIONADAS:
                        </b>
                    </small>
                    ${maps}
                </div>
                <div class="ticket-actions">
                    <button
                        class="btn btn-primary"
                        id="printTicket"
                        type="button"
                    >
                        Imprimir boleto
                    </button>
                    <button
                        class="btn btn-outline"
                        id="newBooking"
                        type="button"
                    >
                        Nueva reserva
                    </button>
                </div>
            </div>
        </article>
    `;
                $('#ticketArea').hidden = false;
                activateImageFallbacks($('#ticketArea'));
                $('#printTicket').addEventListener('click', () =>
                window.print()
                );
                $('#newBooking').addEventListener(
                'click',
                resetBookingForNextUse
                );
                $('#ticketArea').scrollIntoView({
        behavior: 'smooth',
                block: 'start'
        });
                }

        /* PREPARAR UNA NUEVA RESERVA */
        function resetBookingForNextUse() {
        $('#bookingForm').reset();
                $('#ticketArea').hidden = true;
                $('#ticketArea').innerHTML = '';
                setBookingMessage('');
                updateSummary();
                $('#bookingForm').scrollIntoView({
        behavior: 'smooth',
                block: 'start'
        });
                }

        /* REGISTRO DE RESERVAS */
        function submitBooking(event) {
        event.preventDefault();
                const form = event.currentTarget;
                const formData = new FormData(form);
                const routes = selectedRoutes();
                const counts = getPassengerCounts(formData);
                const totalPassengers =
                counts.adults +
                counts.children +
                counts.seniors;
                setBookingMessage('');
                if (!routes.length) {
        setBookingMessage(
                'Selecciona al menos un destino.',
                true
                );
                $('#bookingRoutes').scrollIntoView({
        behavior: 'smooth',
                block: 'center'
        });
                return;
        }
        if (totalPassengers < 1) {

        setBookingMessage(
                'Indica al menos un pasajero para continuar.',
                true
                );
                $('#adultsCount').focus();
                return;
        }
        if (totalPassengers > 30) {

        setBookingMessage(
                'La reserva admite como máximo 30 pasajeros en total.',
                true
                );
                return;
        }
        const { total } = calculateBooking(routes, counts);
                const reservation = {
                code: makeCode(),
                        name: String(formData.get('nombre') || '').trim(),
                        document: String(formData.get('documento') || '').trim(),
                        email: String(formData.get('correo') || '').trim(),
                        phone: String(formData.get('telefono') || '').trim(),
                        date: String(formData.get('fecha') || ''),
                        adults: counts.adults,
                        children: counts.children,
                        seniors: counts.seniors,
                        totalPeople: totalPassengers,
                        routeIds: routes.map(route => route.id),
                        destinations: routes.map(route => route.destination),
                        origin: routes[0].origin,
                        total,
                        seat: 'Asignación en estación',
                        status: 'Pendiente de confirmación',
                        createdAt: new Date().toISOString()
                };
                if (!reservation.name || !reservation.document) {
        setBookingMessage(
                'Escribe tu nombre y documento de identificación.',
                true
                );
                return;
        }
        try {
        const reservations = readLocal(STORE.reservations);
                reservations.push(reservation);
                saveLocal(STORE.reservations, reservations);
                form.reset();
                updateSummary();
                renderTicket(reservation);
                setBookingMessage(
                        'Reserva guardada correctamente en este navegador.'
                        );
        } catch (error) {
        setBookingMessage(
                error.message || 'No se pudo guardar la reserva.',
                true
                );
        }
        }

        /* ENCUESTA DE SATISFACCIÓN */
        function submitSurvey(event) {
        event.preventDefault();
                const form = event.currentTarget;
                const formData = new FormData(form);
                const aspects = formData.getAll('aspectos');
                setSurveyMessage('');
                if (!aspects.length) {
        setSurveyMessage(
                'Selecciona al menos un aspecto que te haya gustado.',
                true
                );
                $('#surveyAspectsGroup').scrollIntoView({
        behavior: 'smooth',
                block: 'center'
        });
                return;
        }
        const survey = {
        viajero: String(formData.get('viajero') || '').trim(),
                puntualidad: formData.get('puntualidad'),
                atencion: formData.get('atencion'),
                aspectos: aspects,
                satisfaccion: formData.get('satisfaccion'),
                limpieza: formData.get('limpieza'),
                comentario: String(formData.get('comentario') || '').trim(),
                createdAt: new Date().toISOString()
        };
                if (!survey.viajero || !survey.comentario) {
        setSurveyMessage(
                'Completa el nombre y el comentario adicional.',
                true
                );
                return;
        }
        try {
        const surveys = readLocal(STORE.surveys);
                surveys.push(survey);
                saveLocal(STORE.surveys, surveys);
                form.reset();
                setSurveyMessage(
                        '¡Gracias! Tu evaluación fue registrada correctamente.'
                        );
        } catch (error) {
        setSurveyMessage(
                error.message || 'No se pudo guardar la evaluación.',
                true
                );
        }
        }

        /* INICIO DE SESIÓN DEMOSTRATIVO */
        function login(event) {
        event.preventDefault();
                const form = event.currentTarget;
                const formData = new FormData(form);
                const username = String(
                        formData.get('usuario') || ''
                        ).trim();
                const password = String(
                        formData.get('password') || ''
                        );
                if (
                        username !== ADMIN_CREDENTIALS.username ||
                        password !== ADMIN_CREDENTIALS.password
                        ) {
        $('#loginMessage').textContent =
                'No se pudo iniciar sesión. Verifica las credenciales.';
                return;
        }
        $('#loginMessage').textContent = '';
                form.reset();
                $('.admin-login-wrap').hidden = true;
                $('#adminPanel').hidden = false;
                renderAdmin();
                }

        /* PANEL ADMINISTRATIVO */
        function getReservationPeople(reservation) {
        const storedTotal =
                reservation.totalPeople ??
                reservation.total_people ??
                reservation.people ??
                reservation.personas ??
                reservation.cantidad_personas;
                if (
                        storedTotal !== undefined &&
                        storedTotal !== null &&
                        storedTotal !== ''
                        ) {
        return Number(storedTotal) || 0;
        }
        return Number(
                reservation.adults ?? reservation.adultos ?? 0
                ) + Number(
                reservation.children ?? reservation.ninos ?? 0
                ) + Number(
                reservation.seniors ?? reservation.adultosMayores ?? 0
                );
                }
        function displayDestinations(reservation) {
        if (Array.isArray(reservation.destinations)) {
        return reservation.destinations.join(', ');
        }
        return reservation.destinations ||
                reservation.destino ||
                '—';
                }
        function displayAspects(survey) {
        if (Array.isArray(survey.aspectos)) {
        return survey.aspectos.join(', ');
        }
        return survey.aspectos || '—';
                }
        function renderAdmin() {
        const reservations = readLocal(STORE.reservations);
                const surveys = readLocal(STORE.surveys);
                $('#adminDataMode').textContent =
                'Datos guardados localmente en este navegador.';
                $('#reservationCount').textContent =
                String(reservations.length);
                $('#surveyCount').textContent =
                String(surveys.length);
                $('#reservationRows').innerHTML = reservations.length
                ? reservations.slice().reverse().map(reservation => `
            <tr>
                <td>
                    ${escapeHtml(reservation.code || reservation.codigo || '—')}
                </td>
                <td>
                    ${escapeHtml(reservation.name || reservation.nombre || '—')}
                </td>
                <td>
                    ${escapeHtml(displayDestinations(reservation))}
                </td>
                <td>
                    ${escapeHtml(reservation.date || reservation.fecha || '—')}
                </td>
                <td>
                    ${escapeHtml(getReservationPeople(reservation))}
                </td>
                <td>
                    ${money(reservation.total ?? reservation.precio ?? 0)}
                </td>
            </tr>
        `).join('')
                : '<tr><td colspan="6">Todavía no hay reservas.</td></tr>';
                $('#surveyRows').innerHTML = surveys.length
                ? surveys.slice().reverse().map(survey => `
            <tr>
                <td>
                    ${escapeHtml(survey.viajero || survey.name || '—')}
                </td>
                <td>
                    ${escapeHtml(survey.puntualidad || '—')}
                </td>
                <td>
                    ${escapeHtml(survey.atencion || '—')}
                </td>
                <td>
                    ${escapeHtml(displayAspects(survey))}
                </td>
                <td>
                    ${escapeHtml(survey.satisfaccion || '—')}
                </td>
                <td>
                    ${escapeHtml(survey.limpieza || '—')}
                </td>
                <td>
                    ${escapeHtml(survey.comentario || '—')}
                </td>
            </tr>
        `).join('')

                : '<tr><td colspan="7">Todavía no hay evaluaciones.</td></tr>';
                }

        /* EXPORTAR A CSV */
        function csvCell(value) {
        let text = String(value ?? '');
                if (/^[\s]*[=+@\-]/.test(text)) {
        text = `'${text}`;
        }
        return `"${text.replace(/"/g, '""')}"`;
                }
        function exportCSV() {
        const reservations = readLocal(STORE.reservations);
                const rows = [
                [
                        'Código',
                        'Pasajero',
                        'Destinos',
                        'Fecha',
                        'Personas',
                        'Total'
                ],
                        ...reservations.map(reservation => [
                                reservation.code || reservation.codigo || '',
                                reservation.name || reservation.nombre || '',
                                displayDestinations(reservation),
                                reservation.date || reservation.fecha || '',
                                getReservationPeople(reservation),
                                reservation.total ?? reservation.precio ?? ''
                        ])
                ];
                const csv = rows.map(row =>
                        row.map(csvCell).join(',')
                        ).join('\r\n');
                const blob = new Blob(
                ['\ufeff', csv],
                { type: 'text/csv;charset=utf-8' }
                );
                const url = URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.download = 'spring_day_express_reservas.csv';
                document.body.appendChild(link);
                link.click();
                link.remove();
                window.setTimeout(() => {
                URL.revokeObjectURL(url);
                }, 1000);
                }

        /* INICIALIZACIÓN Y EVENTOS */
        document.addEventListener('DOMContentLoaded', () => {
        renderRoutes();
                $('#travelDate').min = todayLocalISO();
                updateSummary();
                const params = new URLSearchParams(window.location.search);
                const initialView = params.get('view');
                if (
                ['inicio', 'rutas', 'compra', 'encuesta', 'admin']
                        .includes(initialView)
                        ) {
        showView(initialView);
        }
        const detailId = params.get('id');
                if (detailId) {
        showDetail(detailId);
        }
        const preselectedRouteId = params.get('route');
                if (preselectedRouteId) {
        const checkbox = $$(
                'input[name="destinos"]'
                ).find(input => input.value === preselectedRouteId);
                if (checkbox) {
        checkbox.checked = true;
                showView('compra');
                updateSummary();
        }
        }
        document.addEventListener('click', event => {
        const viewButton = event.target.closest('[data-view]');
                if (viewButton) {
        showView(viewButton.dataset.view);
                return;
        }
        const detailButton = event.target.closest('[data-detail]');
                if (detailButton) {
        showDetail(detailButton.dataset.detail);
                return;
        }
        const bookButton = event.target.closest('[data-book-route]');
                if (bookButton) {
        const routeId = bookButton.dataset.bookRoute;
                $$('input[name="destinos"]').forEach(input => {
        input.checked = input.value === routeId;
        });
                showView('compra');
                updateSummary();
        }
        });
                $('#backToRoutes').addEventListener('click', () => {
        showView('rutas');
        });
                $('#menuToggle').addEventListener('click', () => {
        const isOpen = $('#mainNav').classList.toggle('open');
                $('#menuToggle').setAttribute(
                'aria-expanded',
                String(isOpen)
                );
                $('#menuToggle').setAttribute(
                'aria-label',
                isOpen ? 'Cerrar menú' : 'Abrir menú'
                );
        });
                $('#bookingRoutes').addEventListener(
                'change',
                updateSummary
                );
                [
                        'adultsCount',
                        'childrenCount',
                        'seniorsCount'
                ].forEach(id => {
        const input = document.getElementById(id);
                input.addEventListener('input', updateSummary);
                input.addEventListener('change', updateSummary);
        });
                $('#bookingForm').addEventListener(
                'submit',
                submitBooking
                );
                $('#surveyForm').addEventListener(
                'submit',
                submitSurvey
                );
                $('#loginForm').addEventListener(
                'submit',
                login
                );
                $('#logoutBtn').addEventListener('click', () => {
        $('#adminPanel').hidden = true;
                $('.admin-login-wrap').hidden = false;
                $('#loginForm').reset();
                $('#loginMessage').textContent = '';
        });
                $('#exportBtn').addEventListener(
                'click',
                exportCSV
                );
                });