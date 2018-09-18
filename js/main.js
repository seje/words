var textarea = document.getElementById('textarea'),
	  signs = document.getElementById('signs'),
	  shadow = document.getElementById('shadow'),
	  div = document.getElementById('div'),
	  reset = document.getElementById('reset'),
	  last_result = document.getElementById('last_result'),
	  go = document.getElementById('go');


function showCount() {
	signs.innerHTML = 'Знаков: ' + textarea.value.length + ' за 60 секунд';
}
textarea.onkeyup = textarea.oninput = showCount;
textarea.onpropertychange = function() {
if (event.propertyName == "value") showCount();
}
textarea.oncut = function() {
setTimeout(showCount, 0);
}

go.onclick = function() {
	go.setAttribute('disabled', 'disabled');
	textarea.removeAttribute('disabled');
	timer1.start();
	textarea.focus();
	dot1.setAttribute('disabled', 'disabled');
	dot2.setAttribute('disabled', 'disabled');
	dot3.setAttribute('disabled', 'disabled');
	dot4.setAttribute('disabled', 'disabled');
	dot5.setAttribute('disabled', 'disabled');
}
reset.onclick = function() {
	last_result.innerHTML = 'Последний результат: ' + textarea.value.length;
	shadow.classList.remove('sh');
	div.classList.remove('sh');
	textarea.value = '';
	textarea.setAttribute('disabled', 'disabled');
	timer1.time = 60;
	id('timer').innerHTML = 'Время: 60';
	go.removeAttribute('disabled');
	dot1.removeAttribute('disabled');
	dot2.removeAttribute('disabled');
	dot3.removeAttribute('disabled');
	dot4.removeAttribute('disabled');
	dot5.removeAttribute('disabled');
}


var time = 60;

var Timer = function(obj) {
	this.time = obj.time;
	this.onEnd = obj.onEnd || null;
	this.onStart = obj.onStart || null;
	this.onTick = obj.onTick || null;
	this.intervalID = null;

	this.start = () => {
		this.interval = setInterval(this.update, 1000);
	};
	this.stop = () => {
		clearInterval(this.interval);
		this.onEnd ? this.onEnd() : void 0;
	};
	this.update = () => {
		this.time > 0 ? this.time -=1 : this.stop();
		this.onTick ? this.onTick() : void 0;
		return this.get();
	}
	this.get = () => {
		return this.time;
	}
}

var timer1 = new Timer({
	time: 60,
	onTick: tick,
	onEnd: endTimer
});

requestAnimationFrame(tick);

function endTimer() {
	shadow.classList.add('sh');
	div.classList.add('sh');
	textarea.blur();
}

function tick() {
	id('timer').innerHTML = 'Время: ' + timer1.get();
}

function id(id) {
	return document.getElementById(id);
}

// <=---------------------------------------------------------------=>



var dot1 = document.getElementById('dot1'),
	dot2 = document.getElementById('dot2'),
	dot3 = document.getElementById('dot3'),
	dot4 = document.getElementById('dot4'),
	dot5 = document.getElementById('dot5'),
	   p = document.getElementById('p');

function remove() {
	dot1.classList.remove('current');
	dot2.classList.remove('current');
	dot3.classList.remove('current');
	dot4.classList.remove('current');
	dot5.classList.remove('current');
}

function addClass(x) {
	x.classList.add('current');
}

