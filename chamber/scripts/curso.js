const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the students to programming.',
        technology: ['Python'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web.',
        technology: ['HTML', 'CSS'],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more proficient software developers.',
        technology: ['Python'],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces object-oriented programming.',
        technology: ['C#'],
        completed: false
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'Students will learn to create dynamic websites.',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'Focuses on user experience and accessibility.',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: false
    }
];

const containerCursos = document.getElementById('container-cursos');
const totalCreditosEl = document.getElementById('total-creditos');

function renderCursos(listaCursos) {
    containerCursos.innerHTML = '';

    listaCursos.forEach(curso => {
        const card = document.createElement('div');
        card.className = `curso-card ${curso.completed ? 'concluido' : 'pendente'}`;
        card.textContent = `${curso.subject} ${curso.number}`;
        containerCursos.appendChild(card);
    });

    const totalCreditos = listaCursos.reduce((acc, curr) => acc + curr.credits, 0);
    totalCreditosEl.textContent = `Total de Créditos Exibidos: ${totalCreditos}`;
}

document.getElementById('btn-todos').addEventListener('click', (e) => {
    atualizarBotaoAtivo(e.target);
    renderCursos(courses);
});

document.getElementById('btn-wdd').addEventListener('click', (e) => {
    atualizarBotaoAtivo(e.target);
    renderCursos(courses.filter(c => c.subject === 'WDD'));
});

document.getElementById('btn-cse').addEventListener('click', (e) => {
    atualizarBotaoAtivo(e.target);
    renderCursos(courses.filter(c => c.subject === 'CSE'));
});

function atualizarBotaoAtivo(botaoClicado) {
    document.querySelectorAll('.btn-filtro').forEach(btn => btn.classList.remove('active'));
    botaoClicado.classList.add('active');
}

renderCursos(courses);