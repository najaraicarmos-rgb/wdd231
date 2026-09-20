const tempAtual = document.querySelector('#temp-atual');
const iconeClima = document.querySelector('#icone-clima');
const descrClima = document.querySelector('#descr-clima');
const previsaoLista = document.querySelector('#previsao-lista');

const lat = -22.9056;
const lon = -47.0608;
const apiKey = "ed76dacc8ba3890751aaa6d4b9fc9969";

const urlAtual = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=pt_br`;
const urlPrevisao = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=pt_br`;

async function buscarClima() {
    try {
        const respostaAtual = await fetch(urlAtual);
        if (respostaAtual.ok) {
            const dadosAtual = await respostaAtual.json();
            exibirClimaAtual(dadosAtual);
        }

        const respostaPrevisao = await fetch(urlPrevisao);
        if (respostaPrevisao.ok) {
            const dadosPrevisao = await respostaPrevisao.json();
            exibirPrevisao(dadosPrevisao);
        }
    } catch (erro) {
        console.error(erro);
    }
}

function exibirClimaAtual(dados) {
    tempAtual.innerHTML = `${Math.round(dados.main.temp)}&deg;C`;
    const iconesrc = `https://openweathermap.org/img/w/${dados.weather[0].icon}.png`;
    let descr = dados.weather[0].description;

    iconeClima.setAttribute('src', iconesrc);
    iconeClima.setAttribute('alt', descr);
    descrClima.textContent = descr;
}

function exibirPrevisao(dados) {
    previsaoLista.innerHTML = '';
    const previsoesDiarias = dados.list.filter(item => item.dt_txt.includes('12:00:00')).slice(0, 3);

    previsoesDiarias.forEach(item => {
        const data = new Date(item.dt * 1000);
        const nomeDia = data.toLocaleDateString('pt-BR', { weekday: 'short' });
        const temp = Math.round(item.main.temp);

        const li = document.createElement('li');
        li.innerHTML = `<strong>${nomeDia}:</strong> ${temp}&deg;C - ${item.weather[0].description}`;
        previsaoLista.appendChild(li);
    });
}

buscarClima();