dot1.onclick = function() {
	remove();
	addClass(dot1);
	p.innerHTML = 'Алиса притомилась от безделья. Она сидела на берегу реки, иногда заглядывая в книгу, которую читала сестра, но в ней не было картинок. "А что это за книжка, если в ней нет картинок?" - подумала Алиса. Она стала рассуждать про себя (в той мере в какой это позволял сделать жаркий день, приведший ее в сонное и несколько отупелое состояние) - оправдает ли удовольствие от плетение венка из маргариток тяготы, связанные с вставанием на ноги и собиранием цветов. Но тут Белый Кролик с розовыми глазами прошмыгнул у ее ног. В этом не было НИЧЕГО особенного. И Алиса не нашла ничего особенного в том, что услышала как Кролик пробормотал себе под нос: "Ай-яй-яй! Я опаздываю". (Когда она думала об этом впоследствии, то понимала, что ей надо бы было этому удивиться, но тогда ей все показалось совершенно естественным).';
}
dot2.onclick = function() {
	remove();
	addClass(dot2);
	p.innerHTML = 'Егерь повиновался и завел девочку в лес, но когда вытащил он свой охотничий нож и, хотел было уже пронзить ни в чем не повинное сердце Белоснежки, стала та плакать и просить: Ах, милый егерь, оставь ты меня в живых, я убегу далеко в дремучий лес и никогда не вернусь домой. И оттого что была она прекрасна, сжалился над нею егерь и сказал: Так и быть, беги, бедная девочка! И точно камень свалился у него с сердца, когда не пришлось ему убивать Белоснежку. На ту пору как раз подбежал молодой олень, и заколол его егерь, вынул у него легкие и печень и принес их королеве в знак того, что приказанье ее исполнено. Повару было велено сварить их в соленой воде, и злая женщина их съела, думая, что это легкие и печень Белоснежки. И осталась бедная девочка в большом лесу одна-одинешенька.';
}
dot3.onclick = function() {
	remove();
	addClass(dot3);
	p.innerHTML = 'Мелкими шажками он вбежал в самую глубь пещеры, отыскал там оленью кость с остатками мяса, присел и принялся с наслаждением её грызть. Прими великую благодарность за прекрасное угощение, – сказал он, облизываясь. – Какие красавцы, благородные дети! Какие у них большие глаза! А ещё такие юные. Впрочем, что я? Мне следовало помнить, что королевские дети с первого дня своей жизни – взрослые. Табаки, как и все остальные, отлично знал, что похвалы, сказанные детям в лицо, приносят им несчастье, и ему было приятно видеть, что волки-родители встревожились. Табаки посидел, молча радуясь, что он сделал им неприятность, потом презрительно сказал: Шер Хан переменил место охоты. Он сказал мне, что всю следующую луну будет охотиться в этих горах.';
}
dot4.onclick = function() {
	remove();
	addClass(dot4);
	p.innerHTML = 'Вот так всегда и бывает в жизни! — сказала утка и облизнула язычком клюв — она и сама была не прочь отведать угриной головки. — Ну, ну, шевелите лапками! — скомандовала она, поворачиваясь к утятам. — Крякните и поклонитесь вон той старой утке! Она здесь знатнее всех. Она испанской породы и потому такая жирная. Видите, у нее на лапке красный лоскуток! До чего красиво! Это высшее отличие, какого только может удостоиться утка. Это значит, что ее не хотят потерять, — по этому лоскутку ее сразу узнают и люди и животные. Ну, живо! Да не держите лапки вместе! Благовоспитанный утенок должен выворачивать лапки наружу. Вот так! Смотрите. Теперь наклоните головки и скажите: "Кряк!". Утята так и сделали. Но другие утки оглядели их и громко заговорили: Ну вот, еще целая орава! Точно без них нас мало было! А один-то какой гадкий!';
}
dot5.onclick = function() {
	remove();
	addClass(dot5);
	p.innerHTML = 'Желание видеть супругу вновь здоровой и счастливой помогало любящему мужу преодолеть страх. Дождавшись наступления темноты, он перелез через высокую ограду и очутился в запретном саду. Казалось, сердце мужчины вот-вот выпрыгнет из груди – так сильно оно билось от волнения. Быстро отыскав грядку с травой, супруг нарвал зелени и поспешил домой. Его жене и в самом деле стало значительно легче, после того как она съела немного травы. На следующее утро молодая женщина попросила еще зелени: "Пожалуйста, милый, принеси мне той травки, иначе я не выздоровею!". Поздно ночью ее муж опять пробрался в сад. Но не успел он сорвать и пару стеблей травы, как откуда ни возьмись появилась старая ведьма: "А-а, воришка, попался! Как ты смеешь лазить в мой сад?" — "Умоляю, сжальтесь! Моя жена заболела и просила принести ей немного зелени!"';
}


// <=-----------------------------------------------------------=>

var preloader = document.getElementById('preloader'),
		span1 = document.getElementById('span1'),
		span2 = document.getElementById('span2'),
		span3 = document.getElementById('span3'),
		span4 = document.getElementById('span4'),
		span5 = document.getElementById('span5'),
		span6 = document.getElementById('span6');

document.body.onload = function() {
	setTimeout(function() {
		span1.style.display = 'none';
		span2.style.display = 'none';
		span3.style.display = 'none';
		span4.style.display = 'none';
		span5.style.display = 'none';
		span6.style.display = 'none';
		setTimeout(function() {
			preloader.style.transform = 'translateX(110%)';
			preloader.style.opacity = '0';
		}, 500);
	}, 10000000);
}
