/* Sélecteur de variantes du prototype — démo client uniquement. */
(function () {
  var VARIANTS = [
    { file: 'index.html', name: 'Accueil', meta: 'Thème néon · barre flottante en haut' },
    { file: 'bowling.html', name: 'Bowling', meta: 'Thème clair · barre verticale à gauche' },
    { file: 'karaoke.html', name: 'Karaoké & quiz', meta: 'Thème scène · barre en bas' },
    { file: 'bar.html', name: 'Bar & billard', meta: 'Thème rétro · menu plein écran' }
  ];

  var current = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  if (current === '') current = 'index.html';

  var wrap = document.createElement('div');
  wrap.className = 'proto-switch';

  var items = VARIANTS.map(function (v) {
    var active = v.file === current ? ' aria-current="page"' : '';
    return (
      '<li><a class="proto-switch__link" href="' + v.file + '"' + active + '>' +
      v.name + '<span class="proto-switch__meta">' + v.meta + '</span></a></li>'
    );
  }).join('');

  wrap.innerHTML =
    '<div class="proto-switch__panel" id="protoPanel" hidden>' +
    '<p class="proto-switch__title">Prototype de refonte — 4 directions à comparer. ' +
    'Les visuels sont des blocs de réservation, pas les images finales.</p>' +
    '<ul class="proto-switch__list">' + items + '</ul>' +
    '</div>' +
    '<button class="proto-switch__btn" type="button" aria-expanded="false" aria-controls="protoPanel">' +
    '<span class="proto-switch__dot"></span> Changer de version</button>';

  document.body.appendChild(wrap);

  var btn = wrap.querySelector('.proto-switch__btn');
  var panel = wrap.querySelector('.proto-switch__panel');

  btn.addEventListener('click', function () {
    var open = panel.hidden;
    panel.hidden = !open;
    btn.setAttribute('aria-expanded', String(open));
  });

  document.addEventListener('click', function (e) {
    if (!wrap.contains(e.target) && !panel.hidden) {
      panel.hidden = true;
      btn.setAttribute('aria-expanded', 'false');
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !panel.hidden) {
      panel.hidden = true;
      btn.setAttribute('aria-expanded', 'false');
      btn.focus();
    }
  });
})();
